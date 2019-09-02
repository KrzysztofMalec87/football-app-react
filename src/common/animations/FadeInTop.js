import posed from 'react-pose';

const SlideFromRight = posed.div({
  hidden: { x: 30, opacity: 0 },
  visible: { x: 0, opacity: 1, delay: ({ animationDelay }) => animationDelay },
});

export default SlideFromRight;
