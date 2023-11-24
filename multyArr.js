//일단 구구단
// let gugu1 = '\"일단 구구단을 해보자\"\n';
// let dan = 6;
// for (x = 2; x < 10; x++){
//   gugu1 += `${dan}X${x}=${dan * x}\n`;

// }
// console.log(gugu1)


//다중구구단
let gugu2 = '\"다중 구구단\"\n';
for (i = 2; i < 10; i++) {
  gugu2 += `${i} 단\n`
  for (x = 2; x < 10; x++) {
    gugu2 += `${i} X ${x} = ${i * x}\n`


  }
}
console.log(gugu2)

