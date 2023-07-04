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


let videoHtml = '';

video.forEach((video)=>{
  
  
  
    videoHtml += `
  

    <div class="video-container">
      <div class="thumbnai">
        <img src="${video.thumbnail}" alt="" srcset="" class="thumbnail-picture">
      </div>
      <div class="details">
        <img src="${video.channelPfp}" alt="" srcset="" class="pfp-picture">
        
        <div class="title">${video.title}</div>
          
        

      </div>
      <div class="channel">
        <div class="channel-name">${video.channelName}</div>
        <div class="viewcount">${video.videoViews}</div>
      </div>


    </div>




`;});

 document.querySelector('.container2').innerHTML = videoHtml;
