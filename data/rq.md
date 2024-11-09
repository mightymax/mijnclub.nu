# Queries

## Plaatsen
``` sparql
prefix rico: <https://www.ica.org/standards/RiC/ontology#>
prefix sdo: <https://schema.org/>
prefix gn: <https://sws.geonames.org/ontology#>
prefix wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>

select distinct ?placename ?lat ?lon
where {
    ?club a sdo:SportsOrganization, rico:CorporateBody ;
     rico:agentHasOrHadLocation/rico:hasOrHadPlaceName ?placename .

     {
     SELECT distinct ?placename 
      WHERE {
      ?place gn:name ?placename ;
           gn:featureCode gn:P.PPL ;
           gn:countryCode "NL" ;
           wgs84:latitude ?lat ;
           wgs84:longitude ?lon .    
            }   
     }
} order by ?placename
```

## Datums
``` sparql
prefix rico: <https://www.ica.org/standards/RiC/ontology#>
prefix sdo: <https://schema.org/>

select * where {
   ?s a sdo:SportsOrganization, rico:CorporateBody ;
      sdo:name ?name ;
      rico:hasBeginningDate/rico:normalizedDateValue ?date .      
} order by ?date
```

## Foto's van H.F.C.



## Poging tot automatisch linken
```
prefix sdo: <https://schema.org/>

construct
  {
    ?club sdo:subjectOf ?s .
  }
where {
  ?club a sdo:SportsOrganization ;
        sdo:name ?clubnaam .
  ?s a sdo:CreativeWork ; 
    sdo:name ?name .
  FILTER(contains(?name, ?clubnaam))
} LIMIT 100
```


