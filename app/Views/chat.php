<!DOCTYPE html>
<html lang="en" style="overflow: hidden">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbox</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/styles.css">
    <style>

    </style>
</head>
<body>
<div class="d-flex flex-column justify-content-start align-items-center container-fluid px-0" id="chat-box">
    <div class="row container-fluid position-absolute top-0 py-3 px-5 rounded-3 m-0 shadow" id="chat-header">
        <div class="col col-1 d-flex align-items-center justify-content-center p-0">
            <img src="../../assets/images/header-icon-white.jpg" id="chat-logo" style="width: 45%"/>
        </div>
        <div class="col d-flex justify-content-start align-items-center p-0" id="chat-title">
            <h5 class="text-white m-0 d-inline" id="receiver-display"></h5>
        </div>
        <div class="col col-3 d-flex justify-content-end p-0">
            <div class="input-group border border-light-subtle rounded-3">
                <input id="username-field" dir="rtl" type="text" class="form-control form-control-sm text-white m-0 bg-transparent border-0 pe-3" name="username" readonly>
                <button type="button" id="edit-username-button" class="btn btn-sm p-0 border border-dark-subtle rounded-3"></button>
            </div>
        </div>
    </div>
    <div class="row position-absolute container-fluid px-3 overflow-scroll" id="chat-body">
        <div class="row m-0 container-fluid bg-primary" id="chat-table">
            <div class="col">
            </div>
            <div class="col">
            </div>
        </div>
    </div>
    <div class="row bg-dark container-fluid position-absolute bottom-0 py-2 shadow rounded-3" id="chat-footer">
        <div class="col">
            <textarea class=" text-white form-control bg-dark overflow-scroll w-100 border-0" form="message-form" rows="1" type="text" placeholder="Type message..." name="message" id="message-text-area" style="resize: none"></textarea>
        </div>
        <div class="col col-1 d-flex justify-content-center align-items-center p-0">
            <button type="button" class="btn p-3" id="send-message-button"></button>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
<script src="../../assets/js/chat.js"></script>
<!--<script src="../../assets/js/settings.js"></script>-->
</body>
</html>