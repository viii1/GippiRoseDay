/* ======================
   TYPEWRITER MESSAGE
====================== */

const text =
"Himanshi… every moment with you feels magical ✨ You are my forever ❤️";

let i = 0;

function typeWriter(){
  if(i < text.length){
    document.getElementById("messageCard").innerHTML += text[i];
    i++;
    setTimeout(typeWriter, 40);
  }
}

typeWriter();


/* ======================
   MUSIC FADE IN
====================== */

const music = document.getElementById("music");

document.body.addEventListener("click", ()=>{
  music.volume = 0;
  music.play();

  const fade = setInterval(()=>{
    if(music.volume < 0.9) music.volume += 0.05;
    else clearInterval(fade);
  },200);
},{once:true});


/* ======================
   SLIDESHOW
====================== */

const slides = document.querySelectorAll("#slideshow img");
let index = 0;

setInterval(()=>{
  slides[index].classList.remove("active");
  index = (index+1)%slides.length;
  slides[index].classList.add("active");
},3000);


/* ======================
   PARTICLES (hearts/sparkles)
====================== */

function createParticles(id,color,size){
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let arr=[];

  class P{
    constructor(){
      this.x=Math.random()*canvas.width;
      this.y=canvas.height+20;
      this.s=Math.random()*size+2;
      this.sp=Math.random()*2+1;
    }
    draw(){
      ctx.fillStyle=color;
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.s,0,Math.PI*2);
      ctx.fill();
    }
    update(){ this.y-=this.sp; this.draw(); }
  }

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(Math.random()<0.15) arr.push(new P());

    arr.forEach((p,i)=>{
      p.update();
      if(p.y<0) arr.splice(i,1);
    });

    requestAnimationFrame(animate);
  }

  animate();
}

createParticles("hearts","#ff9aa2",6);
createParticles("sparkles","white",2);
