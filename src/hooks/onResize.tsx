import { useEffect } from 'react';

function onResize(listener: () => void): void {
  useEffect(() => {
    listener();
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [listener]);
}

export default onResize;
