import { Exercise, Exercises, Home } from "./pages";

import { pageNames } from "./constant";

const routes: { path: string; element: JSX.Element }[] = [
  { path: pageNames.home, element: <Home /> },
  { path: pageNames.exercises, element: <Exercises /> },
  { path: pageNames.exercise, element: <Exercise /> },
];
export default routes;
