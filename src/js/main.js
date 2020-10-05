import VidioPlayer from './modules/playVidio';
import MainSlider from './modules/slider/main-slider'


window.addEventListener('DOMContentLoaded',()=>{
    const slider = new MainSlider({page: '.page', btns: '.next'});

    slider.render();
    
    const player = new VidioPlayer('.showup .play','.overlay')
    player.init();
})