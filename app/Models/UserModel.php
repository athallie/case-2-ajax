<?php

require_once ('Model.php');

class UserModel extends Model
{
    private $db;

    public function __construct()
    {
        $this->db = $this->getDB();
    }

    function getUser($sender, $receiver)
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
}
