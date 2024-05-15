const KnowMeHook = () => {
  const variantsTitle = {
    hidden: {
      opacity: 0,
    },
    reveal: (i: number) => ({
      opacity: 1,
      transition: { delay: 0.04 * i },
    }),
  };

  const variants = {
    initial: {
      x: 200,
      y: 200,
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

  return {
    variantsTitle,
    variants,
  };
};

export default KnowMeHook;
