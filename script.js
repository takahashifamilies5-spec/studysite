const hisquizlist = [
    "徳川初代将軍は？",
    "徳川二代将軍は？",
    "徳川三代将軍は？",
    "徳川五代将軍は？",
    "徳川5代目将軍のころの時代の文化を何という？",
    "元禄文化の主な担い手は？",
    "浮世草子と呼ばれる当時の人々の暮らしを題材にした小説を描いた人物は？",
    "井原西鶴がえがいた小説は当時なんとよばれた？",
    "人形浄瑠璃の台本に人間関係を書いた人物は？",
    "近松門左衛門は人間関係を何の台本に書いた？",
    "代表作として奥の細道が挙げられる俳諧を芸術の域まで高めたじんぶつは？",
    "松尾芭蕉の代表作として知られる作品は？",
    "尾形光琳が大成した絵のしゅるいは？",
    "尾形光琳が参考にした風神雷神図屏風などの作品を残した装飾画家は？",
    "町人の風俗を描く、浮世絵を描き始めた人物は？",
    "井原西鶴の描いた浮世草子の好色物の中での代表作の名前は？",
    "井原西鶴の描いた浮世草子の町人物の中での代表作の名前は？",
    "浮世草子のジャンルとして好色物と町人物と何がある？",
    "近松門左衛門の人形浄瑠璃の代表作として知られる作品は？",
    "歌舞伎で活躍した人物の中で上方⁽京都⁾で活躍した人物は？",
    "歌舞伎で活躍した人物の中で江戸で活躍した人物は？",
    "装飾画家 俵屋宗達の代表作は？",
    "装飾画家 尾形光琳の代表作は？",
    "浮世絵師 菱川師宣の代表作は？",
    "藩主である浅野長矩が吉良義央に切りかかった事件の処罰について不満だった浅野長矩の47人の家臣が起こした反乱をそれが起きた藩の名前を取ってなんという？"
]
const hisanswerlist = [
    "家康",
    "秀忠",
    "家光",
    "綱吉",
    "元禄文化",
    "上方の町人",
    "井原西鶴",
    "浮世草子",
    "近松門左衛門",
    "人形浄瑠璃",
    "松尾芭蕉",
    "奥の細道",
    "装飾画",
    "俵屋宗達",
    "菱川師宣",
    "好色一代男",
    "日本永代蔵",
    "武家物",
    "曾根崎心中",
    "坂田藤十郎",
    "市川団十郎",
    "風神雷神図屏風",
    "燕子花図屏風",
    "見返り美人図",
    "赤穂事件",
]
const geoquizlist = [

]
const geoanswerlist = [

]
const bioquizlist =[

]
const bioanswerlist = [

]
function askquiz () {
        const option = document.title;
        if(option == "歴史勉強サイト"){
            listnum = Math.floor(Math.random()*hisquizlist.length);
            quizsentance.textContent = hisquizlist[listnum];
        }
        else if(option == "生物勉強サイト"){
            listnum = Math.floor(Math.random()*bioquizlist.length);
            quizsentance.textContent = bioquizlist[listnum];
        }
        else{
            listnum = Math.floor(Math.random()*geosquizlist.length);
            quizsentance.textContent = geoquizlist[listnum];
        }
        resalt.textContent = "結果："
}
const quiz = document.getElementById('quiz');
const quizsentance = document.getElementById('quizsentance');
const resalt = document.getElementById("resalt");
const finish = document.getElementById("finish");
const answer = document.getElementById("answerbox")
const collect = document.getElementById("series")

let series = 0;
let listnum;
quiz.addEventListener('click', () =>{
    askquiz(history)
});
finish.addEventListener('click', () =>{
    if(answer.value==hisanswerlist[listnum]){
        series = series + 1;
        collect.textContent = "連続正解回数：" + series;
        resalt.textContent = "結果：正解"
        document.getElementById("answerbox").value = "";
        document.getElementById("resalt").value = "結果：";
    }
    else{
        series = 0;
        collect.textContent = "連続正解回数：0"
        resalt.textContent = "結果：不正解 答えは" + hisanswerlist[listnum] + "です"  
        document.getElementById("answerbox").value = "";
    }
});