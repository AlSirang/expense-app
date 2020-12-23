import { act } from "react-dom/test-utils";

export default (state, action) => {
    switch (action.type) {
        case "DELETE":
            return {
                // ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.transactionId
                ),
            };
        case "ADD":
            return {
                transactions: [action.transaction, ...state.transactions],
            };
        default:
            return state;
    }
};
