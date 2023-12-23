import { data } from "@/ultils/constant";
import { ContainerCards } from "./COntainerCard";
import React, { useState } from "react";
import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import { Data } from "@/models/type";

const typesHero: string[] = ["1", "2", "3"];

interface DragAndDropType {
  data: Data[];
}

export const DragAndDrop: React.FC<DragAndDropType> = ({ data }) => {
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(data);

  return (
    <div className="p-4 sm:ml-96 background">
      <div className="p-4 border-2 border-black border-dashed rounded-lg dark:border-gray-700 w-1/2 mx-auto">
        <div className="grid">
          {typesHero.map((container, i) => (
            <ContainerCards
              items={listItems}
              status={container}
              key={container}
              isDragging={isDragging}
              handleDragging={handleDragging}
              handleUpdateList={handleUpdateList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
