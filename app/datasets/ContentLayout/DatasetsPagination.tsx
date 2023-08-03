export function DatasetsPagination() {
  return (
    <nav>
      <ul className="flex select-none items-center justify-between space-x-2 text-gray-700 sm:justify-center mt-10 mx-auto">
        <li>
          <a
            className="flex items-center rounded-lg px-2.5 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 pointer-events-none cursor-default text-gray-400 hover:text-gray-700"
            href=""
          >
            <svg
              className="mr-1.5"
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
              <path d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" fill="currentColor"></path>
            </svg>
            Previous
          </a>
        </li>
        <li className="hidden sm:block">
          <a
            className="rounded-lg px-2.5 py-1 bg-gray-50 font-semibold ring-1 ring-inset ring-gray-200 dark:bg-gray-900 dark:text-yellow-500 dark:ring-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
            href="?p=0&amp;sort=trending"
          >
            1
          </a>
        </li>
        <li className="hidden sm:block">
          <a className="rounded-lg px-2.5 py-1  hover:bg-gray-50 dark:hover:bg-gray-800" href="?p=1&amp;sort=trending">
            2
          </a>
        </li>
        <li className="hidden sm:block">
          <a className="rounded-lg px-2.5 py-1  hover:bg-gray-50 dark:hover:bg-gray-800" href="?p=2&amp;sort=trending">
            3
          </a>
        </li>
        <li className="hidden sm:block">
          <a className="rounded-lg px-2.5 py-1  pointer-events-none cursor-default" href="#">
            ...
          </a>
        </li>
        <li className="hidden sm:block">
          <a
            className="rounded-lg px-2.5 py-1  hover:bg-gray-50 dark:hover:bg-gray-800"
            href="?p=1647&amp;sort=trending"
          >
            1,648
          </a>
        </li>
        <li>
          <a
            className="flex items-center rounded-lg px-2.5 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 "
            href="?p=1&amp;sort=trending"
          >
            Next
            <svg
              className="ml-1.5 transform rotate-180"
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
              <path d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" fill="currentColor"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  )
}
