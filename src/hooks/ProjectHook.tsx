import { useState, useEffect } from "react";

const ProjectHook = () => {
  const getDeviceSize = () => {
    if (window.innerWidth < 768) {
      return "mobile";
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  const [deviceSize, setDeviceSize] = useState(getDeviceSize());

  useEffect(() => {
    const handleResize = () => {
      setDeviceSize(getDeviceSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const variantsImg = {
    initial: {
      scale: 0.5,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  const variantstext = {
    initial: {
      x: deviceSize === "mobile" ? 80 : deviceSize === "tablet" ? 100 : 400,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return {
    variantsImg,
    variantstext,
  };
};

export default ProjectHook;
