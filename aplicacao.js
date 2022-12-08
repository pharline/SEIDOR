const btnSolicitacao = document.querySelector(".ButtonHome");
const btnFaturamento = document.querySelector(".ButtonFaturamento");
const btnStatusReport = document.querySelector(".ButtonReport");
const btnAcompSMD = document.querySelector(".ButtonSMD");
const btnAcompCheckList = document.querySelector(".ButtonChecklist");

const paramsUrl = new URLSearchParams(window.location.search);
const departamento = paramsUrl.get("Value");

const varHome = "https://scarneiro.com.br/seidor/services.html";
const varFaturamento = `https://seidor.sharepoint.com/teams/SeidorEscritoriodeProjetos-Brasil.br/Lists/Acompanhamento%20de%20Faturamento/AllItems.aspx?env=WebViewList&FilterField1=OI&FilterValue1=${departamento}&FilterType1=Text&viewid=02e40e29%2Df33c%2D4b5b%2Db579%2D9edd42c600d5`;
const varStatusReport = `https://seidor.sharepoint.com/teams/SeidorEscritoriodeProjetos-Brasil.br/Lists/PMO%20%20Status%20Report/Possibitar%20Cpia.aspx?FilterField1=OI&FilterValue1=${departamento}&FilterType1=Text&viewid=fdf0e89a%2D872a%2D4adb%2D9dfa%2D0cfc48bc813f"`;
const varAcompSMD = `https://seidor.sharepoint.com/teams/SeidorEscritoriodeProjetos-Brasil.br/Lists/SEIDOR_PORTFOLIO%20%20Acompanhamento%20Solicitao%20de%20Muda/AllItems.aspx?env=WebViewList&FilterField1=OIPROJETO&FilterValue1=${departamento}&FilterType1=Text&viewid=bf33d705%2Da959%2D421c%2Dbe2a%2D1641fffb1271`;
const varAcompCheckList = `https://seidor.sharepoint.com/:x:/r/sites/SeidorBR/Projeto_TEST-MODELO/_layouts/15/Doc.aspx?sourcedoc=%7BE2EAD0D3-4724-4CE7-A8F6-B9944E9197DC%7D&file=CLIENTE_PROJETO_CLQ%20-%20Checklist%20Qualidade%20-%20V.3.0.xlsx&action=default&mobileredirect=true`;


const frame = document.querySelector(".Iframe");

function botoesFrames() {
  //Inicio Botao//
  btnSolicitacao.addEventListener("click", (e) => {
    e.preventDefault();
    frame.src = varHome;
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
    frame.src = varAcompCheckList;
  });
}

//Não Apagar//
botoesFrames();
//Não Apagar//
