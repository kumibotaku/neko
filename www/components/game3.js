// var grids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
//   // 16,17,18,19,20,21,22,23,24,25,26,27,28,29,
// ];
// grids = shuffle(grids);
// console.log(grids);

// var i = [
//   0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
//   // 16,17,18,19,20,21,22,23,24,25,26,27,28,29,
// ] ;
// var j =[
//   './css/images/neko.jpg',
//   './css/images/neko.jpg',
//   './css/images/neko2.jpg',
//   './css/images/neko2.jpg',
//   './css/images/neko4.jpg',
//   './css/images/neko4.jpg',
//   './css/images/neko6.jpg',
//   './css/images/neko6.jpg',
//   './css/images/neko8.jpg',
//   './css/images/neko8.jpg',
//   './css/images/neko10.jpg',
//   './css/images/neko10.jpg',
//   './css/images/neko12.jpg',
//   './css/images/neko12.jpg',
//   './css/images/neko14.jpg',
//   './css/images/neko14.jpg',
// ];


// function randomGrids(){
  // for(k = 0 ; k < 16;k++ ){   //ランダムな配置
  //   document.getElementById(`g${grids[k]}`).setAttribute("id",`h${i[k]}`);
  //   console.log(document.getElementById(`h${i[k]}`));
  //   document.getElementById(`h${i[k]}`).setAttribute("src",`${j[k]}`);
  //   // document.getElementById(`h${i[k]}`).setAttribute("alt",`alt${i[k]}`);
  //   // document.getElementById(`h${i[k]}`).textContent = i[k];
  // }
  // // console.log(document.getElementById(`g${grid}`));
  // // var t = document.getElementById(`g${grid+1}`).getAttribute('id'); 
  // // document.getElementById(`g${grid}`).removeAttribute('id');
  // // console.log(t);
  // // document.getElementById(`${t}`).setAttribute("id",`${t}`);
  
// }

// グローバル
// div要素を格納
var cards = [];
// 開始時間
var startTime;
// 経過秒数用 タイマーID
var timer;
// カードめくり用 タイマーID
var backTimer;
// 1枚目かどうかのフラグ   1枚目: true   2枚目: false
var flgFirst = true;
// 1枚目のカードを格納
var cardFirst;
// そろえた枚数
var countUnit = 0;

 function onload (){
    // 数字格納 一時配列
    var arr = [];
    
    for (var i = 0; i < 8; i++){
        // ペアの数字を10組
        arr.push(i);
        arr.push(i);
    }
    
    // シャッフル
    arr = shuffle(arr);
    console.log(arr);
    var panel = document.getElementById('panel-box');
    
    // div要素作成
    for (i = 0; i < 20; i++){
        var div = document.createElement('div');
        div.className = 'card back';
        div.index = i;
        div.number = arr[i];
        div.innerHTML = '';
        div.onclick = turn;
        panel.appendChild(div);
        cards.push(div);
    }
    // 開始時刻を取得
    startTime = new Date();
    // タイマー開始
    startTimer();
    
}


// クリック時の処理
function turn(e){
    
    var div = e.target;
    
    // カードのタイマー処理が動作中は return
    if (backTimer) return;

    // 裏向きのカードをクリックした場合は数字を表示する
    if (div.innerHTML == ''){
        div.className = 'card';
        div.innerHTML = div.number; 
    }else{
        // 数字が表示されているカードは return
        return;
    }
    
    // 1枚目の処理
    if (flgFirst){
        // cardFirst は2枚目の処理のときに使う
        cardFirst = div;
        // フラグ変更
        flgFirst = false;
        
    // 2枚目の処理
    }else{
        
        // 数字が1枚目と一致する場合
        if (cardFirst.number == div.number){
            countUnit++;
            console.log(countUnit);
            // 見えない状態にする
            backTimer = setTimeout(function(){
                div.className = 'card finish';
                cardFirst.className = 'card finish';
                backTimer = NaN;
                
                if (countUnit == 8){
                    clearInterval(timer);  // timer終了
                    document.getElementById('section6').classList.remove('hidden');  
                  }
            }, 500)

        // 一致しない場合
        }else{  
            // カードを裏側に戻す
            backTimer = setTimeout(function(){
                div.className = 'card back';
                div.innerHTML = '';
                cardFirst.className = 'card back';
                cardFirst.innerHTML = '';
                cardFirst = null;
                backTimer = NaN;
            }, 500);
        }
        
        flgFirst = true;
    }  
}

// タイマー開始
function startTimer(){
    timer = setInterval(showSecond, 1000);
}

// 秒数表示
function showSecond(){

    var nowTime = new Date();
    var elapsedTime = Math.floor((nowTime - startTime) / 1000);
    var str = '経過秒数: ' + elapsedTime + '秒';

    var re = document.getElementById('result');
    re.innerHTML = str;
}






