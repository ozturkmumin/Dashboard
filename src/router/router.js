import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "pages/calendar"
const router = createBrowserRouter([
  {
    path: "/calendar",
    element: <Calendar/>
  },
  {
    path: "/second",
    element: <div>Second route content</div>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
