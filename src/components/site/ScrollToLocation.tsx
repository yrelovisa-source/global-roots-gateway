import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToLocation() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    const target = document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else {
      const observer = new MutationObserver(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) { element.scrollIntoView(); observer.disconnect(); }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
  }, [pathname, hash, key]);
  return null;
}