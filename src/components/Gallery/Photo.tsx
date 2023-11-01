/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, useState } from "react";

interface PhotoProps {
  url: string;
  index: number;
  faded?: boolean;
  style?: React.CSSProperties;
  className?: string;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}

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
      >
        {/* Works as drag handeler and hover overlay */}
        <div {...props}></div>

        {/* Checkbox */}
        {(faded !== undefined || isChecked) && (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        )}
      </div>
    );
  }
);

export default Photo;
