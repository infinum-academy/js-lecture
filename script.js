const accounts = [{ balance: 100.5 }, { balance: 0.5 }, { balance: -10.45 }];

const negativeAccountsFor = [];

for (let i = 0; i < accounts.length; i++) {
  const element = accounts[i];

  if (element.balance < 0) {
    negativeAccountsFor.push(element);
  }
}

const negativeAccounts = accounts.filter(function(account) {
  return account.balance < 0;
});
