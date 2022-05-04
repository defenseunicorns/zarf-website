import { useEffect } from 'react';

function onScroll(listener: () => void): void {
  useEffect(() => {
    listener();
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  });
}

export default onScroll;
