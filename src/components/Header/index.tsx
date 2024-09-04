import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import logo from '../../assets/logo.svg';

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

                <Dialog.Portal>
                    {/*Portal = faz com que um conteudo dentro do Portal vá parar em outro lugar na aplicação*/}
                    <Dialog.Overlay />
                    <Dialog.Content>
                        <Dialog.Title>Nova Transação</Dialog.Title>
                        
                        <Dialog.Close />
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
            
    )
}