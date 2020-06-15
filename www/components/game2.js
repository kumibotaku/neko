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
  'css/images/american-shorthair.png'//肉球の画像
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
  'css/images/american-shorthair.png'
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
  'css/images/american-shorthair.png'
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
  'css/images/american-shorthair.png'
  ,

}


function questionChange(){
  // console.log(questionsMillionea.text1);
  var texts = questionsMillionea[`text${a}`];
  document.getElementById('questions2').innerHTML= texts ;
  var answers = questionsMillionea[`answers${a}`];

  console.log(questionsMillionea[`answers${a}`]);
  document.getElementById(`answer${m[0]+1}`).innerHTML= answers[0] ;
  document.getElementById(`answer${m[1]+1}`).innerHTML= answers[1] ;
  document.getElementById(`answer${m[2]+1}`).innerHTML= answers[2] ;
  document.getElementById(`answer${m[3]+1}`).innerHTML= answers[3] ;

}