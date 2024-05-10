<!DOCTYPE html>
<html>

<head>
    <?php
    include_once 'header.php';
    ?>
    <link rel="stylesheet" href="../css/index.css" />
    <script src="../javascript/exerciseApi.js" defer="true"></script>
    <link rel="stylesheet" href="../css/exerciseApi.css" />
    <title>hw1</title>
</head>

<body>
    <?php
    include_once 'navbar.php';
    ?>
    <form name='search_content' id='search_content'>

        <h1 id="h1API">Ricerca esercizi di Bodybuilding da API con Key Authentication</h1>

        <label>Contenuto: <input type='text' name='content' id='content'></label>

        <label>&nbsp;<input class="submit" type='submit'></label>

    </form>

    <?php
    include_once 'footer.php';
    ?>

</body>

</html>