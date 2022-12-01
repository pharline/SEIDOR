const btnSolicitacao = document.querySelector(".ButtonHome");
const btnFaturamento = document.querySelector(".ButtonFaturamento");
const btnStatusReport = document.querySelector(".ButtonReport");
const btnAcompSMD = document.querySelector(".ButtonSMD");
const btnAcompCheckList = document.querySelector(".ButtonChecklist");

const varHome = document.querySelector(".varHome");
const varFaturamento = document.querySelector(".varFaturamento");
const varStatusReport = document.querySelector(".varStatusReport");
const varAcompSMD = document.querySelector(".varAcompSMD");
const varAcompCheckList = document.querySelector(".varAcompCheckList");

const frame = document.querySelector(".Iframe");

function botoesFrames() {
  //Inicio Botao//
  btnSolicitacao.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varHome.value;
  });

  btnFaturamento.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varFaturamento.value;
  });

  btnStatusReport.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varStatusReport.value;
  });

  btnAcompSMD.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varAcompSMD.value;
  });

  btnAcompCheckList.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varAcompCheckList.value;
  });
}

//Não Apagar//
botoesFrames();
//Não Apagar//
