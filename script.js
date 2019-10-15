const accounts = [{ balance: 100.5 }, { balance: 0.5 }, { balance: -10.45 }];

const negativeAccounts = accounts.filter((account) => {
  return account.balance < 0;
});

const negativeAccountsS = accounts.filter((account) => account.balance < 0);

const filterPre = (account) => account.balance < 0;
