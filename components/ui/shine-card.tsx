import React from "react";
import { cn } from "@/lib/utils";

interface ShineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ShineCard: React.FC<ShineCardProps> = ({
  children,
  className,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden flex flex-col p-8 lg:p-10 rounded-[2rem] border border-border shadow-sm hover:shadow-md transition-shadow duration-200";

  const shineClasses =
    "bg-[linear-gradient(45deg,transparent_25%,rgba(150,150,150,0.12)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position] duration-0 hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]";

  return (
    <div className={cn(baseClasses, shineClasses, className)} {...props}>
      {children}
    </div>
  );
};
