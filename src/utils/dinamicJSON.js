const { catalogJson } = require('../utils/catalogJSON');

function createDedicatedJSON(data, mBox) {
  let selectedJson;

  try {
    if (mBox.startsWith('travaTelasHomeProd')) {
      // Seleciona o JSON de travaTelasHomeProd
      selectedJson = catalogJson.travaTelasHomeProd;
      selectedJson.payload.nomeOferta = data.experienceNameA;
      selectedJson.payload.backgroundColor = data.backgroundColorA;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.corTitulo = data.colorTitleA;
      selectedJson.payload.corValor = data.colorSubtitleA;
      selectedJson.payload.acaoBotao = data.redirectionUrlA;
      selectedJson.payload.temaBotao = data.colorCtaButtonA;
      selectedJson.payload.corBotaoFechar = data.colorCloseButtonA;
      selectedJson.payload.textoAcessibilidade = data.callToActionA;
    } else if (mBox.startsWith('dashResumo')) {
      if (mBox.includes('dash1')) {
        selectedJson = catalogJson.dashResumo.dash1;
      } else if (mBox.includes('dash2')) {
        selectedJson = catalogJson.dashResumo.dash2;
      } else if (mBox.includes('dash3')) {
        selectedJson = catalogJson.dashResumo.dash3;
      }
      selectedJson.payload.nomeOferta = data.experienceNameA;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    } else if (mBox.startsWith('homeResumo')) {
      if (mBox.includes('home1')) {
        selectedJson = catalogJson.homeResumo.home1;
      } else if (mBox.includes('home2')) {
        selectedJson = catalogJson.homeResumo.home2;
      } else if (mBox.includes('home3')) {
        selectedJson = catalogJson.homeResumo.home3;
      }
      selectedJson.payload.nomeOferta = data.experienceNameA;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    } else if (mBox.startsWith('dashCartaoProd')) {
      selectedJson = catalogJson.dashCartaoProd;
      selectedJson.payload.nomeOferta = data.experienceNameA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    } else if (mBox.startsWith('dashContaProd')) {
      selectedJson = catalogJson.dashContaProd;
      selectedJson.payload.nomeOferta = data.experienceNameA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    } else if (mBox.startsWith('dashCreditoProd')) {
      selectedJson = catalogJson.dashCreditoProd;
      selectedJson.payload.nomeOferta = data.experienceNameA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    } else if (mBox.startsWith('modalToast')) {
      if (mBox.includes('Cartao')) {
        selectedJson = catalogJson.modalToastCartao;
      } else if (mBox.includes('Conta')) {
        selectedJson = catalogJson.modalToastConta;
      }
      selectedJson.payload.name = data.experienceNameA;
      selectedJson.payload.deeplink = data.redirectionUrlA;
      selectedJson.payload.title = data.callToActionA;
    }
  } catch (error) {
    console.error(error);
  }

  return selectedJson; // Retorna o JSON personalizado
}

module.exports = {
  createDedicatedJSON,
};
  