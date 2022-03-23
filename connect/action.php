<?php
   
   $array=array('error'=>[],'valid'=>'');
   require('./mail/mail.php');

 if(isset($_POST))
 {
      
       if(empty($_POST['pseudo']))
       {
           $array['error']['pseudo']='Renseignez votre pseudo';
       }
       if(empty($_POST['mail']))
       {
           $array['error']['mail']='Renseignez votre mail';
       }
       if(empty($_POST['pass']))
       {
           $array['error']['pass']='Renseignez votre mot de pass';
       }
       if(empty($_POST['cpass']))
       {
           $array['error']['cpass']='Confirmez votre mot de pass';
       }
       if(empty($_POST['sexe']))
       {
          $array['error']['sexe']='vous etes de quel genre ?';
       }

       if(!empty($_POST['pass']) && !empty($_POST['cpass']) && !empty($_POST['mail'])&& !empty($_POST['pseudo'])&&!empty($_POST['sexe']))
       {


               function secure($donnes)
               {
                    $donnes=strip_tags(trim(stripcslashes($donnes)));
                    return $donnes;
               }
               
               $pseudo=secure($_POST['pseudo']);
               $mail=secure($_POST['mail']);
               $pass=secure($_POST['pass']);
               $cpass=secure($_POST['cpass']);
               $sexe=secure($_POST['sexe']);

               

               if(strlen($pseudo)>20 || strlen($pseudo)<3)
               {
                   $array['error']['pseudo']='votre pseudo doit contenir 3 ou 19 caracteres';
               }

               if(!filter_var($mail,FILTER_VALIDATE_EMAIL))
               {
                  $array['error']['mail']="votre mail n'est pas valid";   
               }

               if(strlen($pass)<10)
               {
                   $array['error']['pass']='mot de pass trop court';
               }
              
               if(strlen($pseudo)>=3 && strlen($pseudo)<20 && filter_var($mail,FILTER_VALIDATE_EMAIL) && strlen($pass)>=10 )
               {
                      if($cpass!=$pass)
                      { 
                          $array['error']['cpass']='mot de pass different';
                          $array['error']['pass']='mot de pass different';
                      }
                      if($cpass==$pass)
                      {


                            $bdd=new PDO('mysql:host=localhost;dbname=test','root','');
                            $sel="SELECT * FROM users WHERE pseudo=?";
                            $req=$bdd->prepare($sel);
                            $req->execute(array($pseudo));

                            $d=$req->fetch();

                            if($req->rowCount()==1)
                            {
                                $array['error']['pseudo']='pseudo deja pris';
                            }

                            else
                            {

                                $sel2="SELECT * FROM users WHERE mail=?";
                                $req=$bdd->prepare($sel2);
                                $req->execute(array($mail));

                                $d=$req->fetch();

                                if($req->rowCount()==1)
                                {
                                    $array['error']['mail']='mail deja pris';
                                }

                                else
                                {
                                    $pass=password_hash($pass, PASSWORD_DEFAULT);

                                    $ins='INSERT INTO users VALUES("",?,?,?,?,NOW(),0)';
                                    $req=$bdd->prepare($ins);
                                    $req->execute(array($pseudo,$mail,$pass,$sexe));
                                    
                                     $corp='
                                     <html>
                                     
                                     <body style="display: flex;justify-content: center;align-items: center;">
                                           
                                             <div class="container" style="border: 3px rgba(0,0,0,0.2) solid; padding: 10px; height: 250px;">
                                                      
                                                   <h2>Merci pour votre inscription</h2>
                                                    
                                                   <div class="text">
                                                        <a href="#" style="display: block;text-align: center;text-decoration: none;color:red;font-weight: bold;padding: 8px;">Cliquez pour valider votre inscription</a>
                                                   </div>
                                     
                                             </div>
                                         
                                     </body>
                                     </html>';
                                   
                                    envoi_mail($mail,$corp);
                                }


                            }
         
                      }
               }
               
               
       }



   
 }

 echo json_encode($array);

?>