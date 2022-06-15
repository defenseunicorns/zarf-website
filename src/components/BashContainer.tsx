import { Box, Typography } from '@mui/material';
import CopyToClipboard from './CopyToClipboard';
import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

const EMPTY_LINE = '';
const COMMAND_DELIMITER = '$';

interface CommandInterface {
  text: string;
}

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
  flex-direction: column;
  padding: 12px 16px 12px 16px;
  text-align: left;
  gap: 4px;
` as typeof Box;

function BashContainer({
  command,
}: {
  command: string[] | string;
}): ReactElement {
  const commands = typeof command === 'string' ? [command] : command;
  return (
    <CodeBox sx={{ width: { xs: 'auto', md: '732px' } }}>
      {commands.map((cmd, index) => (
        <ParseBash key={index} text={cmd} />
      ))}
    </CodeBox>
  );
}

/*
 * Lines beginning with the COMMAND_DELIMITER return copyable text prefixed with a muted COMMAND_DELIMITER.
 * Empty lines return line breaks
 * All other lines are displayed as muted text or comments.
 */
function ParseBash(props: CommandInterface): ReactElement {
  const startChar = props.text.charAt(0);

  switch (startChar) {
    case EMPTY_LINE:
      return <br />;
    case COMMAND_DELIMITER:
      return <BashCommand {...props} />;
    default:
      return <CommentLine {...props} />;
  }
}

function BashCommand({ text }: CommandInterface): ReactElement {
  const cmd = text.slice(1);
  return (
    <Typography
      variant="h6"
      fontFamily="Roboto"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        lineHeight: '2',
        '&::before': {
          content: '"$\\00a0"',
          color: 'text.secondary',
        },
      }}
    >
      <Typography
        whiteSpace={'pre-wrap'}
        variant={'inherit'}
        fontFamily={'inherit'}
      >
        {cmd}
      </Typography>
      <Box alignSelf={'flex-end'} marginLeft={'auto'}>
        <CopyToClipboard textToCopy={cmd} />
      </Box>
    </Typography>
  );
}

function CommentLine({ text }: CommandInterface): ReactElement {
  return (
    <Typography
      variant="h6"
      fontFamily="Roboto"
      sx={{ color: 'text.secondary' }}
    >
      {text}
    </Typography>
  );
}

export default BashContainer;
