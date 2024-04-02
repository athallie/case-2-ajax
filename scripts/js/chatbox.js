/*window.addEventListener('load', (e) => {
  sessionStorage.clear();
  /!*
  * Prevent default
  * *!/

      let chatForm = document.querySelector('form#chat-form');
      chatForm.reset();
      document.querySelector("button#send-chat").disabled = true;
      chatForm.addEventListener('submit', (e) => {
          e.preventDefault();
      });
})*/

let breadCrumbs = document.querySelector("button#breadcrumbs-container");
breadCrumbs.addEventListener("click", (e) => {

    window.location.href = `settings.html`;
});

/*function ambilDataChat() {

  fetch('/api/data-chat')
    .then(response => response.json())
    .then(data => {

      console.log('Data chat:', data);

    })
    .catch(error => {
      console.error('Kesalahan saat mengambil data chat:', error);
    });
}*/

//ADAM
/*function readChat() {
    fetch(`/scripts/php/sent.php`)
        .then((res) => res.text())
        .then((res) => {
            let chatbox = document.querySelector('#chatbox');
            chatbox.innerHTML = res;
        });
    setTimeout(readChat, 1000);
}
readChat();*/



//Send Message

/*let sendButton = document.querySelector('button#send-chat');
sendButton.addEventListener('click', (e) => {
    let formData = {
        "username": sessionStorage.getItem('username'),
        "message": document.querySelector('input[name="message"]').value,
        "date": new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
    }
    console.log(JSON.stringify(formData));

    fetch(
        "/scripts/php/chat.php", {
            method: "post",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData)
        }).then((data) => {
        console.log(data);
        document.querySelector('input[name="message"]').value = "";
    })
});*/
