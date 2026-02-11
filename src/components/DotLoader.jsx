import { useState, useEffect } from "react";

const DotLoader = ({ label, }) => {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      if (dots.length > 2) {
        setDots("");
      } else {
        setDots(dots + ".");
      }
    }, 500);

    return () => clearInterval(timer);
  }, [dots]);
  return <>{`${label}${dots}`}</>;
};

export default DotLoader;
