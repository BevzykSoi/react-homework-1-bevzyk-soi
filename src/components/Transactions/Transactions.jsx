import propTypes from "prop-types";
import styles from './Transactions.module.css';

const Transactions = props => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr key={styles.head}>
                    <th key="type">Type</th>
                    <th key="amount">Amount</th>
                    <th key="currency">Currency</th>
                </tr>
            </thead>

            <tbody>
                {props.items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.type.toUpperCase()}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Transactions.defaultProps = {
    items: [],
};

Transactions.propTypes = {
    items: propTypes.array,
};

export default Transactions;