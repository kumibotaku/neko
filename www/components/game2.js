

const questionsMillionea = {
  text1:
  'ねこのしっぽが立っているときのねこの気持ちはどれ？'
  ,
  answers1:[
    'かまって欲しがっている',
    '怒っている',
    '悲しんでいる',
    '威嚇している',
  ],
  img1:
  './css/images/neko.jpg'
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
  'ねこの標準的な心拍数(回/分)は？'
  ,
  answers3:[
    '130',
    '70',
    '90',
    '160',
  ],
  img3:
  './css/images/neko2.jpg'
  ,
  text4:
  'ねこの品種はおよそ何種類？'
  ,
  answers4:[
    '40',
    '100',
    '15',
    '700',
  ],
  img4:
  './css/images/neko3.jpg'
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
  './css/images/neko4.jpg'
  ,
  text6:
  'ねこの睡眠時間は一日何時間？'
  ,
  answers6:[
    '14～',
    '～8',
    '8～10',
    '10～12',
  ],
  img6:
  './css/images/neko5.jpg'
  ,
  text7:
  'ねこは自分の背丈の何倍ほどジャンプできる？'
  ,
  answers7:[
    '7倍',
    '2倍',
    '5倍',
    '10倍',
  ],
  img7:
  './css/images/neko6.jpg'
  ,
  text8:
  'ねこ用のスイングドア、発明者は誰？'
  ,
  answers8:[
    'アイザック・ニュートン',
    'エイブラハム・リンカーン',
    '西郷隆盛',
    '福沢諭吉',
  ],
  img8:
  './css/images/neko7.jpg'
  ,
  text9:
  'ねこの1日に食すキャットフードの栄養価はネズミ何匹分相当？'
  ,
  answers9:[
    '5',
    '8',
    '12',
    '2',
  ],
  img9:
  './css/images/neko8.jpg'
  ,
  text10:
  'ねこが歩き始めるとき、一歩目に出る足は？'
  ,
  answers10:[
    '右後肢',
    '左後肢',
    '右前肢',
    '左前肢',
  ],
  img10:
  './css/images/neko9.jpg'
  ,
  text11:
  'ねこの永久歯の数は？'
  ,
  answers11:[
    '30',
    '36',
    '28',
    '32',
  ],
  img11:
  './css/images/neko10.jpg'
  ,
  text12:
  '猫舌、という言葉があるがネコが温度を判断する部位は？'
  ,
  answers12:[
    '鼻',
    '手(肉球)',
    'ひげ',
    '舌',
  ],
  img12:
  './css/images/neko11.jpg'
  ,
  text13:
  '夏、ねこはどのように体温調整する？'
  ,
  answers13:[
    '効率的な調整方法を有しない',
    '汗をかく',
    '犬と同じくあえぎ呼吸',
    '水浴びをする',
  ],
  img13:
  './css/images/neko12.jpg'
  ,
  text14:
  'ねこの聴こえる音域は何ヘルツまで？'
  ,
  answers14:[
    '10万',
    '2万',
    '4万',
    '15万',
  ],
  img14:
  './css/images/neko13.jpg'
  ,
  text15:
  '夜間、猫はヒトの何倍良く見ることができる？'
  ,
  answers15:[
    '6倍',
    '2倍',
    '3倍',
    '10倍',
  ],
  img15:
  './css/images/neko14.jpg'
  ,
  text16:
  'ねこの平均体温は？'
  ,
  answers16:[
    '38.6',
    '35.6',
    '36.6',
    '37.6',
  ],
  img16:
  './css/images/neko15.jpg'
  ,
  text17:
  'ねこの骨の数は？'
  ,
  answers17:[
    '230個',
    '360個',
    '280個',
    '180個',
  ],
  img17:
  './css/images/genbaneko.jpg'
  ,
  text18:
  'ホワイト・ハウスで最初に猫を飼った大統領は？'
  ,
  answers18:[
    'エイブラハム・リンカーン',
    'テオドール・ルーズベルト',
    'J.F.ケネディ',
    'ビル・クリントン',
  ],
  img18:
  './css/images/neko1.jpg'
  ,
  text19:
  '子猫の目の色は？'
  ,
  answers19:[
    '青色',
    '黄色',
    '赤色',
    '茶色',
  ],
  img19:
  './css/images/neko16.jpg'
  ,
  text20:
  'ねこの血液型で存在“しない”ものは？'
  ,
  answers20:[
    'O型',
    'A型',
    'AB型',
    'B型',
  ],
  img20:
  './css/images/neko17.jpg'
  ,
}

var a = 0;
var m = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,];//問題のランダム選択
var random = [0,1,2,3,];//問題のランダム配置


m =  shuffle(m);
// random =  shuffle(random);
console.log(m);
// console.log(random);

function questionChange(){
  random =  shuffle(random);
  console.log(random);
  // console.log(questionsMillionea.text1);
  // var texts = questionsMillionea[`text${a}`];
  document.getElementById('questions2').textContent= questionsMillionea[`text${m[a]}`];
  var answers = questionsMillionea[`answers${m[a]}`];//四択の選択肢
  var imgs = questionsMillionea[`img${m[a]}`];
  
  console.log(imgs);
  document.getElementById(`answer1`).textContent = answers[`${random[0]}`] ;
  document.getElementById(`answer2`).textContent = answers[`${random[1]}`] ;
  document.getElementById(`answer3`).textContent = answers[`${random[2]}`] ;
  document.getElementById(`answer4`).textContent = answers[`${random[3]}`] ;
  // console.log(document.getElementById('game2Img'));
  // var photo  = imgs[a];
  // document.getElementById('game2Img').setAttribute('src',`${photo}`);
  document.getElementById('game2Img').src = imgs;
}



var clearFlag = false;

function settingInterval(){
  document.getElementById('passedTime').textContent =0;
  // var count = 0;
  
  var id = setInterval(() => {
    count ++ ;
    console.log(count);
    document.getElementById('passedTime').textContent =`${count}`;
    if(count >= 30){
      clearInterval(id);
      missed = 5 - score;
      console.log('finish!');
      document.getElementById('section4').classList.remove('hidden');
    }else if(clearFlag){
      clearInterval(id);
      console.log('finish!2');
      
      document.getElementById('section4').classList.remove('hidden');
    }
  }, 1000);

}
function result(score,missed){
  document.getElementById('score').textContent =  `${score}` ;
  document.getElementById('missed').textContent =  `${missed}` ;
}