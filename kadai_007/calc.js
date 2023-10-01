// 変数の定義
let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
} 
else if (num % 3 === 0) {
  console.log('3の倍数です');
}
else if (num % 5 === 0) {
  console.log('5の倍数です');
}
else {
  console.log(num);
}


/*  switch分で書いた場合
// 変数の定義
let num = 15;

switch (true) {
  case num % 3 === 0 && num % 5 === 0:
    console.log('3と5の倍数です');
    break;
  case num % 3 === 0:
    console.log('3の倍数です')
    break;
  case num % 5 === 0:
    console.log('5の倍数です');
    break;
  default:
    console.log(num);
    break;
} */