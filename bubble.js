function makebubble(){
    var clutter = '';

for (let i = 1; i <=72; i++) {
    let rand = Math.floor(Math.random()*10);
    clutter += `<div class ="bubble">${rand}</div>`;
  
}
document.querySelector('#pbtm').innerHTML = clutter;
}

var timer = 60;
function runTimer(){
const timerval =  setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector('#timerval').textContent = timer;
        }else{
             clearInterval(timerval);
             document.querySelector('#pbtm').innerHTML = `<h3>Game Over Total Score ${newscore}</h3> `;
        }
    },1000)
}
var hitrand = 0;
function getNewHit(){
    hitrand = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrand;
}

var newscore = 0;
function increaseval(){
    newscore += 10;
    document.querySelector("#scoreval").textContent = newscore;
}

document.querySelector('#pbtm').addEventListener('click',function(details){
  const clicknumber = Number(details.target.textContent);
  if (clicknumber === hitrand) {
    increaseval();
    makebubble();
    getNewHit();
  };
})


getNewHit();
runTimer();
makebubble();

