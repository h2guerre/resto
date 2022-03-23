
console.log('eseed')
async function recup()
{

 

   let req=await fetch('../page/list.php?action=list');
   if(req.ok)
   {
        
         let plats=await req.json();
         console.log(plats)
         let entree=document.querySelector('.entree')
         let resistance=document.querySelector('.resistance')
         let dessert=document.querySelector('.dessert')
         let fastFood=document.querySelector('.bistrot')
         let boissons=document.querySelector('.boisson')
         console.log(boissons)
         
         plats.forEach(el => {
                         
            if(el.catProd==1)
            {
                entree.innerHTML+=`
                    
                    <div class="card-e col-12 col-sm-12 col-md-4">
                            <img class="img_e" src="../admin/upload/${el.photoProd}" alt="" srcset="">
                            <div class="txt">
                                <h3>${el.nomProd}</h3>
                                <p>${el.descriProd}</p>
                            </div>
                            <div class="prix">
                                 <span>${el.prixProd}f</span>
                            </div>
                            <div class="btn_e">
                                <a href="../commande/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>commander</button><a></a>
                                <a href="../livraison/ladd.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>livrer</button></a>
                            </div>
                    </div>
                    
                    `
            }

            if(el.catProd==2)
            {
                resistance.innerHTML+=`
                    
                    <div class="card-e col-12 col-sm-12 col-md-4">
                            <img class="img_e" src="../admin/upload/${el.photoProd}" alt="" srcset="">
                            <div class="txt">
                                <h3>${el.nomProd}</h3>
                                <p>${el.descriProd}</p>
                            </div>
                            <div class="prix">
                                 <span>${el.prixProd}f</span>
                            </div>
                            <div class="btn_e">
                                <a href="../commande/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>commander</button><a></a>
                                <a href="../livraison/ladd.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>livrer</button></a>
                            </div>
                    </div>
                    
                    `
            }

            if(el.catProd==3)
            {
                dessert.innerHTML+=`
                    
                    <div class="card-e col-12 col-sm-12 col-md-4">
                            <img class="img_e" src="../admin/upload/${el.photoProd}" alt="" srcset="">
                            <div class="txt">
                                <h3>${el.nomProd}</h3>
                                <p>${el.descriProd}</p>
                            </div>
                            <div class="prix">
                                 <span>${el.prixProd}f</span>
                            </div>
                            <div class="btn_e">
                                <a href="../commande/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>commander</button><a></a>
                                <a href="../livraison/ladd.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>livrer</button></a>
                            </div>
                    </div>
                    
                    `
            }

            if(el.catProd==4)
            {
                fastFood.innerHTML+=`
                    
                    <div class="card-e col-12 col-sm-12 col-md-4">
                            <img class="img_e" src="../admin/upload/${el.photoProd}" alt="" srcset="">
                            <div class="txt">
                                <h3>${el.nomProd}</h3>
                                <p>${el.descriProd}</p>
                            </div>
                            <div class="prix">
                                 <span>${el.prixProd}f</span>
                            </div>
                            <div class="btn_e">
                                <a href="../commande/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>commander</button><a></a>
                                <a href="../livraison/ladd.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>livrer</button></a>
                            </div>
                    </div>
                    
                    `
            }

            if(el.catProd==5)
            {
                boissons.innerHTML+=`
                    
                    <div class="card-e col-12 col-sm-12 col-md-4">
                            <img class="img_e" src="../admin/upload/${el.photoProd}" alt="" srcset="">
                            <div class="txt">
                                <h3>${el.nomProd}</h3>
                                <p>${el.descriProd}</p>
                            </div>
                            <div class="prix">
                                 <span>${el.prixProd}f</span>
                            </div>
                            <div class="btn_e">
                                <a href="../commande/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>commander</button><a></a>
                                <a href="../livraison/ladd.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>livrer</button></a>
                            </div>
                    </div>
                    
                    `
            }

            

           
             
         });
   }

}

