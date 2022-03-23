<?php
   
    require('./lfunction_panier.php');
    $lpanier=new lPanier();
    
    if(isset($_GET['id']) AND $_GET['action']=='add')
    {
        $id=$_GET['id'];
        $lpanier->add($id);
        
    }

    if(isset($_GET['id']) AND $_GET['action']=='del')
    {
        $id=$_GET['id'];
        $lpanier->del($id);
    }

    if(isset($_GET['action']) AND $_GET['action']=='list')
    {
        echo count($_SESSION['lpanier']);
    }

 

    
?>