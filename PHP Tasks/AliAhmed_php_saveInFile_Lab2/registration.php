<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$address = $_POST['address'];
$country = $_POST['country'];
$gender = $_POST['gender'];
$username = $_POST['username'];
$password = $_POST['password'];
$department = $_POST['department'];
$code = $_POST['code'];
$filename = "userdata.txt";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $errors = array();
  if (empty($firstName)) {
      $errors[] = "First Name is required";
  }
  if (empty($lastName)) {
      $errors[] = "Last Name is required";
  }
  if (empty($address)) {
      $errors[] = "Address is required";
  }
  if ($country == "Open this select menu") {
      $errors[] = "Country is required";
  }
  if (empty($gender)) {
      $errors[] = "Gender is required";
  }
  if (empty($username)) {
      $errors[] = "Username is required";
  }
  if (empty($password)) {
      $errors[] = "Password is required";
  }
  if (empty($department)) {
      $errors[] = "Department is required";
  }
  if (empty($code)) {
      $errors[] = "Code is required";
  } elseif ($code != "Sh68So") {
      $errors[] = "Code is incorrect";
  }

  if (empty($errors)) {
      if($filename){
        $userData = "First Name: $firstName\n";
        $userData .= "Last Name: $lastName\n";
        $userData .= "Gender: $gender\n";
        $userData .= "Address: $address\n";
        $userData .= "Country: $country\n";
        $userData .= "Username: $username\n";
        $userData .= "Password: $password\n";
        $userData .= "department: $department\n";
        file_put_contents($filename, $userData, FILE_APPEND | LOCK_EX);
      }else{
        echo "File not found";
      }
      header("Location: success.php");
      exit();
  }else{
    header("Location: failure.php");
    exit();    
  }
}
?>