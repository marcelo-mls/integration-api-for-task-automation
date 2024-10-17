const { catalogJson } = require('../utils/catalogJSON');

function createDedicatedJSON(data, mBox) { // passar type XT - A ou B (ternário), valida e duplica no service
  let selectedJson; // remover a variável e colocar um return em cada if

  try { // Verifica qual tipo de mBox foi recebido e inicializa o JSON correspondente.
    if (mBox.startsWith('travaTelas')) { // deixa tudo em if e tira as funções 47 e 60 de inicialização e trás pra cá
      selectedJson = initializeTravaTelas(data);
    } else if (mBox.startsWith('dashResumo')) {
      selectedJson = initializeDashResumo(mBox);
      populateDashResumo(selectedJson, data);
    } else if (mBox.startsWith('homeResumo')) {
      selectedJson = initializeHomeResumo(mBox);
      populateHomeResumo(selectedJson, data);
    } else if (mBox.startsWith('dashCartao')) {
      selectedJson = initializeDashCartao(data);
    } else if (mBox.startsWith('dashConta')) {
      selectedJson = initializeDashConta(data);
    } else if (mBox.startsWith('dashCredito')) {
      selectedJson = initializeDashCredito(data);
    } else if (mBox.startsWith('modalToast')) {
      selectedJson = initializeModalToast(mBox);
      populateModalToast(selectedJson, data);
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

function initializeDashResumo(mBox) { // Inicializa o JSON e verifica qual será o dash
  if (mBox.includes('dash1')) return catalogJson.dashResumo.dash1;
  if (mBox.includes('dash2')) return catalogJson.dashResumo.dash2;
  if (mBox.includes('dash3')) return catalogJson.dashResumo.dash3;
}

function populateDashResumo(selectedJson, data) { // Popula o JSON selecionado com os dados fornecidos
  selectedJson.payload.nomeOferta = data.experienceNameA;
  // selectedJson.payload.imagemURL = data.figmaLinkA;
  selectedJson.payload.acao = data.redirectionUrlA;
  selectedJson.payload.titulo = data.callToActionA;
}

function initializeHomeResumo(mBox) { // Inicializa o JSON e verifica qual será o home
  if (mBox.includes('home1')) return catalogJson.homeResumo.home1;
  if (mBox.includes('home2')) return catalogJson.homeResumo.home2;
  if (mBox.includes('home3')) return catalogJson.homeResumo.home3;
}

function populateHomeResumo(selectedJson, data) { // Popula o JSON selecionado com os dados fornecidos
  selectedJson.payload.nomeOferta = data.experienceNameA;
  // selectedJson.payload.imagemURL = data.figmaLinkA;
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

function initializeModalToast(mBox) { // Inicializa o JSON de modalToast
  if (mBox.includes('Cartao')) return catalogJson.modalToast.Cartao;
  if (mBox.includes('Conta')) return catalogJson.modalToast.Conta;
}

function populateModalToast(selectedJson, data) { // Popula o JSON selecionado com os dados fornecidos
  selectedJson.payload.name = data.experienceNameA;
  selectedJson.payload.deeplink = data.redirectionUrlA;
  selectedJson.payload.title = data.callToActionA;
}

module.exports = {
  createDedicatedJSON,
};
  