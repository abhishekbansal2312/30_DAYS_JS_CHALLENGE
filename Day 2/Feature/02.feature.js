const comparisonOperations = (num1, num2) => {
    let greaterThan = num1 > num2;
    let smallerThan = num1 < num2;
    let greaterThanEqualTo = num1 >= num2;
    let smallerThanEqualTo = num1 <= num2;
    let equlity = num1 == num2;
    let strictEquility = num1 === num2;
    let AND = num1 && num2;
    let OR = num1 || num2;
  
    console.log(`greaterThan : ${num1} > ${num2} = ${greaterThan}`);
    console.log(`smallerThan : ${num1} < ${num2} = ${smallerThan}`);
    console.log(
      `greaterThanEqualTo : ${num1} >= ${num2} = ${greaterThanEqualTo}`
    );
    console.log(
      `smallerThanEqualTo : ${num1} <= ${num2} = ${smallerThanEqualTo}`
    );
    console.log(`equlity : ${num1} == ${num2} = ${equlity}`);
    console.log(`strictEquility : ${num1} === ${num2} = ${strictEquility}`);
    console.log(`AND : ${num1} & ${num2} = ${AND}`);
    console.log(`OR : ${num1} || ${num2} = ${OR}`);
  };
  
  comparisonOperations(5, 10);