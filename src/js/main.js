import VidioPlayer from './modules/playVidio';
import Slider from './modules/slider'


window.addEventListener('DOMContentLoaded',()=>{
    const slider = new Slider('.page','.next');

    slider.render();
    
    const player = new VidioPlayer('.showup .play','.overlay')
    player.init();
})