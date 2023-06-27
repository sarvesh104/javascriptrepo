var x, y, z, oper;
x = parseInt(prompt("Type first number"));
y = parseInt(prompt("Type second number"));
oper = prompt("Type an operator");

if (oper == "+") {
  z = Number(x) + Number(y);
  console.log(z);
}
else if (oper == "/") {
  z = Number(x) / Number(y);
  console.log(z);
}
else if (oper == "*") {
  z = Number(x) * Number(y);
  console.log(z);
}
else if (oper == "-") {
  z = Number(x) - Number(y);
  console.log(z);
}
return z
