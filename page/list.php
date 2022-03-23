<?php


    if(isset($_GET['action']) && $_GET['action']=='list')
    {

        
            $db=new PDO("mysql:host=localhost;dbname=resto",'H2guerre','51535759');
            $sel='SELECT * FROM produit';
            $req=$db->prepare($sel);
            $req->execute();
            $data=$req->fetchAll();
            echo json_encode($data);
        
    }




?>
