<?php session_start();
    require('./function_panier.php');
    $panier=new Panier();


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../fontawesome-free-5.15.4-web/css/all.css">
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="panier.css">
    <title>Panier</title>
</head>
<body>

     
    
        <?php

                if(isset($_SESSION['panier'])):

                    $ids=array_keys($_SESSION['panier']);
                    $ids=implode(',',$ids);

                    $db=new PDO("mysql:host=localhost;dbname=resto",'H2guerre','51535759');
                    $sel="SELECT * FROM produit WHERE idProd IN($ids)";
                    $req=$db->prepare($sel);
                    $req->execute();
                    $datas=$req->fetchAll();
                    //var_dump($datas)

                ?>

                <table>
                    
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>qte</th>
                            <th>prix U</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        <?php foreach($datas as $data):?>
                                <tr>
                                    <td class='lib'><?= $data['nomProd'] ?></td>
                                    <td class='qte'><?= $_SESSION['panier'][$data['idProd']]?></td>
                                    <td class='prix'><?= $data['prixProd'] ?></td>
                                    <td class='action'>
                                        <a href="../admin/upload/<?= $data['photoProd']?>">
                                            <button class='btn btnn'>
                                                <i class='fas fa-eye'></i>
                                            </button>
                                        </a>&nbsp  
                                        <a href="./add.php?action=del&amp;id=<?=$data['idProd']?>" class='del'>
                                            <i class='fas fa-trash'></i>
                                        </a>
                                    </td>
                                </tr>


                        <?php endforeach ?>

                    </tbody>

                    <tfoot>
                        <tr>
                            <td>Total:</td>
                            <td colspan='3'>
                              <?php  echo $panier->Total(); ?>&nbsp &nbsp<button class='btn btnn achat'>Acheter</button>                         
                            </td>
                        </tr>
                    </tfoot>


                </table>


                <?php 

                endif;

        ?>

        <script src='./panier.js'></script>

</body>
</html>