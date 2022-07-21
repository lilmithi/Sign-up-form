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

document.querySelector("html").addEventListener("mouseover", () => {
  for (let input of inputs) {
    if (input.value.length == 0) {
      button.className = "invalid2";
      redfield.className = "invalid1";
    } else if (input.className == "invalid") {
      button.className = "invalid2";
    } else {
      button.setAttribute("class", "valid2");
    }
  }
});
