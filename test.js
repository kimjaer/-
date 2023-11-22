const familyText = [
  "네이버",
  "다음",
  "구글"
]

// 1.forin문으로 console 출력하기

// console.log(`<a href = "${familyContent[0][1]}">${familyContent[0][0]}</a>`)

const familyContent = [
  [
    "네이버",
    "http://www.naver.com"
  ],
  [
    "다음",
    "http://www.daum.net"
  ],
  [
    "구글",
    "http://www.daum.net"
  ]
]

// 2. 콘솔창에 아래와 같이 출력하기
// <a href = "http://www.naver.com" > 네이버</a>
//     <a href="http://www.daum.net">다음</a>
//     <a href = "http://www.daum.net">구글</a>

let text = "";

for (j in familyContent) {
  // console.log()
  text += `<a href = "${familyContent[j][1]}" >${familyContent[j][0]} </a>`
  console.log(text)
}
console.log(familyContent[0][0])
console.log(familyContent[0][1])
