import { lazy, Suspense } from "react";
import "./App.css";
import { projectBySlug, type ProjectSlug } from "./data/portfolioData";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const CaseStudyPage = lazy(() => import("./components/CaseStudyPage"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  const route = window.location.pathname.replace(/\/+$/, "");
  const match = route.match(/^\/work\/([^/]+)$/);
  const slug = match?.[1] as ProjectSlug | undefined;
  const project = slug ? projectBySlug[slug] : undefined;

  if (project) {
    return (
      <Suspense fallback={<div className="route-loading">Loading portfolio…</div>}>
        <CaseStudyPage project={project} />
      </Suspense>
    );
  }

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
