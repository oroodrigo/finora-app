import React from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

export function WindowsButton({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (<Button 
    variant={"ghost"} 
    size={"default"} 
    className={cn('hover:bg-zinc-100/20 hover:text-text-100 z-10 rounded-none h-8', className)}
    {...props}
    >
      {children}
    </Button>)
}