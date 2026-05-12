/* ================================================================
   TRAINER'S LEDGER — Catálogo completo
   Apenas lançamentos FÍSICOS com dados no cartucho/disco/CD-ROM.
   Digitais, eShop-only e Game-Key Cards excluídos por padrão.
================================================================ */

window.MAIN = [
  /* Gen I — Kanto */
  { id:'green',   name:'Pokémon Green Version',                     platform:'Game Boy',           year:1996, region:'JP only',  group:'Gen I — Kanto' },
  { id:'red',     name:'Pokémon Red Version',                       platform:'Game Boy',           year:1996, group:'Gen I — Kanto' },
  { id:'blue',    name:'Pokémon Blue Version',                      platform:'Game Boy',           year:1996, group:'Gen I — Kanto' },
  { id:'yellow',  name:'Pokémon Yellow: Special Pikachu Edition',   platform:'Game Boy',           year:1998, group:'Gen I — Kanto' },
  { id:'fr',      name:'Pokémon FireRed',                           platform:'Game Boy Advance',   year:2004, group:'Gen I — Kanto' },
  { id:'lg',      name:'Pokémon LeafGreen',                         platform:'Game Boy Advance',   year:2004, group:'Gen I — Kanto' },
  { id:'lgpi',    name:"Pokémon: Let's Go, Pikachu!",               platform:'Nintendo Switch',    year:2018, group:'Gen I — Kanto' },
  { id:'lgev',    name:"Pokémon: Let's Go, Eevee!",                 platform:'Nintendo Switch',    year:2018, group:'Gen I — Kanto' },

  /* Gen II — Johto */
  { id:'gold',    name:'Pokémon Gold Version',                      platform:'Game Boy Color',     year:1999, group:'Gen II — Johto' },
  { id:'silver',  name:'Pokémon Silver Version',                    platform:'Game Boy Color',     year:1999, group:'Gen II — Johto' },
  { id:'crystal', name:'Pokémon Crystal Version',                   platform:'Game Boy Color',     year:2000, group:'Gen II — Johto' },
  { id:'hg',      name:'Pokémon HeartGold',                         platform:'Nintendo DS',        year:2009, group:'Gen II — Johto' },
  { id:'ss',      name:'Pokémon SoulSilver',                        platform:'Nintendo DS',        year:2009, group:'Gen II — Johto' },

  /* Gen III — Hoenn */
  { id:'ruby',    name:'Pokémon Ruby Version',                      platform:'Game Boy Advance',   year:2002, group:'Gen III — Hoenn' },
  { id:'sapph',   name:'Pokémon Sapphire Version',                  platform:'Game Boy Advance',   year:2002, group:'Gen III — Hoenn' },
  { id:'emerald', name:'Pokémon Emerald Version',                   platform:'Game Boy Advance',   year:2004, group:'Gen III — Hoenn' },
  { id:'or',      name:'Pokémon Omega Ruby',                        platform:'Nintendo 3DS',       year:2014, group:'Gen III — Hoenn' },
  { id:'as',      name:'Pokémon Alpha Sapphire',                    platform:'Nintendo 3DS',       year:2014, group:'Gen III — Hoenn' },

  /* Gen IV — Sinnoh / Hisui */
  { id:'dia',     name:'Pokémon Diamond Version',                   platform:'Nintendo DS',        year:2006, group:'Gen IV — Sinnoh / Hisui' },
  { id:'pearl',   name:'Pokémon Pearl Version',                     platform:'Nintendo DS',        year:2006, group:'Gen IV — Sinnoh / Hisui' },
  { id:'plat',    name:'Pokémon Platinum Version',                  platform:'Nintendo DS',        year:2008, group:'Gen IV — Sinnoh / Hisui' },
  { id:'bd',      name:'Pokémon Brilliant Diamond',                 platform:'Nintendo Switch',    year:2021, group:'Gen IV — Sinnoh / Hisui' },
  { id:'sp',      name:'Pokémon Shining Pearl',                     platform:'Nintendo Switch',    year:2021, group:'Gen IV — Sinnoh / Hisui' },
  { id:'la',      name:'Pokémon Legends: Arceus',                   platform:'Nintendo Switch',    year:2022, group:'Gen IV — Sinnoh / Hisui' },

  /* Gen V — Unova */
  { id:'blk',     name:'Pokémon Black Version',                     platform:'Nintendo DS',        year:2010, group:'Gen V — Unova' },
  { id:'wht',     name:'Pokémon White Version',                     platform:'Nintendo DS',        year:2010, group:'Gen V — Unova' },
  { id:'blk2',    name:'Pokémon Black Version 2',                   platform:'Nintendo DS',        year:2012, group:'Gen V — Unova' },
  { id:'wht2',    name:'Pokémon White Version 2',                   platform:'Nintendo DS',        year:2012, group:'Gen V — Unova' },

  /* Gen VI — Kalos */
  { id:'x',       name:'Pokémon X',                                 platform:'Nintendo 3DS',       year:2013, group:'Gen VI — Kalos' },
  { id:'y',       name:'Pokémon Y',                                 platform:'Nintendo 3DS',       year:2013, group:'Gen VI — Kalos' },

  /* Gen VII — Alola */
  { id:'sun',     name:'Pokémon Sun',                               platform:'Nintendo 3DS',       year:2016, group:'Gen VII — Alola' },
  { id:'moon',    name:'Pokémon Moon',                              platform:'Nintendo 3DS',       year:2016, group:'Gen VII — Alola' },
  { id:'usun',    name:'Pokémon Ultra Sun',                         platform:'Nintendo 3DS',       year:2017, group:'Gen VII — Alola' },
  { id:'umoon',   name:'Pokémon Ultra Moon',                        platform:'Nintendo 3DS',       year:2017, group:'Gen VII — Alola' },

  /* Gen VIII — Galar */
  { id:'sword',   name:'Pokémon Sword',                             platform:'Nintendo Switch',    year:2019, group:'Gen VIII — Galar' },
  { id:'shield',  name:'Pokémon Shield',                            platform:'Nintendo Switch',    year:2019, group:'Gen VIII — Galar' },

  /* Gen IX — Paldea / Kalos */
  { id:'scarlet', name:'Pokémon Scarlet',                           platform:'Nintendo Switch',    year:2022, group:'Gen IX — Paldea' },
  { id:'violet',  name:'Pokémon Violet',                            platform:'Nintendo Switch',    year:2022, group:'Gen IX — Paldea' },
  { id:'za',      name:'Pokémon Legends: Z-A',                      platform:'Nintendo Switch / Switch 2', year:2025, group:'Gen IX — Paldea',
    tip:'Lançado simultaneamente para Nintendo Switch e Switch 2 como SKUs físicos separados — dois cartuchos distintos. Colecionadores completos podem querer as duas versões.' },
];

