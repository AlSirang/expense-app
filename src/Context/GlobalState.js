import React, { useReducer, createContext } from "react";

import AppReducer from "./AppReducer";

const initialState = {
    transactions: [],
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const deleteTransactions = (id) => {
        dispatch({
            type: "DELETE",
            transactionId: id,
        });
    };
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD",
            transaction,
        });
    };
    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransactions,
                addTransaction,
            }}>
            {children}
        </GlobalContext.Provider>
    );
}
