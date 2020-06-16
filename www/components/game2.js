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
    '①',
    '②',
    '③',
    '④',
  ]
  ,
  img2:
  './css/images/american-shorthair.png'//肉球の画像
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
    '5',
    '2',
    '3',
    '4',
  ],
  img4:
  './css/images/american-shorthair.png'
  ,
  text5:
  'ねこのしっぽが立っているときのねこの気持ちはどれ？'
  ,
  answers5:[
    '怒っている',
    '悲しんでいる',
    'かまって欲しがっている',
    '威嚇している',
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
  document.getElementById(`answer${m[0]+1}`).textContent= answers[0] ;
  document.getElementById(`answer${m[1]+1}`).textContent= answers[1] ;
  document.getElementById(`answer${m[2]+1}`).textContent= answers[2] ;
  document.getElementById(`answer${m[3]+1}`).textContent= answers[3] ;
  // console.log(document.getElementById('game2Img'));
  // var photo  = imgs[a];
  // document.getElementById('game2Img').setAttribute('src',`${photo}`);
  document.getElementById('game2Img').src = questionsMillionea[`img${a}`];
}


// var score = 0 ;
// var missed = 5 - score ;
// function record(){ 
//   document.getElementById('answer1').addEventListener('click',()=>{
//     score++;
//     missed = 5 - score ;
//     console.log(score);
//     console.log(missed);
//   });
//   // document.getElementById('answer2').addEventListener('click',()=>{
//   //   missed++;
//   //   console.log(score);
//   //   console.log(missed);
//   // });
//   // document.getElementById('answer3').addEventListener('click',()=>{
//   //   missed++;
//   //   console.log(score);
//   //   console.log(missed);
//   // });
//   // document.getElementById('answer4').addEventListener('click',()=>{
//   //   missed++;
//   // });
// }

// function sumResult(){
//   var result = `正解は ${score }回、不正解は ${missed}回でした！`;
//   console.log(result);
//   document.getElementById('result').innerText= result ;
// }


var clearFlag = false;
function settingInterval(){
  var count = 0;

  var id = setInterval(() => {
    count ++;
    // console.log(count);
    if(count > 30){
      clearInterval(id);
      console.log('finish!');
    }else if(clearFlag){
      clearInterval(id);
      console.log('finish!2');
      
    }
  }, 1000);

}