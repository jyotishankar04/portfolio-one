import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ProjectPage } from "./pages/ProjectPage";
import ListProject from "./pages/ListProject";
import ReposList from "./pages/ReposList";
import { Suspense } from "react";
import Loading from "./components/Loading";

const LazyHome = () => {
  return <Home />;
};

const LazyReposList = () => {
  return <ReposList />;
};
const LazyProjects = () => {
  return <ProjectPage />;
};

const LazyProjectList = () => {
  return <ListProject />;
};

const RouteManagement = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <LazyHome />
          </Suspense>
        }
      />
      <Route
        path="/projects/:project"
        element={
          <Suspense fallback={<Loading />}>
            <LazyProjects />
          </Suspense>
        }
      />
      <Route
        path="/projects"
        element={
          <Suspense fallback={<Loading />}>
            <LazyProjectList />
          </Suspense>
        }
      />
      <Route
        path="/repos"
        element={
          <Suspense fallback={<Loading />}>
            <LazyReposList />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouteManagement;
