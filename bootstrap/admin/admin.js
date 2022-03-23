let section=document.querySelectorAll('section');
let lien=document.querySelectorAll('ul a');

lien.forEach((lien)=>{

   lien.addEventListener('click',()=>{

        let l=lien.getAttribute('href').slice(1)
       
       section.forEach((sec)=>{
           sec.classList.remove('active')
            if(sec.id==l)
            {
               sec.classList.add('active')
            }
       })
       
   })
})

let form_ad=document.querySelector('#form_ad');
let section_up=document.querySelector('#up');
let inputs=document.querySelectorAll('input')
let err=document.querySelectorAll('.err')
let items=document.querySelector('.items');
let liens='';

//-------------Recupreation des donnees------------------------------------------------------

async function recup()
{
   let req=await fetch('traitement.php?action=list');
   if(req.ok)
   {
        
         let data=await req.json();
         console.log(data)
         items.innerHTML=data.map((item)=>{
      
            return`
      
                  <div class="card">
                        <img src="upload/${item.photoProd}" alt="" >
                        <p class='title'>${item.nomProd}</p>
                        <p class='info_pr'>
                              <span>${item.prix}Fcfa</span>
                              <span>Qte:${item.qte}</span>
                        </p>
                        <div class='btns'>
                              <a class='modif_btn' href="traitement.php?action=modify&amp;id=${item.id}"><button class='btn btn-danger' style='font-weight:bolder'>Edit</button></a>
                              <a class='del_btn' href="traitement.php?action=del&amp;id=${item.id}"> <button class='btn btn-danger'><i class='fa fa-remove'></i></button></a>
               
                        </div>
                  </div>
      
            `
         }).join('')

      liens=document.querySelectorAll('.card a');

     action()
   }
  

}

recup();


//--------------------------------------------------------------------------------------------------------------------





form_ad.addEventListener('submit',async(e)=>{
     
       e.preventDefault();

       let success=document.querySelector('p.success')
       success.style.color=''
       success.classList.remove('sh')
       success.classList.add('show')
       success.innerHTML=`
         <div class="spinner-border" role="status">
               <span class="visually-hidden">Loading...</span>
         </div>
       `;
       err.forEach((el)=>{
          el.innerHTML='';
       })

       let req=await fetch('./traitement.php?action=add',{
          method:'POST',
          body:new FormData(form_ad) 
       })
       if(req.ok)
       {
               let data=await req.json();
               console.log(data)
               success.innerHTML='';
               success.classList.remove('show')      
               if(data.err_bool==true && data.err==false )
               {
                  for(let d in data)
                  {
                     err.forEach((el)=>{
                     
                        if(el.getAttribute('class').slice(4)==d)
                        {
                           el.innerHTML=data[d]
                        }
                     })
                  
                  }
               }

               else if(data.err_bool==true && data.err==true)
               
               {
                  success.classList.add('show')
                  success.style.color='red'
                  success.innerHTML=`Ce produit existe deja`;
               }
      
               else if(data.err_bool==false && data.err==false)
               {
                  let inpts=document.querySelectorAll('#form_ad input')
                  inpts.forEach((input)=>{
                     input.value='';
                  })
                  success.classList.add('sh')
                  success.innerHTML=data.msg
               }
      
               recup();
       }    
})
/*-----------------------------------------------------------------------------------------------------------------*/
let form_up=document.querySelector('#up form');

form_up.addEventListener('submit',async(e)=>{

         e.preventDefault();
         let inpts=document.querySelectorAll('#up form input')
         let err=0;
         inpts.forEach((input)=>{

               if(input.value=='')
               {
                  err++;
               }
         })
         let success=document.querySelector('.success_mod');
         success.style.color=''
         success.innerHTML=`
            <div class="spinner-border" role="status">
               <span class="visually-hidden">Loading...</span>
            </div>
         `
         if(err==0)
         {
                     
               let req= await fetch('traitement.php?action=modify',{
                  method:'POST',
                  body:new FormData(form_up)
               })

               if(req.ok)
               {
                     success.innerHTML='';      
                     let res=await req.json();
                  
                     if(res.modify==true)
                     {
                           
                           console.log(success)
                           success.style.color='green'
                           success.innerHTML='Le produit a bien ete modifier'
                           inpts.forEach((input)=>{
                              input.value='';
                           })
                           recup();
                     }
               }
       }

       else
       {
         success.style.color='red'
         success.innerHTML='Veuillez renseignez tout les champs';
       }


})

