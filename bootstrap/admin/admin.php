<?php
    $db=new PDO("mysql:host=localhost;dbname=delice",'root','');
    $sel='SELECT * FROM produit';
    $req=$db->prepare($sel);
    $req->execute();
    $datas=$req->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="./admin.css">
    <title>Admin</title>
    <style>
   

    </style>
</head>
<body>
    <?php  

    
    ?>

        <div class="container-fluid">

            <div class="row">
                <div class="col-md-2">
                    <nav>
                        <ul>
                           <li> <h1><strong><i class="fa fa-user"></i><br/>Admin</strong></h1></li>
                            <li><a href="#list" ><button class='btn action'>Lister</button></a></li>
                            <li><a href="#add" class='active'><button class=" btn action">Ajouter &nbsp; <i class="fa fa-plus"></i></button></a></li>
                            <li><a href="#up"><button class='btn  action'>Modifier&nbsp; </button></a></li>
                            <li><a href="#del"><button class='btn  action'>Supprimer <i class="fa fa-remove"></i></button></a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-10 content">
                    
                    <section class="liste" id='list'>
                       
                            <?php  foreach($datas as $data):?>
                                <div class="card">
                                    <img src="upload/<?=$data['lien']?>" alt="" srcset="">
                                    <p><?=$data['lib_produit']?></p>
                                    <div class="action">
                                        <span><?=$data['prix']?></span>
                                        <a href="traitement.php?action=del&amp;id=<?=$data['id']?>"><span><i class="fa fa-remove"></i></span></a>
                                        <span><i class="fa fa-modify"></i></span>
                                    </div>
                                    <p><span><?php echo $data['qte'] ;?></span></p>
                                </div>
                
                                
                            <?php endforeach; ?>
                            
                    </section>
                     <section class=" active" id='add'>
                           <form action="./traitement.php?action=add" id='form_ad' method="POST" enctype='multipart/form-data'>
                                 <h1>Ajouter</h1>
                                 <div class="row">
                                    <div class="col-md-12">
                                        <label for="libelle" class="form-label">Nom du produit :</label>
                                        <input type="text" name="nomp" id="libelle" class='form-control inpt'>
                                        <p class="err lib_err"></p>
                                    </div>
                                 </div>
                                 <div class="row">
                                 <div class="col-md-6">
                                        <label for="qt" class="form-label">Quantite du produit :</label>
                                        <input type="number"  name="qte" id="qt" class='form-control inpt'>
                                        <p class="err err_qte"></p>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="pr" class="form-label">Prix du produit :</label>
                                        <input type="number" name="prix" id="pr" class='form-control inpt'>
                                        <p class="err err_prix"></p>
                                    </div>
                                 </div><br/>
                                 <div class="row">
                                     <div class="col-md-8">
                                        <label class="form-label">Image du produit</label>
                                        <input type="file" name="file" class='form-control'>  
                                        <p class="err err_file"></p>    
                                     </div>
                                 </div><br/>
                                 <div class="row ">
                                        <div class="col-md-12">
                                            <label class="form-label">Categorie du produit</label>
                                            <select name="categorie" id="" class='form-control inpt'>
                                                <option value=""></option>
                                                <option value="1">Consistant</option>
                                                <option value="2">Dessert</option>
                                                <option value="3">Boisson</option>
                                            </select>
                                            <p class="err err_cat"></p>
                                        </div>
                                 </div><br/>
                                 <p><button class="btn btn-danger bt">Ajouter <i class="fa fa-plus"></i></button></p>
                           </form>

                     </section>

                     <section class="" id='up'>
  
                     </section>

                     
                </div>
            </div>
        </div>

<script src="./admin.js"></script>

</body>
</html>