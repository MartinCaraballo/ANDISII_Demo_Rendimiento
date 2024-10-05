import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="bg-gray-800 rounded-lg shadow-md">{children}</div>;
};

export const CardContent = ({ children }: CardProps) => {
  return <div className="p-4">{children}</div>;
};
