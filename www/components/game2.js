var a = 0;
var m = [0,1,2,3,];


m =  shuffle(m);
console.log(m);


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
    'イエス',
    'はい',
    '吸いたい',
    '可愛い',
  ],
  img3:
  './css/images/american-shorthair.png'
  ,
  text4:
  'いまなんもんめ？？'
  ,
  answers4:[
    '4',
    '2',
    '3',
    '5',
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
  var texts = questionsMillionea[`text${a}`];
  document.getElementById('questions2').textContent= texts ;
  var answers = questionsMillionea[`answers${a}`];
  var imgs = questionsMillionea[`img${a}`];
  
  console.log(imgs);
  document.getElementById(`answer${m[0]+1}`).textContent= answers[2] ;
  document.getElementById(`answer${m[1]+1}`).textContent= answers[1] ;
  document.getElementById(`answer${m[2]+1}`).textContent= answers[3] ;
  document.getElementById(`answer${m[3]+1}`).textContent= answers[0] ;
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