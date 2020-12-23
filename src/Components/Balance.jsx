import React, { useContext } from "react";

import { GlobalContext } from "../Context/GlobalState";

export function Balance() {
    const { transactions } = useContext(GlobalContext);
    const total = transactions
        .map((transaction) => transaction.amount)
        .reduce((sum, curr) => sum + curr, 0);

    return (
        <>
            <h4>Current Balance</h4>
            <h1>${total}</h1>
        </>
    );
}
