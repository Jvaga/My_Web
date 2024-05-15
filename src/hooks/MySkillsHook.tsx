import { useState, useEffect } from "react";

const MySkillsHook = () => {
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

  const variantsTitle = {
    initial: {
      y: deviceSize === "mobile" ? -80 : deviceSize === "tablet" ? -100 : -120,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const variantsDeveloper = {
    initial: {
      y: deviceSize === "mobile" ? -50 : deviceSize === "tablet" ? -75 : -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const variantsSkillsLeft = {
    initial: {
      x: deviceSize === "mobile" ? -100 : deviceSize === "tablet" ? -75 : -300,
      y: deviceSize === "mobile" ? 200 : deviceSize === "tablet" ? 250 : 200,
      opacity: 0,
      scale: 2,
    },
    animate: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },
  };

  const variantsSkillsRight = {
    initial: {
      x: deviceSize === "mobile" ? 100 : deviceSize === "tablet" ? 75 : 300,
      y: deviceSize === "mobile" ? 200 : deviceSize === "tablet" ? 250 : 200,
      opacity: 0,
      scale: 2,
    },
    animate: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },
  };

  return {
    variantsTitle,
    variantsDeveloper,
    variantsSkillsLeft,
    variantsSkillsRight,
  };
};

export default MySkillsHook;
