<?php
$title = "Task OOP from Dmitriy SH";
include_once "../MyWebSite/header.php"; //подключает файл 
include_once "../MyWebSite/footer.php"
class Animal{
    use Wild, Domesticated;

    protected $name;
    protected $age;
    protected $kindAnimal;
    public function __construct($name, $age, $kindAnimal){
        $this->name = $name;
        $this->age = $age;
        $this->kindAnimal = $kindAnimal;

    }
    public function live(){

    }
    public function getAge(){
        return $age;
    }
    
    public function getName(){
        return $name;
    }
    
}

class Dog extends Animal{ 
    use Domesticated;
}

class Cat extends Animal{ 
    use Domesticated, Wild
    {
        Wild::live insteadof Domesticated;
    }
}

class Bear extends Animal{
     use WIld;
}

trait Wild{
    public function live(){
        parent::live();
        echo 'Kill';
    } 
    public function getAge(){
        parent::getAge();
        echo '100';
    }
}
trait Domesticated{ 
    public function live(){
        parent::live();
        echo 'sleep';
    }
}

$objAnimal = new Dog('pisos', 10, 'cat');
$objAnimal->live();
?>
