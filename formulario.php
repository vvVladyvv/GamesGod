 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
    <link rel="stylesheet" href="formulario.css">
</head>
<body>
<form action="registrar_c.php" method="post">
<table width="200" border="0">
<section class="formulario">
    <tr>
        <td>NOMBRE:</td>
        <td><input class="controles" type="text" name="nombre" /></td>
    </tr>
    <tr>
        <td>USUARIO:</td>
        <td><input class="controles" type="text" name="user" /></td>
    </tr>
    <tr>
        <td>PASSWORD:</td>
        <td><input class="controles" type="text" name="pw" /></td>
    </tr>
    <tr>
        <td>CONF. PW:</td>
        <td><input class="controles" type="text" name="pw2" /></td>
    </tr>
    <tr>
        <td>E-MAIL:</td>
        <td><input class="controles" type="text" name="email" /></td>
    </tr>
    <tr>
        <td><input class="boton" type="submit" value="Registrar" /></td>
        <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
        <p> <a href="#"> Ya tengo Cuenta</a></p>
    </tr>
</table>
</section>
</form>
</body>
</html>