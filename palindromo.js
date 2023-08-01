function isPalindrome(str) {
  // Removendo espaços em branco e convertendo a string para letras minúsculas
  str = str.replace(/\s+/g, '').toLowerCase();

  // Verificando se a string é igual à sua forma invertida
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// Teste do algoritmo
const input = "henrique";
const result = isPalindrome(input);

console.log(result); // Deve imprimir true ou false
