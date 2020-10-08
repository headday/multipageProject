import VidioPlayer from './modules/playVidio';
import MainSlider from './modules/slider/main-slider'
import MiniSlider from './modules/slider/mini-slider'
import Differens from './modules/differens'
import Form from './modules/form'


window.addEventListener('DOMContentLoaded',()=>{
    const slider = new MainSlider({container: '.page', btns: '.next'});

    slider.render();
    
    const player = new VidioPlayer('.showup .play','.overlay')
    player.init();

    const showUpsSlider = new MiniSlider(
        {
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
        })

    showUpsSlider.init();

    const modulesSlider = new MiniSlider(
        {
            container: '.modules__content-slider',
            prev: '.modules__info-btns .slick-prev',
            next: '.modules__info-btns .slick-next',
            activeClass: 'card-active',
            animate: true
        }
    )
    modulesSlider.init();

    const feedSlider = new MiniSlider(
        {
            container: '.feed__slider',
            prev: '.feed__slider .slick-prev',
            next: '.feed__slider .slick-next',
            activeClass: 'feed__item-active',
            autoplay:true

        }
    )
    feedSlider.init();
    const difference = new Differens('.officerold','.officernew','.officer__card-item','.officerold > .officer__card-item .card__click','.officernew > .officer__card-item .card__click')
    difference.init();
    const forms = new Form();
    forms.init();
})