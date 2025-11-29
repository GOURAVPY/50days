let balance = 1000;
const balanceEl = document.getElementById("balance");
const transactionList = document.getElementById("transactionList");

function deposit() {
  const amount = parseFloat(document.getElementById("depositAmount").value);
  if (amount > 0) {
    balance += amount;
    updateBalance();
    addTransaction(`Deposited ₹${amount}`);
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById("withdrawAmount").value);
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    updateBalance();
    addTransaction(`Withdrew ₹${amount}`);
  } else {
    alert("Invalid withdrawal amount");
  }
}

function updateBalance() {
  balanceEl.textContent = balance.toFixed(2);
}

function addTransaction(text) {
  const li = document.createElement("li");
  li.textContent = text;
  transactionList.appendChild(li);
}
