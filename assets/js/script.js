
const inputEmail = document.getElementById("email");
const errorMsg = document.getElementById("errorStatus");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const btnEnvio = document.querySelector(".modal-form");
const exibirSecForm = document.getElementById("form");
const exibirSecTks = document.getElementById("tks");
const emailTxt = document.getElementById("emailRequest");

// Validação de input 
function validarForm(evt) {
	evt.preventDefault();
	const emailVal = inputEmail.value;
	// Verifica se o e-mail corresponde ao formato
	if (!regex.test(emailVal) || !emailVal) {
		inputEmail.classList.add("modal-form__input--err");
		errorMsg.style.display = "block";
	} else {
		inputEmail.classList.remove("modal-form__input--err");
		errorMsg.style.display = "none";
		exibirSecForm.classList.add("animation-opacity-off");
		exibirSecForm.addEventListener("animationend", () => {
			exibirSecForm.style.display = "none";
			exibirSecTks.style.display = "block";
		});
		emailVal.textContent = emailVal;
	}
}

btnEnvio.addEventListener("submit", (event) => validarForm(event), false);
