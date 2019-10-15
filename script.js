const accounts = [{ balance: 100.5 }, { balance: 0.5 }, { balance: -10.45 }];

const negativeAccounts = accounts.reduce(function(pV, account) {
  if (account.balance < 0) {
    pV.push(account);
  }

  return pV;
}, []);

const negativeAccount = accounts.reduce(function(pV, account) {
  if (account.balance < 0) {
    pV = account;
  }
}, undefined);
