const array = [
  {
    firstName: 'a',
    lastName: 'b',
  },
  {
    firstName: 'a',
    lastName: 'b',
  },
  {
    firstName: 'a',
    lastName: 'b',
  },
];

const completeUsers = array.map(function(user) {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
    ...user,
  };
});
