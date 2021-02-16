import React, {Fragment, useState} from 'react';
import { HeaderContainer, HeaderNav, Container, ButtonDiv, Button, GlobalStyleHeader, Hamburger } from './header.styled';
import Burger from 'react-css-burger';

const MenuOptions = () => {
  return (
    <>
      <ButtonDiv>
          <Button
            onClick={() => window.location="/consulta"}
          >Consulta
          </Button>
      </ButtonDiv>
      <ButtonDiv>
          <Button
            onClick={() => window.location="/home"}
          >Blog</Button>
      </ButtonDiv>
      <ButtonDiv>
          <Button
            onClick={() => window.location="/novo-processo"}
          >Novo Processo</Button>
      </ButtonDiv>
      <ButtonDiv>
          <Button
          onClick={() => window.location="/saiba-mais"}
          >Saiba Mais</Button>
      </ButtonDiv>
    </>
  )
}

const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    return (
        <Fragment>
            <GlobalStyleHeader />
            <HeaderContainer>
                <a>LOGO</a>
                <HeaderNav>
                    <Hamburger open={hamburgerOpen}>
                      <Burger active={hamburgerOpen} onClick={() => setHamburgerOpen(!hamburgerOpen)} />
                    </Hamburger>
                    <Container open={hamburgerOpen}>
                      <MenuOptions />
                    </Container>
                </HeaderNav>
            </HeaderContainer>
        </Fragment>



    )
}

export default Header