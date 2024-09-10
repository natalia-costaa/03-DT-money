import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionContext } from "../../contexts/TransactionContext";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {

    const { transactions } = useContext(TransactionContext)

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
                <tbody>
                    {transactions.map(transaction => {
                         return (
                        <tr key={transaction.id}>
                            <td width="50%">{transaction.description}</td>
                            
                            <td>
                            <PriceHighlight variant={transaction.type}>
                                {/* nesse caso abaixo é como se fosse um if */}
                                {transaction.type === 'outcome' && '- '}
                            {priceFormatter.format(transaction.price)}
                            </PriceHighlight>
                            </td>

                            <td>{transaction.category}</td>
                            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                        </tr>
                     )
                    } ) }
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>

        </div>
    )
}