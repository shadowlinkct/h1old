<!DOCTYPE html>
<html>

<head>
    <?php
    require_once 'header.php';
    ?>
    <link rel="stylesheet" href="../css/persistent.css">
    <script src="../javascript/sportMusic.js" defer="true"></script>
    <link rel="stylesheet" href="../css/sportMusic.css" />
    <title>hw1</title>
</head>

<body>
    <?php
    require_once 'navbar.php';
    ?>
    <div class="spotydivprincipale">
        <h1 class="spotydiv">Training Music</h1>
        <div class="spotydiv">
            <label>Playlist:
                <select id="select_playlist"></select>
            </label>
        </div>
        <button id="btn_submit">Submit</button>
        <div class="song-list" id="song-list"></div>
        <div id="song-detail"></div>
        <input type="hidden" id="hidden_token">
    </div>
    <div class="spotyimg">
        <img src="../img/spotycolab.png">
    </div>

    <?php
    require_once 'footer.php';
    ?>

</body>

</html>