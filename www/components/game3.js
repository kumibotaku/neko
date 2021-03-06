

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
// めくった枚数
var countNumber = 0;
var z = 1 ;//背景画像用の変数

const imgs3 = [
    './css/images/american-shorthair.png',
    './css/images/bengal.png',
    './css/images/british-shorthair.png',
    './css/images/chinchilla.png',
    './css/images/exotic-shorthair.png',
    './css/images/mainecoon.png',
    './css/images/minuet.png',
    './css/images/munchkin.png',
    './css/images/norwegian-forest-cat.png',
    './css/images/siberian.png',
];

const catComment=[
    'ネコのしっぽには多くの神経が通っていて、当然ですがそれらを触られるのを嫌うのは神経があるからなんですね。しっぽはおさわり禁止！',
    'しっぽが立っているとき。これは甘えたがっているみたいです。甘えさせてあげてくださいよーしよしよしよしｙ',
    'しっぽを横に振るとき、彼らはいらいらしているようです。触れぬが仏、触らぬがネコ。自分が何をしたか思い出し、内心懺悔しましょう。',
    'しっぽを下に垂らしているとき。これはネコがしょげているか体調不良のサイン。よく観察してあげましょう。',
    'しっぽの毛が逆立った時、ネコはキレてます。激おこです。土下座してチュールを献上しましょう。',
    'しっぽが丸まり体の下に収めているときは恐怖を感じています。遠くから眺めて警戒心を解きましょう。',
    'ネコの喧嘩は反撃がやむまで続き、一旦止めば無駄な争いをやめ勝者敗者が決します。意外にも潔いですね、、、！',
    'しっぽが丸まり体の下に収めているときは恐怖を感じています。遠くから眺めて警戒心を解きましょう。',
    'ネコの喧嘩は反撃がやむまで続き、一旦止めば無駄な争いをやめ勝者敗者が決します。意外にも潔いですね、、、！',
    'ネコの喧嘩の理由。これはよくある縄張り争いやメスの奪い合いだそうです。、、、やむを得ないですね。',
    
]


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
    countNumber ++ ;
    console.log(countNumber);
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
                    clearInterval(timer);// timer終了
                    console.log(countNumber);
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
    timer = setInterval(
        changePhoto
        , 5000);
}


// 秒数表示
function showSecond(){
    
    var nowTime = new Date();
    var elapsedTime = Math.floor((nowTime - startTime) / 1000);
    var str = '経過秒数: ' + elapsedTime + '秒';
    
    var re = document.getElementById('result');
    // console.log(countNumber);
    re.innerHTML = str;
}

function changePhoto(){
    if(z<15){
        z++;
        document.getElementById('panel-box').style.backgroundImage  =`url(./css/images/neko${z}.jpg)`;
    }else if(z == 15){
        document.getElementById('panel-box').style.backgroundImage  =`url(./css/images/neko${z}.jpg)`;
        z=1;
    }
}


function timeResult(clickTime){
    document.getElementById('clickTime').textContent =  `${Math.round(clickTime / 2) }` ;
    
  }
function changeImg(i){
    document.getElementById('game3Img').src =  `${imgs3[Math.floor( i % 9 ) ]}` ;
  }
function changeCatComment(i){
    document.getElementById('catComment').textContent =  `${catComment[Math.floor( i % 9 ) ]}` ;
  }


