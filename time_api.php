<?php

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Max-Age: 86400");
    exit(0);
}


// Set the timezone to UTC
date_default_timezone_set('Asia/Dhaka');

// Define your API endpoints
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['endpoint'])) {
    $endpoint = $_GET['endpoint'];

    if ($endpoint === 'hello') {
        echo json_encode(['message' => 'Current Time API']);  // Change key to 'message'
    } elseif ($endpoint === 'time') {
        echo json_encode(['time' => date('Y-m-d H:i:s')]); //PHP function used to encode a PHP data structure (e.g., array or object) into a JSON-formatted string.
    } else {
        echo json_encode(['error' => 'Invalid endpoint']);
    }
} else {
    echo json_encode(['error' => 'Invalid request']);
}
?>
