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
                              onClick={onClickContact}
                            >Contato
                            </Button>
                        </Li>
                        <Li>
                            <Button
                              onClick={onClickBlog}
                            >Blog</Button>
                        </Li>
                        <Li>
                            <Button
                              onClick={onClickNewProcess}
                            >Novo Processo</Button>
                        </Li>
                        <Li>
                            <Button
                            onClick={onClickAbout}
                            >Saiba Mais</Button>
                        </Li>

                    </Ul>
                </HeaderNav>
            </HeaderContainer>
        </Fragment>



    )
}

export default Header