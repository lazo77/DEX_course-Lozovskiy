'use strict'

// Колбэки
/* 
console.log('Беседа');

let sendMessage = (name, phrase, callback) => {
  setTimeout(() => {
    console.log(`Привет, ${name}, ${phrase}`);
    callback();
  }, 2000);
}

sendMessage('Вениамин', 'как бодрость духа?', () => setTimeout(() => {
  console.log('Замечательно, Георгий!');
}, 1500));
 */

// Промисы
/* 
console.log('Беседа');

let talk = new Promise((resolve) => {
  let name = 'Вениамин';
  let phrase = 'как бодрость духа?';

  setTimeout(() => {resolve(console.log(`Привет, ${name}, ${phrase}`))}, 2000);

})
.then(() => setTimeout(() => {
  console.log('Замечательно, Георгий!');
}, 1500))
 */


//Цепочка промисов

console.log('Беседа');

let talk = new Promise((resolve) => {
  let name = 'Вениамин';
  let phrase = 'как бодрость духа?';

  setTimeout(() => { resolve(console.log(`Привет, ${name}, ${phrase}`)) }, 1500);

})
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
       resolve( console.log('Замечательно, Георгий!')) 
      }, 1400)
    })
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log('Как здоровье тёти Цили?'))       
      }, 1400)
    })
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log('Я вас умоляю! Она нас всех переживет..'))       
      }, 1400)
    })
  })
  .then(() => setTimeout(() => {
    undError;
    console.log(`"короткие гудки, связь прервана"`);
  }, 500))
  .then(() => setTimeout(() => {
    console.log(`Георгий: "Вот и поговорили..."`);
  }, 1500))
  .catch(err => console.log(err))
  

//Fetch
/* 
async function getUsers(names) {
  let jobs = [];

  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
} */
 
