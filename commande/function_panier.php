<?php
     class Panier
     {

        public function __construct()
        {
              if(!isset($_SESSION))
              {
                   session_start();
              }

              if(!isset($_SESSION['panier']))
              {
                   $_SESSION['panier']=[];
              }
        }  

        public function add($id)
        {
               if(array_key_exists($id,$_SESSION['panier']))
               {
                    $_SESSION['panier'][$id]++; 
               }
               else
               {
                    $_SESSION['panier'][$id]=1;
               }

        }

        public function del($id)
        {
             unset($_SESSION['panier'][$id]);
        }

        public function Total()
        {
             $total=0;

             $db=new PDO("mysql:host=localhost;dbname=resto",'H2guerre','51535759');


             foreach($_SESSION['panier'] as $cle=>$qte)
             {
                   
                    $sel="SELECT * FROM produit WHERE idProd =?";
                    $req=$db->prepare($sel);
                    $req->execute([$cle]);
                    $d=$req->fetch();
                    $prix=$d['prixProd'];
                    $total=$total+($prix*$qte);
                    
             }

             return $total;

        }

        public function nb()
        {
             return count($_SESSION['panier']);
        }


     }

     
?>