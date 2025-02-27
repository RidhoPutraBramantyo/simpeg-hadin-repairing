import { ReactNode, ElementType } from "react";

type TypographyVariant = "h1" | "h2" | "h3" | "p" | "blockquote";

interface TypographyProps {
  variant?: TypographyVariant;
  className?: string;
  children?: ReactNode;
  customStyles?: Partial<Record<TypographyVariant, string>>;
}

export function Typography({
  variant = "p",
  className = "",
  children,
  customStyles = {},
}: TypographyProps) {
  const defaultStyles: Record<TypographyVariant, string> = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    blockquote: "mt-6 border-l-2 pl-6 italic",
  };

  const styles = { ...defaultStyles, ...customStyles };
  const Tag: ElementType = variant; // Pakai ElementType agar aman

  return (
    <Tag className={`${styles[variant] || ""} ${className}`}>{children}</Tag>
  );
}
