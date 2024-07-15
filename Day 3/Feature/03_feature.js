const gradingSystem = (score) => {
    let grade;
    switch (true) {
      case score <= 100 && score >= 91:
        grade = "A1";
        break;
      case score <= 90 && score >= 81:
        grade = "A2";
        break;
      case score <= 80 && score >= 71:
        grade = "B1";
        break;
      case score <= 70 && score >= 61:
        grade = "B2";
        break;
      case score <= 60 && score >= 51:
        grade = "C1";
        break;
      case score <= 50 && score >= 41:
        grade = "C2";
        break;
      case score <= 40 && score >= 33:
        grade = "D";
        break;
      case score <= 32 && score >= 21:
        grade = "E1";
        break;
      default:
        grade = "E2";
        break;
    }
  
    console.log("Grade is :-", grade);
  };
  
  gradingSystem(97);



  //////
  const isLeapYear = (year) => {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(`${year} is a Leap year.`);
    } else {
      console.log(`${year} is not a Leap year.`);
    }
  };
  
  isLeapYear(2800);