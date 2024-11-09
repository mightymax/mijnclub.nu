const express = require('express')
const app = express()
app.use(express.json());
const port = 3000
const { createClient } = require('redis');
const crypto = require('crypto');

app.get('/', (req, res) => {
  res.send('Mijnclub.nu API')
})

const validKeys = ['club', 'media', 'author', 'content'];

app.post('/annotation', async (req, res) => {
  const requestBody = req.body;
  
  for (const key in requestBody) {
    if (!validKeys.includes(key)) {
      res.status(400).send(`Invalid key: ${key}`);
      return;
    }
  }
  if (parseInt(requestBody.club) !== requestBody.club) {
    res.status(400).send('Invalid club');
    return;
  }
  if (parseInt(requestBody.media) !== requestBody.media) {
    res.status(400).send('Invalid media');
    return;
  }
  requestBody.created = new Date().toISOString();
  const client = await createClient({url: process.env.REDIS ?? 'redis://localhost:6379'})
  .on('error', err => console.log('Redis Client Error', err))
  .connect();
  const user = crypto.createHash('md5').update(requestBody.author).digest('hex');
  const key = `annotation:${requestBody.club}:${requestBody.media}:${user}`;
  await client.set(key, JSON.stringify(requestBody));
  const value = JSON.parse(await client.get(key) ?? '');
  await client.disconnect();
  res.status(200).send(value);
})

app.get('/annotation/:club(\\d+)?/:media(\\d+)?', async (req, res) => {
  const club = req.params.club;
  const media = req.params.media;
  const client = await createClient({url: process.env.REDIS ?? 'redis://localhost:6379'})
    .on('error', err => console.log('Redis Client Error', err))
    .connect();
  const MATCH =  `annotation:${club?`${club}:`:''}${media?`${media}:`:''}*`;
  const annotations = [];
  for await (const key of client.scanIterator({MATCH, COUNT: 1000})) {
    console.log(key)
    annotations.push(toWebAnnotation(key, await client.get(key)));
  }
  await client.disconnect();
  res.status(200).send(annotations);
})  

function toWebAnnotation(key, annotation) {
  if (typeof annotation == 'string') annotation = JSON.parse(annotation);
  return {
    "@context": "http://www.w3.org/ns/anno.jsonld",
    id: `https://www.mijnclub.nu/annotation/${key}`,
    type: "Annotation",
    creator: {
      id: `https://www.mijnclub.nu/annotation/${key}/author`,
      type: "Person",
      name: annotation.author
    },
    created: new Date(annotation.created),
    body: {
      type: "TextualBody",
      value: annotation.content
    },
    target: {
      source: `https://www.mijnclub.nu/annotation/${annotation.club}/${annotation.media}`,
    }
  };
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})