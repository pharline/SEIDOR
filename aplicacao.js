const btnSolicitacao = document.querySelector(".ButtonHome");
const btnFaturamento = document.querySelector(".ButtonFaturamento");
const btnStatusReport = document.querySelector(".ButtonReport");
const btnAcompSMD = document.querySelector(".ButtonSMD");
const btnAcompCheckList = document.querySelector(".ButtonChecklist");
const btnConsultasRelatorio = document.querySelector(".ButtonConsultasRelatorio");

const varHome = document.querySelector(".varHome");
const varFaturamento = document.querySelector(".varFaturamento");
const varFaturamento2 = `https://seidor.sharepoint.com/teams/SeidorEscritoriodeProjetos-Brasil.br/Lists/Acompanhamento%20de%20Faturamento/AllItems.aspx?env=WebViewList&FilterField1=OI&FilterValue1=${varFaturamento.value}&FilterType1=Text&viewid=02e40e29%2Df33c%2D4b5b%2Db579%2D9edd42c600d5`;
const varStatusReport = document.querySelector(".varStatusReport");
const varStatusReport2 = `https://seidor.sharepoint.com/teams/SeidorEscritoriodeProjetos-Brasil.br/Lists/PMO%20%20Status%20Report/Possibitar%20Cpia.aspx?FilterField1=OI&FilterValue1=${varStatusReport.value}&FilterType1=Text&sortField=DATASTATUSREPORT&isAscending=false&viewid=fdf0e89a%2D872a%2D4adb%2D9dfa%2D0cfc48bc813f"`;
const varAcompSMD = document.querySelector(".varAcompSMD");
const varAcompSMD2 = `https://seidor.sharepoint.com/teams/SeidorEscritoriodeProjetos-Brasil.br/Lists/SEIDOR_PORTFOLIO%20%20Acompanhamento%20Solicitao%20de%20Muda/AllItems.aspx?env=WebViewList&FilterField1=OIPROJETO&FilterValue1=${varAcompSMD.value}&FilterType1=Text&viewid=bf33d705%2Da959%2D421c%2Dbe2a%2D1641fffb1271`;
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
