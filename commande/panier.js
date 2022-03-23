let liens=document.querySelectorAll('.del')

liens.forEach((lien)=>{

    lien.addEventListener('click',async(e)=>{
        e.preventDefault();
        let req=await fetch(lien.getAttribute('href'));

    })

})

