<?php

require_once ('Model.php');

class UserModel extends Model
{
    private $db;

    public function __construct()
    {
        $this->db = $this->getDB();
    }

    function addUsersIfNotExist($sender, $receiver)
    {
        $usernames = [];
        foreach ([$sender, $receiver] as $username) {
            $query = $this->db->prepare(
                "SELECT * from case_5.user WHERE username = '$username';"
            );
            $query->execute();
            if (!$query->get_result()->num_rows == 1) {
                $this->addUser($username);
                $usernames[] = $username;
            }
        }
        return $usernames ? join(", ", $usernames) . "created" : "Users exist";
    }

    function addUser($username)
    {
        $stmt = $this->db->prepare(
            "INSERT INTO case_5.user (username) VALUES ('$username');"
        );
        return $stmt->execute();
    }

    function checkUser($username)
    {
        $query = $this->db->prepare(
            "SELECT * FROM case_5.user WHERE username = '$username'"
        );
        $query->execute();
        return $query->get_result()->num_rows == 1;
    }

    function updateUser($username, $newUsername) {
        $usernameExist = $this->checkUser($newUsername);
        if (!$usernameExist) {
            $query = $this->db->prepare(
                "UPDATE case_5.user SET username = '$newUsername' WHERE username = '$username';"
            );
            return $query->execute();
        }
        return false;
    }
}
