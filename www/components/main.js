// console.log(document.getElementById('button1'));
var id;
var sec;
var d;
var endT;
var cnt;
var repeatFlag = true;//true　初期値　false　止めないため
var resultTime;
var answerFlag = true;

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];//numbers のランダム配列
var answers = [1,2,3,4];//answers のランダム配列
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
numbers = shuffle(numbers);
answers = shuffle(answers);
// console.log(numbers );
// console.log(answers );

var j =[
    './css/images/neko.jpg',
    './css/images/neko1.jpg',
    './css/images/neko2.jpg',
    './css/images/neko3.jpg',
    './css/images/neko4.jpg',
    './css/images/neko5.jpg',
    './css/images/neko6.jpg',
    './css/images/neko7.jpg',
    './css/images/neko8.jpg',
    './css/images/neko9.jpg',
    './css/images/neko10.jpg',
    './css/images/neko11.jpg',
    './css/images/neko12.jpg',
    './css/images/neko13.jpg',
    './css/images/neko14.jpg',
    './css/images/neko15.jpg',
    './css/images/neko16.jpg',
    './css/images/neko17.jpg',
  ];

const relations = {
  img1:
  'css/images/american-shorthair.png'
  ,
  answers1:[
    'アメリカンショートヘア',
    'チンチラ',
    'ノルウェージャンフォレストキャット',
    'スコティッシュフォールド',
  ],
  Comment1:
    'アメリカンショートヘアは温厚な性格をしており環境への順応性が高いようです。最もネコ！といったようなネコちゃんですね。可愛らしい。'
  ,
  img2:
  'css/images/bengal.png'
  ,
  answers2:[
    'ベンガル',
    'ブリティッシュショートヘア',
    'ラグドール',
    'ミヌエット',
  ],
  Comment2:
    'チーターやヒョウなどに似た柄を体に持つベンガル。割と体が大きく運動神経も良いベンガルですが甘えてくることもしばしば。。。ツンデレさんですね。好きです。'
  ,
  img3:
  'css/images/british-shorthair.png'
  ,
  answers3:[
    'ノルウェージャンフォレストキャット',
    'ペルシャ',
    'ラガマフィン',
    'ロシアンブルー',
  ],
  Comment3:
    'ノルウェージャンフォレストキャット、、、思わず噛んでしまいそうな長い名前です。このネコは名前の通り北欧原産であり体毛が比較的長くモフモフしています。さらに性格が甘えん坊かつ我慢強いので適度にスキンシップをしてあげるのがよいそうです。吸いごたえがありますね。'
  ,
  img4:
  'css/images/british-shorthair.png'
  ,
  answers4:[
    'ブリティッシュショートヘア',
    'マンチカン',
    'チンチラ',
    'スコティッシュフォールド',
  ],
  Comment4:
    '身体は中型から大型と割としっかりしているブリティッシュショートヘア。性格は年を重ねるにつれ自立心が強くなりねこらしいプライドの高さと威厳を持ちます。見た目からして可愛らしいのに中身はしっかり者、そのギャップがたまらないですね。'
  ,
  img5:
  'css/images/mainecoon.png'
  ,
  answers5:[
    'メインクーン',
    'ノルウェージャンフォレストキャット',
    'ベンガル',
    'ラグドール',
  ],
  Comment5:
    'メインクーンはノルウェージャンフォレストキャットに似た姿をしており寒さに耐えられるよう全身の毛量が多くふわふわです。性格は明るくお茶目、しかしねこの中では知性も高く人のすることに興味を持ったりと賢いです。鳴き声も可愛く、知性のあるメインクーン、思わずスリスリしてあげたくなりますね。'
  ,
  img6:
  'css/images/exotic-shorthair.png'
  ,
  answers6:[
    'エキゾチックショートヘア',
    'スコティッシュフォールド',
    'チンチラ',
    'メインクーン',
  ],
  Comment6:
    'アメリカ原産のまるいお目目、エキゾチックショートヘアです。性格はアメリカンショートヘアの影響もあり穏やかながらにかっぱつなぶぶんがあり、人に甘えるのが好きな品種ですがそれほど依存心もなく程よい性格です。程よい距離間を保てる仲も必要ですよね。'
  ,
  img7:
  'css/images/ragdoll.png'
  ,
  answers7:[
    'ラグドール',
    'チンチラ',
    'エキゾチックショートヘア',
    'メインクーン',
  ],
  Comment7:
    'ラグドールは体毛、体格どれも程よく筋肉質な身体を持つネコです。しかし名前の"ドール"からも分かるように、ぬいぐるみの名にふさわしく抱かれるのが好きな猫ちゃんです。一見スマートそうなのにさりげなく傍にいてくれるラグドール、ネコちゃんの鑑といって問題ないでしょう。'
  ,
  img8:
  'css/images/minuet.png'
  ,
  answers8:[
    'ミヌエット',
    'ベンガル',
    'ノルウェージャンフォレストキャット',
    'ラグドール',
  ],
  Comment8:
    '丸みある体格に短い四肢、人懐っこい性格で近寄る人間を虜にするミヌエット。体が小さいことと性格が好奇心旺盛かつ活発な所、可愛らしさを前面に出したかのようなネコちゃんです。王道のkawaiiをゆくミヌエット、一度飼ってモフってみたいですね。'
  ,
  img9:
  'css/images/ragamuffin.png'
  ,
  answers9:[
    'ラガマフィン',
    'エキゾチックショートヘア',
    'ノルウェージャンフォレストキャット',
    'ラグドール',
  ],
  Comment9:
    'ラグドールと似たような毛の模様を持つラガマフィン。大きな体に筋肉質な体格、安定感があります。その性格は甘えん坊で温和、自ら先住のペットや人にすり寄っていく面があり可愛らしいです。家に疲れて帰ったときすり寄ってきてくれるラグドール、想像しただけでキュンキュンしますね。'
  ,
  img10:
  'css/images/russian.png'
  ,
  answers10:[
    'ロシアンブルー',
    'メインクーン',
    'スコティッシュフォールド',
    'エキゾチックショートヘア',
  ],
  Comment10:
    'なめらかな毛並み、エメラルドグリーンの瞳、犬のように忠実な性格と信頼関係ゆえの嫉妬心を持つロシアンブルー。ほかのネコに比べ高いプライド、嫉妬心、なついてもらえるとより一層キュンキュンしてしまいますね、好きです。'
  ,
}
var questionNumber = Math.floor( Math.random() * (Object.keys(relations).length / 3)  ) + 1;;//問題数に合わせてランダムに決める
console.log(questionNumber);
//ランダムに1－3を決めれば画像と答え群が一致するようにする
var names = relations[`answers${questionNumber}`] ;
var image = relations[`img${questionNumber}`] ;
var comment = relations[`Comment${questionNumber}`] ;
var l = names[0];
console.log(names);
console.log(image);
console.log(comment);

