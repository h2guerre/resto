<?php  session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../fontawesome-free-5.15.4-web/css/all.css">
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="./admin.css">
    <title>Admin</title>
</head>
<body>

        <?php 

            $_SESSION['admin']=0;
            if(!empty($_POST['user']) && !empty($_POST['pass']))
            {
            $user=$_POST['user'];
            $pass=$_POST['pass'];

            if($pass==1234 && $user=='admin')
            {
                $_SESSION['admin']=1;
            }
            }
            if(isset($_SESSION['admin']) && $_SESSION['admin']==1):

        ?>
  
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-md-2">
                                <nav>
                                    <h1><strong><i class="fas fa-user-shield"></i><br/>Administration</strong></h1>
                                    <ul>
                                        <li><a href="#list" class='active' >Lister</a></li>
                                        <li><a href="#add" class=''>Ajouter &nbsp; <i class="fas fa-plus"></i></a></li>
                                        <li><a href="#up">Modifier&nbsp; <i class="fas fa-retweet"></i></a></li>
                                        <li><a href="#">
                                            <form action="" method="post" class='form_s'>
                                                <input type="text" name="q" id="" class='form-control'>
                                            </form>
                                        </a></li>
                                    </ul>
                                </nav>
                            </div>
                            
                            <div class="col-md-10 content">
                                
                                <section class="liste  active" id='list'>
                                
                                            <h1>Listes des produits</h1>
                                            
                                                <div class="fleche"></div>
                                            <div class="items"></div>
                                </section>
                                <section class="add_pr" active id='add'>
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
                                                    <label for="qt" class="form-label">Description du produit :</label>
                                                    <input type="text"  name="desc" id="qt" class='form-control inpt'>
                                                   
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="pr" class="form-label">Prix du produit :</label>
                                                    <input type="number" name="prix" id="pr" class='form-control inpt'>
                                                    <p class="err err_prix"></p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <label class="form-label">Image du produit</label>
                                                    <input type="file" name="file" class='form-control'>  
                                                    <p class="err err_file"></p>    
                                                </div>
                                            </div>
                                            <div class="row ">
                                                    <div class="col-md-12">
                                                        <label class="form-label">Categorie du produit</label>
                                                        <select name="categorie" id="" class='form-control inpt'>
                                                            <option value=""></option>
                                                            <option value="1">Entrée</option>
                                                            <option value="2">Resistance</option>
                                                            <option value="3">Dessert</option>
                                                            <option value="4">Fast Food</option>
                                                            <option value="5">Boisson</option>
                                                        </select>
                                                        <p class="err err_cat"></p>
                                                    </div>
                                            </div><br/>
                                            <p><button class="btn btn-danger bt">Ajouter <i class="fas fa-plus"></i></button></p>
                                            <p class="success"></p>
                                    </form>

                                </section>

                                <section class="" id='up'>

                                        <form action="traitement.php?action=modify" method='POST' id="form_up">
                                                <h1>Modifier</h1>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <label for="libelle" class="form-label">Nom du produit :</label>
                                                            <input type="text" name="nomp" id="libelle" class='form-control inpt lib_produit'>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label for="qt" class="form-label">Description du produit :</label>
                                                            <input type="text"  name="desc" id="qt" class='form-control inpt qte'>
                                                        
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="pr" class="form-label">Prix du produit :</label>
                                                            <input type="number" name="prix" id="pr" class='form-control inpt prix'>
                                                            
                                                        </div>
                                                    </div>
                                          
                                                    <div class="row ">
                                                            <div class="col-md-12">
                                                                <label class="form-label">Categorie du produit</label>
                                                                <select name="categorie" id="" class='form-control inpt categorie'>
                                                                    <option value=""></option>
                                                                    <option value="1">Entrée</option>
                                                                    <option value="2">Resistance</option>
                                                                    <option value="3">Dessert</option>
                                                                    <option value="4">Fast Food</option>
                                                                    <option value="5">Boisson</option>
                                                                </select>
                                                            
                                                            </div>
                                                    </div><br/>
                                                    <input type="hidden" name="id" class='form-control inpt id'>
                                                    <p><button class="btn btn-primary">Modifier<i class="fas fa-retweet"></i></button></p>
                                                    <p class="success_mod"></p>
                                                    
                                        </form>
            
                                </section>
                                
                                <div class="search"></div>
                            </div>
                        </div>
                    </div>

                    <script src="./admin.js"></script>

        <?php endif?>
        <?php if(!isset($_SESSION['admin']) || $_SESSION['admin']!=1): ?>

            <div class="container">
        
                <div class="body">
                    <form action="./index.php" method="post" class='connect'>
                            <h1>Connexion</h1>
                            <div class="input_g">
                                <label for="" class="form-label">Votre nom</label>
                                <input type="text" class="form-control" name='user'>
                            </div>


                            <div class="input_g">
                                <label for="" class="form-label">Votre mot de pass</label>
                                <input type="password" class="form-control" name=pass>
                            </div>

                            <p><button class="btn btn-danger">Se connecter</button></p>
                    </form>
                </div>
 
            </div>

        <?php endif?>
</body>
</html>



 


