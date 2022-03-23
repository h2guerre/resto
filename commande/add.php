<?php
   
    require('./function_panier.php');
    $panier=new Panier();
    
    if(isset($_GET['id']) AND $_GET['action']=='add')
    {
        $id=$_GET['id'];
        $panier->add($id);
        
    }

    if(isset($_GET['id']) AND $_GET['action']=='del')
    {
        $id=$_GET['id'];
        $panier->del($id);
    }

    if(isset($_GET['action']) AND $_GET['action']=='list')
    {
        echo count($_SESSION['panier']);
    }

 

    
?>