import { ButtonType } from "@/models/type";
import React from "react";

const ButtonAddToBag: React.FC<ButtonType> = ({ children }) => {
  return (
    <button
      type="submit"
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

export default ButtonAddToBag;
