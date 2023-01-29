<?php 

$conn = mysqli_connect("localhost" , "root" , "" , "pre");

// echo "hello";

	



header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');


$data = json_decode(file_get_contents('php://input'), true);

if (isset($data)) {
	

$name = $data['name'];
$email = $data['email'];
$contact = $data['contact'];
$insert = "insert into practice(name , email , contact) values ('$name' , '$email' , '$contact')";
mysqli_query($conn , $insert);

}

// if(isset($data))
// {


// }




echo json_encode($data);
// echo json_encode($email);


 ?>