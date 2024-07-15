let year = 2006;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Year is a leap year");
} else {
  console.log("year is not leap year");
}