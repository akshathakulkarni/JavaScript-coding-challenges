const username = Symbol("username");
const password = Symbol("password");

//Define Symbols as the object keys to make it private
//With symbols data is kept private and for internal use only
const user = {
  [username] : "Abcdef",
  [password] : 123456
}

console.log(user.username);
console.log(user.password);