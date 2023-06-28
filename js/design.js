//nav-icon
//.body-sidebar
let sideBar = 0;



document.querySelector('.nav-icon').addEventListener('click', ()=>{
  


  if (sideBar === 1){
  document.querySelector('.side-bar').classList.remove('side-bar-on');
  document.querySelector('.side-bar-view').classList.remove('side-bar-view-black');
  sideBar = 0;}
  else {
    document.querySelector('.side-bar').classList.add('side-bar-on');
    document.querySelector('.side-bar-view').classList.add('side-bar-view-black');
    sideBar = 1;
  }
});
document.querySelector('.side-bar-view').addEventListener('click', ()=>{
  document.querySelector('.side-bar').classList.remove('side-bar-on');
  document.querySelector('.side-bar-view').classList.remove('side-bar-view-black');
  sideBar = 0;
})

//------------------------------------

let video = [
  {
    thumbnail: "https://i.ytimg.com/vi/AJuRE_dnABM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhdahxBmmRn0C7q77JBu-6TkUfHQ",
    title: 'Hydra gettig smoked',
    channelPfp: "https://media.istockphoto.com/id/850704730/photo/young-serious-guy-portrait-on-black-background-black-and-white-photo.jpg?s=612x612&w=0&k=20&c=lBJuY0SnTustfYp5zgWcYxn8_C61iHbFWweNNh83X1E=",
    channelName: 'ZisanZee',
    videoViews: '410k &#x2022; 10 hours ago'
  }
]


