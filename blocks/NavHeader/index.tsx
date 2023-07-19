export default function NavHeader() {
  return (
    <div className="SVELTE_HYDRATER contents" data-props='{"isWide":false,"isZh":true}' data-target="MainHeader">
      <header className="border-b border-gray-100">
        <div className="container flex h-16 w-full items-center px-4">
          <div className="flex flex-1 items-center">
            <a className="mr-5 flex flex-none items-center lg:mr-6" href="/">
              <img
                alt="Hugging Face's logo"
                className="w-7 md:mr-2"
                src="/front/assets/huggingface_logo-noborder.svg"
              />
              <span className="hidden whitespace-nowrap text-lg font-bold md:block">Hugging Face</span>
            </a>
            <div className="relative mr-2 flex-1 sm:mr-4 lg:mr-6 lg:max-w-sm">
              <input
                autoComplete="off"
                className="form-input-alt h-9 w-full pl-8 pr-3 focus:shadow-xl dark:bg-gray-950"
                name=""
                placeholder="Search models, datasets, users..."
                spellCheck="false"
                type="text"
              />
              <svg
                className="absolute left-2.5 top-1/2 -translate-y-1/2 transform text-gray-400"
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
                <path
                  d="M30 28.59L22.45 21A11 11 0 1 0 21 22.45L28.59 30zM5 14a9 9 0 1 1 9 9a9 9 0 0 1-9-9z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="flex flex-none items-center justify-center place-self-stretch p-0.5 lg:hidden">
              <button className="relative z-30 flex h-6 w-8 items-center justify-center" type="button">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 10 10"
                  className="text-xl"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  preserveAspectRatio="xMidYMid meet"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.65039 2.9999C1.65039 2.8066 1.80709 2.6499 2.00039 2.6499H8.00039C8.19369 2.6499 8.35039 2.8066 8.35039 2.9999C8.35039 3.1932 8.19369 3.3499 8.00039 3.3499H2.00039C1.80709 3.3499 1.65039 3.1932 1.65039 2.9999ZM1.65039 4.9999C1.65039 4.8066 1.80709 4.6499 2.00039 4.6499H8.00039C8.19369 4.6499 8.35039 4.8066 8.35039 4.9999C8.35039 5.1932 8.19369 5.3499 8.00039 5.3499H2.00039C1.80709 5.3499 1.65039 5.1932 1.65039 4.9999ZM2.00039 6.6499C1.80709 6.6499 1.65039 6.8066 1.65039 6.9999C1.65039 7.1932 1.80709 7.3499 2.00039 7.3499H8.00039C8.19369 7.3499 8.35039 7.1932 8.35039 6.9999C8.35039 6.8066 8.19369 6.6499 8.00039 6.6499H2.00039Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <nav aria-label="Main" className="ml-auto hidden lg:block">
            <ul className="flex items-center space-x-2">
              <li>
                <a
                  className="group flex items-center px-2 py-0.5 hover:text-indigo-700 dark:hover:text-gray-400"
                  href="/models"
                >
                  <svg
                    className="mr-1.5 text-gray-400 group-hover:text-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="uim-quaternary"
                      d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z"
                      opacity=".25"
                      fill="currentColor"
                    ></path>
                    <path
                      className="uim-tertiary"
                      d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z"
                      opacity=".5"
                      fill="currentColor"
                    ></path>
                    <path
                      className="uim-primary"
                      d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Models
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center px-2 py-0.5 hover:text-red-700 dark:hover:text-gray-400"
                  href="/datasets"
                >
                  <svg
                    className="mr-1.5 text-gray-400 group-hover:text-red-500"
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
                    <ellipse cx="12.5" cy="5" fill="currentColor" fill-opacity="0.25" rx="7.5" ry="2"></ellipse>
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
                  Datasets
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center px-2 py-0.5 hover:text-blue-700 dark:hover:text-gray-400"
                  href="/spaces"
                >
                  <svg
                    className="mr-1.5 text-gray-400 group-hover:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 25 25"
                  >
                    <path
                      opacity=".5"
                      d="M6.016 14.674v4.31h4.31v-4.31h-4.31ZM14.674 14.674v4.31h4.31v-4.31h-4.31ZM6.016 6.016v4.31h4.31v-4.31h-4.31Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity=".75"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 4.914C3 3.857 3.857 3 4.914 3h6.514c.884 0 1.628.6 1.848 1.414a5.171 5.171 0 0 1 7.31 7.31c.815.22 1.414.964 1.414 1.848v6.514A1.914 1.914 0 0 1 20.086 22H4.914A1.914 1.914 0 0 1 3 20.086V4.914Zm3.016 1.102v4.31h4.31v-4.31h-4.31Zm0 12.968v-4.31h4.31v4.31h-4.31Zm8.658 0v-4.31h4.31v4.31h-4.31Zm0-10.813a2.155 2.155 0 1 1 4.31 0 2.155 2.155 0 0 1-4.31 0Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity=".25"
                      d="M16.829 6.016a2.155 2.155 0 1 0 0 4.31 2.155 2.155 0 0 0 0-4.31Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Spaces
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center px-2 py-0.5 hover:text-yellow-700 dark:hover:text-gray-400"
                  href="/docs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="mr-1.5 text-gray-400 group-hover:text-yellow-500"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      opacity="0.5"
                      d="M20.9022 5.10334L10.8012 10.8791L7.76318 9.11193C8.07741 8.56791 8.5256 8.11332 9.06512 7.7914L15.9336 3.73907C17.0868 3.08811 18.5002 3.26422 19.6534 3.91519L19.3859 3.73911C19.9253 4.06087 20.5879 4.56025 20.9022 5.10334Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M10.7999 10.8792V28.5483C10.2136 28.5475 9.63494 28.4139 9.10745 28.1578C8.5429 27.8312 8.074 27.3621 7.74761 26.7975C7.42122 26.2327 7.24878 25.5923 7.24756 24.9402V10.9908C7.25062 10.3319 7.42358 9.68487 7.74973 9.1123L10.7999 10.8792Z"
                      fill="currentColor"
                      fillOpacity="0.75"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.3368 10.8499V6.918C21.3331 6.25959 21.16 5.61234 20.8346 5.03949L10.7971 10.8727L10.8046 10.874L21.3368 10.8499Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.5"
                      d="M21.7937 10.8488L10.7825 10.8741V28.5486L21.7937 28.5234C23.3344 28.5234 24.5835 27.2743 24.5835 25.7335V13.6387C24.5835 12.0979 23.4365 11.1233 21.7937 10.8488Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Docs
                </a>
              </li>
              <li>
                <div className="relative ">
                  <button
                    className="group flex items-center px-2 py-0.5 hover:text-green-700 dark:hover:text-gray-400 "
                    type="button"
                  >
                    <svg
                      className="mr-1.5 text-gray-400 group-hover:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="uim-tertiary"
                        d="M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3z"
                        opacity=".5"
                        fill="currentColor"
                      ></path>
                      <path
                        className="uim-primary"
                        d="M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1h2zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14H8.837z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Solutions
                  </button>
                </div>
              </li>
              <li>
                <a
                  className="group flex items-center px-2 py-0.5 hover:text-gray-500 dark:hover:text-gray-400"
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <div className="group relative">
                  <button
                    className="flex items-center px-2 py-0.5 hover:text-gray-500 dark:hover:text-gray-600 "
                    type="button"
                  >
                    <svg
                      className="mr-1.5 w-5 text-gray-500 group-hover:text-gray-400 dark:text-gray-300 dark:group-hover:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 18"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.4504 3.30221C14.4504 2.836 14.8284 2.45807 15.2946 2.45807H28.4933C28.9595 2.45807 29.3374 2.836 29.3374 3.30221C29.3374 3.76842 28.9595 4.14635 28.4933 4.14635H15.2946C14.8284 4.14635 14.4504 3.76842 14.4504 3.30221Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.4504 9.00002C14.4504 8.53382 14.8284 8.15588 15.2946 8.15588H28.4933C28.9595 8.15588 29.3374 8.53382 29.3374 9.00002C29.3374 9.46623 28.9595 9.84417 28.4933 9.84417H15.2946C14.8284 9.84417 14.4504 9.46623 14.4504 9.00002Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.4504 14.6978C14.4504 14.2316 14.8284 13.8537 15.2946 13.8537H28.4933C28.9595 13.8537 29.3374 14.2316 29.3374 14.6978C29.3374 15.164 28.9595 15.542 28.4933 15.542H15.2946C14.8284 15.542 14.4504 15.164 14.4504 14.6978Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.94549 6.87377C2.27514 6.54411 2.80962 6.54411 3.13928 6.87377L6.23458 9.96907L9.32988 6.87377C9.65954 6.54411 10.194 6.54411 10.5237 6.87377C10.8533 7.20343 10.8533 7.73791 10.5237 8.06756L6.23458 12.3567L1.94549 8.06756C1.61583 7.73791 1.61583 7.20343 1.94549 6.87377Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </li>
              <li>
                <hr className="h-5 w-0.5 border-none bg-gray-100 dark:bg-gray-800" />
              </li>
              <li>
                <a
                  className="block cursor-pointer px-2 py-0.5 hover:text-gray-500 dark:hover:text-gray-400"
                  href="/login"
                >
                  Log In
                </a>
              </li>
              <li>
                <a className="btn ml-2" href="/join">
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
