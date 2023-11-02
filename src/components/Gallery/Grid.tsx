import { GridProps } from "../../libs/interface";

// Grid component that takes children as a prop and arranges them in a grid layout.
// The number of columns in the grid adjusts based on the screen size.
const Grid = ({ children }: GridProps) => {
  return (
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {children}
    </div>
  );
};

export default Grid;
