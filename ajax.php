<?php
//Including Database configuration file.
include "includes/db_config.php";
//Getting value of "search" variable from "script.js".
if (isset($_POST['search'])) {
//Search box value assigning to $Name variable.
   $Name = $_POST['search'];
//Search query.
   $Query = "SELECT DISTINCT country FROM coffee_test WHERE country LIKE '%$Name%' LIMIT 10";
//Query execution
   $ExecQuery = MySQLi_query($con, $Query);

//Fetching data from database.
while ($data = MySQLi_fetch_array($ExecQuery)) {

//Creating unordered list to display result.
   echo '<ul>';
?>
   <li onclick='menuItemClick("<?php echo $data['country']; ?>")'>
      <img style='width:20px' src='images/world.png' />
      <a> <?php echo $data['country']; ?></a>
   </li>
   
<?php
   echo '</ul>';
} 
      
   //if nothing is returned, echo 0 so js file adjust results box
   if(mysqli_fetch_array($data) === 0){
      echo 0;
   }
}
if (isset(($_POST)['selected'])) {
   $selectedItem = $_POST['selected'];
   $response = [];

   $Query = "SELECT distinct company,region,altitude,processing_method FROM coffee_test WHERE country LIKE '%$selectedItem%' LIMIT 600";
   $ExecQuery = MySQLi_query($con, $Query);
    
   $result = [];
   while ($data = MySQLi_fetch_array($ExecQuery)) {
   $result[] = $data;
   }

   echo json_encode($result);
   exit();
}
?>
