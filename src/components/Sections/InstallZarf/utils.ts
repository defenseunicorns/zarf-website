import { OS } from './types';

export function getInstallCommand(os: OS): string[] | string {
  let installCommand: string[] | string;
  switch (os) {
    case OS.brew:
      installCommand = '$brew tap defenseunicorns/tap && brew install zarf';
      break;
    case OS.linux:
    case OS.mac:
      installCommand = [
        '# First, you will need a Kubernetes cluster. This example uses KIND.',
        '$brew install kind && kind delete cluster && kind install cluster',
        '',
        '# Next, you will need to deploy the Zarf Init Package',
        '$zarf init',
        '',
        '# You are ready to deploy any Zarf Package, try out our Retro Arcade!!',
        '$zarf package deploy sget://defenseunicorns/zarf-hello-world:0.1.0',
      ];
      break;
  }
  return installCommand;
}

export function getUserOs(navigator: Navigator): OS {
  if (navigator.userAgent.includes(OS.linux)) return OS.linux;
  return OS.mac;
}
