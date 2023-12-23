// components/DraggableItem.tsx
import { DraggableItemProps } from "@/models/type";
import React from "react";

const DraggableItem: React.FC<DraggableItemProps> = ({ onDragStart, data }) => {
  const handleDragEnd = (e: React.DragEvent) => {
    const draggedElement = e.target as HTMLElement;
    draggedElement.style.opacity = "1"; // Revert to the original opacity
    draggedElement.style.cursor = "auto";
  };

  const handleDragStart = (e: React.DragEvent) => {
    onDragStart(e, data?.id);
  };

  return (
    <div
      className={data?.animated ? "dragged-item-visible item-drag" : ""}
      draggable
      id={data?.id?.toString()}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        border: "1px solid black",
        padding: "8px",
        margin: "8px",
        background: "#f7f8fc",
      }}
    >
      <div className="flex items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <svg
          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
        </svg>
        <span className="flex-1 ms-3 whitespace-nowrap"> {data?.content}</span>
        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
          {data?.isPro ? " Pro" : ""}
        </span>
      </div>
    </div>
  );
};

export default DraggableItem;
