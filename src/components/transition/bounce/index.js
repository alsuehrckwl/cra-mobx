import React from 'react';
import { Transition } from 'react-transition-group';
import style from './style.module.scss';

const BounceTransition = ({ loader, duration, type, children }) => {
  const transitionStyles = {
    entering: style.animation_none,
    entered: style[`animation_${type}`],
    exiting: style.animation_none,
    exited: style.animation_none
  };

  return (
    <Transition in={loader} timeout={duration} unmountOnExit>
      {(state) => {
        return <div className={transitionStyles[state]}>{children}</div>;
      }}
    </Transition>
  );
};

export default BounceTransition;
