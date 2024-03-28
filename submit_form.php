<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Set your email address where you want to receive emails
    $to = "reddycore14gmail.com"; // Change this to your email address
    
    // Extract form data
    $name = $_POST["name"];
    $from = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $from\n\n";
    $email_message .= "Subject: $subject\n\n";
    $email_message .= "Message:\n$message\n";

    // Set email headers
    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        // Email sent successfully
        echo json_encode(array('status' => 'success'));
    } else {
        // Failed to send email
        echo json_encode(array('status' => 'error', 'message' => 'Failed to send message. Please try again later.'));
    }
} else {
    // If not a POST request, redirect back to the contact page
    header("Location: contact.html");
    exit;
}
?>
