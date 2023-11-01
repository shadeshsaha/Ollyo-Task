/* eslint-disable @typescript-eslint/no-explicit-any */
import one from "./assets/images/image-1.webp";
import ten from "./assets/images/image-10.jpeg";
import eleven from "./assets/images/image-11.jpeg";
import two from "./assets/images/image-2.webp";
import three from "./assets/images/image-3.webp";
import four from "./assets/images/image-4.webp";
import five from "./assets/images/image-5.webp";
import six from "./assets/images/image-6.webp";
import seven from "./assets/images/image-7.webp";
import eight from "./assets/images/image-8.webp";
import nine from "./assets/images/image-9.webp";
import Gallery from "./components/Gallery";
//
import { createContext, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import INITIAL_ARRAY, { IS_DARK_MODE } from "./libs/constant";

interface GalleryContextType {
  currentChecked: any[];
  setCurrentChecked: React.Dispatch<React.SetStateAction<any[]>>;
  currentHovered: number;
  setCurrentHovered: React.Dispatch<React.SetStateAction<number>>;
  imageIndex: string[];
  setImageIndex: React.Dispatch<React.SetStateAction<string[]>>;
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// Context
export const GalleryContext = createContext<GalleryContextType | null>(null);

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

  //
  const [currentChecked, setCurrentChecked] = useState<any[]>([]);

  // I had set this to null before but with the checkbox logic for some reason the checkbox of the first image was always showing.That's why I used a -1 here
  const [currentHovered, setCurrentHovered] = useState<number>(-1);

  const [imageIndex, setImageIndex] = useState<string[]>(INITIAL_ARRAY);
  const [currentImage, setCurrentImage] = useState<number>(1);

  // State coming from local storage
  const [isDarkMode, setIsDarkMode] = useState<boolean>(Boolean(IS_DARK_MODE));

  // Context values
  const contextValue = {
    currentChecked,
    setCurrentChecked,
    currentHovered,
    setCurrentHovered,
    imageIndex,
    setImageIndex,
    currentImage,
    setCurrentImage,
    isDarkMode,
    setIsDarkMode,
  };
  //

  return (
    // <div className="max-w-6xl mx-auto px-2 sm:px-4">
    //   <Gallery items={items} />
    // </div>

    <GalleryContext.Provider value={contextValue}>
      <main
        className={`${
          isDarkMode ? "bg-slate-700" : "bg-white"
        } transition-all duration-300 min-h-screen text-black flex flex-col items-center justify-center`}
      >
        <ThemeToggle />
        <section
          className={`text-2xl ${
            isDarkMode
              ? "border-white border-double border shadow-2xl"
              : "shadow-2xl"
          } p-4 mt-10 top-[-0.5rem] font-semibold flex flex-col rounded-lg  mx-10 my-5 w-fit h-full`}
        >
          <Gallery items={items} />
        </section>
      </main>
    </GalleryContext.Provider>
  );
};

export default App;
