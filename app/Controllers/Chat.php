<?php

require_once (realpath(dirname(__FILE__) . "/../Models/ChatModel.php"));

class Chat extends Controller
{
    private $chatModel;

    public function __construct($data)
    {
        parent::__construct($data);
        $this->chatModel = new ChatModel();
    }

    function index()
    {
        $this->readChat();
        $this->loadView("chat", $this->data);
    }

    function addChat()
    {
        var_dump($this->data);
        $this->chatModel->add($this->data);
    }

    function readChat()
    {
        $this->data = $this->chatModel->read($this->data["sender"], $this->data["receiver"]);
    }

    function getChat() {
        $this->readChat();
        echo json_encode($this->data);
    }
}
