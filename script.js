	function pulaLinha() {

		document.write("<br>");	
		document.write("<br>");	
	}

	function mostra(frase) {

		document.write(frase);
		pulaLinha();
	}

	var numeroPensado = Math.round(Math.random() * 100) ;

	var tentativas = 1;

    alert("Jogo da Advinhação");
    alert("Você tem 3 chances de advinhar o número escolhido.");
    alert("Escolha número entre 0 a 100.");

	while(tentativas <= 3) {

		var chute = parseInt(prompt("Digite seu chute!"));

		if(chute == numeroPensado) {

			mostra("Você ACERTOU, o número pensado era " + numeroPensado);
			break;

		} else {
			
			mostra("Você ERROU!");
		}

		tentativas++;
	}

	mostra("FIM");

