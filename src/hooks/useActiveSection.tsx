import { useEffect, useState } from "react";

const useActiveSection = (sectionIds: string[], threshold = 0.5) => {
  const [activeSection, setActiveSection] = useState("hero");
  // Observe element on whenever sectionIds or threshold change
  useEffect(() => {
    // Created Array of IntersectionObserver to disconnect them when unmounts
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const oberver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: threshold,
          rootMargin: "-10% 0px -40% 0px",
        },
      );
      oberver.observe(element);
      observers.push(oberver);
    });
    // Disconnect every observer we used after unmount to prevent memory leaks
    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds, threshold]);
  // Return Active Section
  return activeSection;
};

export default useActiveSection;
