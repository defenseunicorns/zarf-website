import { Box, Typography, IconButton } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

const CodeBox = styled(Box)`
  max-width: 732px;
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
` as typeof Box;

function CodeContainer({ command }: { command: string }): ReactElement {
  const copyCommandToClipboard = React.useCallback(async (): Promise<void> => {
    console.log(navigator.userAgent);
    await navigator.clipboard.writeText(command);
  }, [command]);

  return (
    <CodeBox marginX={'16px'}>
      <Typography variant="h5" fontFamily="Roboto">
        {`$ ${command}`}
      </Typography>
      <IconButton onClick={copyCommandToClipboard} title="copy to clipboard">
        <ContentCopy />
      </IconButton>
    </CodeBox>
  );
}
export default CodeContainer;
