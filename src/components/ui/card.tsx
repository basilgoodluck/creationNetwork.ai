import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm text-center bg-gradient-to-b from-[#0f1128] to-[#2c2968] border border-blue-400/30 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-blue-400/50 transition-all duration-300 py-8",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardImage = React.forwardRef<
  HTMLImageElement,
  Omit<React.ComponentProps<typeof Image>, "height"> & { width?: number }
>(({ className, src, alt = "", width = 400, ...props }, ref) => {
  const imageWidth = typeof width === 'string' ? parseInt(width) : width;
  return (
    <Image
      ref={ref}
      src={src || ""}
      alt={alt}
      width={imageWidth}
      height={Math.floor(imageWidth * 0.75)}
      className={cn("rounded-lg object-cover", className)}
      {...props}
    />
  );
})

CardImage.displayName = "CardImage";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6  ", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-md font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardImage, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
