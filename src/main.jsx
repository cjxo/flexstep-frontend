import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import './styles/index.css';
import App from './App.jsx';

import SignUpPage from "./routes/SignUpPage.jsx";
import LogInPage from "./routes/LogInPage.jsx";
import ContactUsPage from "./routes/ContactUsPage.jsx";
import AboutUsPage from "./routes/AboutUsPage.jsx";
import CollectionsPage from "./routes/CollectionsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/log-in",
        element: <LogInPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/collections",
        element: <CollectionsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
