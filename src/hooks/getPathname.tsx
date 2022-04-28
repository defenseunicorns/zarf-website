import { useState, useEffect } from 'react';

function getPathname(): string {
  const [pathname, setPathname] = useState<string>('/');
  useEffect(() => {
    setPathname(window.location.pathname);
  });
  return pathname;
}

export default getPathname;
