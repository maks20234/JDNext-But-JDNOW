const tiles=[...document.querySelectorAll(".menu-tile")];
const cursor=document.getElementById("dancerCursor");
const audio=document.getElementById("menuMusic");
const video=document.getElementById("backgroundVideo");
const hint=document.getElementById("audioHint");
const toast=document.getElementById("toast");
let selected=0,mediaStarted=false,toastTimer;
function moveCursor(){
  const tile=tiles[selected],r=tile.getBoundingClientRect(),root=document.querySelector(".game-ui").getBoundingClientRect();
  // Place the dancer pointer just outside the lower-right corner, like the game menu.
  cursor.style.left=(r.right-root.left-2)+"px";
  cursor.style.top=(r.bottom-root.top-1)+"px";
}
function choose(i){
  selected=(i+tiles.length)%tiles.length;
  tiles.forEach((tile,n)=>tile.classList.toggle("is-selected",n===selected));
  moveCursor();
}
function showToast(message){
  toast.textContent=message;toast.classList.add("show");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),1900);
}
function startMedia(){
  if(mediaStarted)return;
  mediaStarted=true;
  video.play().catch(()=>{});
  if(audio.querySelector("source")||audio.src){
    audio.volume=.42;
    audio.play().then(()=>hint.style.opacity="0").catch(()=>{hint.textContent="CLICK AGAIN TO START MUSIC";mediaStarted=false;});
  }else{hint.textContent="ADD assets/menu-music.mp3 TO ENABLE MUSIC";}
}
tiles.forEach((tile,i)=>{
  tile.addEventListener("pointerenter",()=>choose(i));
  tile.addEventListener("focus",()=>choose(i));
  tile.addEventListener("click",()=>{choose(i);startMedia();showToast(tile.dataset.name+" — coming soon");});
});
document.addEventListener("keydown",e=>{
  const key=e.key.toLowerCase();
  if(["w","a","arrowup","arrowleft"].includes(key)){e.preventDefault();choose(selected-1);startMedia();}
  else if(["s","d","arrowdown","arrowright"].includes(key)){e.preventDefault();choose(selected+1);startMedia();}
  else if(key==="enter"||key===" "){e.preventDefault();startMedia();showToast(tiles[selected].dataset.name+" — coming soon");}
});
document.addEventListener("pointerdown",startMedia,{once:true});
window.addEventListener("resize",moveCursor);
window.addEventListener("load",()=>{
  // Optional user-provided media files: add them to assets without changing the code.
  video.src="assets/video-bg.mp4";
  audio.src="assets/menu-music.mp3";
  choose(0);
  video.play().catch(()=>{});
});