//-------------------------------------------------------------------------------------------------------------

let inpt_s=document.querySelector('.form_s input');
let form_s=document.querySelector('.form_s');
let container=document.querySelector('.search');
inpt_s.addEventListener('blur',()=>{

   inpt_s.value='';

   

})
inpt_s.addEventListener('input',async ()=>{

  
   container.innerHTML='patienter'
   if(inpt_s.value!="")
   {
      container.style.display='';
      let req= await fetch('traitement.php?action=search',{
         method:'POST',
         body:new FormData(form_s)
      });
      if(req.ok)
      {
          let res=await req.json();
      
          console.log(container)
          console.log(res)
          container.innerHTML=res.map((item)=>{
 
               return`
               <div class="card">
                   <img src="upload/${item.lien}" alt="" >
                   <p class='title'>${item.lib_produit}</p>
                   <p class='info_pr'>
                         <span>${item.prix}Fcfa</span>
                         <span>Qte:${item.qte}</span>
                   </p>
                   <div class='btns'>
                         <a class='modif_btn' href="traitement.php?action=modify&amp;id=${item.id}"><button class='btn btn-danger'>Edit</button></a>
                         <a class='del_btn' href="traitement.php?action=del&amp;id=${item.id}"> <button class='btn btn-danger'><i class='fa fa-remove'></i></button></a>
          
                   </div>
              </div>
               
               `
          })
      }

      let liens=document.querySelectorAll('.search a')
      
      liens.forEach((link)=>{

             link.addEventListener('click',async(e)=>{
                 e.preventDefault();

                 if(link.classList.contains('del_btn'))
                 {
                    let req= await fetch(link.getAttribute('href'));
                    let res= await req.json();
                    console.log(res)
                    recup();
                 }

                 if(link.classList.contains('modif_btn'))
                 {
                    let req= await fetch(link.getAttribute('href'));
                    if(req.ok)
                    {
                       let res= await req.json();
                       console.log(res)
                           
                       section.forEach((sec)=>{sec.classList.remove('active')})
                       section_up.classList.add('active')
                       let inputs=document.querySelectorAll('#up input');
                       let options=document.querySelectorAll('#up option')
                       console.log(options)
                       res=res[0];
                       for(r in res)
                       {
                           
                            
                             inputs.forEach((input)=>{
                               
                                 if(input.getAttribute('class').slice(18)==r)
                                 {
                                    input.value=res[r];
                                 }
     
                             })
     
                             options.forEach((option)=>{
                                 if(option.value==res[r])
                                 {
                                     option.setAttribute('selected','selected')
                                 }
                             })
                       }
     
                    }
                 }



             })
      })



   }

   else
   {
      container.innerHTML='';
      container.style.display='none';
   }

})



function action()
{
   liens.forEach((link)=>{
      link.addEventListener('click',async(e)=>{
            e.preventDefault();
            if(link.classList.contains('del_btn'))
            {
               let req= await fetch(link.getAttribute('href'));
               let res= await req.json();
               console.log(res)
               recup();
            }

            if(link.classList.contains('modif_btn'))
            {
               let req= await fetch(link.getAttribute('href'));
               if(req.ok)
               {
                  let res= await req.json();
                  console.log(res)
                      
                  section.forEach((sec)=>{sec.classList.remove('active')})
                  section_up.classList.add('active')
                  let inputs=document.querySelectorAll('#up input');
                  let options=document.querySelectorAll('#up option')
                  console.log(options)
                  res=res[0];
                  for(r in res)
                  {
                      
                       
                        inputs.forEach((input)=>{
                          
                            if(input.getAttribute('class').slice(18)==r)
                            {
                               input.value=res[r];
                            }

                        })

                        options.forEach((option)=>{
                            if(option.value==res[r])
                            {
                                option.setAttribute('selected','selected')
                            }
                        })
                  }

               }
            }
             
      })
   })
}
