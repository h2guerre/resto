let search_btn=document.querySelector('.search_btn');
let search=document.querySelector('.search');
search_btn.addEventListener('click',()=>{search.classList.toggle('show')})

async function recup()
{

 
   count();

   let req=await fetch('list.php?action=list');
   if(req.ok)
   {
        
         let plats=await req.json();
         console.log(plats)
         let cont_plat=document.querySelector('.produits')
         let dessert=document.querySelector('.dessert')
         let boissons=document.querySelector('.boissons')
         console.log(boissons)

         plats.forEach((el)=>{
             
                    if(el.categorie==1)
                    {
                            cont_plat.innerHTML+=`
                            
                            <div class="card">
                                <img src="../admin/upload/${el.lien}" alt="" srcset="">
                                <p>${el.lib_produit}</p>
                                
                                <div class="prix">
                                    <span>${el.prix}</span>
                                </div>
                                <p><a href="../panier/add.php?action=add&amp;id=${el.id} " class='add'><button class="btn btn-danger ajout" id=${el}>commandez</button></a></p>
                           </div>
                            
                            `
                    }

                    else if(el.categorie==2)
                    {
                        dessert.innerHTML+=`
                            
                        <div class="card">
                            <img src="../admin/upload/${el.lien}" alt="" srcset="">
                            <p>${el.lib_produit}</p>
                            
                            <div class="prix">
                                <span>${el.prix}</span>
                            </div>
                            <p><a href="../panier/add.php?action=add&amp;id=${el.id} " class='add'><button class="btn btn-danger ajout" id=${el}>commandez</button></a></p>
                       </div>
                        
                        `
                    }

                    
                    else if(el.categorie==3)
                    {
                        boissons.innerHTML+=`
                            
                        <div class="card">
                            <img src="../admin/upload/${el.lien}" alt="" srcset="">
                            <p>${el.lib_produit}</p>
                            
                            <div class="prix">
                                <span>${el.prix}</span>
                            </div>
                            <p><a href="../panier/add.php?action=add&amp;id=${el.id} " class='add'><button class="btn btn-danger ajout" id=${el}>commandez</button></a></p>
                       </div>
                        
                        `
                    }
         })

 /*        
         dessert.innerHTML=plats.map((el)=>{
             
            if(el.categorie==2)
            {
                return(`
                <div class="card">
                    <img src="../admin/upload/${el.lien}" alt="" srcset="">
                    <p>${el.lib_produit}</p>
                    
                    <div class="prix">
                        <span>${el.prix}</span>
                    </div>
                    <p><a href="../panier/add.php?action=add&amp;id=${el.id} " class='add'><button class="btn btn-danger ajout" id=${el}>commandez</button></a></p>
               </div>`)
            }
      }).join('');
*/
                
        let lien_add=document.querySelectorAll('.add');
      
         lien_add.forEach((lien)=>{

              
                lien.addEventListener('click',async(e)=>{
                    e.preventDefault();
                    let req=await fetch(lien.getAttribute('href')); 
                    if(req.ok)
                    {
                        count()

                    }
                
                    
                })
         })

   }

}

recup()


async function  count()
{
    let res=await fetch('../panier/add.php?action=list');
    let data=await res.json();
    let span=document.querySelector('.nb')
    span.innerHTML=data
}








let btn_list=document.querySelector('header .list');
let ul_list=document.querySelector('ul');
//console.log(ul_list)
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

//---------------------------------------------------------------------------------------------


