import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <LinkText>Sale</LinkText>
            <LinkTextBold>Sale</LinkTextBold>
          </NavLink>
          <NavLink href="/new">
            <LinkText>New&nbsp;Releases</LinkText>
            <LinkTextBold>New&nbsp;Releases</LinkTextBold>
          </NavLink>
          <NavLink href="/men">
            <LinkText>Men</LinkText>
            <LinkTextBold>Men</LinkTextBold>
          </NavLink>
          <NavLink href="/women">
            <LinkText>Women</LinkText>
            <LinkTextBold>Women</LinkTextBold>
          </NavLink>
          <NavLink href="/kids">
            <LinkText>Kids</LinkText>
            <LinkTextBold>Kids</LinkTextBold>
          </NavLink>
          <NavLink href="/collections">
            <LinkText>Collections</LinkText>
            <LinkTextBold>Collections</LinkTextBold>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }

  &::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--color-gray-900);
    content: "";
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.2s, transform 0.2s;
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus {
      &::after {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
`;

const LinkText = styled.span`
  display: inline-block;
  will-change: transform;
  transform: rotateX(0deg) translateY(0);
  transition: transform 200ms;
  transform-origin: 50% 0;
  transform-style: preserve-3d;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${NavLink}:hover &,
    ${NavLink}:focus & {
      transform: rotateX(-90deg) translateY(-27px);
      transition: transform 200ms;
    }
  }
`;

const LinkTextBold = styled(LinkText)`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${WEIGHTS.bold};
  transform: rotateX(90deg) translateY(27px);

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${NavLink}:hover &,
    ${NavLink}:focus & {
      transform: rotateX(0deg) translateY(0);
    }
  }
`;

export default Header;
