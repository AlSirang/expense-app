import React, {useContext} from "react";

import { GlobalContext } from "../Context/GlobalState";

export function Transaction({ transaction }) {
    const sign = transaction.amount > 0 ? "+" : "-";
    const amount = Math.abs(transaction.amount);

    const { deleteTransactions } = useContext(GlobalContext);

    return (
        <li className={sign == "-" ? "minus" : "plus"}>
            {transaction.description}{" "}
            <span>
                {sign} ${amount}
            </span>
            <button
                onClick={() => {
                    
                    deleteTransactions(transaction.id);
                }}
                className="delete-btn">
                x
            </button>
        </li>
    );
}
