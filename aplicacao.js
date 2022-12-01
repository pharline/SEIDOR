const botao = document.querySelector(".botao");
const Main = document.querySelector(".Main");
const Div = document.querySelector(".Div");
const frame = document.querySelector(".frame");

const botaoFAT = document.querySelector(".botaoFAT");
const MainFAT = document.querySelector(".MainFAT");
const DivFAT = document.querySelector(".DivFAT");
const frameFAT = document.querySelector(".frameFAT");

const botaoSTR = document.querySelector(".botaoSTR");
const MainSTR = document.querySelector(".MainSTR");
const DivSTR = document.querySelector(".DivSTR");
const frameSTR = document.querySelector(".frameSTR");

const botaoSMD = document.querySelector(".botaoSMD");
const MainSMD = document.querySelector(".MainSMD");
const DivSMD = document.querySelector(".DivSMD");
const frameSMD = document.querySelector(".frameSMD");

const botaoCLQ = document.querySelector(".botaoCLQ");
const MainCLQ = document.querySelector(".MainCLQ");
const DivCLQ = document.querySelector(".DivCLQ");
const frameCLQ = document.querySelector(".frameCLQ");

function minimizar() {
  
  //Inicio Botao//
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    if (Main.classList.contains("active") || Div.classList.contains("active")) {
      Main.classList.remove("active");
      Div.classList.remove("active");
      frame.classList.remove("active");
    } else {
      Main.classList.add("active");
      Div.classList.add("active");
      frame.classList.add("active");
    }
  });
  //Final Bota//

  //Inicio Botao//
  botaoFAT.addEventListener("click", (e) => {
    e.preventDefault();
    if (MainFAT.classList.contains("active") || Div.classList.contains("active")) {
      MainFAT.classList.remove("active");
      DivFAT.classList.remove("active");
      frameFAT.classList.remove("active");
    } else {
      MainFAT.classList.add("active");
      DivFAT.classList.add("active");
      frameFAT.classList.add("active");
    }
  });
  //Final Bota//  

  //Inicio Botao//
  botaoSTR.addEventListener("click", (e) => {
    e.preventDefault();
    if (MainSTR.classList.contains("active") || Div.classList.contains("active")) {
      MainSTR.classList.remove("active");
      DivSTR.classList.remove("active");
      frameSTR.classList.remove("active");
    } else {
      MainSTR.classList.add("active");
      DivSTR.classList.add("active");
      frameSTR.classList.add("active");
    }
  });
  //Final Bota// 

  //Inicio Botao//
  botaoSMD.addEventListener("click", (e) => {
    e.preventDefault();
    if (MainSMD.classList.contains("active") || Div.classList.contains("active")) {
      MainSMD.classList.remove("active");
      DivSMD.classList.remove("active");
      frameSMD.classList.remove("active");
    } else {
      MainSMD.classList.add("active");
      DivSMD.classList.add("active");
      frameSMD.classList.add("active");
    }
  });
  //Final Bota//  

  //Inicio Botao//
  botaoCLQ.addEventListener("click", (e) => {
    e.preventDefault();
    if (MainCLQ.classList.contains("active") || Div.classList.contains("active")) {
      MainCLQ.classList.remove("active");
      DivCLQ.classList.remove("active");
      frameCLQ.classList.remove("active");
    } else {
      MainCLQ.classList.add("active");
      DivCLQ.classList.add("active");
      frameCLQ.classList.add("active");
    }
  });
  //Final Bota//   
}

//Não Apagar//
minimizar();
//Não Apagar//
