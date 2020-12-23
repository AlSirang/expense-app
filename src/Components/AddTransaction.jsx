import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export function AddTransaction() {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    function handelSubmit(e) {
        e.preventDefault();
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            description,
            amount: Number(amount),
        };
        addTransaction(transaction);
        setDescription("");
        setAmount(0);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={(e) => handelSubmit(e)}>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        placeholder="Enter text..."
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount (- expense, + income)</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        placeholder="Enter amount..."
                        required
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
}
