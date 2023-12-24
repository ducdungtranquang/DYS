"use client";
import DraggableItem from "@/components/elements/DragableItem";
import { Data, ItemPage } from "@/models/type";
import React, { useEffect, useState } from "react";
import { DragAndDrop } from "@/components/elements/DragAndDrop";

const ExplorePage: React.FC = () => {
  const isClient = typeof window === "object";
  const [windowWidth, setWindowWidth] = useState<number>(
    isClient ? window.innerWidth : 0
  );
  const [items, setItems] = useState<Data[]>([
    {
      id: 1,
      content: "Text",
      status: "0",
      isPro: false,
    },
    {
      id: 2,
      content: "Imgae",
      status: "0",
      isPro: false,
    },
    {
      id: 3,
      content: "Canvas",
      status: "0",
      isPro: false,
    },
    {
      id: 4,
      content: "Custom",
      status: "",
      isPro: false,
    },
    {
      id: 5,
      content: "Template 1",
      status: "",
      isPro: false,
    },
    {
      id: 6,
      content: "Template 2",
      status: "",
      isPro: false,
    },
    {
      id: 7,
      content: "Template 3",
      status: "",
      isPro: false,
    },
  ]);

  const [droppedItems, setDroppedItems] = useState<Data[]>([]);

  const handleDragStart = (e: React.DragEvent, id: number) => {
    const newId = Date.now();
    const draggedItem = items.find(
      (item) => item.id === Number((e.target as HTMLElement).id)
    );
    if (draggedItem) {
      const newItem = { ...draggedItem, id: newId };
      setDroppedItems((prev) => [...prev, newItem]);
    }
    e.dataTransfer.setData("text/plain", newId.toString());
    (e.target as HTMLElement).style.opacity = ".65";
    (e.target as HTMLElement).style.cursor = "move";
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Kiểm tra kích thước màn hình và hiển thị alert nếu dưới 860px.
    if (windowWidth < 860) {
      alert("Không được truy cập do màn hình không đáp ứng yêu cầu");
    }
  }, [windowWidth]);

  return (
    <div className="py-[100px]">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className="fixed top-[80px] left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center ps-2.5 mb-5">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              DYS
            </span>
          </div>
          <ul className="space-y-2 font-medium">
            {items?.map((item, i) => (
              <DraggableItem
                key={item.id}
                data={item}
                onDragStart={handleDragStart}
              />
            ))}
          </ul>
        </div>
      </aside>

      <DragAndDrop data={droppedItems} />
    </div>
  );
};

export default ExplorePage;
