import { useState } from "react";

import {
  default as eight,
  default as eleven,
  default as five,
  default as four,
  default as nine,
  default as one,
  default as seven,
  default as six,
  default as ten,
  default as three,
  default as two,
} from "./assets/images/image-1.webp";
import Gallery from "./components/Gallery";

const App: React.FC = () => {
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
    <div className="max-w-6xl mx-auto px-2 sm:px-4">
      <Gallery items={items} />
    </div>
  );
};

export default App;
