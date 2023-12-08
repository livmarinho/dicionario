function carregaDicionario() {

    var biografias = {
  
      bio01: {
  
        nome: "Marielle Franco",
        imagem:"https://i.postimg.cc/8fS8KSGX/marielle-franco.png",
        descricao:"Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros",
        citacao:"Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?",
  
      },
  
      bio02: {
  
        nome:"Lélia Gonzalez",
  
        imagem:"https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",
  
        descricao: "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira. Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",
  
        citacao:"A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora.",
  
      },
  
      bio03: {
  
        nome:"Angela Davis",
  
        imagem:"https://i.postimg.cc/LJ6SF21r/angela-davis.png",
  
        descricao:"Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos.",
        citacao:"Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar.",
  
      },
  
      bio04: {
  
        nome:"Conceição Evaristo",
        imagem: "https://i.postimg.cc/Z9XzNNMS/conceicao-evaristo.png",
        descricao:"Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
        citacao:"O importante não é ser o primeiro ou primeira, o importante é abrir caminhos.",
  
      },
  
      bio05: {
  
        nome:"Carolina de Jesus",
        imagem:"https://i.postimg.cc/Fdc5VKMJ/carolina-de-jesus.png",
        descricao:"Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",
        citacao:"Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é.",
  
      },
  
      bio06: {
  
        nome: "Rosa Parks",
        imagem: "https://i.postimg.cc/K1q2Zw74/rosa-parks.png",
        descricao:"Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",
        citacao:"⁠Você nunca deve ter medo do que está fazendo quando está certo.",
  
      },

      bio07: {
  
        nome: "Dandara dos Palmares",
        imagem: "https://i.postimg.cc/TYdxW2sM/pasted-image-0.png",
        descricao:"Líder feminina do Quilombo dos Palmares, Dandara era companheira de Zumbi dos Palmares, com quem teria tido três filhos. Ao longo de décadas, a matriarca participou de decisões políticas e militares em prol da luta pela abolição da escravatura e assumiu o compromisso de lutar pela liberdade das cerca de 30 mil pessoas que chegaram a compor o quilombo. Resistiu ao poder do colonizadores europeus até sua morte: acredita-se que ela teria se jogado de uma pedreira para que as forças militares que tomaram o quilombo no fim do século 17 não a capturassem e a escravizassem novamente.",
        citacao:"A força do poder, está em nunca desistir.",
  
      },

      bio08: {
        nome:"Ruth de Souza",
        imagem:"https://i.postimg.cc/59sJLYF5/Ruth-de-Souza-Foto-Camilla-Maia-Capa.jpg",
        descricao:"Nascida no Rio de Janeiro, Ruth de Souza foi a primeira atriz negra a atuar no Theatro Municipal do Rio de Janeiro, com a peça Imperador, em 1945. Além disso, Ruth foi a primeira brasileira a ser indicada ao prêmio de Melhor Atriz em um festival internacional de cinema, por sua atuação no filme Sinhá Moça. Isso ocorreu no Festival de Internacional de Veneza, em 1954. Além do teatro e do cinema, ela também se destacou na televisão ao participar de programas de variedades e musicais, assim como por ter sido a primeira negra a protagonizar uma novela, A Cabana do Pai Tomás, da TV Globo, em 1969.",
        citacao:"As únicas armas que temos para combater o racismo é a educação, a postura e o comportamento.",

      },

      bio09: {
        nome:"Tia Ciata",
        imagem:"https://i.postimg.cc/Bvy0kd4h/tia-ciata.jpg",
        descricao:"Hilária Batista de Almeida, a Tia Ciata, ficou conhecida por ceder o quintal para a reunião de diversos artistas que deram origem ao samba, tornando-se um dos maiores nomes da cultura brasileira do início do século 20. Conhecida por ser o berço do samba no Brasil, sua casa ficava na região do Centro do Rio de Janeiro que ganhou o nome de Pequena África por reunir ex-escravos que moravam nos morros próximos. Lá, eles faziam festas, cantavam e tocavam samba. Na época, esse estilo musical sofria repressão, mas Tia Ciata era conhecida e respeitada entre as autoridades.",
        citação:"Quem não gosta de samba, bom sujeito não é.",

      },

      bio10: {
        nome:"Shonda Rhimes",
        imagem:"https://i.postimg.cc/SNxdg1v2/shonda-rhimes.jpg",
        descricao:"A premiada escritora, roteirista e diretora americana Shonda Rhimes nasceu no estado de Illinois, EUA, e tornou-se a afro-americana mais bem paga da TV americana. Ela cresceu no subúrbio, em uma família com mais seis irmãos, a mãe era professora e o pai administrador em uma universidade. Formou-se em inglês, e trabalhou com publicidade por um tempo para pagar as contas, mas a sua paixão sempre foi a escrita. Começou a escrever para a TV em meados dos anos 1990 e foi alcançando o sucesso aos poucos. Hoje Shonda é a autora de várias séries de sucesso, como Grey's Anatomy, Scandal e How to Get Away with Murder.",
        citação:"É o esforço que faz as coisas acontecerem. É o esforço que cria a mudança.",

      },

      bio11: {
        nome:"Sueli Carneiro",
        imagem:"https://i.postimg.cc/qRXfxDZD/sueli-carneiro.jpg",
        descricao:"Uma das mulheres negras mais importantes da atualidade no Brasil, Sueli Carneiro nasceu em São Paulo, é doutora em filosofia pela Universidade de São Paulo e criadora do Geledés Instituto da Mulher Negra, um dos principais órgãos independentes de consciência racial no Brasil. Autora de dois livros e artigos sobre raça, gênero e direitos humanos publicados no Brasil e no mundo, foi uma das pessoas responsáveis pela defesa constitucional da implantação de cotas raciais nas universidades brasileiras. Atualmente é referência do Movimento Negro nacional e nome incontornável no assunto nos campos políticos e acadêmicos.",
        citação:"Nós mulheres negras, somos a vanguarda do movimento feminista nesse país.",

      },

      bio12: {
        nome:"Maria Beatriz Nascimento",
        imagem:"https://i.postimg.cc/yx0NcCMJ/Maria-Beatriz-Nascimento.jpg",
        descricao:"Maria Beatriz Nascimento foi uma historiadora pioneira do modo de pensar a História a partir dos saberes africanos. A mestra em educação nasceu em Aracaju, Sergipe, em 1942 e faleceu em 28 de março de 1995 e se dedicou a sua formação na luta pelos direitos dos afro-brasileiros e para estudar a cultura africana e afro-brasileira. Também é conhecida por ser a fundadora do Movimento Negro Unificado (MNU), que ocorreu no ano de 1978 com o objetivo de combater o racismo e promover a igualdade racial no Brasil. Beatriz concluiu o seu mestrado em Comunicação e Cultura na UFRJ, tendo o seu trabalho considerado pioneiro ao abordar o Candomblé como uma expressão cultural, importante para a história e identidade do povo negro no Brasil. Além disso, defendeu as questões raciais e culturais em diversos eventos e conferências internacionais. Sendo assim, Maria Beatriz Nascimento foi uma das primeiras mulheres com a voz ativa na denúncia do racismo estrutural no Brasil e na ascensão da valorização da cultura afro-brasileira, sendo ela uma grande referência na luta contra o racismo e o combate pela inclusão e valorização da cultura afro-brasileira. ",
        citação:"Não deixe que nada e ninguém viole os direitosfundamentais, para que você viva uma vida com dignidade.",

      },

      bio13: {
        nome:"Antonieta de Barros",
        imagem:"https://i.postimg.cc/wBHJf0qR/Antonieta-de-Barros.jpg",
        descricao:"Nascida em 1901, Antonieta de Barros foi uma professora, jornalista e escritora, natural de Florianópolis. Filha de Catarina e Rodolfo de Barros, é a primeira mulher eleita Deputada Constituinte e Deputada Estadual no Parlamento Catarinense, e a primeira representante negra a assumir mandato no Brasil. Ela é criadora do 'Dia do Professor'. Alfabetizada aos 5 anos, concluiu os estudos primários na Escola Lauro Müller e, aos 17 anos, ingressou na Escola Normal Catarinense - atual Instituto Estadual de Educação, onde cursou o Ensino Médio.  Ela foi a primeira da família a ter o ciclo escolar completo. Em 1922, aos 21 anos, fundou o Curso Particular Antonieta de Barros que era destinado à alfabetização. Dirigiu essa formação até o ano de sua morte, em 1952.",
        citação:"Não basta existir. É preciso saber encher a vida do colorido do bem.",

      },

      bio14: {
        nome:"Maria Firmina dos Reis",
        imagem:"https://i.postimg.cc/pTRwdb2V/maria-firmina.jpg",
        descricao:"Considerada a primeira romancista brasileira, Maria Firmina dos Reis foi professora, poeta, compositora e colaboradora de jornais do Maranhão, onde nasceu, em 1822. Ela é autora de Úrsula, o primeiro romance abolicionista do Brasil, publicado em 1859. Na obra, africanos e afro-brasileiros refletem sobre as relações opressivas que enfrentavam em uma sociedade escravista e patriarcal. Também fundou a primeira escola mista (para meninos e meninas) do estado, em 1880, quando o modelo ainda era escasso no Brasil. A instituição era gratuita para alunos sem condições de pagar. Sua contribuição na educação local a fez receber o título de 'Mestra Régia'. Na imprensa local, publicou poesia, ficção e crônicas.",
        citação:"Os crus dissabores que eu sofro são tantos, são tantos prantos, que vivo a chorar. É tanta agonia, tão lenta e sentida, que rouba-me a vida, sem nunca acabar.",
      },

      bio15: {
        nome:"Dona Ivone Lara",
        imagem:"https://i.postimg.cc/JnWCfHyF/ivone-laral.jpg",
        descricao:"Nascida em 1921, a 'Grande Dama do Samba', como era chamada, foi uma cantora e compositora brasileira. Também chamada de 'Rainha do Samba', Dona Ivone Lara foi a primeira mulher a assinar um samba-enredo e a fazer parte da ala de compositores de uma escola, marco estabelecido na Império Serrano, no Rio de Janeiro. Também criou inúmeros clássicos do samba de raiz inspirados no cotidiano popular e conquistou respeito e reverência da MPB ao longo dos 96 anos de vida. Antes de seguir a carreira na música, ela se formou em Serviço Social e Enfermagem, ofício que exerceu por 37 anos. Sua especialização era em Terapia Ocupacional, e Dona Ivone também atuou no Serviço Nacional de Doenças Mentais com a doutora Nise da Silveira, uma das principais referências da luta antimanicomial no Brasil.",
        citação:"Não me comove o pranto de quem é ruim.",
      },

      bio16: {
        nome:"Benedita a Silva",
        imagem:"https://i.postimg.cc/FR7djrNN/benedita-sa-silva.jpg",
        descricao:"Primeira senadora negra do Brasil, também sendo ativista política do Movimento Negro e assumidamente feminista, Benedita Sousa da Silva nasceu no dia 26 de abril de 1942, no Hospital Municipal Miguel Couto, no Rio de Janeiro. Filha da lavadeira Maria da Conceição Sousa da Silva, e do pedreiro e lavador de carro José Tobias da Silva. A família era de baixa renda e residia na favela da Praia do Pinto, no Leblon. Esta comunidade não existe mais, pois foi completamente destruída nos anos 1960 por um incêndio. Por ocasião das comemorações do IV Centenário da Cidade do Rio de Janeiro, em 1965, e também por seu ativismo político desde muito cedo, foi indicada como representante do bairro de Copacabana, no concurso de mulheres sambistas promovido pela Prefeitura, tendo sido eleita a Miss IV Centenário. Sua atuação nos movimentos de favela, no movimento negro e de mulheres foi o início para sua candidatura como vereadora nas eleições municipais de 1982 pela legenda do Partido dos Trabalhadores. Foi a única mulher afro-brasileira eleita para o cargo de deputada federal constituinte, reeleita para um segundo mandato em 1990, sendo eleita senadora em 1994, com mais de 2 milhões e 400 mil votos, e vice-governadora no pleito de 1998.",
        citação:"A escravidão mudou do chicote para a caneta.",
      },

      bio17: {
        nome:"Mercedes Batista",
        imagem:"https://i.postimg.cc/LsqgP4HR/mercedes-batista.jpg",
        descricao:"Ainda que tenha se tornado a primeira bailarina negra do Theatro Municipal do Rio de Janeiro, a brasileira Mercedes Baptista não conseguia bons papéis devido à cor da sua pele. Mas a bailarina americana Katherine Dunham fez um convite e levou Mercedes para se aperfeiçoar nos Estados Unidos. Na volta, a bailarina, fundou sua própria escola e passou a colaborar com a coreografia de escolas de samba e outros espetáculos nacionais e internacionais.Foi uma bailarina e coreógrafa brasileira, a primeira negra a integrar o corpo de bale do Theatro Municipal do Rio de Janeiro. Baptista foi a responsável pela criação do balé afro-brasileiro, inspirado nos terreiros de candomblé, elaborando uma codificação e vocabulário próprio para essas danças.",
        citação:"As vezes é preciso destroçar portas, abrir todas as janelas e decolar para brincar nas estrelas e dançar entre as nuvens.",
      },

      bio18: {
        nome:"Sônia Guimarães",
        imagem:"https://i.postimg.cc/bYBqW08y/sonia-guimaraes.jpg",
        descricao:"Sônia Guimarães nasceu em 1957 em São Paulo e é a primeira mulher negra e brasileira a ser doutora em Física. Em 1993 se tornou também a primeira negra a lecionar no ITA (Instituto Tecnológico da Aeronáutica).  Desde a infância era apaixonada pelos números, e entre os desafios que precisou enfrentar para conseguir estudar, estava o de ser a primeira pessoa da família a ingressar em um curso superior. Assim, Sônia se formou em Física  e fez o mestrado na Universidade Federal de São Carlos,  dissertando sobre Desenvolvimento da Técnica Elipsométrica para Caracterização Ótica de Filmes Finos. Sendo pioneira ao ocupar alguns lugares no mundo científico brasileiro, a doutora não pode desvincular sua trajetória científica de todas as experiências que passou enquanto mulher negra. Assim, assumiu para si o propósito de lutar para que mais pessoas como ela possam realizar seus sonhos e ocuparem espaço no universo científico. Conforme suas palavras: “Quero que outras mulheres e negros olhem para mim e vejam que é possível. Eu combato todos os dias um cenário que contrasta de mim só por estar aqui, mas eu quero mais que isso. Precisamos lutar uns pelos outros. Minha vida é quebrar barreiras.",
        citação:"Meninas, vocês podem ser o que quiserem.",
      },

    };
  
    var content = document.getElementById("content");

  for (var bio in biografias) {

    content.innerHTML +=

      '<div class="card">' +

      '<img src="' +

      biografias[bio].imagem +

      '"/>' +

      "<details>" +

      "<summary>" +

      biografias[bio].nome +

      "</summary>" +

      "<p>" +

      biografias[bio].descricao +

      "</p>" +

      "<blockquote><q>" +

      biografias[bio].citacao +

      "</q></blockquote>" +

      "</details></div>";

  }
  
  }
  
  
  carregaDicionario();