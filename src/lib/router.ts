import { createBrowserRouter } from "react-router";
import App from "@/App";
import EducationPage from "@/pages/EducationPage";
import EducationV2Page from "@/pages/EducationV2Page";
import EducationV3Page from "@/pages/EducationV3Page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: EducationPage },
      { path: "education/v2", Component: EducationV2Page },
      { path: "education/v3", Component: EducationV3Page },
    ],
  },
]);
