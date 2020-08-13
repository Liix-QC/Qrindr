<?php require_once('Core/Autoload.php'); $_POST = json_decode(file_get_contents('php://input'),true)['state']; require_once($baseDir . '/Data/Games.php');
$err = "";
$msg = "";
$url = "";

$FIELDS = [ 'playerOne', 'playerTwo', 'matchCointoss', 'matchGame' ];
foreach ($FIELDS as $key) {

    if ($key != 'matchCointoss' && $key != 'matchGame')
        if (!isset($_POST[$key]) || empty($_POST[$key]))
            $err = "All fields must be entered! $key";

    if ($key == 'playerOne' || $key == 'playerTwo') {
        if (strlen($_POST[$key]) > 32)
           $err = "Your player name cannot be greater than 24 characters!";
    }

    if ($key == 'matchGame') {
        if ($_POST[$key] > count($games))
            $err = "Invalid config selected!";
    }
}

if ($err == "") {
    $PlayerNameOne = filter_var($_POST['playerOne'], FILTER_SANITIZE_STRING);
    $PlayerNameTwo = filter_var($_POST['playerTwo'], FILTER_SANITIZE_STRING);
    $oldPlayerName = $PlayerNameOne;

    // Cointoss
    $randomNumber = mt_rand(0, 1);
    if ($_POST['matchCointoss'] == 0 && $randomNumber == 1 || $_POST['matchCointoss'] == 2) {
        $PlayerNameOne = $PlayerNameTwo;
        $PlayerNameTwo = $oldPlayerName;
    }

    // Hash
    $matchHash      = md5(time() + rand(1, 999999));
    $matchSecret    = md5($matchHash . $PlayerNameOne . $PlayerNameTwo);

    $addRow = $conn->addMatch($matchHash, (int) $_POST['matchGame'], (int) $_POST['matchCointoss'], $PlayerNameOne, $PlayerNameTwo, $matchSecret);
    if ($addRow) {
        $url = '/match/' . $matchHash . '/' . $matchSecret . '/' . $oldPlayerName;
        $msg = "Successfully created match!";
    } else {
        $err = "Invalid error occurred!";
    }
}

header('Content-Type: application/json');
echo json_encode([ 'error' => $err, 'success' => $msg, 'url' => $url ], true);
exit;