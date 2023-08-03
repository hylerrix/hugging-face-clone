export function DatasetsHeader() {
  return (
    <div className="mb-4 items-center space-y-3 md:flex md:space-y-0 lg:mb-6">
      <div className="flex items-center text-lg">
        <h1>Datasets</h1>
        <div className="ml-3 w-16 font-normal text-gray-400">49,419</div>
      </div>
      <div className="flex-1 md:mx-4">
        <div className="relative w-full md:max-w-xs">
          <svg
            className="absolute left-2 top-1.5 text-gray-300 w-4"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 25 25"
          >
            <ellipse cx="12.5" cy="5" fill="currentColor" fillOpacity="0.25" rx="7.5" ry="2"></ellipse>
            <path
              d="M12.5 15C16.6421 15 20 14.1046 20 13V20C20 21.1046 16.6421 22 12.5 22C8.35786 22 5 21.1046 5 20V13C5 14.1046 8.35786 15 12.5 15Z"
              fill="currentColor"
              opacity="0.5"
            ></path>
            <path
              d="M12.5 7C16.6421 7 20 6.10457 20 5V11.5C20 12.6046 16.6421 13.5 12.5 13.5C8.35786 13.5 5 12.6046 5 11.5V5C5 6.10457 8.35786 7 12.5 7Z"
              fill="currentColor"
              opacity="0.5"
            ></path>
            <path
              d="M5.23628 12C5.08204 12.1598 5 12.8273 5 13C5 14.1046 8.35786 15 12.5 15C16.6421 15 20 14.1046 20 13C20 12.8273 19.918 12.1598 19.7637 12C18.9311 12.8626 15.9947 13.5 12.5 13.5C9.0053 13.5 6.06886 12.8626 5.23628 12Z"
              fill="currentColor"
            ></path>
          </svg>
          <input
            className="w-full rounded-full border border-gray-200 text-sm placeholder-gray-400 shadow-inner outline-none focus:shadow-xl focus:ring-1 focus:ring-inset dark:bg-gray-950 h-7 pl-7"
            placeholder="Filter by name"
            type="search"
            value=""
            readOnly
          />
        </div>
      </div>
      <a href="/search/full-text?type=dataset" className="btn mr-2 rounded-full text-sm opacity-80 hover:opacity-100">
        <span className="mr-1.5 rounded bg-blue-500/10 px-1 text-xs leading-tight text-blue-700 dark:text-blue-200">
          new
        </span>
        Full-text search
      </a>
      <div>
        <button className="btn mr-2 inline-flex text-sm lg:hidden " type="button">
          <svg
            className="mr-1.5 "
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M18 28h-4a2 2 0 0 1-2-2v-7.59L4.59 11A2 2 0 0 1 4 9.59V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v3.59a2 2 0 0 1-.59 1.41L20 18.41V26a2 2 0 0 1-2 2zM6 6v3.59l8 8V26h4v-8.41l8-8V6z"></path>
          </svg>
          Add filters
        </button>
        <div className="relative inline-block">
          <button className=" btn w-full cursor-pointer text-sm" type="button">
            <svg
              className="mr-1"
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
              <path d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6z" fill="currentColor"></path>
              <path d="M9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" fill="currentColor"></path>
            </svg>
            Sort:  Trending
          </button>
        </div>
      </div>
    </div>
  )
}
