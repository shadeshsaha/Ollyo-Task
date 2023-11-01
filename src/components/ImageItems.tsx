import { useState } from "react";
import one from "./../assets/images/image-1.webp";
import ten from "./../assets/images/image-10.jpeg";
import eleven from "./../assets/images/image-11.jpeg";
import two from "./../assets/images/image-2.webp";
import three from "./../assets/images/image-3.webp";
import four from "./../assets/images/image-4.webp";
import five from "./../assets/images/image-5.webp";
import six from "./../assets/images/image-6.webp";
import seven from "./../assets/images/image-7.webp";
import eight from "./../assets/images/image-8.webp";
import nine from "./../assets/images/image-9.webp";
import Gallery from "./Gallery";

const ImageItems = () => {
  const [items] = useState<string[]>([
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
  ]);
  return (
    <div>
      <Gallery items={items} />
    </div>
  );
};

export default ImageItems;
