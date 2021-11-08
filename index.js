// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

let usersArray = require ('./data')

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
  }
  return userFirstNames
 
};

getFirstNames(usersArray);
console.log(getFirstNames(usersArray));
// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************
const getFullNames = arr => {
    const fullName = [];
    for (let user of arr) {
      fullName.push(user.firstName + " " + user.lastName)
    }
    return fullName
};

getFullNames(usersArray);
console.log(getFullNames(usersArray));

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  usersCreditDetails = []
  for (let user of arr) {
    let {firstName, lastName, balance} = user
      const userDetails = {
          firstName,
          lastName,
          balance
        };
          usersCreditDetails.push(userDetails)
  }
  return usersCreditDetails
};


getUsersCreditDetails(usersArray);
console.log(getUsersCreditDetails(usersArray))
// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = arr => {
  const male = arr.filter((arr)=>{
    if(arr.gender==='male'){
        return true;
    }
 });
 const female = arr.filter((arr)=>{
     if(arr.gender==='female'){
         return true;
     }
  });

  return {
      femaleUsers : getFullNames(female),
      maleUsers: getFullNames(male)
  } 
}
genderView(usersArray);
console.log(genderView(usersArray));
// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************
const data = genderView(usersArray);

const genderCount = data => {
  // Your code goes here ...
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  // Your code goes here ...
};

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
