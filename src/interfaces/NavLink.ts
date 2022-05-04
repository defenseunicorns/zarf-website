export interface NavLinkTabProps {
  value: string;
  label: string;
  href: string;
  target?: string;
  id: string;
  rel?: string;
}

interface NavLink {
  url: string;
  text: string;
  target?: string;
  rel?: string;
}

export default NavLink;
