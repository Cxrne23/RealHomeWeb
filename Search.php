<?php
// Database connection settings
$host = 'localhost';
$dbname = 'real_estate_db'; // Replace with your database name
$username = 'your_username'; // Replace with your MySQL username
$password = 'your_password'; // Replace with your MySQL password

// Create a connection to the database
$conn = new mysqli($host, $username, $password, $dbname);

// Check if the connection is successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve search criteria from the frontend
$location = $_POST['location'] ?? '';
$priceRange = $_POST['priceRange'] ?? '';
$propertyType = $_POST['propertyType'] ?? '';

// Construct SQL Query based on the search criteria
$query = "SELECT * FROM properties WHERE 1=1"; // Dummy condition to add filters

// Add filters based on inputs
if (!empty($location)) {
    $query .= " AND location LIKE '%" . $conn->real_escape_string($location) . "%'";
}

if (!empty($priceRange)) {
    list($min, $max) = explode('-', $priceRange);
    $query .= " AND price BETWEEN " . (int)$min . " AND " . (int)$max;
}

if (!empty($propertyType)) {
    $query .= " AND property_type = '" . $conn->real_escape_string($propertyType) . "'";
}

// Execute query and retrieve results
$result = $conn->query($query);

$properties = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $properties[] = $row;
    }
}

// Set header to return JSON
header('Content-Type: application/json');
echo json_encode($properties);

// Close the database connection
$conn->close();
?>
