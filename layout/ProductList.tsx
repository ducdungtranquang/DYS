import { LayoutProductType, ProductType } from "@/models/type";

export function ProductList({ products }: LayoutProductType) {
  return (
    <ul className="my-5 px-5">
      {products?.map((item, i) => (
        <li className="pb-3 sm:pb-4 py-6">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full mx-5"
                src={item.imageSrc}
                alt={item.imageAlt}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {item.name}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {item.id}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {item.price}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
