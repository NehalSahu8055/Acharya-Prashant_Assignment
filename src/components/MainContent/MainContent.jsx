import Faqs from "./Faqs/Faqs";
import Courses from "./Courses/Courses";
import Santwandi from "./Santwandi/Santwandi";
import Dropdown from "../Dropdowns/Dropdown";

export default function MainContent() {
  return (
    <>
      <main className="min-h-full w-full flex-grow">
        <h1 className="sr-only">Acharya Prashant Courses</h1>
        <Santwandi />
        <Courses />
        <Faqs />
      </main>
    </>
  );
}
