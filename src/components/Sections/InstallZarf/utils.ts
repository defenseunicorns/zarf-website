import { OS } from './types';

export function getInstallCommand(os: OS): string {
  let installCommand = '';
  switch (os) {
    case OS.mac:
    case OS.linux:
      installCommand = 'brew tap defenseunicorns/tap && brew install zarf';
      break;
  }
  return installCommand;
}

export function getUserOs(navigator: Navigator): OS {
  if (navigator.userAgent.includes(OS.linux)) return OS.linux;
  return OS.mac;
}
