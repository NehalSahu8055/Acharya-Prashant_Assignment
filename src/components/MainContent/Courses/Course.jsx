import React from "react";
import useAPI from "../../../hooks/useAPI";
import Spinner from "../../Spinner/Spinner";
import Error from "../../Errors/Error";

const courseAPI =
  "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3";

export default function Course() {
  const { data, error } = useAPI(courseAPI);
  const courseInfo = data && data.courses;

  return (
    <>
      {error ? (
        <Error type="solid" href="/" label="HomePage" classes={"w-screen"} />
      ) : data ? (
        courseInfo.map((course, index) => {
          const {
            id,
            title,
            subtitle,
            courseHours,
            amount,
            originalAmount,
            language,
          } = course;
          const formattedCourseHours = String(courseHours).split(".");
          const courseDuration =
            formattedCourseHours[0] +
            " hours " +
            formattedCourseHours[1] +
            " minutes ";
          return (
            <article key={id}>
              <h3 className="sr-only">Course{index + 1}</h3>
              <a
                href={id}
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow"
              >
                <div className="flex flex-col space-y-2">
                  <div className="self-start pb-2">
                    <div id="part-pointer" className="svelte-a2w579">
                      <span className="font-hi svelte-t3mcl">
                        भाग {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col text-left">
                    <div>
                      <div className="text-gray-title text-lg font-medium leading-normal">
                        <span className="font-hi svelte-t3mcl">{title}</span>
                      </div>
                      <div className="text-gray-subtitle text-sm leading-normal lg:text-base">
                        <span className="font-hi svelte-t3mcl">{subtitle}</span>
                      </div>
                      <div className="text-gray-subtitle pt-1 text-xs lg:text-sm">
                        <span className="font-en svelte-t3mcl">
                          {courseDuration}
                        </span>
                      </div>
                      <div className="text-gray-subtitle pt-1 text-xs lg:text-sm">
                        <span className="font-en svelte-t3mcl">
                          Contribution: ₹{amount}
                        </span>
                        <del>
                          <span className="pl-1">
                            <span className="font-hi svelte-t3mcl">
                              ₹{originalAmount}
                            </span>
                          </span>
                        </del>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap text-xs">
                      <div className="mr-1">
                        <div className="bg-blue-background flex items-center rounded px-1.5 py-0.5 text-xs   text-slate-700">
                          <span className="font-en svelte-t3mcl capitalize">
                            {language}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex items-center space-x-3 text-xs font-medium">
                      <div
                        id="main-website-add-to-cart-borderless-button"
                        className="btn-borderless btn-base svelte-1r7fe4c cursor-pointer rounded-md text-center transition transition-colors duration-150"
                      >
                        <span className="font-en svelte-t3mcl">
                          ADD TO CART
                        </span>
                      </div>
                      <div className="self-stretch py-2">
                        <div className="bg-gray-separator h-full w-px"></div>
                      </div>

                      <div
                        id="main-website-enroll-in-course-button"
                        className="btn-borderless btn-base svelte-1r7fe4c cursor-pointer rounded-md text-center transition transition-colors duration-150"
                      >
                        <span className="font-en svelte-t3mcl">ENROL</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-2 group-hover:invisible">
                  <div className=" bg-gray-separator h-[0.5px] w-full"></div>
                </div>
              </a>
            </article>
          );
        })
      ) : (
        <Spinner size="base" text="Loading Courses..." classes={"w-screen"} />
      )}
    </>
  );
}
