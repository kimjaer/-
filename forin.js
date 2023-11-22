const navi = [
  '네이버','다음','구글'
]

for (x in navi){
  console.log(x, navi[0])
}

const naviobj = {
  nm: "글자",
  href : "링크값"
}
console.log(naviobj['nm'])// obj key를 직접 index 자리에 넣지만 상수화 해야한다

for (j in naviobj) { // 여기서는 j가 key라는 것을 정확하게 인지하고 있다.
  console.log(j, naviobj[j]) 
}
