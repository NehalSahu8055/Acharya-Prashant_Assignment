import React, { useRef, useState } from "react";
import useAPI from "../../hooks/useAPI";
import Spinner from "../Spinner/Spinner";
import Error from "../Errors/Error";

const allDropdownAPI = "https://api.acharyaprashant.org/v2/legacy/courses/tags";

export const DropDownAll = ({ classes, setIsDropDownExpanded }) => {
  const dropdownRef = useRef(null);
  const { data, error } = useAPI(allDropdownAPI);
  const [parentTag, childTag] = [data && data[0], data && data[1]];
  const [expandedParentID, setExpandedParentID] = useState(null);
  const [isChildTagExpanded, setIsChildTagExpanded] = useState(false);
  const toggleTagExpanded = (tagId) => {
    setExpandedParentID((prev) => (prev === tagId ? null : tagId));
  };

  return (
    <div
      ref={dropdownRef}
      id="dropDownAllMenu"
      className={`text-gray-subtitle absolute left-0 top-9 z-[400] mt-2 text-base  ${classes}`}
    >
      <div className="flex h-[60vh] min-w-0 items-stretch rounded-lg bg-white shadow-lg">
        <div className="flex flex-col overflow-y-auto py-4">
          <button className="hover:text-brand-600 flex min-w-[150px] cursor-pointer flex-row items-center justify-between px-4 py-1.5 hover:rounded hover:bg-slate-100 lg:min-w-[270px]">
            <div className="flex  w-full items-center justify-between whitespace-nowrap pr-2 text-sm lg:pr-6 lg:text-base">
              <span className="font-en">All</span>
            </div>
          </button>
          {error ? (
            <Error type="solid" href="/" label="HomePage" />
          ) : data ? (
            parentTag.map((menuItems) => {
              const { name, tagId, hasChildren } = menuItems;

              return (
                <button
                  key={tagId}
                  onClick={() => toggleTagExpanded(tagId)}
                  className="hover:text-brand-600 flex min-w-[150px] cursor-pointer flex-row items-center justify-between px-4 py-1.5 hover:rounded hover:bg-slate-100 lg:min-w-[270px]"
                  aria-labelledby={"reader" + tagId}
                  aria-haspopup="true"
                  aria-controls="childTagMenu"
                  aria-expanded={expandedParentID === tagId}
                >
                  <span id={"reader" + tagId} className="sr-only">
                    Click here for menu {name.english}
                  </span>
                  <div className="flex  w-full items-center justify-between whitespace-nowrap pr-2 text-sm lg:pr-6 lg:text-base">
                    <span className="font-en">{name.english}</span>
                    {hasChildren && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        className="fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
                        ></path>
                      </svg>
                    )}
                  </div>
                </button>
              );
            })
          ) : (
            <Spinner size="base" text="Loading Menu..." />
          )}
        </div>
        {
          <div
            id="childTagMenu"
            className="border-gray-seperator flex  flex-col overflow-y-auto border-l py-4"
          >
            {data &&
              childTag
                .filter((menuItems) => {
                  return menuItems.parent === expandedParentID;
                })
                .map((menuItems) => {
                  const { name, tagId } = menuItems;

                  return (
                    <div
                      href=""
                      key={tagId}
                      className=" hover:text-brand-600 flex min-w-[150px] cursor-pointer flex-row items-center justify-between px-4 py-1.5 hover:rounded hover:bg-slate-100 lg:min-w-[270px]"
                    >
                      <a
                        href="#"
                        className="whitespace-nowrap pr-2 text-sm lg:pr-6 lg:text-base"
                      >
                        <span className="font-en">{name.english}</span>
                      </a>
                    </div>
                  );
                })}
          </div>
        }
      </div>
    </div>
  );
};
