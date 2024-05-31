<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat-Box</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/styles.css">
</head>
<body>

<div id="iframe-main-container" class="container d-flex flex-column justify-content-center w-100 vh-100 bg-light-subtle">
    <div id="login-container" class="row row-cols-1 text-center p-4 h-100">
        <div id="login-header" class="col d-flex align-items-center justify-content-center">
            <img src="../../assets/images/header-icon-black.jpg"
                 id="username-logo" class="me-3">
            <h5>Chat App</h5>
        </div>
        <div id="login-body" class="col d-flex align-items-center justify-content-center">
            <form id="username-form" action="/index.php?c=Chat&m=index" method="post" class="d-flex flex-column align-items-center">
                <div class="d-flex flex-column align-items-start h-auto">
                    <label class="form-label" for="username-input">Username</label>
                    <input id="username-input" type="text" placeholder="Enter username" name="sender" class="form-control form-control-sm w-100 rounded-3 border border-dark-subtle">
                    <label class="form-label mt-3" for="username-dest-input">Destination Username</label>
                    <input id="username-dest-input" type="text" placeholder="Enter username" name="receiver" class="form-control form-control-sm w-100 rounded-3 border border-dark-subtle"><br>
                </div>
                <button class="btn mt-4 mb-0 btn-sm" id="start-chat-button" type="submit">Start Chat</button>
                <!--@Kelompok 1 PemWeb E Semester Genap 2023/2024-->
            </form>
        </div>
        <div id="login-footer" class="d-flex justify-content-center align-items-end">
            <label class="mb-2">Made by Kelompok 1</label>
        </div>
    </div>
</div>

</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
<script src="../../assets/js/login.js"></script>

</html>
