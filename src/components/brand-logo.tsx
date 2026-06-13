import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className }: BrandLogoProps) {
  return (
    <Link 
      href="/" 
      className={cn("inline-flex items-center transition-opacity hover:opacity-90", className)} 
      aria-label="Infinoid Secure home"
    >
      <Image
        src="/images/infinoid-secure.jpeg"
        alt="Infinoid Secure"
        width={250}
        height={80}
        className="h-[38px] w-auto object-contain md:h-[48px] lg:h-[58px] xl:h-[65px]"
        priority
      />
    </Link>
  );
}