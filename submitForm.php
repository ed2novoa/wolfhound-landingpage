<?php
error_reporting(0);
$error="";
$successMessage="";
if($_POST){
  $emailTo="enovoa@gpshiring.com";
  $name=$_POST['name'];
  $email=$_POST['email'];
  $phone=$_POST['phone'];
  $subject=$_POST['subject'];
  $message=$_POST['content'];
  $headers="From: info@gpshiring.com\r\n";
  $headers.="MIME-Version: 1.0"."\r\n";
  $headers.="Content-type:text/html;
  charset=UTF-8";
  $content="<html><head><title>gpshiring.com - Mensaje desde Formulario de Contacto </title></head><body><h2>Mensaje desde Formulario de Contacto \"gpshiring.com\"</h2><p><strong>Nombre: </strong>".$name."</p><p><strong>Email: </strong>".$email."</p><p><strong>Teléfono: </strong>".$phone."</p><p><strong>Asunto: </strong>".$subject."</p><p><strong>Mensaje: </strong>".$message."</p></body></html>";
  if(mail($emailTo,"GPS Hiring - Mensaje desde Formulario de Contacto",$content,$headers)){

    echo 1;

  }else{

    echo 0;
  }
}
die();
?>
