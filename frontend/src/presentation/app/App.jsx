import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { PageLoader } from "../components/common/PageLoader";

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Le loader disparaît après 1.8 seconde au chargement initial de l'application
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader isLoading={loading} />
      {!loading && <RouterProvider router={router} />}
    </>
  );
}

export default App;