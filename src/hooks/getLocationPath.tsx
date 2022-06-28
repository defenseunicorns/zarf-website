import { useState, useEffect } from 'react';

function getLocationPath(): [pathname: string, pathUrl: string] {
  const [pathname, setPathname] = useState<string>('');
  const [pathUrl, setPathUrl] = useState<string>('/');

  useEffect(() => {
    setPathname(window.location.pathname.replaceAll('/', ''));
  });

  useEffect(() => {
    setPathUrl(`/${pathname}`);
  }, [pathname]);

  return [pathname, pathUrl];
}

export default getLocationPath;
