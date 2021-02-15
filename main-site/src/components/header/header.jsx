import React, {Fragment} from 'react'
import { HeaderContainer, HeaderNav, Ul, Li, Button, GlobalStyleHeader } from './header.styled'

const Header = () => {
    return (
        <Fragment>
            <GlobalStyleHeader />
            <HeaderContainer>
                <HeaderNav>
                    <a>LOGO</a>
                    <Ul>
                        <Li>
                            <Button
                              onClick={() => window.location="/consulta"}
                            >Consulta
                            </Button>
                        </Li>
                        <Li>
                            <Button
                              onClick={() => window.location="/home"}
                            >Blog</Button>
                        </Li>
                        <Li>
                            <Button
                              onClick={() => window.location="/novo-processo"}
                            >Novo Processo</Button>
                        </Li>
                        <Li>
                            <Button
                            onClick={() => window.location="/saiba-mais"}
                            >Saiba Mais</Button>
                        </Li>

                    </Ul>
                </HeaderNav>
            </HeaderContainer>
        </Fragment>



    )
}

export default Header