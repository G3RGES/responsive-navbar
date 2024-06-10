import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  NavLinkWrapper,
  NavbarWrapper,
  StyledNavLink,
  StyledFontAwesomeIcon,
} from "../styles/Navbar.styled";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const links = [
    {
      page: "Home",
      href: "/",
    },
    {
      page: "About",
      href: "/about",
    },
    {
      page: "Blog",
      href: "/blog",
    },
    {
      page: "Services",
      href: "/services",
    },
    {
      page: "SignUp",
      href: "/signup",
    },
  ];

  const [active, setActive] = useState(false);

  return (
    <NavbarWrapper>
      <Logo />
      <StyledFontAwesomeIcon icon={faBars} onClick={() => setActive(!active)} />
      <NavLinkWrapper active={active}>
        {links.map((link, idx) => (
          <StyledNavLink activeclassname="active" key={idx} to={link.href}>
            {link.page}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
