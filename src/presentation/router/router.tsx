import { createBrowserRouter, Navigate } from "react-router-dom";
import { EventsPage, PricingPage, ReturnsPage, SalesPage, ShippingPage, TechnicalAssistancePage } from "../pages";
import { DashboardLayout } from "../layouts/DashboardLayout";

export const menuRoutes = [
    {
      to: "/sales",
      icon: "fa-solid fa-phone",
      title: "Sales",
      description: "Sales Department",
      component: <SalesPage />
    },
    {
      to: "/pricing",
      icon: "fa-solid fa-tag",
      title: "Pricing",
      description: "Pricing Department",
      component: <PricingPage />
    },
    {
      to: "/shipping",
      icon: "fa-solid fa-globe",
      title: "Shipping",
      description: "Shipping department",
      component: <ShippingPage />
    },
    {
      to: "/returns",
      icon: "fa-solid fa-share",
      title: "Returns",
      description: "Returns department",
      component: <ReturnsPage />
    },
    {
      to: "/events",
      icon: "fa-solid fa-calendar-days",
      title: "Events",
      description: "Events department",
      component: <EventsPage />
    },
    {
      to: "/image-generation",
      icon: "fa-solid fa-desktop",
      title: "Technical assistance",
      description: "Technical assistance department",
      component: <TechnicalAssistancePage />
    }
  ];

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            ...menuRoutes.map(route => ({
                path: route.to,
                element: route.component
            })),
            {
                path: "",
                element: <Navigate to={menuRoutes[0].to} />
            }
        ],
    }
  ])