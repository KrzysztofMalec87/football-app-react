import posed from 'react-pose';

const FadeInTop = posed.div({
  hidden: { x: 500, opacity: 0, filter: 'blur(10px)' },
  visible: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 500 },
    delay: ({ animationDelay }) => animationDelay,
  },
});

export default FadeInTop;
