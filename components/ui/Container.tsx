import React from "react";

type ContainerSize = "narrow" | "default" | "wide";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  narrow: "max-w-2xl",
  default: "max-w-4xl",
  wide: "max-w-5xl",
};

/**
 * Container provides consistent max-width boundaries and responsive horizontal padding.
 * Why it exists: Enforces deliberate whitespace and reading column widths (docs/DESIGN.md).
 */
export function Container({
  children,
  className = "",
  as: Component = "div",
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
