import { Modal } from "antd";
import { useState } from "react";
import { BiImageAlt } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { FcGallery } from "react-icons/fc";

// Dynamically create the image source
const createImageSource = (num: number) =>
  `/images/image-${num}.${num === 10 || num === 11 ? "jpeg" : "webp"}`;

export default function App() {
  const [currentChecked, setCurrentChecked] = useState<number[]>([]);
  const [imageIndex, setImageIndex] = useState<number[]>(
    Array.from({ length: 11 }, (_, i) => i + 1)
  );
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const deleteImage = () => {
    const updatedImageIndex = imageIndex.filter(
      (value) => !currentChecked.includes(value)
    );
    setImageIndex(updatedImageIndex);
    setCurrentChecked([]);
  };

  const addToChecked = (value: number) => {
    if (currentChecked.includes(value)) {
      setCurrentChecked(
        currentChecked.filter((checkedValue) => checkedValue !== value)
      );
    } else {
      setCurrentChecked([...currentChecked, value]);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (imageNum: number) => {
    setCurrentImage(imageNum);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setIsModalVisible(false);
  };

  return (
    <main className="bg-white h-screen text-black flex justify-center">
      {/* TITLE */}
      <section className="text-2xl px-10 py-4 mt-10 top-[-0.5rem] font-semibold absolute flex flex-col p-10 rounded-lg shadow-2xl mx-10 my-5 w-fit h-fit">
        <div className="flex justify-between">
          <h1 className="flex gap-1 justify-start items-center ">
            <FcGallery /> Galleria
          </h1>
          {currentChecked.length > 0 && (
            <div className="absolute flex right-4 top-3 gap-4 items-center">
              <p className="animate-fade-down animate-once animate-duration-200 animate-ease-linear">
                {currentChecked.length} Images Selected
              </p>
              <button
                onClick={deleteImage}
                className="btn btn-primary hover:btn-error"
              >
                <BsFillTrashFill /> Delete Images
              </button>
            </div>
          )}
        </div>

        {/* IMAGE SECTION */}
        <div className="grid gap-4 p-10 sm:grid-cols-2 lg:grid-cols-5 relative">
          {/* GALLERY */}
          {imageIndex.map((imageNum, i) => {
            return (
              <div
                onClick={() => openModal(imageNum)}
                className={`mt-3 relative border cursor-pointer shadow-lg ${
                  i === 0
                    ? "col-span-2 row-span-2 w-full h-[400px] flex justify-center items-center"
                    : "col-span-1 h-[200px]"
                } border-black rounded-lg overflow-hidden`}
                key={imageNum}
              >
                {/* CHECKBOX */}
                <input
                  onChange={() => addToChecked(imageNum)}
                  type="checkbox"
                  checked={currentChecked.includes(imageNum)}
                  className="checkbox absolute top-2 left-2 z-20"
                />

                {/* Setting an overlay when the image is marked */}
                {currentChecked.includes(imageNum) && (
                  <div className="overlay animate-fade animate-duration-300 animate-ease-linear"></div>
                )}

                {/* IMAGE */}
                <img
                  onClick={() => openModal(imageNum)}
                  className="object-cover w-full h-full hover:opacity-70 transition-all duration-300"
                  src={createImageSource(imageNum)}
                  alt="image"
                />
              </div>
            );
          })}

          {/* ADD IMAGES BLOCK */}
          <div className="h-52 border-4 border-dotted rounded-lg cursor-pointer">
            <span className="text-3xl flex justify-center items-center h-full">
              <BiImageAlt />
            </span>
            <p className="font-semibold text-center">Add Images</p>
          </div>
        </div>
      </section>

      {/* Showing the image in a modal window when the user clicks */}
      <Modal visible={isModalVisible} onCancel={closeModal} footer={null}>
        {currentImage !== null && (
          <img
            className="rounded-lg object-cover w-full h-full hover:opacity-70 transition-all duration-300"
            src={createImageSource(currentImage)}
            alt="image"
          />
        )}
      </Modal>
    </main>
  );
}
