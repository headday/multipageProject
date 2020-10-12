export default class Download{
    constructor(){
        this.triggers = document.querySelectorAll('.download');
    }
    createElem(){
        const elem = document.createElement('a');
        elem.setAttribute('href','assets/img/mainbg.jpg')
        elem.setAttribute('download','nice_picture')
        elem.style.display = 'none';
        document.body.appendChild(elem);
        elem.click();

        document.body.removeChild(elem);
    }
    init(){
        this.triggers.forEach(trigger =>{
            trigger.addEventListener('click',()=>{
                this.createElem();
            })
        })
    }
}