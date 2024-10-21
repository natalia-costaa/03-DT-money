import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

// vai contar a parte do modal em si
export function NewTransactionModal() {

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data;
    
    await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),

      /*
      ...data
      é o mesmo que colocar
      
      o ID o json server cria sozinho
      description: data.description,
      category: data.category,
      price: data.price,
      type: data.type
      */
    })

    reset();
  }
  
  return (
    <Dialog.Portal>
    {/*Portal = faz com que um conteudo dentro do Portal vá parar em outro lugar na aplicação*/}
      <Overlay />
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <input
          type="text"
          placeholder="Descrição"
          required
          {...register('description')}
        />
        <input
          type="number"
          placeholder="Preço"
          required
          {...register('price', { valueAsNumber: true })}
        />
        <input
          type="text"
          placeholder="Categoria"
          required
          {...register('category')}
        />

      <Controller 
        control={control}
        name="type"
        render={( {field }) => {
          return (
            <TransactionType onValueChange={field.onChange} value={field.value}>
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
          )
        }}
      />

        <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
            
      </Content>
    </Dialog.Portal>
  )
}