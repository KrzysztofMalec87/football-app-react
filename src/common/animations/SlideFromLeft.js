import posed from 'react-pose';

const FadeInTop = posed.div({
  hidden: { x: -1000, y: -300, opacity: 0, filter: 'blur(10px)' },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    rotate: '900deg',
    transition: { duration: 500 },
    delay: ({ animationDelay }) => animationDelay,
  },
});

export default FadeInTop;
