export interface IconSvgProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export interface GridProps {
  children: React.ReactNode;
}

export interface PhotoProps {
  url: string;
  index: number;
  faded?: boolean;
  style?: React.CSSProperties;
  className?: string;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface GalleryProps {
  items: string[];
}
