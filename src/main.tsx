import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import App from "./App";
import { ScrollToLocation } from "./components/site/ScrollToLocation";

const ProgramPage = lazy(() => import("./pages/ProgramPage"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

const root = document.getElementById("root");
if (root) createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToLocation />
      <Suspense fallback={<div role="status" className="grid min-h-screen place-items-center bg-background text-primary">Yrelo · Загрузка…</div>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/programmy/:slug" element={<ProgramPage />} />
        <Route path="/spasibo" element={<ThankYou />} />
        <Route path="*" element={<App />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
