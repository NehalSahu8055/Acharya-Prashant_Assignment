import CourseApp from "./components/CourseApp";
import "./stylesheets/index.css";
import "./stylesheets/fonts.css";
import ErrorBoundary from "./utils/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <CourseApp />
    </ErrorBoundary>
  );
}
