import posed from 'react-pose';

const FadeInBottom = posed.div({
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 300 },
    delay: ({ animationDelay }) => animationDelay,
  },
});

export default FadeInBottom;
