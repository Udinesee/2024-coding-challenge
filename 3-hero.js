// // Deenqto Coding Challenge 2024
// 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

// function hero(bullets, dragons) {
//     if (bullets / 2 >= dragons) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function hero(bullets, dragons) {
//     return (bullets / 2 >= dragons) ? true : false;
// }

function hero(bullets, dragons) {
    return (bullets >= dragons * 2) ? true : false;
}

// const hero = (bullets, dragons) => bullets >= dragons * 2;

console.log(hero(10, 5), true);
