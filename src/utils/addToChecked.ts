const addToChecked = (
  e: React.ChangeEvent<HTMLInputElement>,
  currentChecked: number[],
  setCurrentChecked: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const value = Number(e.target.value);
  // Creating a copy of the current checked images so it is possible to add to the state
  const copyOfChecked = [...currentChecked];
  // Finding the index of the value that is already in the array
  const toRemoveIndex = copyOfChecked.indexOf(value);

  // If the image num is not in the checked array, add it
  if (!copyOfChecked.includes(value)) {
    copyOfChecked.push(value);
  } else {
    // If it's in the array, remove it
    copyOfChecked.splice(toRemoveIndex, 1);
  }
  // Set the current checked
  setCurrentChecked(copyOfChecked);
};

export default addToChecked;
