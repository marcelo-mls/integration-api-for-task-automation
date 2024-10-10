const { catalogJson } = require('../utils/catalogJSON');

function createDedicatedJSON (data, mBox) {
  const selectedJson = catalogJson[mBox]; // Usa o mBox para selecionar o JSON correto
  try {
    if ( mBox.startsWith( 'travaTelasHomeProd')) { // função startsWith para filtrar a mBox, uma vez que teremos jsons iguais porém número/localidade diferente
      selectedJson.payload.nomeOferta = data.experienceNameA;
      selectedJson.payload.backgroundColor = data.backgroundColorA;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.corTitulo = data.colorTitleA;
      selectedJson.payload.corValor = data.colorSubtitleA;
      selectedJson.payload.acaoBotao = data.redirectionUrlA;
      selectedJson.payload.temaBotao = data.colorCtaButtonA;
      selectedJson.payload.corBotaoFechar = data.colorCloseButtonA;
      selectedJson.payload.textoAcessibilidade = data.callToActionA; // para teste com o texto acessibilidade
    } else if ( mBox.startsWith('dashResumo')) {
      selectedJson.payload.nomeOferta = data.experienceNameA;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    } else if ( mBox.startsWith('homeResumo')) {
      selectedJson.payload.nomeOferta = data.experienceNameA;
      selectedJson.payload.imagemURL = data.figmaLinkA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    } else if ( mBox.startsWith('dashCartaoProd')) {
      selectedJson.payload.nomeOferta = data.experienceNameA;
      selectedJson.payload.acao = data.redirectionUrlA;
      selectedJson.payload.titulo = data.callToActionA;
    } else if ( mBox.startsWith('modalToast')) {
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
  