
// Array to store bank accounts
let bankAccounts = [];

// Array to store transaction history
let transactionHistory = [];

function addUser(id, name, amount, location) {

    // Check if user already exists
    let user = bankAccounts.find(account => account.id === id);

    if (user) {
        console.log("User already exists.");
        return;
    }
    
    if (typeof id !== "number") {
    console.log("Invalid ID.");
    return;
}

    bankAccounts.push({
        id: id,
        name: name,
        amount: amount,
        location: location
    });

    console.log("User Added Successfully.");
}


function removeUser(id) {
    let index = bankAccounts.findIndex(account => account.id === id);
    if (index === -1) {
        console.log("User Not Found.");
        return;
    }
    bankAccounts.splice(index, 1);
    console.log("User Removed Successfully.");
}

function updateUser(id, newData) {
    let user = bankAccounts.find(account => account.id === id);
    if (!user) {
        console.log("User Not Found.");
        return;
    }
    if (newData.name) {
        user.name = newData.name;
    }

    if (newData.location) {
        user.location = newData.location;
    }

    console.log("User Updated Successfully.");
}

//---Transaction type: credit or debit

function transaction(type, id, money) {

    let user = bankAccounts.find(account => account.id === id);

    if (!user) {
        console.log("User Not Found.");
        return;
    }
    if (typeof money !== "number" || money <= 0) {
    console.log("Invalid Amount.");
    return;
}

    if (type === "credit") {

        user.amount += money;

        transactionHistory.push({
            id: id,
            name : user.name,
            amount: money,
            NewBalance : user.amount,
            date: new Date().toLocaleString(),
            type: "credit"
        });

        console.log("Money Deposited Successfully.");

    }

    else if (type === "debit") {

        if (money > user.amount) {
            console.log("Insufficient Balance.");
            return;
        }

        user.amount -= money;

        transactionHistory.push({
            id: id,
            name : user.name,
            amount: money,
            NewBalance : user.amount,
            date: new Date().toLocaleString(),/*if not using toLocaleString() 
            then it will show in UTC format like 2026-07-16T07:45:42.123Z*/
            type: "debit"
        });

        console.log("Money Withdrawn Successfully.");

    }

    else {

        console.log("Invalid Transaction Type.");

    }

}


function balanceCheck(id) {

    let user = bankAccounts.find(account => account.id === id);

    if (!user) {
        console.log("User Not Found.");
        return;
    }

    console.log("Name :", user.name);
    console.log("Balance :", user.amount);
    

}

function showUsers() {

    if (bankAccounts.length === 0) {
        console.log("No Users Available.");
        return;
    }

    console.log("\nUsers list");

    bankAccounts.forEach(user => {

        console.log("ID :", user.id);
        console.log("Name :", user.name);
        console.log("Balance :", user.amount);
        console.log("Location :", user.location);

    });

}

function showTransactionHistory(id) {

    let user = bankAccounts.find(account => account.id === id);

    if (!user) {
        console.log("User Not Found.");
        return;
    }

    let history = transactionHistory.filter(item => item.id === id);

    if (history.length === 0) {
        console.log("No Transactions Found.");
        return;
    }

    console.log("\nTransaction History");

    history.forEach(item => {

        console.log("Name :",user.name);
        console.log("Amount :", item.amount);
        console.log("Type :", item.type);
        console.log("Date :", item.date);
        console.log("New Balance :", item.NewBalance);


    });

}

//function Calling
// function to call : adduser, removeUser, updateUser, transaction, balanceCheck, showUsers, showTransactionHistory

