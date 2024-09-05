import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";


// vai contar a parte do modal em si
export function NewTransactionModal() {
    return (
        <Dialog.Portal>
        {/*Portal = faz com que um conteudo dentro do Portal vá parar em outro lugar na aplicação*/}
          <Overlay />
          <Content>
            <Dialog.Title>Nova Transação</Dialog.Title>

            <CloseButton>
                <X size={24} />
            </CloseButton>

            <form action="">
                <input type="text" placeholder="Descrição" required />
                <input type="number" placeholder="Preço" required />
                <input type="text" placeholder="Categoria" required />

                <TransactionType>
                    <TransactionTypeButton variant="income" value="income">
                    {/*o RadioGroup.Item obrigada a colocar o value*/}
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransactionTypeButton>
                    
                    <TransactionTypeButton variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </TransactionTypeButton>
                </TransactionType>

                <button type="submit">Cadastrar</button>
            </form>
            
          </Content>
        </Dialog.Portal>
    )
}