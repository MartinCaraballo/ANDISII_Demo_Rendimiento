import { ReactNode } from 'react';
import Image from 'next/image';

interface ButtonProps {
  href: string;
  label: string;
  iconSrc?: string;
  variant?: 'outline' | 'solid'; // Define variantes si es necesario
}

export const Button = ({ href, label, iconSrc, variant = 'solid' }: ButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full transition-colors flex items-center justify-center gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${
        variant === 'outline' ? 'border border-black/[.08] hover:bg-[#f2f2f2]' : 'bg-foreground text-background'
      }`}
    >
      {iconSrc && <Image src={iconSrc} alt={`${label} icon`} width={20} height={20} />}
      {label}
    </a>
  );
};
