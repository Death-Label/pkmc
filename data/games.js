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
