<?php

$nome = "João";
$idade = "16";
$casado = true;
$preco = 39.90;

echo "A variavel é do tipo: ";
echo gettype($nome);
$nome = false;
echo "<br> =A variavel é do tipo: ";
echo gettype($nome);