/* ================================================================
   SPIN-OFFS COLECIONÁVEIS — apenas físicos com dados no cartucho/disco
   Excluídos: eShop-only, WiiWare, free-to-play digitais, Game-Key Cards
================================================================ */
window.SPINOFF = [
  /* Stadium & Batalha */
  { id:'st1',    name:'Pokémon Stadium',                            platform:'Nintendo 64',        year:1998, group:'Stadium & Batalha' },
  { id:'stjp',   name:'Pokémon Stadium (Japan)',                    platform:'Nintendo 64',        year:1998, region:'JP only', group:'Stadium & Batalha',
    tip:'Completamente diferente do Stadium que chegou nos EUA. Tem apenas 42 Pokémon jogáveis e ficou exclusivo do Japão. O que saiu nos EUA e Europa como "Pokémon Stadium" é, na verdade, o "Pokémon Stadium 2" japonês — ou seja, os nomes cruzaram o Pacífico embaralhados.' },
  { id:'st2',    name:'Pokémon Stadium 2',                          platform:'Nintendo 64',        year:2000, group:'Stadium & Batalha' },
  { id:'col',    name:'Pokémon Colosseum',                          platform:'Nintendo GameCube',  year:2003, group:'Stadium & Batalha' },
  { id:'box',    name:'Pokémon Box: Ruby & Sapphire',               platform:'Nintendo GameCube',  year:2003, group:'Stadium & Batalha' },
  { id:'chan',   name:'Pokémon Channel',                            platform:'Nintendo GameCube',  year:2003, group:'Stadium & Batalha' },
  { id:'xd',     name:'Pokémon XD: Gale of Darkness',               platform:'Nintendo GameCube',  year:2005, group:'Stadium & Batalha' },
  { id:'br',     name:'Pokémon Battle Revolution',                  platform:'Wii',                year:2006, group:'Stadium & Batalha' },
  { id:'pkt',    name:'Pokkén Tournament',                          platform:'Wii U',              year:2015, group:'Stadium & Batalha' },
  { id:'pktdx',  name:'Pokkén Tournament DX',                       platform:'Nintendo Switch',    year:2017, group:'Stadium & Batalha' },

  /* Snap */
  { id:'snap',   name:'Pokémon Snap',                               platform:'Nintendo 64',        year:1999, group:'Snap' },
  { id:'nsnap',  name:'New Pokémon Snap',                           platform:'Nintendo Switch',    year:2021, group:'Snap' },

  /* Trading Card Game */
  { id:'tcg',    name:'Pokémon Trading Card Game',                  platform:'Game Boy Color',     year:1998, group:'Card Game' },
  { id:'tcg2',   name:'Pokémon Card GB2: Here Comes Team GR!',      platform:'Game Boy Color',     year:2001, region:'JP only', group:'Card Game' },

  /* Mystery Dungeon — apenas físicos */
  { id:'mdr',    name:'Pokémon Mystery Dungeon: Red Rescue Team',   platform:'Game Boy Advance',   year:2005, group:'Mystery Dungeon' },
  { id:'mdb',    name:'Pokémon Mystery Dungeon: Blue Rescue Team',  platform:'Nintendo DS',        year:2005, group:'Mystery Dungeon' },
  { id:'mdt',    name:'Pokémon Mystery Dungeon: Explorers of Time', platform:'Nintendo DS',        year:2007, group:'Mystery Dungeon' },
  { id:'mdd',    name:'Pokémon Mystery Dungeon: Explorers of Darkness', platform:'Nintendo DS',    year:2007, group:'Mystery Dungeon' },
  { id:'mdsky',  name:'Pokémon Mystery Dungeon: Explorers of Sky',  platform:'Nintendo DS',        year:2009, group:'Mystery Dungeon' },
  { id:'mdgi',   name:'Pokémon Mystery Dungeon: Gates to Infinity', platform:'Nintendo 3DS',       year:2012, group:'Mystery Dungeon' },
  { id:'mdsmd',  name:'Pokémon Super Mystery Dungeon',              platform:'Nintendo 3DS',       year:2015, group:'Mystery Dungeon' },
  { id:'mddx',   name:'Pokémon Mystery Dungeon: Rescue Team DX',    platform:'Nintendo Switch',    year:2020, group:'Mystery Dungeon' },

  /* Ranger */
  { id:'rng1',   name:'Pokémon Ranger',                             platform:'Nintendo DS',        year:2006, group:'Ranger' },
  { id:'rng2',   name:'Pokémon Ranger: Shadows of Almia',           platform:'Nintendo DS',        year:2008, group:'Ranger' },
  { id:'rng3',   name:'Pokémon Ranger: Guardian Signs',             platform:'Nintendo DS',        year:2010, group:'Ranger' },

  /* Rumble — apenas físicos (Rumble World era eShop-only, excluído) */
  { id:'rumbl',  name:'Pokémon Rumble Blast',                       platform:'Nintendo 3DS',       year:2011, group:'Rumble' },
  { id:'rumbu',  name:'Pokémon Rumble U',                           platform:'Wii U',              year:2013, group:'Rumble' },

  /* PokéPark */
  { id:'pp1',    name:"PokéPark Wii: Pikachu's Adventure",          platform:'Wii',                year:2009, group:'PokéPark' },
  { id:'pp2',    name:'PokéPark 2: Wonders Beyond',                 platform:'Wii',                year:2011, group:'PokéPark' },

  /* Puzzle & Arcade — apenas físicos */
  { id:'pin1',   name:'Pokémon Pinball',                            platform:'Game Boy Color',     year:1999, group:'Puzzle & Arcade' },
  { id:'pzll',   name:'Pokémon Puzzle League',                      platform:'Nintendo 64',        year:2000, group:'Puzzle & Arcade' },
  { id:'pzlc',   name:'Pokémon Puzzle Challenge',                   platform:'Game Boy Color',     year:2000, group:'Puzzle & Arcade' },
  { id:'pin2',   name:'Pokémon Pinball: Ruby & Sapphire',           platform:'Game Boy Advance',   year:2003, group:'Puzzle & Arcade' },
  { id:'dash',   name:'Pokémon Dash',                               platform:'Nintendo DS',        year:2004, group:'Puzzle & Arcade' },
  { id:'troz',   name:'Pokémon Trozei!',                            platform:'Nintendo DS',        year:2005, group:'Puzzle & Arcade' },
  { id:'ptroz',  name:'Pokémon Battle Trozei',                      platform:'Nintendo 3DS',       year:2014, group:'Puzzle & Arcade' },

  /* Interativos físicos */
  { id:'hypik',  name:"Hey You, Pikachu!",                          platform:'Nintendo 64',        year:1998, group:'Pets & Interativos' },
  { id:'ppy',    name:'Pokémon Play It!',                           platform:'PC CD-ROM',          year:1999, group:'Pets & Interativos' },
  { id:'ppyv2',  name:'Pokémon Play It! Version 2',                 platform:'PC CD-ROM',          year:2000, group:'Pets & Interativos' },

  /* Aventura & Estratégia */
  { id:'conq',   name:'Pokémon Conquest',                           platform:'Nintendo DS',        year:2012, group:'Aventura & Estratégia' },
  { id:'type',   name:'Pokémon Typing Adventure',                   platform:'Nintendo DS',        year:2012, group:'Aventura & Estratégia' },
  { id:'art',    name:'Pokémon Art Academy',                        platform:'Nintendo 3DS',       year:2014, group:'Aventura & Estratégia' },
  { id:'det1',   name:'Detective Pikachu',                          platform:'Nintendo 3DS',       year:2018, group:'Aventura & Estratégia' },
  { id:'det2',   name:'Detective Pikachu Returns',                  platform:'Nintendo Switch',    year:2023, group:'Aventura & Estratégia' },

  /* Nintendo Switch 2 */
  { id:'pokopia', name:'Pokémon Pokopia',                           platform:'Nintendo Switch 2',  year:2026, group:'Nintendo Switch 2',
    tip:'Jogo de simulação de vida exclusivo do Switch 2. Atenção: o lançamento físico é um Game-Key Card — o cartucho é apenas uma chave de download; o jogo em si precisa ser baixado pela internet. Não contém dados do jogo no suporte físico, diferente de um cartucho tradicional.' },
];

