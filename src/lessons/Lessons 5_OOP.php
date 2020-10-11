<?php
$title = "Lessons OOP";
include_once "../header.php"; //подключает файл 
include_once "../footer.php";

//Классы и объекты

//Свойства - это переменные внутри класса, а
//Методы - это функции внутри класса. 
//Объект - это экземпляр класса
/*Class ShoppingCard { //созадния класса

}
$product1 = new ShoppingCard();//создания объекта класса
$product2 = new ShoppingCard();
$product3 = new ShoppingCard();
echo var_dump($product1 instanceof ShoppingCard); //instanceof - возвращает значение true,
                                                // если переменная product1 находится в классе ShoppingCard();
echo var_dump($product2 instanceof Card);   //false - если не находится
echo var_dump($product3);*/


//Область видимости свойства


/*class Shop {
    //Public 
   // Private // свойство или метод объекта может быть использован только внутру методов этого же класса
   Private $name;

   public function naming (){
        $this -> name = "Adidas";
        echo $this->name;
   }
}
$product = new Shop;
$product->naming();*/
//$product->name = "Nike"; //Найк выведеться ошибка, потому что переменная 
                    //$name -> private
   // protected - свойства и методы могут использоваться 
   //внутри своего класса и внутри дочернего класса 
   
/*Class User{
     public $name = "Имя";
     public $password = "Пароль";
     public $email = "Емейл";
     public $city = "Город";
}
$admin = new User();//экземпляр нашего класса
echo $admin->name;//вывод страндартного значения экземпляра класса admin

$user1 = new User();
$admin->name="Alexey";
$user1->name="Andrey";

echo $admin->name;
echo $user1->name;

$user1->surname="Ivanov";
echo $user1->surname="Ivanov"; //добавление свойства к user1 - экземпляру класса User
*/

//методы класса/Функции


/*Class User{
     public $name = "Имя";
     public $password = "Пароль";
     public $email = "Емейл";
     public $city = "Город";

     // public function Hello(){ //метод класса USER, который выводит приветсвие
     //      echo "Hello {$this->name}";
     // }

     function getInfo(){ //метод возрата значения о пользователе
          return "{$this->name}" . "{$this->surname}";
     }

}
$admin = new User();//создаем экземпляр класса
$admin->name="Alexey";
$admin->surname="Ivanov";
//$admin->Hello();//вызываем метод класса
echo "Пользователь: {$admin->getInfo()}"; */


//Конструкторы и Деструкторы

//1. конструкторы
/*Class User{
     public $name;
     public $password;
     public $email;
     public $city;
     
     function __construct($name, $password,$email,$city){ //создание конструктора, при котором можно вводит данные о экзмепляре класса сразу в скобочках
          $this->name=$name;
          $this->password=$password;
          $this->email=$email;
          $this->city=$city;
     }

     function getInfo(){
          return "{$this->name}" . "{$this->password}" . "{$this->email}" . "{$this->city}"; 
     }
}
$user1 = new User("Alexey ", 123456 , " long@gmail.com " , " Kiev");
echo $user1->getInfo();*/


//2. Деструктор

/*class DestractableClass 
{
     function __construct()
     {
          print "Конструктор";
          $this->name = "DestractableClass";
     }
     function __destcruct()
     {
          print "Уничтожение" . $this->name;
     }
}
$obj = new DestractableClass(); */


//Переменная $this  Self


//$this - это специальная переменная, которая испольезтся для доступа к объкта касса из нутри самого класса
//фактически это перпеменная будет содержать ссылку на объект класса, но для каждого экземпляра класса она будет совршенно разная 
/*Class User{
     public $name;
     public $password;
     public $email;
     public $city;

     public function getName(){
          echo $this->name;
          $this->test();
     }
     public function test(){
          echo 'Test';
     }
}
$user1 = new User();
$user1->name = "Alexey";
$user1->getname();

$user2 = new User();
$user2->name = "Ivan";
$user2->getname();

*/
//Self - для обращения к внутреннему содержания класса
/*Class User{
     
private static $name;
     
     public static function setName($name1){
          self::$name=$name1;

     }
     public static function getName(){
          return self::$name;
     }
}
User::setName('Alex');
echo User::getName();*/


//Наследования. Конструкторы в наследовании и свойство protected



?>