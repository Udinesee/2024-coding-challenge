// Deenqto Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// function DNAtoRNA(dna) {
//   let rna = '';
//   for (let i = 0; i < dna.length; i++) {
// //     if (dna[i] === 'T') {
// //       rna += 'U';
// //     } else {
// //       rna += dna[i];
// //     }
//     rna += dna[i] === 'T' ? 'U' : dna[i];
//   }
//   return rna;
// }

// const DNAtoRNA = (dna) => dna.split('T').join('U');

// const DNAtoRNA = (dna) => dna.replace(/T/g, 'U');
const DNAtoRNA = (dna) => dna.replaceAll('T', 'U');

console.log(DNAtoRNA("GCAT"));
