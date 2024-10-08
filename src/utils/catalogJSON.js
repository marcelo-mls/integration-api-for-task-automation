const catalogJson = {
  travaTelasHomeProd: {
    payload:
      {
        mBox: 'travaTelasHomeProd', // Não alterar
        espaco: 'travaTelasHome',  // Não alterar
        perfil: 'CARTAO', // Não alterar
        nomeOferta: '',
        backgroundColor: '',
        imagemURL: null,
        imagemFullscreen: null,
        textoAcessibilidade: '',
        corTitulo: '', 
        textoTitulo: '',
        corValor: '', 
        textoValor: '',
        corDescricao: '', 
        textoDescricao: '',
        acaoBotao: '',
        textoBotao: '',
        temaBotao: '',
        corBotaoFechar: ''
      }
  },
  dashResumo: {
    payload: {
      titulo: '',
      subtitulo: '',
      botao: '',
      acao: '',
      nomeOferta: '',
      imagemURL: '',
      imagem: '',
      temaOferta: 'azul', // Não alterar
      ordemExibicaoLogin: '2', // Não alterar
      mBox: 'dashResumo1Prod', // Não alterar
      espaco: 'dashResumo' // Não alterar
    }
  },
  homeResumo: {
    payload: {
      titulo: '',
      subtitulo: '',
      botao: '',
      acao: '',
      nomeOferta: '',
      imagemURL: '',
      temaOferta: 'azul', // Não alterar
      ordemExibicaoLogin: '1', // Não alterar
      mBox: 'homeResumo1Prod', // Não alterar
      espaco: 'homeResumo', // Não alterar
      imagem: ''
    }
  },
  dashCartaoProd: {
    payload: {
      titulo: '',
      subtitulo: '',
      botao: '',
      acao: '',
      nomeOferta: '',
      temaOferta: 'azul', // Não alterar
      ordemExibicaoLogin: '1', // Não alterar
      mBox: 'dashCartaoProd', // Não alterar
      espaco: 'dashCartao' // Não alterar
    }
  },
  modalToast: {
    payload: {
      name: '',
      title: '',
      description: '',
      button: '',
      deeplink: '',
      theme: 'blue', // Não alterar
      typeName: 'cards', // Não alterar
      espaco: 'banners', // Não alterar
      priority: 5, // Não alterar
      id: 196, // Não alterar
      active: true, // Não alterar
      hasImage: false, // Não alterar
      hasWhiteList: true, // Não alterar
    }
  }
};

module.exports = {
  catalogJson
};
