import React, { forwardRef, useState } from "react";
import { PhotoProps } from "../../libs/interface";
import { cn } from "../../libs/utils";

const Photo: React.FC<PhotoProps> = forwardRef(
  (
    {
      url,
      index,
      faded,
      style = {},
      className,
      selectedIds,
      setSelectedIds,
      ...props
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [isChecked, setIsChecked] = useState(selectedIds?.includes(url));

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      setSelectedIds((selectedIds) => {
        if (isChecked) {
          return selectedIds.filter((id) => id !== url);
        } else {
          return [...selectedIds, url];
        }
      });
    };

    return (
      <div
        ref={ref}
        style={{
          backgroundImage: faded ? undefined : `url("${url}")`,
          ...style,
        }}
        className={cn(
          "relative group border-[1px] border-gray-500 transform origin-[0_0] rounded-md h-[200px] bg-cover bg-center",
          className,
          {
            "bg-white": isChecked,
            "h-[420px] row-span-2 col-span-2": index === 0,
          }
        )}
      >
        {/* Works as drag handeler and hover overlay */}
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-full rounded-md group-hover:opacity-40 group-hover:bg-gray-900 transition-all duration-300",
            {
              "opacity-40 bg-white": isChecked,
            }
          )}
          {...props}
        ></div>

        {/* Checkbox */}
        {(faded !== undefined || isChecked) && (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className={cn(
              "absolute group-hover:visible top-4 left-4 w-6 h-6 text-blue-600 bg-white border-gray-300 focus:ring-blue-500",
              {
                invisible: !isChecked,
              }
            )}
          />
        )}
      </div>
    );
  }
);

export default Photo;
