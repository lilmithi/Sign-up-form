const inputs = document.querySelectorAll("input");
const confirm = document.querySelector("#confirm-password");
const button = document.querySelector("button");
const pass = document.querySelector("#password");

const patterns = {
  firstname: /^([a-zA-Z\d]){3,12}$/,
  lastname: /^[a-zA-Z\d]{3,12}$/,
  email: /^([a-z\d-]{2,9})@([a-z]{3,7})\.([a-z]{2,6})(\.[a-z]{2,3})?$/,
  phone: /^\d{10}$/,
  password: /^[\w@_-]{8,20}$/,
  confirmpassword: /^[\w@_-]{8,20}$/,
};
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}
let isDisabled = (confirm.disabled = true);
pass.addEventListener("focusout", () => {
  if (pass.value == "" || pass.className == "invalid") {
    confirm.setAttribute("disabled", "disabled");
    confirm.removeAttribute("isactive");
  } else {
    confirm.removeAttribute("disabled");
    confirm.setAttribute("isactive", "true");
  }
});

confirm.addEventListener("keyup", () => {
  if (confirm.value !== pass.value) {
    confirm.className = "invalid";
  } else {
    confirm.className = "valid";
  }
});

// console.log(
//   myArr.some((arr) => {
//     return typeof arr == "boolean";
//   })
// );

// function checkvalue(x) {
//   return x;
// }
// for (let eek of inputs) {
//   let juice = eek.value.split("");
//   console.log(checkvalue(juice));
// }
