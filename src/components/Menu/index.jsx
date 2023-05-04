import MenuLink from './MenuLink';

import { Nav } from './styles';

export default function Menu() {
  return (
    <header>
      <Nav>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/about">Sobre mim</MenuLink>
      </Nav>
    </header>
  )
}