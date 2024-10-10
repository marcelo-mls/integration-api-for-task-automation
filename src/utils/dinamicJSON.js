const { catalogJson } = require('../utils/catalogJSON');

function createDedicatedJSON (data, mBox) {
  const selectedJson = catalogJson[mBox]; // Usa o mBox para selecionar o JSON correto
  try {
    if ( mBox == 'travaTelasHomeProd') {
      selectedJson.payload.nomeOferta = data.nomeOferta;
      selectedJson.payload.backgroundColor = data.backgroundColorA;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.corTitulo = data.colorTitleA;
      selectedJson.payload.corValor = data.colorSubtitleA;
      selectedJson.payload.acaoBotao = data.redirectionUrlA;
      selectedJson.payload.temaBotao = data.colorCtaButtonA;
      selectedJson.payload.corBotaoFechar = data.colorCloseButtonA;
      selectedJson.payload.textoAcessibilidade = data.callToActionA; // para teste com o texto acessibilidade
    } else if ( mBox == 'dashResumo') {
      selectedJson.payload.nomeOferta = data.nomeOferta;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    } else if ( mBox == 'homeResumo') {
      selectedJson.payload.nomeOferta = data.nomeOferta;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    } else if ( mBox == 'dashCartaoProd') {
      selectedJson.payload.nomeOferta = data.nomeOferta;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    } else if ( mBox == 'modalToast') {
      selectedJson.payload.name = data.nomeOferta;
      selectedJson.payload.deeplink = data.redirectionUrlA;
      selectedJson.payload.title = data.callToActionA;
    }
  } catch (error) {
    console.error('Error in createDedicatedJSON:', error);
  }
  return selectedJson; // Retorna o JSON personalizado
}

module.exports = {
  createDedicatedJSON,
};
  