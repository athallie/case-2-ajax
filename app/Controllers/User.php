<?php

require_once (realpath(dirname(__FILE__) . "/../Models/UserModel.php"));

class User extends Controller
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
        echo json_encode($this->userModel->addUsersIfNotExist($this->data["sender"], $this->data["receiver"]));
    }

    function updateUsername()
    {
        echo json_encode($this->userModel->updateUser($this->data["username"], $this->data["newUsername"]));
    }
}