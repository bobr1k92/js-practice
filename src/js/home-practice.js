// Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

// 1. Створити масив ключів
// 2. Масив значень
// 3. Знайти найбільше значення в масиві значень
// 4. Знайти індекс найбільшого значення в масиві значень
// 5. По індексу забрати ключ з масиву ключів


// function findBestEmployee (employees) {
//  const keys = Object.keys(employees);
//  const values = Object.values(employees);

//  const maxValue = Math.max(...values);
//  const index = values.indexOf(maxValue);
//  return keys[index];
// }


// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux



// const word = 'Hello world';

// function getObject(word) {
//   return [...word].reduce((acc, item) => {

//     if (!item.trim()) {
//       acc["empty"] = acc["empty"] ? acc["empty"] + 1 : 1;
//       return acc;
//     } if (acc.hasOwnProperty(item)) {
//       acc[item] = acc[item] + 1; 
//       return acc;
//     } 
//     acc[item] = 1;
//     return acc;
//   }, {});
// }

// console.log(getObject(word)) // { H: 1, e: 1, l: 3, o: 2, empty: 1, w: 1, r: 1, d: 1 }



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter(book => book.rating > MIN_BOOK_RATING).sort(
//   (a, b) => a.author.localeCompare(b.author)).map(book => book.author);




