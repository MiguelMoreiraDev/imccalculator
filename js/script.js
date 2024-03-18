function initCalcImc() {
	let peso = document.getElementById("peso");
	let altura = document.getElementById("altura");

	const button = document.querySelector(".button");

	button.addEventListener("click", (event) => {
		if (peso.value && altura.value) {
			event.preventDefault();
			let valorPeso = peso.value;
			let valorAltura = altura.value;

			let imc = (valorPeso / valorAltura ** 2).toFixed(2);

			let desc = document.getElementById("desc");
			let value = document.getElementById("value");
			value.innerText = imc;

			if (imc < 18.5) {
				desc.innerText = "Você está magro";
			} else if (imc > 18.5 && imc < 24.9) {
				desc.innerText = "Você está em seu peso ideal!";
			} else if (imc > 25 && imc < 29.9) {
				desc.innerText = "Você está com sobrepeso";
			} else if (imc > 30 && imc < 39.9) {
				desc.innerText = "Você está com obesidade";
			} else if (imc > 40) {
				desc.innerText = "Você está com obesidade grave";
			}

			const result = document.querySelector(".calculator-mid");
			result.classList.remove("hidden");
		} else {
			alert("Preencha os campos");
		}
	});
}

initCalcImc();
