const btnSolicitacao = document.querySelector(".ButtonHome");
const btnFaturamento = document.querySelector(".ButtonFaturamento");
const btnStatusReport = document.querySelector(".ButtonReport");
const btnAcompSMD = document.querySelector(".ButtonSMD");
const btnAcompCheckList = document.querySelector(".ButtonChecklist");
const btnLicaoAprendidas = document.querySelector(".ButtonLicaoAprendidas");
const btnConsultasRelatorio = document.querySelector(".ButtonConsultasRelatorio");
const btnAzureDevOps = document.querySelector(".ButtonAzureDevOps");

const varHome = document.querySelector(".varHome");
const varOIPROJETO = document.querySelector(".varOIPROJETO");
const varAcompCheckList = document.querySelector(".varAcompCheckList");
const varConsultasRelatorio = document.querySelector(".varConsultasRelatorio");
const varAzureDevOps = document.querySelector(".varAzureDevOps");
const varFaturamento = `https://seidor.sharepoint.com/teams/SeidorEscritoriodeProjetos-Brasil.br/Lists/Acompanhamento%20de%20Faturamento/AllItems.aspx?env=WebViewList&FilterField1=OIPROJETO&FilterValue1=${varOIPROJETO.value}&FilterType1=Text&viewid=02e40e29%2Df33c%2D4b5b%2Db579%2D9edd42c600d5`;
const varStatusReport = `https://seidor.sharepoint.com/teams/SeidorEscritoriodeProjetos-Brasil.br/Lists/PMO%20%20Status%20Report/Possibitar%20Cpia.aspx?isAscending=false&FilterField1=OI%5FPROJETO&FilterValue1=${varOIPROJETO.value}&FilterType1=Text&sortField=DATASTATUSREPORT&viewid=fdf0e89a%2D872a%2D4adb%2D9dfa%2D0cfc48bc813f`;
const varAcompSMD = `https://seidor.sharepoint.com/teams/SeidorEscritoriodeProjetos-Brasil.br/Lists/SEIDOR_PORTFOLIO%20%20Acompanhamento%20Solicitao%20de%20Muda/AllItems.aspx?env=WebViewList&FilterField1=OIPROJETO&FilterValue1=${varOIPROJETO.value}&FilterType1=Text&viewid=bf33d705%2Da959%2D421c%2Dbe2a%2D1641fffb1271`;
const varAcompCheckList2 = `https://seidor.sharepoint.com/:x:/r/sites/SeidorBR/${varAcompCheckList.value}/Documentos/50%20-%20Qualidade/${varAcompCheckList.value}_CLQ%20-%20Checklist%20Qualidade.xlsx?d=&csf=1&web=1`;
const varLicaoAprendidas2 = `https://seidor.sharepoint.com/teams/SeidorEscritoriodeProjetos-Brasil.br/Lists/SEIDOR_PMO%20%20Lies%20Aprendidas/AllItems.aspx?FilterField1=OI&FilterValue1=${varOIPROJETO.value}&FilterType1=Text&viewid=f014a450%2De380%2D4311%2Dab28%2D291c01fc3a34`;
const varConsultasRelatorio2 = `${varConsultasRelatorio.value}`;
const varAzureDevOps2 = `${varAzureDevOps.value}`;


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

  btnAzureDevOps.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varAzureDevOps2;
  });
}

//Não Apagar//
botoesFrames();
//Não Apagar//