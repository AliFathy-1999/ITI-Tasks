<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$address = $_POST['address'];
$country = $_POST['country'];
$gender = $_POST['gender'];
$skills = $_POST['skills'];
$skillsCount = count($skills);
$username = $_POST['username'];
$password = $_POST['password'];
$department = $_POST['department'];
$code = $_POST['code'];
$msg = $lastName . $address . $country . $gender . $skills . $username . $department . $code;
mail("aliahmedfathi37@gmail.com","My Data",$msg);
// var_dump(implode(" | ",$skills));

echo "First Name: " . $firstName . "<br>"
 . "Last Name: " . $lastName . "<br>"
 . "Address: " . $address . "<br>"
 . "Country: " . $country . "<br>"
 . "Gender: " . $gender . "<br>"
 . "Password: " . $password . "<br>"
 . "Department: " . $department . "<br>"
 . "Code: " . $code . "<br>"
 . "Username: " . $username . "<br>"
 . "Skills: " ."<br>" ;
  for($i=0; $i < $skillsCount; $i++)
  {
    echo($skills[$i] . " ");
  }

?>