import React from 'react';

export default function useWindowEventListener<
  E extends keyof GlobalEventHandlersEventMap
>(event: E, listener: (event: GlobalEventHandlersEventMap[E]) => void): void {
  return React.useEffect((): (() => void) => {
    window.addEventListener(event, listener);
    return (): void => {
      window.removeEventListener(event, listener);
    };
  }, [event, listener]);
}
