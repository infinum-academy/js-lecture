const accounts = [{ balance: 100.5 }, { balance: 0.5 }, { balance: -10.45 }];

let negativeAccount = null;

for (let i = 0; i < accounts.length; i++) {
  const account = accounts[i];

  if (account.balance < 0) {
    negativeAccount = account;
    break;
  }
}
