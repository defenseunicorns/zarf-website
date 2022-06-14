import { IconButton } from '@mui/material';
import { Check, ContentCopy } from '@mui/icons-material';
import React, { ReactElement, useEffect, useState } from 'react';

const MS_TO_SHOW_CHECK = 2000;

const CopyToClipboard = (props: { textToCopy: string }): ReactElement => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyCommandToClipboard = React.useCallback(async (): Promise<void> => {
    await navigator.clipboard.writeText(props.textToCopy);
    setCopied(true);
  }, [props.textToCopy]);

  useEffect(() => {
    if (copied) {
      const resetCopy = setTimeout(
        (): void => setCopied(false),
        MS_TO_SHOW_CHECK,
      );
      return (): void => clearTimeout(resetCopy);
    }
  }, [copied]);

  return copied ? (
    <IconButton title="copied to clipboard">
      <Check color="primary" />
    </IconButton>
  ) : (
    <IconButton onClick={copyCommandToClipboard} title="copy to clipboard">
      <ContentCopy />
    </IconButton>
  );
};

export default CopyToClipboard;
