import React, { useId } from "react";

import menuData from "/data/menuData";

const SideBarMenu = ({ sbmClasses }) => {
  const mainMenuId = useId();
  const moreMenuId = useId();
  const exploreMenuId = useId();

  return (
    <>
      <aside
        id="sidebar"
        className={`sidebar fixed bottom-0 right-0 top-0 z-[390] hidden md:block ${sbmClasses}`}
      >
        <ul
          id="sidebar-menu"
          className="sidebar-menu flex h-full flex-col justify-between overflow-y-auto bg-white pt-8 md:w-[35vw] lg:w-[25vw]"
        >
          <li className="text-brand-600 hover:text-brand-800 hidden px-6 md:block">
            <a href="/en/login" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                className="fill-current"
              >
                <path d="M18.009 35.5c2.39 0 4.641-.46 6.755-1.378a17.93 17.93 0 0 0 5.584-3.792 17.833 17.833 0 0 0 3.783-5.575c.913-2.108 1.369-4.362 1.369-6.764 0-2.39-.46-4.641-1.378-6.755a18.04 18.04 0 0 0-3.792-5.593 17.603 17.603 0 0 0-5.584-3.783C22.632.953 20.381.5 17.991.5c-2.39 0-4.638.453-6.746 1.36a17.738 17.738 0 0 0-5.584 3.783 17.836 17.836 0 0 0-3.792 5.593C.956 13.35.5 15.601.5 17.991c0 2.402.46 4.656 1.378 6.764A17.96 17.96 0 0 0 5.67 30.33a17.96 17.96 0 0 0 5.575 3.792c2.108.919 4.362 1.378 6.764 1.378Zm-.01-2c-2.15 0-4.162-.4-6.039-1.201a15.575 15.575 0 0 1-4.945-3.33 15.43 15.43 0 0 1-3.323-4.943C2.897 22.151 2.5 20.14 2.5 17.99c0-2.148.397-4.16 1.192-6.036a15.43 15.43 0 0 1 3.323-4.942 15.47 15.47 0 0 1 4.935-3.32c1.87-.795 3.88-1.192 6.03-1.192 2.15 0 4.164.397 6.04 1.192a15.441 15.441 0 0 1 4.945 3.32 15.565 15.565 0 0 1 3.333 4.942c.801 1.876 1.202 3.888 1.202 6.036.013 2.149-.381 4.16-1.183 6.036a15.645 15.645 0 0 1-3.323 4.942 15.432 15.432 0 0 1-4.945 3.33C22.166 33.1 20.15 33.5 18 33.5Zm11.485-4.287-.055-.216c-.312-.84-.984-1.657-2.017-2.45-1.033-.792-2.354-1.444-3.963-1.954-1.61-.51-3.428-.766-5.458-.766-2.018 0-3.828.256-5.431.766-1.603.51-2.921 1.162-3.954 1.954-1.033.793-1.717 1.604-2.054 2.432l-.054.234a15.305 15.305 0 0 0 3.63 2.55 20.744 20.744 0 0 0 4.143 1.602c1.387.367 2.627.55 3.72.55 1.105 0 2.348-.183 3.729-.55a20.922 20.922 0 0 0 4.125-1.594 15.239 15.239 0 0 0 3.639-2.558ZM17.99 20.981c1.105.012 2.099-.264 2.981-.828.883-.565 1.585-1.333 2.108-2.306.522-.973.783-2.072.783-3.297 0-1.152-.26-2.206-.783-3.16a6.284 6.284 0 0 0-2.117-2.298 5.346 5.346 0 0 0-2.972-.864c-1.08 0-2.066.288-2.954.864a6.284 6.284 0 0 0-2.117 2.297c-.522.955-.783 2.009-.783 3.161 0 1.225.264 2.318.792 3.279.529.96 1.231 1.723 2.108 2.288.876.564 1.861.852 2.954.864Z"></path>
              </svg>
              <div className="ml-3 text-sm font-semibold">
                <span className="font-en">Login</span>
              </div>
            </a>
            <div className="mt-4 border-t border-gray-300"></div>
          </li>
          <li>
            <ul className="text-gray-subtitle mb-1 mt-1 flex flex-col px-2 text-sm font-medium md:px-3">
              {Object.keys(menuData.mainMenu).map((key, index) => {
                const menuItem = menuData.mainMenu[key];
                return (
                  <li key={mainMenuId + index}>
                    <a
                      href={`/${menuItem.toLowerCase().split(" ").join("-")}`}
                      className="hover:bg-gray-background block rounded-md px-3 py-2 hover:text-slate-900"
                    >
                      <span className="font-en">{menuItem}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>

          {/* MORE MENU */}
          <li>
            <div className="mx-6 mb-3 mt-5 border-t border-gray-300"></div>
            <div className="text-gray-subtitle mb-1 px-5 text-xs font-bold md:px-6">
              <span className="font-en">MORE</span>
            </div>
          </li>
          <li>
            <ul className="text-gray-subtitle mb-1 mt-1 flex flex-col px-2 text-sm font-medium md:px-3">
              {Object.keys(menuData.moreMenu).map((key, index) => {
                const menuItem = menuData.moreMenu[key];
                return (
                  <li key={moreMenuId + index}>
                    <a
                      href={`/${menuItem.toLowerCase().split(" ").join("-")}`}
                      className="text-gray-subtitle hover:bg-gray-background  block rounded-md px-2 py-2 text-sm font-medium hover:text-slate-900 md:px-3"
                    >
                      <span className="font-en">{menuItem}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>

          <li>
            <div className="mx-6 mb-3 mt-5 border-t border-gray-300"></div>
            <div className="text-gray-subtitle mb-1 mt-4 px-5 text-xs font-bold md:px-6">
              <span className="font-en">EXPLORE CATEGORIES</span>
            </div>
          </li>

          <li>
            <ul className="text-gray-subtitle mb-1 mt-1 flex flex-col px-2 text-sm font-medium md:px-3">
              {Object.keys(menuData.exploreMenu).map((key, index) => {
                const menuItem = menuData.exploreMenu[key];
                return (
                  <li key={exploreMenuId + index}>
                    <a
                      href={`/${menuItem.toLowerCase().split(" ").join("-")}`}
                      className="text-gray-subtitle hover:bg-gray-background  block rounded-md px-2 py-2 text-sm font-medium hover:text-slate-900 md:px-3"
                    >
                      <span className="font-en">{menuItem}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>

          <div className="sticky bottom-0 items-end">
            <a
              href="/en/login?page=%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3"
              className="bg-gray-background text-brand-600 hover:text-brand-800 sticky bottom-0 block w-full py-3 text-center font-medium md:hidden"
            >
              <span className="font-en">Login</span>
            </a>
          </div>
        </ul>
      </aside>

      <div className="bg-brand-700 fixed bottom-0 left-0  right-0 top-0 z-[500] overflow-y-scroll text-base md:hidden">
        <div className="bg-brand-700 fixed left-4 right-4 top-0 flex flex-row items-center justify-between pr-1 pt-7">
          <div className="mb-3 ">
            <button className="rounded-md  border border-white px-4 py-1 font-medium text-white">
              <span className="font-en">Login</span>
            </button>
          </div>
          <div className="mb-3">
            <button className="active:bg-brand-500   h-fit shrink-0 p-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                className="h-4 w-4 fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M.793.793a1 1 0 0 1 1.414 0L6.5 5.086 10.793.793a1 1 0 1 1 1.414 1.414L7.914 6.5l4.293 4.293a1 1 0 0 1-1.414 1.414L6.5 7.914l-4.293 4.293a1 1 0 0 1-1.414-1.414L5.086 6.5.793 2.207a1 1 0 0 1 0-1.414Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-27 ">
          <div className="text-1.5xl flex flex-col font-medium text-white">
            <button className="active:bg-brand-500 px-4 py-3 text-left hover:text-slate-100">
              <div className="flex items-center justify-between">
                <span className="font-en">Live Sessions</span>
              </div>
            </button>
            <a
              href="/en/books"
              className="active:bg-brand-500 px-4 py-3 text-left"
            >
              <span className="font-en">AP Books</span>
            </a>
            <a
              href="/en/articles"
              className="active:bg-brand-500 px-4 py-3 text-left"
            >
              <span className="font-en">AP Articles</span>
            </a>
            <a
              href="/en/courses"
              className="active:bg-brand-500 px-4 py-3 text-left"
            >
              <span className="font-en">Video Series</span>
            </a>
            <a
              href="/en/circle"
              className="active:bg-brand-500 px-4 py-3 text-left"
            >
              <span className="font-en">AP Circle</span>
            </a>
            <a
              href="/en/invite?tIn=0"
              className="active:bg-brand-500 px-4 py-3 text-left hover:text-slate-100"
            >
              <span className="font-en">Invite For Talk</span>
            </a>
            <a
              href="/en/invite?tIn=1"
              className="active:bg-brand-500 px-4 py-3 text-left hover:text-slate-100"
            >
              <span className="font-en">Invite For an Interview</span>
            </a>
            <a
              href="/en/enquiry"
              className="active:bg-brand-500 px-4 py-3 text-left hover:text-slate-100"
            >
              <span className="font-en">Contact Us</span>
            </a>
          </div>
          <div className="mt-3.5 px-4">
            <button className="bg-brand-100 text-brand-600 hover:bg-brand-200 flex w-fit cursor-pointer items-center space-x-2.5 whitespace-nowrap rounded-md px-5 py-2 text-lg shadow-lg md:mx-0 md:px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="46"
                viewBox="0 0 43 46"
                className="h-5 w-5"
              >
                <path
                  fill="none"
                  stroke="currentcolor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.505"
                  d="M14.817 26.617s1.154-6.985 1.653-10.515c.5-3.53 4.42-3.027 4.42 0V29.33c-.232 3.86-2.65 6.5-7.254 7.917l-2.684 2.881 1.995 2.013L10.952 44 2 35.121l5.769-5.79 1.265-10.383c3.905-8.233 6.384-13.34 7.436-15.323C18.05.652 21.158 1.598 20.19 7.8l-.904 5.944m-7.798 26.87-7.385-7.071m8.968 4.201L6.932 31.33m21.25-4.713s-1.153-6.985-1.652-10.515c-.5-3.53-4.42-3.027-4.42 0V29.33c.232 3.86 2.65 6.5 7.254 7.917l2.684 2.881-1.995 2.013L32.048 44 41 35.121l-5.769-5.79-1.265-10.383c-3.905-8.233-6.384-13.34-7.436-15.323C24.95.652 21.842 1.598 22.81 7.8l.904 5.944m7.798 26.87 7.385-7.071m-8.968 4.201 6.139-6.415"
                ></path>
              </svg>
              <div className="font-semibold md:text-lg">
                <span className="font-en">Donate</span>
              </div>
            </button>
          </div>
        </div>
        <div className="mx-4 mb-6 mt-9 h-[0.5px] bg-white"></div>
        <div className="flex flex-col text-lg font-medium text-white">
          <a
            href="/en/about"
            className="active:bg-brand-500 px-4 py-2 text-left"
          >
            <span className="font-en">About Acharya Prashant</span>
          </a>
          <a
            href="/en/prashantadvait-foundation"
            className="active:bg-brand-500 px-4 py-2 text-left"
          >
            <span className="font-en">PrashantAdvait Foundation</span>
          </a>
          <a
            href="/en/media"
            className="active:bg-brand-500 px-4 py-2 text-left"
          >
            <span className="font-en">In Media</span>
          </a>
        </div>
        <div className="mt-6 px-4">
          <div className="flex">
            <div className="mr-4 w-32">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks"
              >
                <img
                  src="/images/ic_googleplay.png"
                  alt="Get it on Google Play"
                  className="rounded-md border-[1.4px] border-slate-300"
                />
              </a>
            </div>
            <div className="w-32">
              <a
                target="_blank"
                href="https://apps.apple.com/in/app/acharya-prashant/id1603611866"
              >
                <img
                  src="/images/ic_appstore.png"
                  alt="Download on the App Store"
                  className="rounded-md border-[1.4px] border-slate-300"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="my-6 px-4">
          <div className="flex flex-col space-y-2">
            <span className="font-en text-left">For English</span>
            <div className="-ml-1.5 flex space-x-2.5">
              <a
                href="https://www.youtube.com/c/AcharyaPrashant"
                className="text-brand-100 p-1.5 hover:text-white"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="15"
                  viewBox="0 0 21 15"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M10.54-.001h.047l.365.002c.696.004 2.1.02 3.548.072l.512.02c1.535.066 3.032.177 3.705.365.899.247 1.608.97 1.85 1.888.407 1.514.432 4.512.433 5.078v.255c-.007.706-.056 3.531-.432 4.992a2.658 2.658 0 0 1-1.851 1.888c-1.42.381-6.516.433-7.88.44l-.183.001h-.491c-1.36-.008-6.446-.062-7.88-.459a2.659 2.659 0 0 1-1.851-1.888C.069 11.262.01 8.579 0 7.75v-.5c.01-.825.068-3.498.43-4.904C.675 1.43 1.402.687 2.283.44c.71-.19 2.34-.299 3.961-.36l.51-.018C8.11.018 9.393.005 10.048 0l.364-.002h.049ZM8.467 4.844a.448.448 0 0 0-.062.227v4.857a.448.448 0 0 0 .676.387l4.133-2.429a.448.448 0 0 0 0-.773L9.082 4.684a.448.448 0 0 0-.614.16Z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/Prashant_Advait"
                className="text-brand-100 p-1.5 hover:text-white"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  className="h-6 w-6 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.671 9.124a4.06 4.06 0 0 0 1.873-.118c-1.829-.274-3.227-1.774-3.227-3.583V5.34a3.974 3.974 0 0 0 1.83.47c-1.097-.637-1.83-1.785-1.83-3.094 0-.68.197-1.316.541-1.86C3.805 3.06 6.662 4.522 9.882 4.72a3.549 3.549 0 0 1-.09-.796C9.792 1.867 11.552.2 13.723.2c1.135 0 2.157.455 2.874 1.183a6.399 6.399 0 0 0 2.44-.898 3.55 3.55 0 0 1-1.672 2.033 6.898 6.898 0 0 0 2.202-.572 6.335 6.335 0 0 1-1.913 1.896v.082l-.001.424c0 5.81-4.972 10.519-11.105 10.519A11.5 11.5 0 0 1 .5 13.17c.31.034.624.051.943.051a8.35 8.35 0 0 0 4.912-1.573c-1.744 0-3.191-1.06-3.684-2.525Z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/AdvaitAcharyaPrashant"
                className="text-brand-100 p-1.5 hover:text-white"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M2.365 14.939V7.828H0V5.269h2.365V3.382C2.365 1.193 3.797 0 5.888 0 6.889 0 7.75.07 8 .1v2.29H6.55c-1.137 0-1.356.505-1.356 1.246v1.633h2.712l-.353 2.559h-2.36V15"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/acharya_prashant_paf/"
                className="text-brand-100 p-1.5 hover:text-white"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  className="h-6 w-6 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.993 0h.219l.56.002c.936.004 1.23.016 1.82.043.8.036 1.344.163 1.821.348.5.189.954.484 1.329.866.382.374.677.828.865 1.328.185.477.312 1.023.349 1.821.031.696.042.98.044 2.381v1.423a54.45 54.45 0 0 1-.021 1.825l-.007.176-.016.38c-.037.798-.163 1.343-.349 1.82a3.835 3.835 0 0 1-2.193 2.194c-.478.186-1.023.312-1.821.349l-.38.016-.265.01c-.386.012-.825.017-1.736.018H6.789a58.968 58.968 0 0 1-1.736-.018l-.265-.01-.38-.016c-.798-.037-1.344-.163-1.82-.349a3.675 3.675 0 0 1-1.33-.865 3.676 3.676 0 0 1-.864-1.328c-.186-.478-.312-1.023-.349-1.821a35.056 35.056 0 0 1-.043-1.82L0 8.211V6.789l.002-.56c.004-.936.016-1.23.043-1.821.036-.798.163-1.344.348-1.82.189-.501.484-.955.866-1.33A3.676 3.676 0 0 1 2.587.395C3.064.208 3.61.08 4.407.044 5 .019 5.294.007 6.23.003L6.789 0h.219ZM7.5 1.351h-.25l-.646.001a38.38 38.38 0 0 0-2.134.043c-.73.033-1.128.155-1.392.258-.326.12-.62.312-.863.561a2.32 2.32 0 0 0-.56.863c-.104.264-.226.661-.26 1.393-.029.653-.04.928-.042 2.134v1.793a38.33 38.33 0 0 0 .043 2.134c.033.732.155 1.129.258 1.393.12.326.312.62.561.863.242.249.537.44.863.56.264.103.661.226 1.392.259l.461.02.173.006c.32.01.674.014 1.318.016l.38.001H8.58a55.05 55.05 0 0 0 1.318-.017l.172-.006.461-.02c.732-.033 1.129-.156 1.393-.258a2.484 2.484 0 0 0 1.423-1.424c.103-.264.225-.661.259-1.393.03-.653.04-.928.043-2.134V6.603a51.957 51.957 0 0 0-.018-1.5l-.006-.172c-.005-.144-.012-.29-.02-.461-.033-.732-.155-1.129-.258-1.393a2.322 2.322 0 0 0-.56-.863 2.326 2.326 0 0 0-.863-.56c-.264-.103-.661-.226-1.393-.259-.653-.03-.929-.04-2.134-.043H7.5Zm0 2.298a3.852 3.852 0 1 1 0 7.703 3.852 3.852 0 0 1 0-7.703ZM7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.004-2.404a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Acharya_Prashant"
                className="text-brand-100 p-1.5 hover:text-white"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M20 .517a.221.221 0 0 1-.221.222h-.618a.554.554 0 0 0-.513.347L13.008 15l-2.84-6.411L7.13 15 1.314 1.08a.554.554 0 0 0-.51-.34H.22C.099.74 0 .64 0 .516V0h5.025L5.01.523a.221.221 0 0 1-.22.217h-.841a.446.446 0 0 0-.412.61l4.082 10.387 2.065-4.5-2.61-6.158A.554.554 0 0 0 6.565.74h-.406c-.122 0-.22-.1-.22-.222V0h3.773v.517a.221.221 0 0 1-.221.222.446.446 0 0 0-.408.622l1.542 3.612L12.2 1.364a.446.446 0 0 0-.406-.625h-.59a.222.222 0 0 1-.221-.222V0h3.952v.517a.221.221 0 0 1-.22.222h-.658a.554.554 0 0 0-.502.321l-2.433 5.232 2.271 5.367 3.974-10.315a.446.446 0 0 0-.414-.605h-.982a.222.222 0 0 1-.221-.222V0H20v.517Z"></path>
                </svg>
              </a>
            </div>
            <span className="font-en text-left">For Hindi</span>
            <div className="-ml-1.5 flex space-x-2.5">
              <a
                href="https://www.youtube.com/c/ShriPrashant"
                className="text-brand-100 p-1.5 hover:text-white"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="15"
                  viewBox="0 0 21 15"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M10.54-.001h.047l.365.002c.696.004 2.1.02 3.548.072l.512.02c1.535.066 3.032.177 3.705.365.899.247 1.608.97 1.85 1.888.407 1.514.432 4.512.433 5.078v.255c-.007.706-.056 3.531-.432 4.992a2.658 2.658 0 0 1-1.851 1.888c-1.42.381-6.516.433-7.88.44l-.183.001h-.491c-1.36-.008-6.446-.062-7.88-.459a2.659 2.659 0 0 1-1.851-1.888C.069 11.262.01 8.579 0 7.75v-.5c.01-.825.068-3.498.43-4.904C.675 1.43 1.402.687 2.283.44c.71-.19 2.34-.299 3.961-.36l.51-.018C8.11.018 9.393.005 10.048 0l.364-.002h.049ZM8.467 4.844a.448.448 0 0 0-.062.227v4.857a.448.448 0 0 0 .676.387l4.133-2.429a.448.448 0 0 0 0-.773L9.082 4.684a.448.448 0 0 0-.614.16Z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/Advait_Prashant"
                className="text-brand-100 p-1.5 hover:text-white"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  className="h-6 w-6 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.671 9.124a4.06 4.06 0 0 0 1.873-.118c-1.829-.274-3.227-1.774-3.227-3.583V5.34a3.974 3.974 0 0 0 1.83.47c-1.097-.637-1.83-1.785-1.83-3.094 0-.68.197-1.316.541-1.86C3.805 3.06 6.662 4.522 9.882 4.72a3.549 3.549 0 0 1-.09-.796C9.792 1.867 11.552.2 13.723.2c1.135 0 2.157.455 2.874 1.183a6.399 6.399 0 0 0 2.44-.898 3.55 3.55 0 0 1-1.672 2.033 6.898 6.898 0 0 0 2.202-.572 6.335 6.335 0 0 1-1.913 1.896v.082l-.001.424c0 5.81-4.972 10.519-11.105 10.519A11.5 11.5 0 0 1 .5 13.17c.31.034.624.051.943.051a8.35 8.35 0 0 0 4.912-1.573c-1.744 0-3.191-1.06-3.684-2.525Z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Acharya.Prashant.Advait"
                className="text-brand-100 p-1.5 hover:text-white"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M2.365 14.939V7.828H0V5.269h2.365V3.382C2.365 1.193 3.797 0 5.888 0 6.889 0 7.75.07 8 .1v2.29H6.55c-1.137 0-1.356.505-1.356 1.246v1.633h2.712l-.353 2.559h-2.36V15"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/acharya_prashant_ap/"
                className="text-brand-100 p-1.5 hover:text-white"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  className="h-6 w-6 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.993 0h.219l.56.002c.936.004 1.23.016 1.82.043.8.036 1.344.163 1.821.348.5.189.954.484 1.329.866.382.374.677.828.865 1.328.185.477.312 1.023.349 1.821.031.696.042.98.044 2.381v1.423a54.45 54.45 0 0 1-.021 1.825l-.007.176-.016.38c-.037.798-.163 1.343-.349 1.82a3.835 3.835 0 0 1-2.193 2.194c-.478.186-1.023.312-1.821.349l-.38.016-.265.01c-.386.012-.825.017-1.736.018H6.789a58.968 58.968 0 0 1-1.736-.018l-.265-.01-.38-.016c-.798-.037-1.344-.163-1.82-.349a3.675 3.675 0 0 1-1.33-.865 3.676 3.676 0 0 1-.864-1.328c-.186-.478-.312-1.023-.349-1.821a35.056 35.056 0 0 1-.043-1.82L0 8.211V6.789l.002-.56c.004-.936.016-1.23.043-1.821.036-.798.163-1.344.348-1.82.189-.501.484-.955.866-1.33A3.676 3.676 0 0 1 2.587.395C3.064.208 3.61.08 4.407.044 5 .019 5.294.007 6.23.003L6.789 0h.219ZM7.5 1.351h-.25l-.646.001a38.38 38.38 0 0 0-2.134.043c-.73.033-1.128.155-1.392.258-.326.12-.62.312-.863.561a2.32 2.32 0 0 0-.56.863c-.104.264-.226.661-.26 1.393-.029.653-.04.928-.042 2.134v1.793a38.33 38.33 0 0 0 .043 2.134c.033.732.155 1.129.258 1.393.12.326.312.62.561.863.242.249.537.44.863.56.264.103.661.226 1.392.259l.461.02.173.006c.32.01.674.014 1.318.016l.38.001H8.58a55.05 55.05 0 0 0 1.318-.017l.172-.006.461-.02c.732-.033 1.129-.156 1.393-.258a2.484 2.484 0 0 0 1.423-1.424c.103-.264.225-.661.259-1.393.03-.653.04-.928.043-2.134V6.603a51.957 51.957 0 0 0-.018-1.5l-.006-.172c-.005-.144-.012-.29-.02-.461-.033-.732-.155-1.129-.258-1.393a2.322 2.322 0 0 0-.56-.863 2.326 2.326 0 0 0-.863-.56c-.264-.103-.661-.226-1.393-.259-.653-.03-.929-.04-2.134-.043H7.5Zm0 2.298a3.852 3.852 0 1 1 0 7.703 3.852 3.852 0 0 1 0-7.703ZM7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.004-2.404a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { SideBarMenu };
