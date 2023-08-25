const n1=document.getElementById("name1")
const n2=document.getElementById("name1")
const atbut1=document.getElementById("attackbut1")
const atbut2=document.getElementById("attackbut2")
const but1=document.getElementById("button1")
const but2=document.getElementById("button2")
const s1=document.getElementById("score1")
const s2=document.getElementById("score2")
const w=document.getElementById("win")
const reset=document.getElementById("re")
const fightbut=document.getElementById("fight")
const attack1=document.getElementById("quickhit")
const heal1=document.getElementById("quickheal")
const attack2=document.getElementById("rap1")
const heal2=document.getElementById("rap2")
const song=document.getElementById("rap")

let score1=100;
let score2=100;
s1.innerText=score1;
s2.innerText=score2;
w.innerText="Let the best man win!!"

atbut1.onclick=()=>{
score2-=13
  s2.innerText=score2
  winper(score1,score2)
  attack1.play()
  // console.log(score2)
}

but1.onclick=()=>{
score1+=10
  s1.innerText=score1
  winper(score1,score2)
  heal1.play()
  // console.log(score1)
}

atbut2.onclick=()=>{
score1-=13
  s1.innerText=score1
  winper(score1,score2)
  attack2.play()
  // console.log(score1)
}

but2.onclick=()=>{
score2+=10
  s2.innerText=score2
  heal2.play()
  winper(score1,score2)
}

const winper=function(scores1,scores2){
    if(scores1<=0 || scores2<=0){
    w.innerText="Game Over"
      return
    }
if(scores1>scores2){
w.innerText="JACKIE-CHAN WINS"
}
  else if(scores2>scores1)
    w.innerText="BRUCE-LEE WINS"

// else
//   w.innerText="Let's Play"
}

document.addEventListener('keydown',function(e){
if(e.key=="q"||e.key=="Q"){
  score2-=13
  s2.innerText=score2
   attack1.play()
}
  else if(e.key=="A"||e.key=="a"){
score1+=10
  s1.innerText=score1
    heal1.play()
  }
  else if(e.key=="P"||e.key=="p"){
score1-=13
  s1.innerText=score1
    attack2.play()
  }
  else if(e.key=="L"||e.key=="l"){
   score2+=10
  s2.innerText=score2
    heal2.play()
  }
})
winper(score1,score2)


reset.onclick=function(){
s1.innerText=100
  s2.innerText=100
  w.innerText="ALL THE BEST"
}

fightbut.addEventListener('click',function(){
  
  if(score1>score2){
  score1 -= Math.floor(Math.random()*10)
  s1.innerText=score1;
  score2+=Math.floor(Math.random()*10)
  s2.innerText=score2;
  winper(score1,score2)}
  
  else if(score2>score1){
score1 += Math.floor(Math.random()*20)
  s1.innerText=score1;
  score2-=Math.floor(Math.random()*20)
  s2.innerText=score2;
  winper(score1,score2)
  }
  else{
score1+=Math.floor(Math.random()*5)
    s1.innerText=score1;
    score2+=Math.floor(Math.random()*4)
    s2.innerText=score2;
  }
  song.play()
})
