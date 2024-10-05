import { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
}

interface CarouselItemProps {
  children: ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  return <div className="carousel">{children}</div>;
}

export function CarouselItem({ children }: CarouselItemProps) {
  return <div className="carousel-item">{children}</div>;
}
