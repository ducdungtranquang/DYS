import { SetStateAction } from "react";

// types.ts
export interface DraggableItemProps {
    onDragStart: (e: React.DragEvent, id: number) => void;
    data: ItemPage
}

export interface DroppableAreaProps {
    onDrop: (e: React.DragEvent, id?: number) => void;
    children: React.ReactNode;
    setDroppedItems: React.Dispatch<SetStateAction<ItemPage[]>>;
    // droppedItems: ItemPage[]
}

export interface ItemPage {
    id: number;
    isPro: boolean;
    content: string;
    animated?: boolean
}

export interface ButtonType {
    children: React.ReactNode;
}

export interface InputTextType {
    label: string;
    name: string;
}

export interface ProductType {
    id: number,
    name: string,
    href: string,
    imageSrc: string,
    imageAlt: string,
    price: string,
    color: string,
}

export interface LayoutProductType {
    category?: string;
    products: ProductType[]
}

export interface TabsType {
    setLabelTab: React.Dispatch<SetStateAction<string>>;
    labelTab: string;
    tabElements: { label: string }[];
}

export interface Data {
    id: number;
    content: string;
    status: string;
    isPro: boolean;
}
