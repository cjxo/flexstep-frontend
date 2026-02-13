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
import ProfilePage from "./routes/ProfilePage.jsx";

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
      {
        path: "/profile",
        element: <ProfilePage />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
