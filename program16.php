<?php
// Basic operations
$a = 5;
$b = 3;
$sum = $a + $b;
$diff = $a - $b;
$product = $a * $b;
$quotient = $a / $b;

// Arrays
$fruits = array("apple", "banana", "orange");
$fruits[] = "grape"; // Adding an element to the array
$fruits[1] = "kiwi"; // Modifying an element

// User interface handling
echo "Sum: " . $sum . "<br>";
echo "Difference: " . $diff . "<br>";
echo "Product: " . $product . "<br>";
echo "Quotient: " . $quotient . "<br>";

echo "Fruits: ";
foreach ($fruits as $fruit) {
    echo $fruit . ", ";
}
?>