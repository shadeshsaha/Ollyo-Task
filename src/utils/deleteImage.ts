import toast from "react-hot-toast";

const deleteImage = (
  imageIndex: number[],
  currentChecked: number[],
  setImageIndex: React.Dispatch<React.SetStateAction<number[]>>,
  setCurrentChecked: React.Dispatch<React.SetStateAction<number[]>>
): void => {
  let copyOfImageIndex = [...imageIndex];
  // If the image indices are not in the current checked array, remove the currently checked items by filtering
  copyOfImageIndex = copyOfImageIndex.filter((value) => {
    return !currentChecked.includes(value);
  });
  setImageIndex(copyOfImageIndex);
  console.log("currentChecked: ", currentChecked);
  console.log("copyOfImageIndex: ", copyOfImageIndex);
  toast.success(
    `Deleted ${currentChecked.length} ${
      currentChecked.length === 1 ? "image" : "images"
    }`
  );
  setCurrentChecked([]);
};

export default deleteImage;
