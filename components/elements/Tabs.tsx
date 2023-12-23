import { TabsType } from "@/models/type";

export default function Tabs({ setLabelTab, labelTab, tabElements }: TabsType) {
  const classActive =
    "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500";
  const classDefault =
    "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300";

  return (
    <ul className="mb-[50px] flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mx-5">
      {tabElements?.map((item, i) => (
        <li
          className="me-2 cursor-pointer"
          onClick={() => setLabelTab(item.label)}
        >
          <div className={labelTab === item.label ? classActive : classDefault}>
            {item.label}
          </div>
        </li>
      ))}
    </ul>
  );
}
