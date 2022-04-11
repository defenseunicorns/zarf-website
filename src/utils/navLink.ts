import NavLink from '../interfaces/NavLink';

interface NavLinkTabProps {
  value: number;
  label: string;
  href?: string;
  target?: string;
  id: string;
}

export const createTabPropsFromNavLink = (
  navLink: NavLink,
  index: number
): NavLinkTabProps => {
  return {
    value: index,
    label: navLink.title,
    href: navLink.url,
    target: navLink.target,
    id: navLink.title + index
  };
};
