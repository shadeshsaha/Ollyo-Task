// Dynamically creating the image source
const createImageSource = (num: number): string =>
  `/images/image-${num}.${num === 9 || num === 10 ? "jpeg" : "webp"}`;

export default createImageSource;
