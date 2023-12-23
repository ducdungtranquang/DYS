export default function ProfileCard() {
  return (
    <div className="w-full max-w-sm bg-white ring-1 shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/assets/people-1.png"
          alt="..."
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          PARKY CHOW
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Freelancer
        </span>
        <div className="flex mt-4 md:mt-6">
          <div className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-blorangeue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Follow
          </div>
          <div className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">
            Unfollow
          </div>
        </div>
      </div>
    </div>
  );
}
