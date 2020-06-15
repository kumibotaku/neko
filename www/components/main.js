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




