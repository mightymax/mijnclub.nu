export const replaceFullSizeImageWithNewSize = (image: string, size: number) => {
	return image.replace('full/max/0/default.jpg', `full/${size},/0/default.jpg`);
}