console.log(names[0]);
// var names = ["ねこ1","ねこ2","ねこ3","ねこ4"];

// document.getElementById('questionImg').setAttribute('src',`${image}`);

names = answers.map((answer)=>{
  return names[answer-1];
});
// console.log(names );
function randomName (){
  document.getElementById('answer1').textContent=`${names[0]}`;
  document.getElementById('answer2').textContent=`${names[1]}`;
  document.getElementById('answer3').textContent=`${names[2]}`;
  document.getElementById('answer4').textContent=`${names[3]}`;
}





function startInterval(){
  // document.getElementsByClassName('btn').setAttribute('disabled','true');
  // console.log('作動している');
  sec = 30;
  d = new Date();//開始日時
  endT = new Date(d.getTime() + sec *1000 );//終了日時
  cnt = sec ;
  // document.getElementsByClassName('btn').setAttribute('disabled','false');
  
  id = setInterval(()=>{ 
    cnt--; 
    console.log(cnt);  
      // if(cnt < 27 ){

    document.getElementById('timer').innerHTML = `${cnt}` ;
    d = new Date();
    console.log(document.getElementById('answer1').getAttribute('disabled'));
    if(d.getTime()  >= endT.getTime()){
      document.getElementById('section1').classList.remove('hidden');
      console.log("終了！");
      document.getElementById('timer').innerHTML = 0 ;
      answerFlag = false;
      clearInterval(id);
    }
    
    
    document.getElementById('answer1').onclick = function(){
      document.getElementById('answer1').setAttribute('id','selectedAnswer');
      
      
      if(repeatFlag){
        resultTime = Math.floor((endT.getTime() -  d.getTime()) / 1000 );
        console.log(resultTime);
        
        clearInterval(id);  
        repeatFlag = false;
      } else{
        repeatFlag=true;
      }
    }  
    document.getElementById('answer2').onclick = function(){
      document.getElementById('answer2').setAttribute('id','selectedAnswer');
      if(repeatFlag){
        resultTime = Math.floor((endT.getTime() -  d.getTime()) / 1000 );
        console.log(resultTime);
        clearInterval(id);  
        repeatFlag = false;
      } else{
        repeatFlag=true;
      }
    }  
    document.getElementById('answer3').onclick = function(){
      document.getElementById('answer3').setAttribute('id','selectedAnswer');
      if(repeatFlag){
        resultTime = Math.floor((endT.getTime() -  d.getTime()) / 1000 );
        console.log(resultTime);
        clearInterval(id);  
        repeatFlag = false;
      } else{
        repeatFlag=true;
      }
    }  
    document.getElementById('answer4').onclick = function(){
      document.getElementById('answer4').setAttribute('id','selectedAnswer');
      if(repeatFlag){
        resultTime = Math.floor((endT.getTime() -  d.getTime()) / 1000 );
        console.log(resultTime);
        clearInterval(id);  
        repeatFlag = false;
      } else{
        repeatFlag=true;
      }
    }  
  },1000);
  
  
  var i = 15;
  console.log(numbers[i]);
  document.getElementById(`s${numbers[i]}`).removeAttribute("id");
  delete numbers[i];
  var cntId = setInterval(()=>{
    i--;
    d = new Date();
    document.getElementById(`s${numbers[i]}`).removeAttribute("id");
    console.log(numbers[i]);
    if(i <= 0){
      clearInterval(cntId);
      console.log("終了するよ！");
    } else if(repeatFlag!=true){
      clearInterval(cntId);  
      repeatFlag = false;
    } else{
      repeatFlag = true;
    }
  },1500);
  
}

var i =1;
function imageChange(){
  
  document.getElementById('top-image').setAttribute("src",`${j[i]}`);
  if(i==17){
    i = 1;
    j = shuffle(j);
  }
  i++;
  // document.getElementById('top-image').setAttribute("src",`./css/images/neko3.jpg`);
}

