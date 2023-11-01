import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  SensorDescriptor,
  SensorOptions,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { useCallback, useState } from "react";

import { CheckboxIcon, DeleteIcon, PlusFileIcon } from "../../components/Icons";
import Grid from "./Grid";
import Photo from "./Photo";
import SortablePhoto from "./SortablePhoto";

interface GalleryProps {
  items: string[];
}

const Gallery: React.FC<GalleryProps> = ({ items: ogItems }) => {
  const [items, setItems] = useState<string[]>(ogItems);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const sensors: SensorDescriptor<SensorOptions>[] = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  );

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      setActiveId(event.active.id.toString());
    },
    [setActiveId]
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        setItems((items) => {
          const oldIndex = items.indexOf(active.id.toString());
          const newIndex = items.indexOf(over.id.toString());

          // Return the new sorted array
          return arrayMove(items, oldIndex, newIndex);
        });
      }

      setActiveId(null);
    },
    [setItems]
  );

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  const handleRemoveMultiple = useCallback(() => {
    setItems((items) => items.filter((item) => !selectedIds.includes(item)));
    setSelectedIds([]);
  }, [selectedIds]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow my-10 space-y-2">
      {/* Header */}
      <div className="flex flex-row justify-between items-center px-2 sm:px-3 md:px-4 lg:px-6 pt-6 py-3">
        <div className="text-base font-bold text-gray-900 md:text-lg">
          {selectedIds.length > 0 ? (
            <span className="flex items-center">
              <CheckboxIcon size={24} className="mr-2" />
              {selectedIds.length} {selectedIds.length > 1 ? "Files" : "File"}{" "}
              Selected
            </span>
          ) : (
            <span>Gallery</span>
          )}
        </div>
        {selectedIds.length > 0 && (
          <button
            type="button"
            className="font-medium inline-flex items-center text-red-500 hover:text-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 text-center rounded-md ring-offset-2"
            onClick={handleRemoveMultiple}
          >
            <DeleteIcon size={16} className="mr-1" />
            Delete {selectedIds.length > 1 ? "files" : "file"}
          </button>
        )}
      </div>
      <hr className="bg-gray-300 h-[2px]" />
      <div className="px-2 sm:px-3 md:px-4 lg:px-6 pb-6 py-3">
        {/* Drag and Drop */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          {/* Sortable Context */}
          <SortableContext items={items} strategy={rectSortingStrategy}>
            {/* Photo Grid */}
            <Grid>
              {items.map((url, index) => (
                <SortablePhoto
                  key={url}
                  url={url}
                  index={index}
                  selectedIds={selectedIds}
                  setSelectedIds={setSelectedIds}
                />
              ))}
              <div className="h-[200px] border-[1px] border-gray-500 rounded-md group bg-gray-100 cursor-pointer flex justify-center items-center border-dashed">
                <PlusFileIcon size={18} className="mr-2" />
                <span className="font-semibold">Add Photo</span>
              </div>
            </Grid>
          </SortableContext>

          {/* Drag Overlay */}
          <DragOverlay adjustScale={true}>
            {activeId ? (
              <Photo
                url={activeId}
                index={items.indexOf(activeId)}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
                className="shadow-xl"
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default Gallery;
