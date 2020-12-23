export default function fun (state, action) {
    switch (action.type) {
        case "DELETE":
            return {
                
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
