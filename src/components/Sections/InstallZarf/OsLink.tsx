import React, { ReactElement, useEffect, useState } from 'react';
import Link from '@mui/material/Link/Link';
import { OS } from './types';

function OsLink(props: {
  os: OS;
  selectedOs: OS;
  setSelected(os: OS): void;
}): ReactElement {
  const [selected, setSelected] = useState<boolean>(false);
  useEffect(() => {
    setSelected(props.os === props.selectedOs);
  }, [props.os, props.selectedOs]);

  return (
    <Link
      component="button"
      variant="h6"
      underline={selected ? 'always' : 'hover'}
      fontFamily="Roboto"
      color={selected ? 'primary' : 'text.primary'}
      onClick={(): void => props.setSelected(props.os)}
    >
      {props.os}
    </Link>
  );
}

export default OsLink;
