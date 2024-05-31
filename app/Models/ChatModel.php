<?php

require_once ('Model.php');

class ChatModel extends Model
{
    private $db;

    public function __construct()
    {
        $this->db = $this->getDB();
    }

    public function add($data)
    {
        $stmt = $this->db->prepare(
            "INSERT INTO case_5.chat (username_sender, username_receiver, message, sent_date) VALUES ('${data['sender']}', '${data['receiver']}', '${data['message']}', '${data['date']}');"
        );
        return $stmt->execute();
    }

    public function read($sender, $receiver)
    {
        $stmt = $this->db->prepare(
            "SELECT * from case_5.chat WHERE (username_sender = '$sender' AND username_receiver = '$receiver') OR (username_sender = '$receiver' AND username_receiver = '$sender') ORDER BY sent_date;"
        );
        $stmt->execute();
        $rows = $stmt->get_result();
        $data = [];
        while ($row = $rows->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }
}
