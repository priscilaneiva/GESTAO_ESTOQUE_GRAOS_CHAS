function verificarSenha() {


var usuario = document.getElementById("ddlUsuaro").value;
var senha = document.getElementById("inpSenha").value;
var mensagem = document.getElementById("pMensagem");

if(usuario === "0"){
   mensagem.innerHTML = "Selecione o usuário!";

}

else if(usuario === "1" && senha === "000"){
   alert("Você será direcionado para a página de vendas!")
   window.location.href= "vendas.html";
}

else if(usuario === "2" && senha === "111"){
   alert("Você será direcionado para a página de estoque!")
   window.location.href= "estoque.html";
}

else if(usuario === "3" && senha === "222"){
   alert("Você será direcionado para a página de administrativo!")
   window.location.href= "administrativo.html";
}

else{
    mensagem.innerHTML = "Usuário ou senha inválidos!";
}

}