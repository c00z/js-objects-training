/*
  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

*/

// YOUR CODE HERE
function daysUntilDate(string) {
  var today = new Date().getTime();
  var futureDay = new Date(dateString).getTime();

  return Math.round((Math.abs(futureDay - today)/86400000) + "days");
}

function birthdayReminder(birthdays) {
  var array = [];
  birthdays.forEach(function(element.dob) {
    var birthday
  }
}
