<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../css/styles.css">
</head>

<body>
  <?php session_start() ?>
  <header class="header">
    <div class="contenedor-grande">
      <h1>UTTT</h1>
      <nav class="barra">
        <ul class="barra-principal">
          <li class="LtoR"><a href=""> <?php echo $_SESSION['USUARIO'] ?> </a></li>
          <li class="LtoR"><a href="">About</a></li>
          <li class="LtoR"><a href="">Services</a></li>
          <li class="LtoR"><a href="">Gallery</a></li>
          <li class="LtoR"><a href="">Blog</a></li>
          <li class="LtoR"><a href="">Contact</a></li>
        </ul>
        <a href="" id="btnLogout" class="barra-login">Log In</a>
      </nav>
    </div>
  </header>

  <script src="../js/logout.js"></script>
</body>

</html>