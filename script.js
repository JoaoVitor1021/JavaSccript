function enviarForm() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let profissao = document.getElementById("profissão").value;
    let endereco = document.getElementById("endereço").value;

    if (nome === "" || email === "" || cpf === "" || profissao === "" || endereco === "") {
        alert("Todos os campos são obrigatórios.");
        return false;
    }

    alert("Nome: " + nome + "  " + "email: " + email + "  " + "CPF: " + cpf + "  " + "Profissão: " + profissao + "  " + "endereço: " + endereco)
}