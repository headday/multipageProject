export default class Form{
    constructor(){
        this.forms = document.querySelectorAll('form');
        this.massege = {
            laoding: 'Loading ...',
            succes : 'Thank you!',
            failure: 'fail'
        }
        this.inputs = document.querySelectorAll('input');
    }
    clearInputs(){
        this.inputs.forEach(input =>{
            input.value = '';
        })
    }
    checkEmails(){
        this.emails = document.querySelectorAll('[type="email"]')
        this.emails.forEach(elem =>{
            elem.addEventListener('keypress',(e)=>{
                if(e.key.match(/[^a-z 0-9 @ \.]/ig)){
                    e.preventDefault();
                }
            })
        })
    }
    initMask() {
        let setCursorPosition = (pos, elem) => {
            elem.focus();
            
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();

                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };

        function createMask(event) {
            let matrix = '+1 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) {
                val = def;
            }

            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });

            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }

        let inputs = document.querySelectorAll('[name="phone"]');

        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    async postData(data){
        const res = await fetch('assets/question.php',{
            method:'POST',
            body:data
        })
        if(!res.ok){
            console.log('fetch error');
        }
        return await res.text();
    }
    init(){
        this.initMask();
        this.checkEmails();
        this.forms.forEach(form =>{
            form.addEventListener('submit',(e)=>{
                e.preventDefault();
                const elem = document.createElement('div');
                elem.cssText = `
                color: grey;
                font-size : 16px;
                `;
                const data = new FormData(form);
                this.postData(data)
                .then(res => {console.log(res); elem.textContent = this.massege.succes})
                .catch(err => {console.log(err); elem.textContent = this.massege.failure})
                .finally(() =>{
                    this.clearInputs();
                    setTimeout(()=>{
                        elem.remove();
                    },5000);
                });
                form.appendChild(elem);
                
            })
        })
    }
    
}