import { useState, useEffect } from "react";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollDirection((prevDirection) =>
        currentScrollY > lastScrollY && currentScrollY > 50 ? "down" : "up"
      );

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // No dependency on `lastScrollY` to prevent unnecessary updates

  return scrollDirection;
}

export default useScrollDirection;
