const soal=[
{q:"Aku punya 2 mata tapi tidak bisa melihat. Siapakah aku?",o:["A. Boneka","B. Jarum","C. Kucing","D. Bola"],a:1},
{q:"Bulat seperti bola dan bisa dimakan. Apa itu?",o:["A. Batu","B. Apel","C. Bakso","D. Balon"],a:2},
{q:"Siang hari hilang, malam muncul. Apa itu?",o:["A. Matahari","B. Awan","C. Bulan","D. Bintang"],a:3},
{q:"Hewan apa yang suka wortel?",o:["A. Kucing","B. Kelinci","C. Ayam","D. Ikan"],a:1},
{q:"Dipakai saat hujan, dilipat saat panas. Apa itu?",o:["A. Topi","B. Jaket","C. Payung","D. Tas"],a:2},
{q:"Punya gigi tapi tidak bisa makan?",o:["A. Sisir","B. Buaya","C. Kuda","D. Sapu"],a:0},
{q:"Bisa terbang tanpa sayap?",o:["A. Burung","B. Layang-layang","C. Pesawat","D. Kupu-kupu"],a:1},
{q:"Kalau dipencet keluar air?",o:["A. Batu","B. Spons","C. Kayu","D. Kertas"],a:1},
{q:"Punya kaki tapi tidak bisa berjalan?",o:["A. Manusia","B. Meja","C. Ayam","D. Kursi"],a:1},
{q:"Bisa berbunyi tapi tidak punya mulut?",o:["A. Radio","B. Orang","C. Hewan","D. Boneka"],a:0}
];

let index=0,skor=0,time=15,timer,locked=false;

const qEl=document.getElementById("question");
const optEl=document.getElementById("options");
const scoreEl=document.getElementById("score");
const timeEl=document.getElementById("time");

function tampilSoal(){
 clearInterval(timer);
 locked=false;
 time=15;
 timeEl.innerText=time;

 qEl.innerText=(index+1)+". "+soal[index].q;
 optEl.innerHTML="";

 soal[index].o.forEach((txt,i)=>{
  const div=document.createElement("div");
  div.className="option";
  div.innerText=txt;
  div.onclick=()=>pilihJawaban(i,div);
  optEl.appendChild(div);
 });

 timer=setInterval(()=>{
  time--;
  timeEl.innerText=time;
  if(time<=0){
   clearInterval(timer);
   lanjut();
  }
 },1000);
}

function pilihJawaban(pilihan,el){
 if(locked) return;
 locked=true;
 clearInterval(timer);

 if(pilihan===soal[index].a){
  skor+=10;
  loveEffect();
  el.style.background="#2ecc71";
 }else{
  el.style.background="#e74c3c";
 }

 setTimeout(lanjut,700);
}

function lanjut(){
 index++;
 scoreEl.innerText="Skor: "+skor;

 if(index<soal.length){
  tampilSoal();
 }else{
  qEl.innerText="🎉 Selesai! Skor akhir kamu: "+skor;
  optEl.innerHTML="";
  timeEl.innerText="0";
 }
}

function refreshGame(){
 index=0;
 skor=0;
 scoreEl.innerText="Skor: 0";
 tampilSoal();
}

function loveEffect(){
 for(let i=0;i<6;i++){
  const d=document.createElement("div");
  d.className="love";
  d.innerHTML="❤️";
  d.style.left=Math.random()*100+"%";
  d.style.bottom="0";
  d.style.fontSize=20+20*Math.random()+"px";
  document.body.appendChild(d);
  setTimeout(()=>d.remove(),4000);
 }
}

tampilSoal();