recup()
//---------------------------------------------------------------------------------------------

/*

async function recup()
{

 
   count();

   let req=await fetch('list.php?action=list');
   if(req.ok)
   {
        
         let plats=await req.json();
         console.log(plats)
         let entree=document.querySelector('.entree')
         let resistance=document.querySelector('.resistance')
         let dessert=document.querySelector('.dessert')
         let fastFood=document.querySelector('.bistrot')
         let boissons=document.querySelector('.boisson')
         console.log(boissons)

         plats.forEach((el)=>{
             
                    if(el.catProd==1)
                    {
                        entree.innerHTML+=`
                            
                            <div class="card-e col-12 col-sm-12 col-md-4">
    <img src="../admin/upload/${el.photoProd}" alt="" srcset="">
    <div class="txt">
        <h3>${el.nomProd}</h3>
        <p>${el.descripProd}</p>
    </div>
    <div class="prix">
        <span>${el.prixProd}</span>
    </div>
    <div class="btn_e">
    <a href="../panier/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>commander</button><a></a>
    <a href="../panier/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>livrer</button></a>
    </div>
    </div>
                            
                            `
                    }
                    if(el.catProd==2)
                    {
                        resistance.innerHTML+=`
                            
                            <div class="card-e col-12 col-sm-12 col-md-4">
    <img src="../admin/upload/${el.photoProd}" alt="" srcset="">
    <div class="txt">
        <h3>${el.nomProd}</h3>
        <p>${el.descripProd}</p>
    </div>
    <div class="prix">
        <span>${el.prixProd}</span>
    </div>
    <div class="btn_e">
    <a href="../panier/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>commander</button><a></a>
    <a href="../panier/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>livrer</button></a>
    </div>
    </div>
                            
                            `
                    }

                    else if(el.catProd==3)
                    {
                        dessert.innerHTML+=`
                             
                        <div class="card-e col-12 col-sm-12 col-md-4">
    <img src="../admin/upload/${el.photoProd}" alt="" srcset="">
    <div class="txt">
        <h3>${el.nomProd}</h3>
        <p>${el.descripProd}</p>
    </div>
    <div class="prix">
        <span>${el.prixProd}</span>
    </div>
    <div class="btn_e">
    <a href="../panier/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>commander</button><a></a>
    <a href="../panier/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>livrer</button></a>
    </div>
    </div>

                   `
                        
                    }
                    else if(el.catProd==4)
                    {
                        fastFood.innerHTML+=`
                             
                        <div class="card-e col-12 col-sm-12 col-md-4">
    <img src="../admin/upload/${el.photoProd}" alt="" srcset="">
    <div class="txt">
        <h3>${el.nomProd}</h3>
        <p>${el.descripProd}</p>
    </div>
    <div class="prix">
        <span>${el.prixProd}</span>
    </div>
    <div class="btn_e">
    <a href="../panier/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>commander</button><a></a>
    <a href="../panier/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>livrer</button></a>
    </div>
    </div>

                   `
                        
                    }

                    
                    else if(el.categorie==5)
                    {
                        boissons.innerHTML+=`
                            
                             
                        <div class="card-e col-12 col-sm-12 col-md-4">
    <img src="../admin/upload/${el.photoProd}" alt="" srcset="">
    <div class="txt">
        <h3>${el.nomProd}</h3>
        <p>${el.descripProd}</p>
    </div>
    <div class="prix">
        <span>${el.prixProd}</span>
    </div>
    <div class="btn_e">
    <a href="../panier/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>commander</button><a></a>
    <a href="../panier/add.php?action=add&amp;id=${el.idProd} " class='add'><button class="btnn ajout" id=${el}>livrer</button></a>
    </div>
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

                
        let lien_add=document.querySelectorAll('.add');
      
         lien_add.forEach((photoProd)=>{

              
                lien.addEventListener('click',async(e)=>{
                    e.preventDefault();
                    let req=await fetch(photoProd.getAttribute('href')); 
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

*/
