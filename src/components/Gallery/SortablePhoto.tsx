/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Photo from "./Photo";

const SortablePhoto = (props: any) => {
  // Get sortable properties for the current photo
  const sortable = useSortable({ id: props.url });

  // Destructure sortable properties
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = sortable;

  // Define style for the photo based on drag state
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: isDragging ? "1px solid #000" : undefined,
  };

  return (
    // Render the Photo component with sortable properties and style
    <Photo
      ref={setNodeRef}
      style={style}
      faded={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};

export default SortablePhoto;
