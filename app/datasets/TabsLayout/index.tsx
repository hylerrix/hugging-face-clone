import { DatasetsTabList } from '../const'
import TabTasks from './TabTasks'

export default function LeftTabsLayout() {
  return (
    <section className="pt-8 border-gray-100 bg-white lg:static lg:px-0 lg:col-span-4 xl:col-span-3 lg:border-r lg:bg-gradient-to-l from-gray-50-to-white hidden lg:block ">
      <div className="mb-4 flex items-center justify-between lg:hidden">
        <h3 className="text-base font-semibold">Edit Datasets filters</h3>
        <button className="text-xl" type="button">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            role="img"
            width="1.1em"
            height="1.1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <ul className="flex gap-1 text-sm flex-wrap mt-1.5 mb-5">
        <li>
          <button
            className="
            flex items-center whitespace-nowrap rounded-lg px-2 bg-black text-white dark:bg-gray-800"
          >
            Tasks
          </button>
        </li>
        {DatasetsTabList.slice(1).map((tabName) => (
          <li>
            <button className="flex items-center whitespace-nowrap rounded-lg px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300">
              {tabName}
            </button>
          </li>
        ))}
      </ul>
      <TabTasks />
      <div className="fixed inset-x-4 bottom-0 flex h-16 items-center border-t bg-white dark:bg-gray-950 lg:hidden">
        <button className="btn btn-lg -mt-px w-full font-semibold" type="button">
          <svg
            className="mr-1.5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path d="M13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z" fill="currentColor"></path>
          </svg>
          Apply filters
        </button>
      </div>
    </section>
  )
}
