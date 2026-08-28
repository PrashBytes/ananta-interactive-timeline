export const getArtImageUrl = (
  prompt: string,
  size: string = 'portrait_4_3',
  imageUrl?: string
) => {
  if (imageUrl) return imageUrl;

  const encoded = encodeURIComponent(prompt);
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encoded}&image_size=${size}`;
};
