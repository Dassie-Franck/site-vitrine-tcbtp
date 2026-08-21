import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { featureFlags } from "../../shared/constants/featureFlags";

import { HomePage } from "../pages/home/HomePage";
import { AboutPage } from "../pages/about/AboutPage";
import { ServicesPage } from "../pages/services/ServicesPage";
import { ProjectsPage } from "../pages/projects/ProjectsPage";
import { EquipmentsPage } from "../pages/materials/EquipmentsPage"; // <-- Import ajouté

import { QuotePage } from "../pages/quote/QuotePage";
import { ContactPage } from "../pages/contact/ContactPage";
import { BlogPage } from "../pages/blog/BlogPage";
import { NotFoundPage } from "../pages/NotFoundPage";

import {EquipmentDetailPage} from "../pages/EquipmentDetailPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "a-propos", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "realisations", element: <ProjectsPage /> },
      { path: "materiel-btp", element: <EquipmentsPage /> }, // <-- Orthographe corrigée
      { path: "devis", element: <QuotePage /> },
      ...(featureFlags.showBlog ? [{ path: "blog", element: <BlogPage /> }] : []),
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  
 
  {
    path: '/equipments/:id',
    element: <EquipmentDetailPage />,
  },
]);