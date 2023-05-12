<?php
$username=$_POST["username"];
$password=$_POST["password"];
$filename = fopen("userData.txt", "r");
if ($filename) {
    while (($line = fgets($filename)) !== false) {

        $line=trim($line,"\n ");
        $data = explode(' ', $line);
        
        if($data[1] == $username && $data[2] == $password){
            echo "<p> Hello $data[0]</p>";
            
            fclose($filename);
            session_start();
            echo "Welcome to the our website";
            $_SESSION["username"]= $data[0];
            $_SESSION["message"]="Hello";
            $_SESSION["course"]="Php programming";
            break;
        }
    }
    fclose($filename);
} else {
    echo 'Unable to open file';
}
?>