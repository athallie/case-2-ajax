<?php

class Model
{

    protected function getDB()
    {
        return new mysqli('localhost', 'root', 'uxn265zc14', 'case_5', 33060);
    }
}