import React from "react";
import Course from "./Course";
import useAPI from "../../../hooks/useAPI";

const courseAPI =
  "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3";

export default function Courses() {
  const { data } = useAPI(courseAPI);
  const courseInfo = data && data.courses;
  return (
    <section>
      <h2 className="font-en border-b border-b-gray-300 px-8 py-3 font-medium md:mt-12 md:text-xl lg:mt-16">
        Video Series ({data ? courseInfo.length : 0})
      </h2>

      <article className="grid grid-cols-1 gap-x-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 lg:gap-x-8  lg:px-4 2xl:grid-cols-4">
        <h3 className="sr-only">Courses</h3>
        <Course />
      </article>
    </section>
  );
}
