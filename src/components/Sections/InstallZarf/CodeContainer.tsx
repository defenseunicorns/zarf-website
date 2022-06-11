import React, { ReactElement, useEffect, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Check, ContentCopy } from '@mui/icons-material';
import styled from '@emotion/styled';

const CodeBox = styled(Box)`
  border-radius: 12px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.14) 0%,
      rgba(255, 255, 255, 0.14) 100%
    ),
    #0d133d;
  border: 1px solid #7bd5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 13.5px 8px 14.5px;
  text-align: left;
  gap: 9.75px;
  justify-content: space-between;
` as typeof Box;

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

function CodeContainer({ command }: { command: string }): ReactElement {
  return (
    <CodeBox marginX={'16px'} sx={{ width: { xs: 'auto', md: '732px' } }}>
      <Typography variant="h6" fontFamily="Roboto">
        {`$ ${command}`}
      </Typography>
      <CopyToClipboard textToCopy={command} />
    </CodeBox>
  );
}
export default CodeContainer;
