let search_btn=document.querySelector('.search_btn');
let search=document.querySelector('.search');
search_btn.addEventListener('click',()=>{search.classList.toggle('show')})


let inputs=document.querySelectorAll('.formulaire input');

let form=document.querySelector('.formulaire form')

let print=document.querySelector('.print')

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    let err=0;
    document.querySelector('.err').innerHTML='';
    inputs.forEach((el)=>{

        if(el.value=='')
        {
            document.querySelector('.err').classList.remove('noerr')
            document.querySelector('.err').classList.add('yeserr')
            document.querySelector('.err').innerHTML='remplissez les donnees';
            err++;
           
        }


    })
    if(err==0)
    {
        document.querySelector('.err').classList.remove('yeerr')
        document.querySelector('.err').classList.add('noerr')
        document.querySelector('.err').innerHTML='Reservation Validee';
        print.innerHTML=`
  
        `
    }
})


let btn_list=document.querySelector('header .list');
let ul_list=document.querySelector('ul');
console.log(ul_list)
btn_list.addEventListener('click',()=>{
    
    if(ul_list.classList.contains('show_nav'))
    {
        ul_list.classList.remove('show_nav')
        ul_list.classList.add('hide_nav')
    }

    else
    {
        ul_list.classList.remove('hide_nav')
        ul_list.classList.add('show_nav')
    }
})