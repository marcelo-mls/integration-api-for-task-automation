const { catalogJson } = require('../utils/catalogJSON');

function createDedicatedJSON(data, mBox) { // passar type XT - A ou B (ternário), valida e duplica no service
  let selectedJson; // remover a variável e colocar um return em cada if

  try { // Verifica qual tipo de mBox foi recebido e inicializa o JSON correspondente.
    if (mBox == 'travaTelasHomeProd') { 
      selectedJson = initializeTravaTelas(data);
    }

    if (mBox == 'dashResumo1Prod') {
      selectedJson = initializeDashResumo(mBox);
    }

    if (mBox == 'dashResumo2Prod') {
      selectedJson = initializeDashResumo(mBox);
    }

    if (mBox == 'dashResumo3Prod') {
      selectedJson = initializeDashResumo(mBox);
    }

    if (mBox == 'homeResumo1Prod') {
      selectedJson = initializeHomeResumo(mBox);
    }

    if (mBox == 'homeResumo2Prod') {
      selectedJson = initializeHomeResumo(mBox);
    }

    if (mBox == 'homeResumo3Prod') {
      selectedJson = initializeHomeResumo(mBox);
    }

    if (mBox == 'dashCartaoProd') {
      selectedJson = initializeDashCartao(data);
    }
  
    if (mBox == 'dashContaProd') {
      selectedJson = initializeDashConta(data);
    }
  
    if (mBox == 'dashCreditoProd') {
      selectedJson = initializeDashCredito(data);
    }

    if (mBox == 'modalToastCartao') {
      selectedJson = initializeModalToast(mBox);
    }

    if (mBox == 'modalToastConta') {
      selectedJson = initializeModalToast(mBox);
    }

  } catch (error) {
    console.error(error);
  }

  return selectedJson; // Retorna o JSON personalizado
}


function initializeTravaTelas(data) { // Inicializa e popula o JSON de TravaTelas
  const selectedJson = catalogJson.travaTelasHomeProd;
  selectedJson.payload.nomeOferta = data.experienceNameA;
  selectedJson.payload.backgroundColor = data.backgroundColorA;
  // selectedJson.payload.imagemURL = data.figmaLinkA; vai pro email - fullscreen: https://s7d1.scene7.com/is/image/Targetbancopansa/130CDB?tm=1728913780&fmt=png-alpha&scl=4.0 - https://s7d1.scene7.com/is/image/Targetbancopansa/conselho_da_Bruna?tm=1728914623&fmt=png-alpha&scl=1.0
  selectedJson.payload.corTitulo = data.colorTitleA;
  selectedJson.payload.corValor = data.colorSubtitleA;
  selectedJson.payload.acaoBotao = data.redirectionUrlA;
  selectedJson.payload.temaBotao = data.colorCtaButtonA;
  selectedJson.payload.corBotaoFechar = data.colorCloseButtonA;
  // selectedJson.payload.textoAcessibilidade = data.callToActionA; // teste para receber todo o texto que será colocado na oferta

  return selectedJson;
}

function initializeDashResumo(selectedJson, data) { // Popula o JSON selecionado com os dados fornecidos
  selectedJson.payload.nomeOferta = data.experienceNameA;
  selectedJson.payload.acao = data.redirectionUrlA;
  selectedJson.payload.titulo = data.callToActionA;
}

function initializeHomeResumo(selectedJson, data) { // Popula o JSON selecionado com os dados fornecidos
  selectedJson.payload.nomeOferta = data.experienceNameA;
  selectedJson.payload.acao = data.redirectionUrlA;
  selectedJson.payload.titulo = data.callToActionA;
}

function initializeDashCartao(data) { // Inicializa e popula o JSON de DashCartao
  const selectedJson = catalogJson.dashCartaoProd;
  selectedJson.payload.nomeOferta = data.experienceNameA;
  selectedJson.payload.acao = data.redirectionUrlA;
  selectedJson.payload.titulo = data.callToActionA;
  return selectedJson;
}

function initializeDashConta(data) { // Inicializa e popula  o JSON de DashConta
  const selectedJson = catalogJson.dashContaProd;
  selectedJson.payload.nomeOferta = data.experienceNameA;
  selectedJson.payload.acao = data.redirectionUrlA;
  selectedJson.payload.titulo = data.callToActionA;
  return selectedJson;
}

function initializeDashCredito(data) { // Inicializa e popula o JSON de DashCredito
  const selectedJson = catalogJson.dashCreditoProd;
  selectedJson.payload.nomeOferta = data.experienceNameA;
  selectedJson.payload.acao = data.redirectionUrlA;
  selectedJson.payload.titulo = data.callToActionA;
  return selectedJson;
}

function initializeModalToast(selectedJson, data) { // Popula o JSON selecionado com os dados fornecidos
  selectedJson.payload.name = data.experienceNameA;
  selectedJson.payload.deeplink = data.redirectionUrlA;
  selectedJson.payload.title = data.callToActionA;
}

module.exports = {
  createDedicatedJSON,
};
  