import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";
import PageNotFound from "../pages/PageNotFound";
import { ProtectedRoutes } from "./ProtectedRoutes";
export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create"
          element={
            <ProtectedRoutes>
              <CreatePost />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/update/:id"
          element={
            <ProtectedRoutes>
              <CreatePost />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
