const { catalogJson } = require('../utils/catalogJSON');

function createDedicatedJSON (data) {
  const selectedJson = catalogJson;
  try {
    if ( catalogJson == 'travaTelasHomeProd') {
      selectedJson.payload.nomeOferta = data.nomeOferta;
      selectedJson.payload.backgroundColor = data.backgroundColorA;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.corTitulo = data.colorTitleA;
      selectedJson.payload.corValor = data.colorSubtitleA;
      selectedJson.payload.acaoBotao = data.redirectionUrlA;
      selectedJson.payload.temaBotao = data.colorCtaButtonA;
      selectedJson.payload.corBotaoFechar = data.colorCloseButtonA;
      selectedJson.payload.textoAcessibilidade = data.callToActionA; // para teste com o texto acessibilidade
    }
    
    if ( catalogJson == 'dashResumo') {
      selectedJson.payload.nomeOferta = data.nomeOferta;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    }

    if ( catalogJson == 'homeResumo') {
      selectedJson.payload.nomeOferta = data.nomeOferta;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    }

    if ( catalogJson == 'dashCartaoProd') {
      selectedJson.payload.nomeOferta = data.nomeOferta;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    }

    if ( catalogJson == 'modalToast') {
      selectedJson.payload.name = data.nomeOferta;
      selectedJson.payload.deeplink = data.redirectionUrlA;
      selectedJson.payload.title = data.callToActionA;
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createDedicatedJSON,
};
  