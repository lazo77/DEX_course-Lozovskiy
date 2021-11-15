'use strict';

//Хотел назвать файлик "destructAss", поржал и не стал))))

/* 
let user = { name: "John", years: 30 };

let {name, years : age, isAdmin = false} = user;

alert( name );
alert( age );
alert( isAdmin );
 */

/* 
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let topSal = 0;
  let richMan = null;
  for (const [name, sum] of Object.entries(salaries)) {
    if (topSal < sum) {
      topSal = sum;
      richMan = name;
    }
  }
  return richMan;
}

alert(topSalary(salaries));
 */
