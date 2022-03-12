function string_permutation(str) {
  if (str.length === 1) {
    return 1;
  }
  return str.length * string_permutation(str.slice(1))
}

console.log(string_permutation("Scrabble"));