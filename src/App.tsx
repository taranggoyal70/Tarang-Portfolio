import { lazy, Suspense } from "react";
import "./App.css";
import {
  projectBySlug,
  type ProjectSlug,
} from "./data/portfolioData";

const MainContainer = lazy(() => import("./components/MainContainer"));
const CaseStudyPage = lazy(() => import("./components/CaseStudyPage"));

const App = () => {
  const route = window.location.pathname.replace(/\/+$/, "");
  const match = route.match(/^\/work\/([^/]+)$/);
  const slug = match?.[1] as ProjectSlug | undefined;
  const project = slug ? projectBySlug[slug] : undefined;

  return (
    <Suspense fallback={<div className="route-loading">Loading portfolio…</div>}>
      {project ? <CaseStudyPage project={project} /> : <MainContainer />}
    </Suspense>
  );
};

export default App;
