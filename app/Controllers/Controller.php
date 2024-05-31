<?php


class Controller
{

    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    protected function loadModel($modelName)
    {
        include_once "../Models/Model.php";
        include_once "../Models/$modelName.php";
        return new $modelName;
    }

    protected function loadView($viewName, $data = [])
    {
        if ($data !== null) {
            foreach ($data as $var => $value) {
                $$var = $value;
            }
            require $this->getView($viewName);
        }
    }

    protected function getView($viewName)
    {
        return realpath(dirname(__FILE__) . "/../Views/$viewName.php");
    }
}
