// 配列の宣言
const holidys = ['正月', '成人の日', '建国記念日', '天皇誕生日', '春分の日', '昭和の日', '憲法記念日', 'みどりの日', 'こどもの日', '海の日', '山の日', '敬老の日', '秋分の日', 'スポーツの日', '文化の日', '勤労感謝の日']

let i = 0;

// while文での繰り返し
while (i < holidys.length) {
  console.log(holidys[i]);
  i++;
}

// for文での繰り返し
for (i = 0; i<holidys.length; i++) {
  console.log(holidys[i]);
}