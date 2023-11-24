<?php
// Check if a file is selected
if (isset($_POST['file'])) {
    // Set the file name and path based on the selected option
    $file_name = $_POST['file'];
    $file_path = '/file/path' . $file_name;

    // Check if the file exists
    if (file_exists($file_path)) {
        // Set the appropriate headers
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($file_path) . '"');
        header('Content-Length: ' . filesize($file_path));

        // Read the file and output it to the browser
        readfile($file_path);
        exit;
    } else {
        // If the file doesn't exist, display an error message
        echo "File not found.";
    }
} else {
    // If no file is selected, display an error message
    echo "No file selected.";
}
?>
