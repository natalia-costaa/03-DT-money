import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import logo from '../../assets/logo.svg';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} />
            
            <Dialog.Root> {/*precisa ficar por dentro de todo context do modal, dentro do botão como do próprio modal*/}
                <Dialog.Trigger asChild> 
                    {/*asChild = propriedade do RadixUi muda para que o Dialog Trigger não precise criar
                    um button, mas já aproveite o elemento button criado*/}
                    <NewTransactionButton>Nova transação</NewTransactionButton>
                </Dialog.Trigger>

            <NewTransactionModal />
            </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
            
    )
}