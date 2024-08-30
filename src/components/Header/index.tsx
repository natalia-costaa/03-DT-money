import { HeaderContainer, HeaderContent } from "./styles";

import logo from '../../assets/logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} />
                
                 <button>Nova Transação</button>
            </HeaderContent>
        </HeaderContainer>
            
    )
}