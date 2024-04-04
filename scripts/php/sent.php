<?php


$text = file("../../data/chat.txt", FILE_IGNORE_NEW_LINES);

foreach ($text as $message) {
    $parts = explode(']', $message, 3);
    $name = isset($parts[0]) ? trim(substr($parts[0], 1)) : '';
    $content = isset($parts[2]) ? trim($parts[2]) : '';

    // Display message content without timestamp
    


    echo '<div class="box-message"> <span class="chatbox-message-item-name">' . $name .'</span> <div class="chatbox-message-item-text">' . $content .'</div> </div>';
     
}

?>
