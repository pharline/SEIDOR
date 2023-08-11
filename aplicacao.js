const btnSolicitacao = document.querySelector(".ButtonHome");
const btnFaturamento = document.querySelector(".ButtonFaturamento");
const btnStatusReport = document.querySelector(".ButtonReport");
const btnAcompSMD = document.querySelector(".ButtonSMD");
const btnAcompCheckList = document.querySelector(".ButtonChecklist");
const btnConsultasRelatorio = document.querySelector(".ButtonConsultasRelatorio");

const varHome = document.querySelector(".varHome");
const varFaturamento = document.querySelector(".varFaturamento");
const varFaturamento2 = `https://seidor.sharepoint.com/teams/SeidorEscritoriodeProjetos-Brasil.br/Lists/Acompanhamento%20de%20Faturamento/AllItems.aspx?env=WebViewList&FilterField1=OIPROJETO&FilterValue1=${varOIPROJETO.value}&FilterType1=Text&viewid=02e40e29%2Df33c%2D4b5b%2Db579%2D9edd42c600d5`;
const varStatusReport = document.querySelector(".varStatusReport");
const varStatusReport2 = `https://seidor.sharepoint.com/sites/SeidorBR/projetos/Lists/PMO%20%20Status%20Report/AllItems.aspx?OR=Teams%2DHL&CT=1691435046155&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzA3MTMyNzExNiIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&FilterField1=OI%5FPROJETO&FilterValue1=${varOIPROJETO.value}&FilterType1=Text&viewid=15d4e50b%2De842%2D4b20%2D98c4%2Dcaa743d64c34`;
const varAcompSMD = document.querySelector(".varAcompSMD");
const varAcompSMD2 = `https://seidor.sharepoint.com/sites/SeidorBR/projetos/Lists/PMO%20%20Solicitao%20de%20Mudana%20%20SMD/AllItems.aspx?origin=createList&useFiltersInViewXml=1&FilterField1=OIPROJETO&FilterValue1=${varOIPROJETO.value}&FilterType1=Text&viewid=35e8f5f6%2Ddb2e%2D413b%2Dbe14%2D5739bd2ac755`;
const varAcompCheckList = document.querySelector(".varAcompCheckList");
const varConsultasRelatorio = document.querySelector(".varConsultasRelatorio");



const frame = document.querySelector(".Iframe");

function botoesFrames() {
  //Inicio Botao//
  btnSolicitacao.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varHome.value;
  });

  btnFaturamento.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varFaturamento2;
  });

  btnStatusReport.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varStatusReport2;
  });

  btnAcompSMD.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varAcompSMD2;
  });

  btnAcompCheckList.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varAcompCheckList.value;
  });

  btnConsultasRelatorio.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varConsultasRelatorio.value;
  });
}

//Não Apagar//
botoesFrames();
//Não Apagar//
