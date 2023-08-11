const btnSolicitacao = document.querySelector(".ButtonHome");
const btnFaturamento = document.querySelector(".ButtonFaturamento");
const btnStatusReport = document.querySelector(".ButtonReport");
const btnAcompSMD = document.querySelector(".ButtonSMD");
const btnAcompCheckList = document.querySelector(".ButtonChecklist");
const btnLicaoAprendidas = document.querySelector(".ButtonLicaoAprendidas");
const btnConsultasRelatorio = document.querySelector(".ButtonConsultasRelatorio");

const varHome = document.querySelector(".varHome");
const varOIPROJETO = document.querySelector(".varOIPROJETO");
const varAcompCheckList = document.querySelector(".varAcompCheckList");
const varConsultasRelatorio = document.querySelector(".varConsultasRelatorio");
const varFaturamento = `https://seidor.sharepoint.com/sites/SeidorBR/projetos/Lists/PMO%20%20Fluxo%20Faturamento%20Previsto/AllItems.aspx?origin=createList&FilterField1=OIPROJETO&FilterValue1=${varOIPROJETO.value}&FilterType1=Text&viewid=3e76944c%2D76d3%2D4d85%2Da985%2Dda98ccdd8495`;
const varStatusReport = `https://seidor.sharepoint.com/sites/SeidorBR/projetos/Lists/PMO%20%20Status%20Report/AllItems.aspx?OR=Teams%2DHL&CT=1691435046155&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzA3MTMyNzExNiIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&FilterField1=OI%5FPROJETO&FilterValue1=${varOIPROJETO.value}&FilterType1=Text&viewid=15d4e50b%2De842%2D4b20%2D98c4%2Dcaa743d64c34`;
const varAcompSMD = `https://seidor.sharepoint.com/sites/SeidorBR/projetos/Lists/PMO%20%20Solicitao%20de%20Mudana%20%20SMD/AllItems.aspx?origin=createList&useFiltersInViewXml=1&FilterField1=OIPROJETO&FilterValue1=${varOIPROJETO.value}&FilterType1=Text&viewid=35e8f5f6%2Ddb2e%2D413b%2Dbe14%2D5739bd2ac755`;
const varAcompCheckList2 = `https://seidor.sharepoint.com/:x:/r/sites/SeidorBR/${varAcompCheckList.value}/Documentos/50%20-%20Qualidade/${varAcompCheckList.value}_CLQ%20-%20Checklist%20Qualidade.xlsx?d=&csf=1&web=1`;
const varLicaoAprendidas2 = `https://seidor.sharepoint.com/sites/SeidorBR/projetos/Lists/PMO%20%20Lies%20Aprendidas/AllItems.aspx?origin=createList&FilterField1=OI&FilterValue1=${varOIPROJETO.value}&FilterType1=Text&viewid=1d40c97f%2Dd4bc%2D4cf8%2D9fe5%2D8c433890cebe`;
const varConsultasRelatorio2 = `${varConsultasRelatorio.value}`;


const frame = document.querySelector(".Iframe");

function botoesFrames() {
  //Inicio Botao//
  btnSolicitacao.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varHome.value;
  });

  btnFaturamento.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varFaturamento;
  });

  btnStatusReport.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varStatusReport;
  });

  btnAcompSMD.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varAcompSMD;
  });

  btnAcompCheckList.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varAcompCheckList2;
  });

  btnLicaoAprendidas.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varLicaoAprendidas2;
  });

  btnConsultasRelatorio.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varConsultasRelatorio2;
  });
}

//Não Apagar//
botoesFrames();
//Não Apagar//
