import { OS } from './types';

export function getInstallCommand(os: OS): string[] {
  const installCommand = [];
  switch (os) {
    case OS.linux:
      installCommand.push('brew tap defenseunicorns/tap && brew install zarf');
      break;

    case OS.mac:
      installCommand.push('# Install Zarf using Homebrew');
      installCommand.push('brew tap defenseunicorns/tap && brew install zarf');
      installCommand.push(
        '# For Mac, we use KIND to create a Kubernetes cluster',
      );
      installCommand.push(
        'brew install kind && kind delete cluster && kind create cluster',
      );
      break;
  }
  return installCommand;
}

export function getUserOs(navigator: Navigator): OS {
  if (navigator.userAgent.includes(OS.linux)) return OS.linux;
  return OS.mac;
}
