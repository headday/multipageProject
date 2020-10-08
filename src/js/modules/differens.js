export default class Differens{
    constructor(oldEducation,newEducation,items,oldTrigger = null,newTrigger = null){
        this.oldEducation = document.querySelector(oldEducation);
        this.newEducation = document.querySelector(newEducation);
        this.oldTrigger = document.querySelector(oldTrigger)
        this.newTrigger = document.querySelector(newTrigger)
        
    }
    hideCards(){
        for (let i = 1; i < this.oldEducation.children.length-1; i++) {
            this.oldEducation.children[i].style.display = 'none'
        }
        for (let i = 1; i < this.newEducation.children.length-1; i++) {
            this.newEducation.children[i].style.display = 'none'
        }
    }
    addNewCard(container,trigger){
        const items = container.children;
        let i = 1;
        trigger.addEventListener('click',()=>{
                items[i].classList.add('animated','fadeIn')
                items[i].style.display = 'flex'
                i++;
            if(i === 4){
                items[items.length-1].style.display = 'none'
            }

        })
    }
    init(){
        try {
            this.hideCards();
        this.addNewCard(this.oldEducation,this.oldTrigger)
        this.addNewCard(this.newEducation,this.newTrigger)
        } catch (error) {}
    }

}