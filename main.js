const boy = document.getElementById("boy");
const kg = document.getElementById("kg");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

function kiloIndex(kg, boy) {
  let result = kg / boy ** 2;
  return result;
}

btn.addEventListener("click", () => {
  let res = kiloIndex(kg.value, boy.value);
  let p = document.createElement("p");
  p.textContent = res;
  p.className = "paragraph";
  result.appendChild(p);
});
