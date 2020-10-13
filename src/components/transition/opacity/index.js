import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { Transition } from 'react-transition-group';
import { FunctionUtil } from 'utils/functionUtil';
import { DeviceUtil } from 'utils/deviceUtil';

const OpacityTransition = ({
  children,
  loader,
  duration,
  delay = null,
  exitedComponent = null,
  className = null
}) => {
  const domRef = useRef();
  const [inState, setInState] = useState(false);
  const defaultStyle = {
    transitionDelay: !!delay ? `${delay}s` : '0s',
    transition: `opacity ${duration}ms ease-in`,
    opacity: 0
  };

  const transitionStyles = {
    entering: { opacity: 0.5 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };

  useEffect(() => {
    if (FunctionUtil.isFunction(loader)) {
      setInState(loader());
    } else {
      setInState(loader);
    }
  }, [loader]);

  if (DeviceUtil.isIE()) {
    return <div className={clsx(className)}>{children}</div>;
  } else {
    return (
      <Transition in={inState} timeout={duration} unmountOnExit ref={domRef}>
        {(state) => {
          if (!!exitedComponent) {
            if (state === 'entering' || state === 'exited') {
              return (
                <div
                  style={{ ...defaultStyle, ...transitionStyles[state] }}
                  className={clsx(className)}
                >
                  {exitedComponent}
                </div>
              );
            } else {
              return (
                <div
                  style={{ ...defaultStyle, ...transitionStyles[state] }}
                  className={clsx(className)}
                >
                  {children}
                </div>
              );
            }
          } else {
            return (
              <div
                style={{ ...defaultStyle, ...transitionStyles[state] }}
                className={clsx(className)}
              >
                {children}
              </div>
            );
          }
        }}
      </Transition>
    );
  }
};

export default OpacityTransition;
