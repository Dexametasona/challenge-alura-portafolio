const regex = {
  nombre: {
    reg: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/,
    msj: "El campo nombre es requerido, debe solo tener letras y ser menor a 50 carácteres",
    status: true,
  },
  email: {
    reg: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    msj: "El campo email es requerido, debe tener un @ y un punto, no se permiten espacios.",
    status: true,
  },
  asunto: {
    reg: /^[a-zA-Z0-9\s]{1,50}$/,
    msj: "El campo asunto es requerido y tiene máximo 50 carácteres.",
    status: true,
  },
  mensaje: {
    reg: /^[\s\S]{1,300}$/,
    msj: "El mensaje es requerido y solo puede tener máximo 300 carácteres.",
    status: true,
  },
};

function labelIn(id) {
  const label = document.querySelector(`[data-label-${id}]`);

  label.classList.add("labelIn");
}
function labelOut(id) {
  const label = document.querySelector(`[data-label-${id}]`);
  const input = document.querySelector(`[data-input-${id}]`);

  if (input.value == "" || input.value == null) {
    label.classList.toggle("labelIn");
  }
  validator(id, input);
  btnStatus();
}

function validator(id, input) {
  const msjbox = document.querySelector("[data-msj]");
  if (!regex[id].reg.test(input.value)) {
    msjbox.innerHTML = regex[id].msj;
    regex[id].status = true;
  } else {
    msjbox.innerHTML = "";
    regex[id].status = false;
  }
}
function btnStatus() {
  const btn = document.querySelector("[data-btn]");
  for (let prop in regex) {
    if (regex[prop].status) {
      btn.disabled = true;
      return null
    }
  }
  btn.disabled = false;
}
