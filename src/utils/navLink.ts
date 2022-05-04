import NavLink, { NavLinkTabProps } from '../interfaces/NavLink';

export const createTabPropsFromNavLink = (
  navLink: NavLink,
  index: number,
): NavLinkTabProps => {
  return {
    value: navLink.url,
    label: navLink.text,
    href: navLink.url,
    target: navLink.target,
    id: navLink.text + index,
    rel: navLink.rel,
  };
};

export const isLocalLink = (url: string): boolean => url.startsWith('/');
