/////even odd

const checkNum = (num) => {
    if (num > 0) {
      console.log(`${num} is Positive.`);
    } else {
      if (num == 0) {
        console.log(`${num} is Zero.`);
      } else {
        console.log(`${num} is Negative.`);
      }
    }
  };
  
  checkNum(7);

  // age

  const isPersonEligible = (age) => {
    if (age >= 18) {
      console.log("Eligible for voting");
    } else {
      console.log("Not Eligible for voting");
    }
  };
  
  isPersonEligible(18);


