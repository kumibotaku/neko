var a = 0;
var m = [0,1,2,3,4];//問題のランダム選択
var random = [0,1,2,3,];//問題のランダム配置


m =  shuffle(m);
random =  shuffle(random);
console.log(m);
console.log(random);


const questionsMillionea = {
  text1:
  'ねこのしっぽが立っているときのねこの気持ちはどれ？'
  ,
  answers1:[
    '怒っている',
    '悲しんでいる',
    'かまって欲しがっている',
    '威嚇している',
  ],
  img1:
  './css/images/british-shorthair.png'
  ,
  
  text2:
  'ねこの肉球は？'
  ,
  answers2:[
    '③',
    '②',
    '①',
    '④',
  ]
  ,
  img2:
  './css/images/okami.jpg'
  ,
  text3:
  'ねこ可愛い？'
  ,
  answers3:[
    '可愛い',
    '可愛くない',
    '吸いたい',
    '犬の方が好き',
  ],
  img3:
  './css/images/american-shorthair.png'
  ,
  text4:
  'いまなんもんめ？？'
  ,
  answers4:[
    '5',
    '2',
    '3',
    '4',
  ],
  img4:
  './css/images/american-shorthair.png'
  ,
  text5:
  '猫が好きなのは？'
  ,
  answers5:[
    '猫じゃらし',
    '飼い主',
    '爪とぎ',
    '野良でいること',
  ],
  img5:
  './css/images/american-shorthair.png'
  ,
}


function questionChange(){
  // console.log(questionsMillionea.text1);
  // var texts = questionsMillionea[`text${a}`];
  document.getElementById('questions2').textContent= questionsMillionea[`text${a}`];
  var answers = questionsMillionea[`answers${a}`];//四択の選択肢
  var imgs = questionsMillionea[`img${a}`];
  
  console.log(imgs);
  document.getElementById(`answer1`).textContent = answers[`${random[0]}`] ;
  document.getElementById(`answer2`).textContent = answers[`${random[1]}`] ;
  document.getElementById(`answer3`).textContent = answers[`${random[2]}`] ;
  document.getElementById(`answer4`).textContent = answers[`${random[3]}`] ;
  // console.log(document.getElementById('game2Img'));
  // var photo  = imgs[a];
  // document.getElementById('game2Img').setAttribute('src',`${photo}`);
  document.getElementById('game2Img').src = questionsMillionea[`img${a}`];
}



var clearFlag = false;
function settingInterval(){
  document.getElementById('passedTime').textContent =0;
  // var count = 0;
  
  var id = setInterval(() => {
    count ++;
    console.log(count);
    document.getElementById('passedTime').textContent =`${count}`;
    if(count >= 30){
      clearInterval(id);
      console.log('finish!');
      // function resultTime(time){
      //   return  time ;
      // }
      // resultTime(count);
      document.getElementById('section4').classList.remove('hidden');
    }else if(clearFlag){
      clearInterval(id);
      console.log('finish!2');
      
    }
  }, 1000);

}
function result(score,missed){
  document.getElementById('score').textContent =  `${score}` ;
  document.getElementById('missed').textContent =  `${missed}` ;
}