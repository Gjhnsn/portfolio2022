export const pulseVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      scale: [
        0.4, 0.42, 0.4, 0.44, 0.4, 0.4, 0.4, 0.42, 0.4, 0.44, 0.4, 0.4, 0.4, 0.42,
        0.4, 0.44, 0.4, 0.4, 0.4, 0.4, 0,
      ],
      transition: {
        duration: 2.8,
        type: "spring",
        delay: 0.2,
      },
    },
  };
  
  export const fadeOut = {
    animate: {
      opacity: 0,
      transition: {
        delay: 3.3,  
        duration: 1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };