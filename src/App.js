import React from "react";

// my components
import { Heading } from "./Components/Heading";
import { Balance } from "./Components/Balance";
import { AccountSummary } from "./Components/AccountSummary";
import { TransactionsList } from "./Components/TransactionsList";
import { AddTransaction } from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <Heading />
            <div className="container">
                <Balance />
                <AccountSummary />
                <TransactionsList />
            </div>
            <AddTransaction />
        </GlobalProvider>
    );
}

export default App;
