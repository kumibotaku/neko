var a=0;
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
  'css/images/american-shorthair.png'
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
  '../images/american-shorthair.png'//肉球の画像
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
  '/css/images/american-shorthair.png'
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
  '/css/images/american-shorthair.png'
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
  '/css/images/american-shorthair.png'
  ,

}


function questionChange(){
  // console.log(questionsMillionea.text1);
  var texts = questionsMillionea[`text${a}`];
  document.getElementById('questions2').innerHTML= texts ;
  var answers = questionsMillionea[`answers${a}`];
  var imgs = questionsMillionea[`img${a}`];
  
  // console.log(questionsMillionea[`answers${a}`]);
  document.getElementById(`answer${m[0]+1}`).innerHTML= answers[0] ;
  document.getElementById(`answer${m[1]+1}`).innerHTML= answers[1] ;
  document.getElementById(`answer${m[2]+1}`).innerHTML= answers[2] ;
  document.getElementById(`answer${m[3]+1}`).innerHTML= answers[3] ;
  document.getElementById('game2Img').setAttribute('src',`img${a}`);
}

var score = 0 ;
var missed = 0 ;
document.getElementById('answer1').addEventListener('click',()=>{
  score++;
});
document.getElementById('answer2').addEventListener('click',()=>{
  missed++;
});
document.getElementById('answer3').addEventListener('click',()=>{
  missed++;
});
document.getElementById('answer4').addEventListener('click',()=>{
  missed++;
});

var result = `正解は ${score}回、不正解は ${missed}回でした！`;
document.getElementById('result').innerText= result ;






var d;
var s;
var t;
function passedTimer(){
  d = new Date();
  t = d.getTime();
  // var passedTime = 
  var id = setTimeout(()=>{
    s = d.getSeconds();//開始時刻
    console.log(s);
    var passedSeconds = d-t; 
    console.log(passedSeconds);
    setTimeout(passedTimer,1000);
    
  });
  // document.getElementById('passedTime').textContent = `${passedTime}`;
}