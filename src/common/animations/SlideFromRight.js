import posed from 'react-pose';

const FadeInTop = posed.div({
  hidden: { x: 500, opacity: 0, scaleX: 0, scaleY: 0, filter: 'blur(10px)' },
  visible: {
    delay: ({ animationDelay }) => animationDelay,
    filter: 'blur(0px)',
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    transition: { duration: 500 },
    x: 0,
  },
});

export default FadeInTop;
