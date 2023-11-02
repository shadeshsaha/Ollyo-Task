// Props interface for an SVG icon component
export interface IconSvgProps extends React.SVGProps<SVGSVGElement> {
  size?: number; // Optional size for the SVG icon
}

// Props interface for a grid component
export interface GridProps {
  children: React.ReactNode; // Children elements to be placed within the grid
}

// Props interface for a photo component
export interface PhotoProps {
  url: string; // The URL of the photo
  index: number; // Index of the photo
  faded?: boolean; // Optional flag to specify if the photo is faded
  style?: React.CSSProperties; // Optional CSS styles for the photo
  className?: string; // CSS class for the photo
  selectedIds: string[]; // Array of selected photo IDs
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>; // Function to update the selected photo IDs
}

// Props interface for a gallery component
export interface GalleryProps {
  items: string[]; // Array of image URLs to display in the gallery
}
