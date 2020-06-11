// console.log(document.getElementById('button1'));
var id;
var sec;
var d;
var endT;
var cnt;
var repeatFlag = true;//true　初期値　false　止めないため



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

var names = ["ねこ1","ねこ2","ねこ3","ねこ4"];//選択肢のランダム配列
// console.log(names );
// console.log(names[answers[0]-1]); 
// console.log(names[answers[1]-1]); 
// console.log(names[answers[2]-1]); 
// console.log(names[answers[3]-1]); 

names = answers.map((answer)=>{
  return names[answer-1];
});
// console.log(names );
function randomName (){
  document.getElementById('answer1').textContent=`name: ${names[0]}`;
  document.getElementById('answer2').textContent=`name: ${names[1]}`;
  document.getElementById('answer3').textContent=`name: ${names[2]}`;
  document.getElementById('answer4').textContent=`name: ${names[3]}`;
}





function startInterval(){
  console.log('作動している');
  sec = 30;
  d = new Date();//開始日時
  endT = new Date(d.getTime() + sec *1000 );//終了日時
  cnt = sec ;
  id = setInterval(()=>{ 
    cnt--; 
    document.getElementById('timer').innerHTML = `${cnt}` ;
    console.log(cnt);  
    d = new Date();
    if(d.getTime()  >= endT.getTime()){
      clearInterval(id);
      document.getElementById('section1').classList.remove('hidden');
      console.log("終了！");
      document.getElementById('timer').innerHTML = 0 ;
    }
    
    
    document.getElementById('answer1').onclick = function(){
      document.getElementById('answer1').setAttribute('id','selectedAnswer');


      if(repeatFlag){
        clearInterval(id);  
        repeatFlag = false;
      } else{
        repeatFlag=true;
      }
    }  
    document.getElementById('answer2').onclick = function(){
      document.getElementById('answer2').setAttribute('id','selectedAnswer');
      if(repeatFlag){
        clearInterval(id);  
        repeatFlag = false;
      } else{
        repeatFlag=true;
      }
    }  
    document.getElementById('answer3').onclick = function(){
      document.getElementById('answer3').setAttribute('id','selectedAnswer');
      if(repeatFlag){
        clearInterval(id);  
        repeatFlag = false;
      } else{
        repeatFlag=true;
      }
    }  
    document.getElementById('answer4').onclick = function(){
      document.getElementById('answer4').setAttribute('id','selectedAnswer');
      if(repeatFlag){
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




