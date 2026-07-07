export function getProductImage(images: string[]) {
  if (images.length === 0) {
    return "/placeholder.jpg";
  }

  return images[0];
}