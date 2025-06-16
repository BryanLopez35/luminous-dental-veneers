"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface BeforeAfterImageProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  afterLabel?: string;
  beforeLabel?: string;
  className?: string;
  height?: number;
  width?: number;
}

export default function BeforeAfterImage({
  beforeImage,
  afterImage,
  beforeAlt = "Imagen antes",
  afterAlt = "Imagen después",
  afterLabel = "After",
  beforeLabel = "Before",
  className,
  height = 240,
  width = 320,
}: BeforeAfterImageProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };
  // Touch events para móvil
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div
      ref={containerRef}
      className={`relative cursor-col-resize select-none w-full h-full ${className || ""}`}
      style={{
        aspectRatio: `${width} / ${height}`,
        width: "100%",
        height: "100%",
        minHeight: 180,
        maxHeight: 340,
        borderRadius: 0,
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleClick}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Imagen "Después" (fondo) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage || "/placeholder.svg"}
          alt={afterAlt}
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute top-2 right-2 text-white px-2 py-0.5 rounded text-xs font-medium">
          <Badge className="top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
            <CheckCircle className="w-4 h-4 mr-1" />
            {afterLabel}
          </Badge>
        </div>
      </div>
      {/* Imagen "Antes" (clip) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt={beforeAlt}
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute top-2 left-2 text-white px-2 py-0.5 rounded text-xs font-medium">
          <Badge className="top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
            <CheckCircle className="w-4 h-4 mr-1" />
            {beforeLabel}
          </Badge>
        </div>
      </div>
      {/* Línea divisoria y control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Círculo de control */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center cursor-col-resize">
          <div className="flex space-x-0.5">
            <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
            <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
