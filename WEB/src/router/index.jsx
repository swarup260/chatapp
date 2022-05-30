import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as React from "react";
import App from "../App";
import NotFound from '../pages/NotFound';
import RequireAuth from "../components/RequireAuth";


export default function AppRouter() {

  const SignUp = React.lazy(() => import("../pages/Signup"))
  const Home = React.lazy(() => import("../pages/Home"))
  const NotFound = React.lazy(() => import("../pages/NotFound"))

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-up" element={<React.Suspense fallback={<>...</>}>
          <SignUp />
        </React.Suspense>} />
        <Route path="/home" element={<React.Suspense fallback={<>...</>}>
          <RequireAuth><Home /></RequireAuth>
        </React.Suspense>} />
        <Route path="*" element={<React.Suspense fallback={<>...</>}>
          <NotFound />
        </React.Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}
