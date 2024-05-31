<?php
session_start();
require_once "dbconnection.php";
//echo "". $_SESSION["id"]."<br>"; //DEBUG
?>
<!DOCTYPE html>
<html>

<head>
    <?php
    require_once 'header.php';
    ?>
    <link rel="stylesheet" href="../css/index.css" />
    <link rel="stylesheet" href="../css/persistent.css">
    <script src="../javascript/preferiti.js" defer></script>
    <title>hw1</title>
</head>

<body>
    <?php
    require_once 'navbar.php';
    ?>

    <section class="multisection">
    <div class="multisectioncontainer contenitore-articoli">
            <!-- Gli articoli verranno caricati qui dinamicamente -->
        </div>
        
    </section>

    <?php
    require_once 'footer.php';
    ?>
</body>

</html>