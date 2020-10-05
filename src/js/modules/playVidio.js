export default class VidioPlayer{
    constructor(trigger,overlay){
        this.triggers = document.querySelectorAll(trigger);
        this.overlay = document.querySelector(overlay);
        this.closeBtns = document.querySelectorAll('.close');
    }
    bindTriggers(){
        this.triggers.forEach(btn =>{
            btn.addEventListener('click',() =>{
                if(document.querySelector('iframe#frame')){
                    this.overlay.style.display = 'flex';
                }else{
                    const path = btn.getAttribute('data-url')
                    this.createPlayer(path);
                }
            })
        })
    }
    bindClose(){
        this.closeBtns.forEach(btn =>{
            btn.addEventListener('click',()=>{
                this.overlay.style.display = 'none';
                this.player.stopVideo();
            })
        })
    }
    createPlayer(url){
        this.player = new YT.Player('frame', {
            height: '360',
            width: '640',
            videoId: `${url}`
          });

          this.overlay.style.display = 'flex';
    }
    init(){
        const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.bindTriggers();
        this.bindClose();
    }
}