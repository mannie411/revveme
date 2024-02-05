import { useEffect, useState } from "react";

export const useIsVisible = (ref: any) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // default, use viewport
      rootMargin: "100% 0px 0px 0px",
      threshold: 0.8, // half of item height
    };
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
