const { catalogJson } = require('../utils/catalogJSON');

function createDedicatedJSON (data) {
  const selectedJson = catalogJson;

  if ( catalogJson == catalogJson.travaTelasHomeProd) {
    selectedJson.payload.nomeOferta = selectedJson.payload.name = data.experienceNameA ? data.experienceNameA : selectedJson.payload.nomeOferta || 'Default Name';
    selectedJson.payload.backgroundColor = data.backgroundColorA;
    selectedJson.payload.imagemURL = data.figmaLinkA || null;
    selectedJson.payload.imagemFullscreen = data.figmaLinkA ? null : (data.fullscreenBannerA || null);
    selectedJson.payload.imagem = null;
    selectedJson.payload.corTitulo = data.colorTitleA;
    selectedJson.payload.corValor = data.colorSubtitleA;
    selectedJson.payload.acaoBotao = data.redirectionUrlA;
    selectedJson.payload.acao = data.redirectionUrlA;
    selectedJson.payload.deeplink = data.redirectionUrlA;
    selectedJson.payload.temaBotao = data.colorCtaButtonA;
    selectedJson.payload.corBotaoFechar = data.colorCloseButtonA;
    selectedJson.payload.textoAcessibilidade = data.callToActionA; // para teste com o texto acessibilidade
  }

}

module.exports = {
  createDedicatedJSON,
};
  