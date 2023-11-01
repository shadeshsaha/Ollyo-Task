import { GridProps } from "../../libs/interface";

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {children}
    </div>
  );
};

export default Grid;
