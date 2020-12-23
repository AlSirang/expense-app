import React, { useContext } from "react";

import { GlobalContext } from "../Context/GlobalState";

export function AccountSummary() {
    const { transactions } = useContext(GlobalContext);
    const expense = Math.abs(
        transactions
            .filter((transaction) => transaction.amount < 0)
            .map((transaction) => transaction.amount)
            .reduce((sum, curr) => sum + curr, 0)
    ).toFixed(2);

    const income = transactions
        .filter((transaction) => transaction.amount > 0)
        .map((transaction) => transaction.amount)
        .reduce((sum, curr) => sum + curr, 0)
        .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${expense}</p>
            </div>
        </div>
    );
}
