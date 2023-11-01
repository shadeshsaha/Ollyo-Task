// Initial index of images
const INITIAL_ARRAY: string[] = Array.from({ length: 11 }, (_, i) =>
  i.toString()
);
export default INITIAL_ARRAY;

// Get dark mode status from local storage when app loads
export const IS_DARK_MODE: boolean =
  localStorage.getItem("darkMode") === "true";
