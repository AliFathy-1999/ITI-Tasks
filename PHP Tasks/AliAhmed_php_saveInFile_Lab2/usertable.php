<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>Users</title>
</head>
<body>
<table class="table table-hover mt-5 container">
        <thead>
            <tr>
              <th scope="col">Field</th>
              <th scope="col">value</th>
            </tr>
          </thead>
          <tbody>
            <?php
            $lines = file('userdata.txt');
            foreach ($lines as $line) {
              echo "<tr>";
                $data = explode(':', $line);
                echo "<tr>";
                foreach ($data as $value) {
                    echo "<td>$value</td>";
                }
                echo "</tr>";
                 
            }
            ?>
            
          </tbody>    
    </table>
</body>
</html>