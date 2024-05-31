<?php

require_once (realpath(dirname(__FILE__) . "/../Models/UserModel.php"));

class Home extends Controller
{

    private $userModel;

    public function __construct($data)
    {
        parent::__construct($data);
        $this->userModel = new UserModel();
    }

    function index() {
        $this->loadView("home");
    }

    function login()
    {
        echo json_encode($this->userModel->getUser($this->data["sender"], $this->data["receiver"]));
    }
}