/* ================================================================
   CONSOLES TEMÁTICOS POKÉMON — edições especiais físicas
   Fonte: bulbapedia.bulbagarden.net/wiki/Pokémon-themed_console_editions
================================================================ */
window.THEMED_CONSOLES = [

  /* Nintendo 64 */
  { id:'con-n64-blue',     name:'Nintendo 64 — Blue Pikachu Edition',              platform:'Nintendo 64',         year:1998, group:'Nintendo 64',
    tip:'N64 azul com relevo de Pikachu no topo. Pé esquerdo do Pikachu = botão de reset; power button = Poké Ball. Acompanha controle azul/amarelo. Não possui a porta de extensão do N64 DD. Lançado na Europa e EUA.' },
  { id:'con-n64-lblue',    name:'Nintendo 64 — Light Blue Pikachu Edition',        platform:'Nintendo 64',         year:1998, region:'JP only', group:'Nintendo 64',
    tip:'Versão azul-claro do Pikachu N64, exclusiva do Japão. Acompanha controle azul/amarelo com logo Pikachu.' },
  { id:'con-n64-orange',   name:'Nintendo 64 — Orange Pikachu Edition',            platform:'Nintendo 64',         year:1998, region:'JP only', group:'Nintendo 64',
    tip:'Versão laranja do Pikachu N64, exclusiva do Japão. Acompanha controle laranja/amarelo com logo Pikachu. Extremamente rara.' },
  { id:'con-n64-pokeman',  name:'Nintendo 64 — Pokémaniac Edition',                platform:'Nintendo 64',         year:1999, region:'AU/EU only', group:'Nintendo 64',
    tip:'Bundle lançado na Austrália e Europa em 1999. Inclui controle amarelo/azul com logo Pokémon e o episódio "I Choose You!" em VHS PAL.' },

  /* Game Boy Light */
  { id:'con-gbl-poke',     name:'Game Boy Light — Special Pokémon Edition',        platform:'Game Boy Light',      year:1998, region:'JP only', group:'Game Boy Light',
    tip:'Edição especial lançada exclusivamente no Pokémon Center Tokyo, para promover o primeiro filme. Exibe Pikachu, Bulbasaur, Horsea e Lapras, com "Pokémon Center Tokyo" gravado na parte inferior.' },

  /* Game Boy Printer */
  { id:'con-gbp-pika',     name:'Game Boy Printer — Pikachu Yellow Edition',       platform:'Game Boy Printer',    year:1998, group:'Game Boy Printer',
    tip:'Versão temática da Game Boy Printer lançada para promover Pokémon Yellow. Exibe silhuetas de Venusaur e Charizard, foto do Pikachu e usa uma Poké Ball como botão de alimentação de papel.' },

  /* Game Boy Color */
  { id:'con-gbc-yellow',   name:'Game Boy Color — Pokémon Yellow Edition',         platform:'Game Boy Color',      year:1998, group:'Game Boy Color',
    tip:'GBC amarelo em bundle com Pokémon Yellow. Exibe Pikachu, Jigglypuff e Togepi. Uma Poké Ball serve como indicador de energia. Na Austrália, vendido separadamente como "Pokémon Special Limited Edition".' },
  { id:'con-gbc-pichu',    name:'Game Boy Color — Pikachu & Pichu Edition',        platform:'Game Boy Color',      year:1999, group:'Game Boy Color',
    tip:'GBC amarelo lançado mundialmente. Exibe Pichu e Pikachu ao lado da tela. A bochecha direita do Pikachu é o indicador de energia.' },
  { id:'con-gbc-gs',       name:'Game Boy Color — Gold/Silver GS Edition',         platform:'Game Boy Color',      year:1999, group:'Game Boy Color',
    tip:'Variante do GBC Pikachu & Pichu com acabamento holográfico que aparece dourado ou prateado dependendo do ângulo e iluminação.' },
  { id:'con-gbc-green',    name:'Game Boy Color — Clear Green Pokémon Edition',    platform:'Game Boy Color',      year:1999, region:'Taiwan only', group:'Game Boy Color',
    tip:'GBC verde transparente vendido apenas em Taiwan. Exibe Pikachu, Jigglypuff e Meowth.' },
  { id:'con-gbc-cblue',    name:'Game Boy Color — Clear Blue Pokémon Edition',     platform:'Game Boy Color',      year:1999, region:'HK only', group:'Game Boy Color',
    tip:'Versão azul transparente do Clear Green GBC. Vendido apenas em Hong Kong.' },
  { id:'con-gbc-3rd',      name:'Game Boy Color — 3rd Anniversary Edition',        platform:'Game Boy Color',      year:1999, region:'JP only', group:'Game Boy Color',
    tip:'GBC laranja e azul criado para o 3º aniversário da franquia Pokémon. Vendido exclusivamente nos Pokémon Centers japoneses. Exibe os starters de Kanto e Pikachu na frente.' },
  { id:'con-gbc-center',   name:'Game Boy Color — Pokémon Center GS Edition',      platform:'Game Boy Color',      year:1999, region:'JP only', group:'Game Boy Color',
    tip:'GBC prateado lançado para promover Gold & Silver. Vendido exclusivamente nos Pokémon Centers japoneses. Exibe starters de Johto e Pikachu.' },

  /* Game Boy Advance */
  { id:'con-gba-suicune',  name:'Game Boy Advance — Suicune Edition',              platform:'Game Boy Advance',    year:2001, region:'JP only', group:'Game Boy Advance',
    tip:'GBA azul-claro lançado nos Pokémon Centers japoneses para promover Crystal Version. Exibe Pikachu e Pichu ao lado do logo GBA.' },
  { id:'con-gba-pcny',     name:'Game Boy Advance — Pokémon Center NY Edition',    platform:'Game Boy Advance',    year:2001, region:'US excl.', group:'Game Boy Advance',
    tip:'GBA dourado lançado exclusivamente no Pokémon Center de Nova York para comemorar sua abertura. Exibe silhuetas de Pichu e Pikachu. Depois vendido nos Pokémon Centers japoneses.' },
  { id:'con-gba-celebi',   name:'Game Boy Advance — Celebi Edition',               platform:'Game Boy Advance',    year:2002, region:'JP only', group:'Game Boy Advance',
    tip:'GBA verde lançado nos Pokémon Centers japoneses para promover o filme "Celebi: The Voice of the Forest". Exibe duas silhuetas de Celebi.' },
  { id:'con-gba-latias',   name:'Game Boy Advance — Latios & Latias Edition',      platform:'Game Boy Advance',    year:2002, region:'JP only', group:'Game Boy Advance',
    tip:'GBA azul e vermelho lançado nos Pokémon Centers japoneses para promover o filme Pokémon Heroes. Exibe silhuetas de Latios e Latias ao lado do logo GBA.' },

  /* Game Boy Advance SP */
  { id:'con-sp-groudon',   name:'GBA SP — Groudon Edition',                        platform:'Game Boy Advance SP', year:2003, region:'US excl.', group:'Game Boy Advance SP',
    tip:'SP vermelho com rosto do Groudon na frente e silhueta por dentro. Lançado no Pokémon Center de Nova York para o lançamento de Pokémon Ruby.' },
  { id:'con-sp-kyogre',    name:'GBA SP — Kyogre Edition',                         platform:'Game Boy Advance SP', year:2003, region:'US excl.', group:'Game Boy Advance SP',
    tip:'SP azul com rosto do Kyogre na frente e silhueta por dentro. Lançado no Pokémon Center de Nova York para o lançamento de Pokémon Sapphire.' },
  { id:'con-sp-torchic',   name:'GBA SP — Torchic Edition',                        platform:'Game Boy Advance SP', year:2003, region:'US excl.', group:'Game Boy Advance SP',
    tip:'SP laranja com silhueta suave de Torchic na frente. Disponível exclusivamente no Pokémon Center de Nova York.' },
  { id:'con-sp-venusaur',  name:'GBA SP — Venusaur Edition',                       platform:'Game Boy Advance SP', year:2004, region:'JP only', group:'Game Boy Advance SP',
    tip:'SP verde com silhueta do Venusaur. Lançado nos Pokémon Centers japoneses para promover LeafGreen Version.' },
  { id:'con-sp-charizard', name:'GBA SP — Charizard Edition',                      platform:'Game Boy Advance SP', year:2004, region:'JP only', group:'Game Boy Advance SP',
    tip:'SP vermelho com silhueta do Charizard. Lançado nos Pokémon Centers japoneses para promover FireRed Version.' },
  { id:'con-sp-rayq',      name:'GBA SP — Rayquaza Edition',                       platform:'Game Boy Advance SP', year:2004, region:'JP only', group:'Game Boy Advance SP',
    tip:'SP verde com silhueta do Rayquaza. Lançado nos Pokémon Centers japoneses para promover Pokémon Emerald.' },
  { id:'con-sp-pika',      name:'GBA SP — Pikachu Edition',                        platform:'Game Boy Advance SP', year:2005, group:'Game Boy Advance SP',
    tip:'SP amarelo com rosto do Pikachu na frente. Lançado nos Pokémon Centers japoneses e depois exclusivamente nas lojas Toys R Us nos EUA.' },

  /* Game Boy micro */
  { id:'con-gbm-pika',     name:'Game Boy micro — Pikachu Edition',                platform:'Game Boy micro',      year:2005, region:'JP only', group:'Game Boy micro',
    tip:'GB micro preto e vermelho lançado no Japão em novembro de 2005 para celebrar Pokémon Mystery Dungeon: Red Rescue Team. Exibe silhueta metálica de Pikachu acima dos botões A e B.' },

  /* Nintendo GameCube */
  { id:'con-gc-xd',        name:'Nintendo GameCube — Pokémon XD Edition',          platform:'Nintendo GameCube',   year:2005, group:'Nintendo GameCube',
    tip:'GameCube temático lançado no Japão e EUA para Pokémon XD: Gale of Darkness. Shadow Lugia é exibido na tampa. Um dos GameCubes coloridos mais procurados.' },
  { id:'con-gc-chan',       name:'Nintendo GameCube — Pokémon Channel Edition',     platform:'Nintendo GameCube',   year:2003, region:'JP only', group:'Nintendo GameCube',
    tip:'Edição especial do GameCube para o lançamento de Pokémon Channel no Japão.' },

  /* Nintendo DS */
  { id:'con-ds-pokepark',  name:'Nintendo DS — PokéPark Edition',                  platform:'Nintendo DS',         year:2005, group:'Nintendo DS',
    tip:'DS azul disponível exclusivamente no PokéPark no Japão e depois nas lojas Walmart nos EUA. O logo do PokéPark está na frente e uma silhueta de Pikachu no interior.' },
  { id:'con-ds-mew',       name:'Nintendo DS — Mew Edition',                       platform:'Nintendo DS',         year:2004, region:'JP only', group:'Nintendo DS',
    tip:'DS rosa lançado exclusivamente no Japão. Silhuetas de Mew são exibidas na frente e por dentro do sistema.' },

  /* Nintendo DS Lite */
  { id:'con-dsl-10th',     name:'Nintendo DS Lite — 10th Anniversary Edition',     platform:'Nintendo DS Lite',    year:2006, region:'Apenas 2 unidades', group:'Nintendo DS Lite',
    tip:'DS Lite cravejado de diamantes entregue aos dois vencedores do "Pokémon 10th Anniversary Journey Across America". Apenas dois existem no mundo — o item mais raro desta lista.' },
  { id:'con-dsl-diapal',   name:'Nintendo DS Lite — Dialga & Palkia Edition',      platform:'Nintendo DS Lite',    year:2007, group:'Nintendo DS Lite',
    tip:'DS Lite preto com Dialga e Palkia na frente. Lançado exclusivamente nos Pokémon Centers do Japão e EUA.' },
  { id:'con-dsl-pika',     name:'Nintendo DS Lite — Pikachu Edition',              platform:'Nintendo DS Lite',    year:2007, group:'Nintendo DS Lite',
    tip:'DS Lite amarelo com rosto do Pikachu na frente. Lançado via sorteio nos Pokémon Centers japoneses e depois na Europa.' },
  { id:'con-dsl-girat',    name:'Nintendo DS Lite — Giratina Edition',             platform:'Nintendo DS Lite',    year:2008, region:'JP/EU', group:'Nintendo DS Lite',
    tip:'DS Lite branco com Giratina na frente. Disponível apenas para membros do Pokémon Daisuki Club. Bundlado com Pokémon Platinum.' },
  { id:'con-dsl-turtwig',  name:'Nintendo DS Lite — Daisuki Turtwig Edition',      platform:'Nintendo DS Lite',    year:2007, region:'JP only', group:'Nintendo DS Lite',
    tip:'Edição limitada do Daisuki Club com Turtwig. Apenas para membros do Pokémon Daisuki Club no Japão.' },
  { id:'con-dsl-chimchar', name:'Nintendo DS Lite — Daisuki Chimchar Edition',     platform:'Nintendo DS Lite',    year:2007, region:'JP only', group:'Nintendo DS Lite',
    tip:'Edição limitada do Daisuki Club com Chimchar. Apenas para membros do Pokémon Daisuki Club no Japão.' },
  { id:'con-dsl-piplup',   name:'Nintendo DS Lite — Daisuki Piplup Edition',       platform:'Nintendo DS Lite',    year:2007, region:'JP only', group:'Nintendo DS Lite',
    tip:'Edição limitada do Daisuki Club com Piplup. Apenas para membros do Pokémon Daisuki Club no Japão.' },
  { id:'con-dsl-worlds08', name:'Nintendo DS Lite — Worlds 2008 Edition',          platform:'Nintendo DS Lite',    year:2008, region:'Prêmio', group:'Nintendo DS Lite',
    tip:'DS Lite laranja com arte do Campeonato Mundial 2008. Premiado aos 32 melhores colocados no VGC Worlds 2008.' },

  /* Nintendo DSi */
  { id:'con-dsi-worlds09', name:'Nintendo DSi — Worlds 2009 Edition',              platform:'Nintendo DSi',        year:2009, region:'Prêmio', group:'Nintendo DSi',
    tip:'DSi azul com arte do Campeonato Mundial 2009. Premiado aos 32 melhores colocados no VGC Worlds 2009.' },
  { id:'con-dsi-black',    name:'Nintendo DSi — Pokémon Black Bundle',             platform:'Nintendo DSi',        year:2011, group:'Nintendo DSi',
    tip:'DSi preto com arte de Reshiram e Zekrom na frente. Bundlado com Pokémon Black Version.' },
  { id:'con-dsi-white',    name:'Nintendo DSi — Pokémon White Bundle',             platform:'Nintendo DSi',        year:2011, group:'Nintendo DSi',
    tip:'DSi branco com arte de Reshiram e Zekrom na frente. Bundlado com Pokémon White Version.' },
  { id:'con-dsi-sky',      name:'Nintendo DSi — Explorers of Sky Edition',         platform:'Nintendo DSi',        year:2009, region:'Prêmio único', group:'Nintendo DSi',
    tip:'DSi temático de Mystery Dungeon: Explorers of Sky. Entregue como prêmio para a melhor obra de arte natalina com tema Nintendo/Pokémon. Peça única.' },

  /* Nintendo DSi XL */
  { id:'con-dsixl-w10',    name:'Nintendo DSi XL — Worlds 2010 Edition',           platform:'Nintendo DSi XL',     year:2010, region:'Prêmio', group:'Nintendo DSi XL',
    tip:'DSi XL amarelo com arte do Campeonato Mundial 2010. Premiado aos 32 melhores colocados no VGC Worlds 2010.' },

  /* Nintendo 3DS XL */
  { id:'con-3xl-xyred',    name:'Nintendo 3DS XL — Xerneas & Yveltal Red Edition', platform:'Nintendo 3DS XL',    year:2013, group:'Nintendo 3DS XL',
    tip:'3DS XL vermelho com Xerneas e Yveltal. Lançado internacionalmente para X & Y. Bundlado com o jogo no Japão.' },
  { id:'con-3xl-xyblue',   name:'Nintendo 3DS XL — Xerneas & Yveltal Blue Edition',platform:'Nintendo 3DS XL',    year:2013, group:'Nintendo 3DS XL',
    tip:'3DS XL azul com Xerneas e Yveltal. Lançado internacionalmente para X & Y. Bundlado com o jogo no Japão.' },
  { id:'con-3xl-gold',     name:'Nintendo 3DS XL — Premium Gold Edition',          platform:'Nintendo 3DS XL',    year:2013, region:'JP only', group:'Nintendo 3DS XL',
    tip:'3DS XL dourado vendido exclusivamente no Japão. Bundlado com Pokémon X ou Y à escolha.' },
  { id:'con-3xl-pika',     name:'Nintendo 3DS XL — Pikachu Edition',               platform:'Nintendo 3DS XL',    year:2013, group:'Nintendo 3DS XL',
    tip:'3DS XL amarelo com rosto do Pikachu na frente e cauda nas costas. Lançado nos EUA, Canadá, Europa e Japão.' },
  { id:'con-3xl-eevee',    name:'Nintendo 3DS XL — Eevee Edition',                 platform:'Nintendo 3DS XL',    year:2014, region:'JP only', group:'Nintendo 3DS XL',
    tip:'3DS XL na cor do Eevee, exclusivo do Japão. As costas do sistema exibem o Eevee.' },
  { id:'con-3xl-char',     name:'Nintendo 3DS XL — Charizard Edition',             platform:'Nintendo 3DS XL',    year:2014, region:'JP only', group:'Nintendo 3DS XL',
    tip:'3DS XL preto exclusivo do Japão. Frente com chama do Charizard; costas com o corpo completo. Um dos mais cobiçados por colecionadores.' },
  { id:'con-3xl-groudon',  name:'Nintendo 3DS XL — Primal Groudon Edition',        platform:'Nintendo 3DS XL',    year:2014, region:'US excl.', group:'Nintendo 3DS XL',
    tip:'3DS XL vermelho temático do Primal Groudon. Disponível apenas nos EUA via sorteio na GameStop para ORAS.' },
  { id:'con-3xl-kyogre',   name:'Nintendo 3DS XL — Primal Kyogre Edition',         platform:'Nintendo 3DS XL',    year:2014, region:'US excl.', group:'Nintendo 3DS XL',
    tip:'3DS XL azul temático do Primal Kyogre. Disponível apenas nos EUA via sorteio na GameStop para ORAS.' },
  { id:'con-3xl-trozeiw',  name:'Nintendo 3DS XL — Battle Trozei White Edition',   platform:'Nintendo 3DS XL',    year:2014, region:'JP only', group:'Nintendo 3DS XL',
    tip:'3DS XL branco baseado em Pokémon Battle Trozei. Exclusivo do Pokémon Daisuki Club no Japão.' },
  { id:'con-3xl-trozeib',  name:'Nintendo 3DS XL — Battle Trozei Black Edition',   platform:'Nintendo 3DS XL',    year:2014, region:'JP only', group:'Nintendo 3DS XL',
    tip:'3DS XL preto baseado em Pokémon Battle Trozei. Exclusivo do Pokémon Daisuki Club no Japão.' },
  { id:'con-3xl-dragon',   name:'Nintendo 3DS XL — Dragon King Competition Edition',platform:'Nintendo 3DS XL',   year:2014, region:'Prêmio único', group:'Nintendo 3DS XL',
    tip:'3DS XL com design Dragon King exclusivo do Japão. Entregue apenas ao vencedor do torneio Dragon King de 2014. Peça única.' },

  /* New Nintendo 3DS (cover plates) */
  { id:'con-n3ds-orascov',  name:'New Nintendo 3DS — OR/AS Cover Plates',          platform:'New Nintendo 3DS',   year:2014, region:'JP only', group:'New Nintendo 3DS',
    tip:'Cover plates vermelhas/azuis transparentes com Groudon/Primal Groudon e Kyogre/Primal Kyogre. Lançadas para promover Omega Ruby e Alpha Sapphire.' },
  { id:'con-n3ds-pikapty',  name:'New Nintendo 3DS — Pikachu Party Cover Plates',  platform:'New Nintendo 3DS',   year:2015, region:'JP only', group:'New Nintendo 3DS',
    tip:'Cover plates amarelas com vários Pikachus diferentes. Vendidas nos Pokémon Centers japoneses.' },
  { id:'con-n3ds-smdc',     name:'New Nintendo 3DS — Super Mystery Dungeon Plates', platform:'New Nintendo 3DS',   year:2015, region:'JP only', group:'New Nintendo 3DS',
    tip:'Cover plates com personagens de Pokémon Super Mystery Dungeon. Vendidas para promover o jogo.' },
  { id:'con-n3ds-20thred',  name:'New Nintendo 3DS — 20th Anniv. Red/Green Plates', platform:'New Nintendo 3DS',   year:2016, group:'New Nintendo 3DS',
    tip:'Cover plates com sprites Gen 1 de todos os 150 Pokémon originais, comemorando o 20º aniversário da franquia.' },
  { id:'con-n3ds-20char',   name:'New Nintendo 3DS — 20th Anniv. Charizard Plates', platform:'New Nintendo 3DS',   year:2016, group:'New Nintendo 3DS',
    tip:'Cover plates com Charizard do box art de Pokémon Red, comemorando o 20º aniversário.' },
  { id:'con-n3ds-20blast',  name:'New Nintendo 3DS — 20th Anniv. Blastoise Plates', platform:'New Nintendo 3DS',   year:2016, group:'New Nintendo 3DS',
    tip:'Cover plates com Blastoise do box art de Pokémon Blue, comemorando o 20º aniversário.' },

  /* New Nintendo 3DS XL */
  { id:'con-n3xl-soluna',   name:'New Nintendo 3DS XL — Solgaleo & Lunala Edition', platform:'New Nintendo 3DS XL',year:2016, region:'JP only', group:'New Nintendo 3DS XL',
    tip:'New 3DS XL preto temático de Solgaleo e Lunala. Lançado exclusivamente no Japão para Sun & Moon.' },
  { id:'con-n3xl-pika',     name:'New Nintendo 3DS XL — Pikachu Edition',           platform:'New Nintendo 3DS XL',year:2016, region:'JP only', group:'New Nintendo 3DS XL',
    tip:'New 3DS XL amarelo com tema de Pikachu. Lançado exclusivamente no Japão para Sun & Moon.' },

  /* Nintendo 2DS */
  { id:'con-2ds-sunmoon',   name:'Nintendo 2DS — Sun & Moon Light Blue Edition',    platform:'Nintendo 2DS',        year:2016, region:'JP/EU', group:'Nintendo 2DS',
    tip:'2DS azul-claro com silhueta de Pikachu na frente e silhuetas de Rowlet, Litten e Popplio nas costas. Lançado no Japão e Europa para Sun & Moon. Versão europeia com jogo pré-instalado.' },

  /* New Nintendo 2DS XL */
  { id:'con-2dxl-pokeball', name:'New Nintendo 2DS XL — Poké Ball Edition',         platform:'New Nintendo 2DS XL', year:2018, group:'New Nintendo 2DS XL',
    tip:'New 2DS XL vermelho e branco com design de Poké Ball nas costas da tela.' },
  { id:'con-2dxl-pika',     name:'New Nintendo 2DS XL — Pikachu Edition',           platform:'New Nintendo 2DS XL', year:2018, group:'New Nintendo 2DS XL',
    tip:'New 2DS XL amarelo e marrom com rosto de Pikachu nas costas da tela.' },

  /* Nintendo Switch */
  { id:'con-sw-pikaevee',   name:"Nintendo Switch — Let's Go Pikachu & Eevee Edition", platform:'Nintendo Switch',   year:2018, group:'Nintendo Switch',
    tip:"Switch marrom e amarelo com Pikachu e Eevee no dock. Joy-Cons amarelo e marrom temáticos. Bundlado com download de Let's Go. Acompanhava o Poké Ball Plus na embalagem completa." },

  /* Nintendo Switch Lite */
  { id:'con-swl-zaczan',    name:'Nintendo Switch Lite — Zacian & Zamazenta Edition', platform:'Nintendo Switch Lite',year:2019, group:'Nintendo Switch Lite',
    tip:'Switch Lite cinza, magenta e azul com Zacian e Zamazenta nas costas. Primeira edição temática do Switch Lite, lançada para Sword & Shield.' },
  { id:'con-swl-diapal',    name:'Nintendo Switch Lite — Dialga & Palkia Edition',   platform:'Nintendo Switch Lite',year:2021, group:'Nintendo Switch Lite',
    tip:'Switch Lite cinza escuro metálico com dourado e prata, exibindo Dialga e Palkia. Lançado para Brilliant Diamond & Shining Pearl.' },

  /* Nintendo Switch OLED */
  { id:'con-swoled-sv',     name:'Nintendo Switch OLED — Scarlet & Violet Edition',  platform:'Nintendo Switch OLED',year:2022, group:'Nintendo Switch OLED',
    tip:'Switch OLED roxo e laranja com Koraidon e Miraidon no dock. Emblemas da Naranja Academy e Uva Academy nos Joy-Cons, com decalques temáticos nas costas.' },

  /* Sega Pico */
  { id:'con-sega-pika',     name:'Sega Pico — Pikachu Edition',                      platform:'Sega Pico',           year:2003, region:'JP only', group:'Sega Pico',
    tip:"Sega Pico amarelo com rosto do Pikachu na frente. Atenção: o console Sega Pico foi lançado originalmente em 1993 — mas a edição temática Pokémon data de 2003, quando o jogo 'Pokémon Advanced Generation: I've Begun Hiragana and Katakana' foi lançado no Japão. O único console Sega temático de Pokémon." },
];