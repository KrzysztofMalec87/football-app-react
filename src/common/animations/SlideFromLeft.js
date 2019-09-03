import posed from 'react-pose';

const FadeInTop = posed.div({
  hidden: {
    filter: 'blur(10px)',
    opacity: 0,
    scaleX: 0,
    scaleY: 0,
    x: -1000,
    y: -300,
  },
  visible: {
    delay: ({ animationDelay }) => animationDelay,
    filter: 'blur(0px)',
    opacity: 1,
    rotate: '900deg',
    scaleX: 1,
    scaleY: 1,
    transition: { duration: 500 },
    x: 0,
    y: 0,
  },
});

export default FadeInTop;
