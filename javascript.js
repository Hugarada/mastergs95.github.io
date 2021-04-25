function createAccount() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cfpassword = document.getElementById("cfpassword").value;
    console.log (1);

    if (password == cfpassword) {
        localStorage.setItem("account", email + "|" + password );
        window.location.replace("index.html");
        console.log (2);
    }
    else{
        alert("Password is not equal!")
        console.log (3);
    }

}

/*function recovery(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cfpassword = document.getElementById("cfpassword").value;
    let texto = document.getElementById("texto").value;

    let LoginAccountFromDB = localStorage.getItem("accountrc");
    console.log(LoginAccountrcFromDB);
    let LoginAccount = email + "|" + password + "|" + texto;
    console.log(LoginAccountrc);

    if (LoginAccountrc == LoginAccountrcFromDB) {
        window.location.replace("index.html");
    }
    else {
        alert("As suas credenciais não coincidem")
    }
}*/



function accountLogin() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let LoginAccountFromDB = localStorage.getItem("account");
    console.log(LoginAccountFromDB);
    let LoginAccount = email + "|" + password;
    console.log(LoginAccount);

    if (LoginAccount == LoginAccountFromDB) {
        window.location.replace("main.html");
    }
    else {
        alert("Your credentials doesn't match any stored account!")
    }

}

function logOut(){
    window.location.replace("index.html");
}
var peixe=0;
var carne=0;
var sob=0;


function queryPrice(id){
    
    if (id=="p1"){
        peixe=20;
        document.getElementById("pp").textContent="Prato escolhido: "+document.getElementById("p1").textContent;
    }
    else if(id=="p2"){
        peixe=17,55;
        document.getElementById("pp").textContent="Prato escolhido: "+document.getElementById("p2").textContent;
    } else if(id=="p3"){
        peixe=25,75;
        document.getElementById("pp").textContent="Prato escolhido: "+document.getElementById("p3").textContent;
    }else if(id=="p4"){
        peixe=30,25;
        document.getElementById("pp").textContent="Prato escolhido: "+document.getElementById("p4").textContent;
    }else if(id=="p5"){
        peixe=19,95;
        document.getElementById("pp").textContent="Prato escolhido: "+document.getElementById("p5").textContent;
    }


    /*Carne*/
    if (id=="p6"){
        carne=25,75;
        document.getElementById("pp1").textContent="Prato escolhido: "+document.getElementById("p6").textContent;
    }
    else if(id=="p7"){
        carne=17,55;
        document.getElementById("pp1").textContent="Prato escolhido: "+document.getElementById("p7").textContent;
    } else if(id=="p8"){
        carne=25,75;
        document.getElementById("pp1").textContent="Prato escolhido: "+document.getElementById("p8").textContent;
    }else if(id=="p9"){
        carne=19,99;
        document.getElementById("pp1").textContent="Prato escolhido: "+document.getElementById("p9").textContent;
    }else if(id=="p10"){
        carne=27,25;
        document.getElementById("pp1").textContent="Prato escolhido: "+document.getElementById("p10").textContent;
    }

    /*Sobremesa*/
    if (id=="p11"){
        sob=4,75;
        document.getElementById("pp2").textContent="Sobremesa escolhida: "+document.getElementById("p11").textContent;
    }
    else if(id=="p12"){
        sob=4,75;
        document.getElementById("pp2").textContent="Sobremesa escolhida: "+document.getElementById("p12").textContent;
    } else if(id=="p13"){
        sob=3,50;
        document.getElementById("pp2").textContent="Sobremesa escolhida: "+document.getElementById("p13").textContent;
    }else if(id=="p14"){
        sob=5,25;
        document.getElementById("pp2").textContent="Sobremesa escolhida: "+document.getElementById("p14").textContent;
    }else if(id=="p15"){
        sob=3,75;
        document.getElementById("pp2").textContent="Sobremesa escolhida: "+document.getElementById("p15").textContent;
    }
}


function fatura(){
    document.getElementById("ft1").textContent=document.getElementById("pp").textContent+"  "+peixe+"€",
    document.getElementById("ft2").textContent=document.getElementById("pp1").textContent+"  "+carne+"€";
    document.getElementById("ft3").textContent=document.getElementById("pp2").textContent+"  "+sob+"€";
    if(!(peixe==0)){
        document.getElementById("del").style.display="block";
    }else{
        document.getElementById("del2").style.display="none";
    }
    if(!(carne==0)){
        document.getElementById("del1").style.display="block";
    }else{
        document.getElementById("del2").style.display="none";
    }
    if (!(sob==0)){
        document.getElementById("del2").style.display="block";
    }
    else{
        document.getElementById("del2").style.display="none";
    }
}

function load () {
    var list = document.getElementById('pp')
  }

function apagar(elemento){


    if(elemento=="1"){
        document.getElementById("ft1").textContent="Prato escolhido: ";
        document.getElementById("pp").textContent="Prato escolhido: ";
        peixe=0;
    }
    if(elemento=="2"){
        document.getElementById("ft2").textContent="Prato escolhido: ";
        document.getElementById("pp1").textContent="Prato escolhido: ";
        carne=0;
    }
    if(elemento=="3"){
        document.getElementById("ft3").textContent="Sobremesa escolhida:";
        document.getElementById("pp2").textContent="Sobremesa escolhida: ";
        sob=0;
    }
  }

var tl=0;
var p=150;
function querySaldo(){
    var tl=0;
    var p=150;
    tl=peixe+carne+sob;
    p=p-tl;
    document.getElementById("sald").textContent="Saldo Atual: "+p;
}