export default class Accardion {
    constructor(){
        this.triggers = document.querySelectorAll('.module__info-show');
    }
    init(){
        this.triggers.forEach(btn=>{
            btn.addEventListener('click',()=>{
                btn.nextElementSibling.classList.toggle('modules_active')
                if(btn.nextElementSibling.classList.contains('modules_active')){
                    btn.nextElementSibling.style.display = 'block';
                }else{
                    btn.nextElementSibling.style.display = 'none';
                }
            })
        })
    }
}