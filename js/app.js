let amigos = []

function adicionar() {
    let nomeInput = document.getElementById("nome-amigo");
    let nome = nomeInput.value.trim();

    if (nome == ""){
        alert("Digite um nome válido!")
        return;
    }

    if(amigos.includes(nome)) {
        alert("Esse amigo já foi adicionado!")
        return;
    }

    amigos.push(nome);
    nomeInput.value = "";
    renderizarAmigos();
}

function sortear() {
    document.getElementById("lista-sorteio").innerHTML = "";

    if (amigos.length < 2){
        alert("Adicione mais de 2 amigos para sortear!")
        return;
    }

    for (let index = amigos.length - 1; index > 0; index--) {
        const aux = Math.floor(Math.random() * (index + 1));
        [amigos[index], amigos[aux]] = [amigos[aux], amigos[index]];
    }

    for (let index = 0; index < amigos.length; index++) {
        let li = document.createElement("li");
        li.textContent = `${amigos[index]} tirou ${amigos[(index + 1) % amigos.length]}`;
        document.getElementById("lista-sorteio").appendChild(li);
    }
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        let p = document.createElement("p");
        p.textContent = amigo;
        listaAmigos.appendChild(p);
        listaAmigos.innerHTML = amigos.join(", ");
    });
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    renderizarAmigos();
}