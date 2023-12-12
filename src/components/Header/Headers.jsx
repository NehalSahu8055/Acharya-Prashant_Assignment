import React, { useState } from "react";
import Button from "../Buttons/Button";
import Dropdown from "../Dropdowns/Dropdown";
import { SideBarMenu } from "./Menus";
import { CloseMenuBtn, OpenMenuBtn } from "../Buttons/MenuBtns";
import { Overlay } from "../ModalOverlay/Modal";
import { DropDownAll } from "../Dropdowns/DropDownAll";

const HeaderMain = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setIsMenuExpanded((prev) => !prev);
  };

  return (
    <header id="main-header" className="text-sm">
      <nav
        id="main-navbar"
        className="bg-brand-700 h-12"
        aria-labelledby="mainNavbar"
      >
        <span className="sr-only" id="mainNavbar">
          Main Navgation Bar including important menus
        </span>
        <div className="mx-auto h-full max-w-screen-2xl select-none text-white">
          <div className="flex h-full justify-between text-xs">
            <div className="flex items-stretch pl-4 text-sm lg:pl-8">
              <a href="/" className="shrink-0 self-center">
                <img
                  className="mr-2 h-8 w-8 rounded-full"
                  src="/images/ic_favicon.png"
                  alt="Acharya Prashant"
                />
              </a>
              <div className="hidden h-full flex-row items-stretch justify-center font-medium md:flex">
                <a
                  id="main-website-nav-item-internal-home"
                  href="/"
                  className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 2xl:px-4"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="font-en">Home</span>
                  </div>
                </a>
                <div
                  id="main-website-nav-item-in-place-live"
                  className="hover:bg-brand-600 flex cursor-pointer items-center space-x-1 whitespace-nowrap text-white transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 2xl:px-4"
                >
                  <div className="font-en relative flex items-center space-x-2 text-white">
                    <Dropdown
                      dropLabel="Live Sessions"
                      arrayDropMenu={[
                        "Bhagwad Gita",
                        "Sant Sarita",
                        "Vedant Samhita",
                        "Bodh Pratyusha",
                      ]}
                    />
                  </div>
                </div>
                <a
                  id="main-website-nav-item-internal-courses"
                  href="/en/courses"
                  className="text-white-opacity-90 bg-brand-600 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 2xl:px-4"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="font-en">Video Series</span>
                  </div>
                </a>
                <a
                  id="main-website-nav-item-internal-books"
                  href="/en/books"
                  className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 2xl:px-4"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="font-en">AP Books</span>
                  </div>
                </a>
                <a
                  id="main-website-nav-item-internal-articles"
                  href="/en/articles"
                  className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 2xl:px-4"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="font-en">AP Articles</span>
                  </div>
                </a>
                <div
                  id="main-website-nav-item-in-place-invite"
                  className="text-white-opacity-90 hover:bg-brand-600 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 2xl:px-4"
                >
                  <div className="front-en relative flex items-center space-x-2">
                    <Dropdown
                      dropLabel="Invite"
                      arrayDropMenu={["Invite to talk", "Invite to Interview"]}
                    />
                  </div>
                </div>
                <a
                  id="main-website-nav-item-internal-media"
                  href="/en/media"
                  className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 2xl:px-4"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="font-en">In Media</span>
                  </div>
                </a>
                <a
                  id="main-website-nav-item-internal-contribute"
                  href="/en/contribute"
                  className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 2xl:px-4"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="font-en">Donate</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex h-full content-center items-center justify-center lg:mt-[1px] lg:pr-8">
              <a
                className="rounded border-[1.5px] border-white px-2 text-sm md:hidden"
                href="/en/contribute"
              >
                <span className="font-en">Donate</span>
              </a>
              <div
                id="main-website-navbar-language-selector"
                className="ml-3 inline-flex cursor-pointer items-center px-2 md:px-1"
              >
                <div className="relative">
                  <div className="front-en relative flex items-center space-x-2">
                    <Dropdown
                      dropLabel="EN"
                      arrayDropMenu={["हिन्दी", "ENGLISH"]}
                    />
                  </div>
                  <div></div>
                </div>
              </div>
              <a
                id="main-website-navbar-contact-icon"
                className="ml-4.5 hidden text-white hover:cursor-pointer lg:block"
                href="/en/enquiry"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M11.895 16c.708 0 1.314-.104 1.817-.313.503-.209.965-.548 1.388-1.017a1.27 1.27 0 0 0 .094-.103l.086-.103a2.93 2.93 0 0 0 .544-.81 1.98 1.98 0 0 0 .176-.785c0-.298-.086-.585-.257-.862-.171-.278-.44-.54-.806-.785l-2.382-1.665a2.048 2.048 0 0 0-1.17-.39c-.408-.003-.781.164-1.118.502l-.617.609c-.097.103-.193.159-.287.167a.49.49 0 0 1-.305-.09 8.1 8.1 0 0 1-.544-.416 18.5 18.5 0 0 1-1.332-1.205c-.206-.2-.405-.405-.596-.614a11.947 11.947 0 0 1-.527-.613 5.1 5.1 0 0 1-.394-.558.42.42 0 0 1-.095-.296.506.506 0 0 1 .163-.287l.609-.618c.343-.343.512-.719.51-1.128a1.985 1.985 0 0 0-.399-1.162L4.782 1.047C4.536.692 4.275.431 3.998.262A1.699 1.699 0 0 0 3.137 0C2.61-.01 2.08.223 1.543.704a.848.848 0 0 0-.108.09.648.648 0 0 1-.098.081c-.469.43-.809.897-1.02 1.403C.106 2.784 0 3.398 0 4.118c0 .784.153 1.612.458 2.484.306.872.762 1.76 1.367 2.664a18.027 18.027 0 0 0 2.237 2.685 18.605 18.605 0 0 0 2.674 2.217c.897.604 1.782 1.06 2.657 1.369.874.309 1.708.463 2.502.463Zm0-1.295c-.691.005-1.428-.146-2.211-.455a11.557 11.557 0 0 1-2.365-1.296 16.925 16.925 0 0 1-2.28-1.921 16.885 16.885 0 0 1-1.941-2.3A12.06 12.06 0 0 1 1.765 6.32c-.32-.798-.474-1.543-.462-2.235.005-.44.087-.847.244-1.218a2.64 2.64 0 0 1 .788-1.038c.026-.023.053-.046.082-.069.114-.097.233-.173.355-.227a.895.895 0 0 1 .365-.082c.251 0 .45.115.6.343l1.55 2.317a.663.663 0 0 1 .13.411c-.007.143-.075.28-.207.412l-.685.678c-.291.292-.437.6-.437.922 0 .323.1.625.3.905.223.31.515.67.878 1.081.363.412.707.78 1.033 1.107.228.223.48.462.754.716.274.255.546.496.814.725.269.229.503.418.703.566.28.2.581.3.904.3.323 0 .63-.148.921-.445l.677-.678c.132-.137.27-.208.416-.21a.69.69 0 0 1 .416.133L14.2 12.26c.12.08.206.171.257.274a.738.738 0 0 1 .078.335c0 .234-.103.474-.309.72a2.054 2.054 0 0 1-.137.155c-.269.314-.591.55-.968.708a3.384 3.384 0 0 1-1.226.253Z"></path>
                </svg>
              </a>
              <div
                id="main-website-right-menu-btn"
                className="mx-2 inline-flex cursor-pointer items-center px-2 py-2 pl-1 text-white md:pl-0 md:pl-1 md:pr-4 lg:pl-[11px]"
              >
                {/* SideBar Menu Toggling */}
                <button
                  onClick={toggleMenu}
                  className="sidebar-menu-btn flex"
                  aria-labelledby="sidebarMenu"
                  aria-haspopup="true"
                  aria-controls="sidebar"
                  aria-expanded={isMenuExpanded}
                >
                  <div className="menu-btn flex">
                    {/* open-menu-btn */}
                    {!isMenuExpanded && (
                      <>
                        <OpenMenuBtn />
                        <span className="font-en hidden pl-2 lg:block">
                          Menu
                        </span>
                      </>
                    )}

                    {/* close-menu-btn & overlay-sidebar */}
                    {isMenuExpanded && <CloseMenuBtn />}
                  </div>

                  <span id="sidebarMenu" className="sr-only">
                    Toggle SideBar Menu
                  </span>
                  {isMenuExpanded && (
                    <>
                      <Overlay />
                      <SideBarMenu sbmClasses={"text-left"} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
const HeaderAd = () => {
  return (
    <header id="ad-header">
      <nav
        id="ad-navbar"
        className="ad-navbar flex w-full items-center justify-between bg-slate-800 px-4 py-2 lg:justify-center lg:py-3.5"
        aria-labelledby="adNavbar"
      >
        <span className="sr-only" id="adNavbar">
          Video Access Navigation Bar
        </span>
        <div className="flex lg:items-center">
          <div className="mr-2 mt-0.5 h-4 w-4 shrink-0 rounded-full border border-white bg-red-600 lg:mt-0"></div>
          <div className="text-sm text-white lg:text-lg">
            <span className="font-en text-base">
              Get access to all 350+ video series at once!
            </span>
          </div>
        </div>
        <div className="shrink-0 pl-5 text-sm">
          <a
            className="lg:py-0.75 flex items-center rounded-md border border-gray-200 px-2 py-1 text-white"
            href="/en/all-video-series"
          >
            <span className="font-en">Click Here</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
const HeaderSearch = () => {
  const [isDropDownExpanded, setIsDropDownExpanded] = useState(false);
  const toggleDropDownMenu = () => {
    setIsDropDownExpanded((prev) => !prev);
  };
  return (
    <header id="search-header" className="sticky top-0 z-[370]">
      <nav
        id="search-navbar"
        className="search-navbar w-full bg-white first-letter:right-0"
        aria-labelledby="searchNavbar"
      >
        <span className="sr-only" id="searchNavbar">
          Video Access Navigation Bar
        </span>
        <div className="flex h-full w-full items-center justify-between py-1 shadow">
          <div className="flex cursor-pointer items-center justify-center pl-4 lg:pl-8">
            <div className="lg:block">
              <img
                className="h-6 object-contain"
                src="/images/ic_videoseries.png"
                alt="content home"
              />
            </div>
            <div className="ml-6 hidden w-[36rem] flex-grow md:block">
              <div className="border-gray-disabled items-center rounded border shadow-sm">
                <div className="relative ">
                  <div className="relative flex w-full flex-row">
                    <button
                      onClick={toggleDropDownMenu}
                      className="all-dropDown-btn text-gray-subtitle flex flex-row items-center  justify-center gap-2 whitespace-nowrap rounded-l border-r px-3 pl-2 text-xs font-medium  text-slate-500"
                      aria-labelledby="allDropdown"
                      aria-haspopup="true"
                      aria-controls="dropDownAllMenu"
                      aria-expanded={isDropDownExpanded}
                    >
                      <span className="font-en">All</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                        className="fill-current"
                      >
                        <path d="m.354 1.354 3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792A.5.5 0 0 0 8.293.5H.707a.5.5 0 0 0-.353.854Z"></path>
                      </svg>
                      <span id="allDropdown" className="sr-only">
                        Toggle All DropDown
                      </span>
                    </button>
                    {isDropDownExpanded && (
                      <DropDownAll
                        setIsDropDownExpanded={setIsDropDownExpanded}
                      />
                    )}
                    <input
                      type="search"
                      className="text-gray-title caret-brand-600  h-9 w-full border-0 focus:ring-0"
                      placeholder=" Search for video series"
                    />
                    <button
                      id="main-website-search-courses-btn"
                      className="bg-brand-200 items-end rounded-r fill-current px-2 py-1 text-slate-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-10 content-center items-center justify-center space-x-4 pr-4 lg:pr-12">
            <div className="cursor-pointer text-slate-900 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z"
                ></path>
              </svg>
            </div>
            <div className="whitespace-nowrap py-4 text-sm">
              <div className="btn-solid btn-sm cursor-pointer rounded-md text-center transition transition-colors duration-150">
                <Button
                  type="solid"
                  href="/login"
                  label="Login"
                  classes="p-0 m-0"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { HeaderMain, HeaderSearch, HeaderAd };
