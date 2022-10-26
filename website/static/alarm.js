const coins = ["ETHBTC", "LTCBTC", "BNBBTC", "NEOBTC", "QTUMETH", "EOSETH", "SNTETH", "BNTETH", "BCCBTC", "GASBTC", "BNBETH", "BTCUSDT", "ETHUSDT", "HSRBTC", "OAXETH", "DNTETH", "MCOETH", "ICNETH", "MCOBTC", "WTCBTC", "WTCETH", "LRCBTC", "LRCETH", "QTUMBTC", "YOYOBTC", "OMGBTC", "OMGETH", "ZRXBTC", "ZRXETH", "STRATBTC", "STRATETH", "SNGLSBTC", "SNGLSETH", "BQXBTC", "BQXETH", "KNCBTC", "KNCETH", "FUNBTC", "FUNETH", "SNMBTC", "SNMETH", "NEOETH", "IOTABTC", "IOTAETH", "LINKBTC", "LINKETH", "XVGBTC", "XVGETH", "SALTBTC", "SALTETH", "MDABTC", "MDAETH", "MTLBTC", "MTLETH", "SUBBTC", "SUBETH", "EOSBTC", "SNTBTC", "ETCETH", "ETCBTC", "MTHBTC", "MTHETH", "ENGBTC", "ENGETH", "DNTBTC", "ZECBTC", "ZECETH", "BNTBTC", "ASTBTC", "ASTETH", "DASHBTC", "DASHETH", "OAXBTC", "ICNBTC", "BTGBTC", "BTGETH", "EVXBTC", "EVXETH", "REQBTC", "REQETH", "VIBBTC", "VIBETH", "HSRETH", "TRXBTC", "TRXETH", "POWRBTC", "POWRETH", "ARKBTC", "ARKETH", "YOYOETH", "XRPBTC", "XRPETH", "MODBTC", "MODETH", "ENJBTC", "ENJETH", "STORJBTC", "STORJETH", "BNBUSDT", "VENBNB", "YOYOBNB", "POWRBNB", "VENBTC", "VENETH", "KMDBTC", "KMDETH", "NULSBNB", "RCNBTC", "RCNETH", "RCNBNB", "NULSBTC", "NULSETH", "RDNBTC", "RDNETH", "RDNBNB", "XMRBTC", "XMRETH", "DLTBNB", "WTCBNB", "DLTBTC", "DLTETH", "AMBBTC", "AMBETH", "AMBBNB", "BCCETH", "BCCUSDT", "BCCBNB", "BATBTC", "BATETH", "BATBNB", "BCPTBTC", "BCPTETH", "BCPTBNB", "ARNBTC", "ARNETH", "GVTBTC", "GVTETH", "CDTBTC", "CDTETH", "GXSBTC", "GXSETH", "NEOUSDT", "NEOBNB", "POEBTC", "POEETH", "QSPBTC", "QSPETH", "QSPBNB", "BTSBTC", "BTSETH", "BTSBNB", "XZCBTC", "XZCETH", "XZCBNB", "LSKBTC", "LSKETH", "LSKBNB", "TNTBTC", "TNTETH", "FUELBTC", "FUELETH", "MANABTC", "MANAETH", "BCDBTC", "BCDETH", "DGDBTC", "DGDETH", "IOTABNB", "ADXBTC", "ADXETH", "ADXBNB", "ADABTC", "ADAETH", "PPTBTC", "PPTETH", "CMTBTC", "CMTETH", "CMTBNB", "XLMBTC", "XLMETH", "XLMBNB", "CNDBTC", "CNDETH", "CNDBNB", "LENDBTC", "LENDETH", "WABIBTC", "WABIETH", "WABIBNB", "LTCETH", "LTCUSDT", "LTCBNB", "TNBBTC", "TNBETH", "WAVESBTC", "WAVESETH", "WAVESBNB", "GTOBTC", "GTOETH", "GTOBNB", "ICXBTC", "ICXETH", "ICXBNB", "OSTBTC", "OSTETH", "OSTBNB", "ELFBTC", "ELFETH", "AIONBTC", "AIONETH", "AIONBNB", "NEBLBTC", "NEBLBNB", "BRDBTC", "BRDETH", "BRDBNB", "MCOBNB", "EDOBTC", "EDOETH", "WINGSBTC", "WINGSETH", "NAVBTC", "NAVETH", "NAVBNB", "LUNBTC", "LUNETH", "TRIGBTC", "TRIGETH", "TRIGBNB", "APPCBTC", "APPCETH", "APPCBNB", "VIBEBTC", "VIBEETH", "RLCBTC", "RLCETH", "RLCBNB", "INSBTC", "INSETH", "PIVXBTC", "PIVXBNB", "IOSTBTC", "IOSTETH", "CHATBTC", "CHATETH", "STEEMBTC", "STEEMETH", "STEEMBNB", "NANOBTC", "NANOETH", "NANOBNB", "VIABTC", "VIAETH", "VIABNB", "BLZBTC", "BLZETH", "BLZBNB", "AEBTC", "AEETH", "AEBNB", "RPXBTC", "RPXETH", "RPXBNB", "NCASHBTC", "NCASHETH", "NCASHBNB", "POABTC", "POAETH", "POABNB", "ZILBTC", "ZILETH", "ZILBNB", "ONTBTC", "ONTETH", "ONTBNB", "STORMBTC", "STORMETH", "STORMBNB", "QTUMBNB", "QTUMUSDT", "XEMBTC", "XEMETH", "XEMBNB", "WANBTC", "WANETH", "WANBNB", "WPRBTC", "WPRETH", "QLCBTC", "QLCETH", "SYSBTC", "SYSETH", "SYSBNB", "QLCBNB", "GRSBTC", "GRSETH", "ADAUSDT", "ADABNB", "CLOAKBTC", "CLOAKETH", "GNTBTC", "GNTETH", "GNTBNB", "LOOMBTC", "LOOMETH", "LOOMBNB", "XRPUSDT", "BCNBTC", "BCNETH", "BCNBNB", "REPBTC", "REPBNB", "BTCTUSD", "TUSDBTC", "ETHTUSD", "TUSDETH", "TUSDBNB", "ZENBTC", "ZENETH", "ZENBNB", "SKYBTC", "SKYETH", "SKYBNB", "EOSUSDT", "EOSBNB", "CVCBTC", "CVCETH", "CVCBNB", "THETABTC", "THETAETH", "THETABNB", "XRPBNB", "TUSDUSDT", "IOTAUSDT", "XLMUSDT", "IOTXBTC", "IOTXETH", "QKCBTC", "QKCETH", "AGIBTC", "AGIETH", "AGIBNB", "NXSBTC", "NXSETH", "NXSBNB", "ENJBNB", "DATABTC", "DATAETH", "ONTUSDT", "TRXBNB", "TRXUSDT", "ETCUSDT", "ETCBNB", "ICXUSDT", "SCBTC", "SCETH", "NPXSBTC", "NPXSETH", "VENUSDT", "KEYBTC", "KEYETH", "NASBTC", "NASETH", "NASBNB", "MFTBTC", "MFTETH", "MFTBNB", "DENTBTC", "DENTETH", "ARDRBTC", "ARDRETH", "ARDRBNB", "NULSUSDT", "HOTBTC", "HOTETH", "VETBTC", "VETETH", "VETUSDT", "VETBNB", "DOCKBTC", "DOCKETH", "POLYBTC", "POLYBNB", "PHXBTC", "PHXETH", "PHXBNB", "HCBTC", "HCETH", "GOBTC", "GOBNB", "PAXBTC", "PAXBNB", "PAXUSDT", "PAXETH", "RVNBTC", "DCRBTC", "DCRBNB", "USDCBNB", "MITHBTC", "MITHBNB", "BCHABCBTC", "BCHSVBTC", "BCHABCUSDT", "BCHSVUSDT", "BNBPAX", "BTCPAX", "ETHPAX", "XRPPAX", "EOSPAX", "XLMPAX", "RENBTC", "RENBNB", "BNBTUSD", "XRPTUSD", "EOSTUSD", "XLMTUSD", "BNBUSDC", "BTCUSDC", "ETHUSDC", "XRPUSDC", "EOSUSDC", "XLMUSDC", "USDCUSDT", "ADATUSD", "TRXTUSD", "NEOTUSD", "TRXXRP", "XZCXRP", "PAXTUSD", "USDCTUSD", "USDCPAX", "LINKUSDT", "LINKTUSD", "LINKPAX", "LINKUSDC", "WAVESUSDT", "WAVESTUSD", "WAVESPAX", "WAVESUSDC", "BCHABCTUSD", "BCHABCPAX", "BCHABCUSDC", "BCHSVTUSD", "BCHSVPAX", "BCHSVUSDC", "LTCTUSD", "LTCPAX", "LTCUSDC", "TRXPAX", "TRXUSDC", "BTTBTC", "BTTBNB", "BTTUSDT", "BNBUSDS", "BTCUSDS", "USDSUSDT", "USDSPAX", "USDSTUSD", "USDSUSDC", "BTTPAX", "BTTTUSD", "BTTUSDC", "ONGBNB", "ONGBTC", "ONGUSDT", "HOTBNB", "HOTUSDT", "ZILUSDT", "ZRXBNB", "ZRXUSDT", "FETBNB", "FETBTC", "FETUSDT", "BATUSDT", "XMRBNB", "XMRUSDT", "ZECBNB", "ZECUSDT", "ZECPAX", "ZECTUSD", "ZECUSDC", "IOSTUSDT", "CELRBNB", "CELRBTC", "CELRUSDT", "ADAPAX", "ADAUSDC", "NEOPAX", "NEOUSDC", "DASHBNB", "DASHUSDT", "NANOUSDT", "OMGBNB", "OMGUSDT", "THETAUSDT", "ENJUSDT", "MITHUSDT", "MATICBNB", "MATICBTC", "MATICUSDT", "ATOMBNB", "ATOMBTC", "ATOMUSDT", "ATOMUSDC", "ATOMPAX", "ATOMTUSD", "ETCUSDC", "ETCPAX", "ETCTUSD", "BATUSDC", "BATPAX", "BATTUSD", "PHBBNB", "PHBBTC", "PHBUSDC", "PHBTUSD", "PHBPAX", "TFUELBNB", "TFUELBTC", "TFUELUSDT", "TFUELUSDC", "TFUELTUSD", "TFUELPAX", "ONEBNB", "ONEBTC", "ONEUSDT", "ONETUSD", "ONEPAX", "ONEUSDC", "FTMBNB", "FTMBTC", "FTMUSDT", "FTMTUSD", "FTMPAX", "FTMUSDC", "BTCBBTC", "BCPTTUSD", "BCPTPAX", "BCPTUSDC", "ALGOBNB", "ALGOBTC", "ALGOUSDT", "ALGOTUSD", "ALGOPAX", "ALGOUSDC", "USDSBUSDT", "USDSBUSDS", "GTOUSDT", "GTOPAX", "GTOTUSD", "GTOUSDC", "ERDBNB", "ERDBTC", "ERDUSDT", "ERDPAX", "ERDUSDC", "DOGEBNB", "DOGEBTC", "DOGEUSDT", "DOGEPAX", "DOGEUSDC", "DUSKBNB", "DUSKBTC", "DUSKUSDT", "DUSKUSDC", "DUSKPAX", "BGBPUSDC", "ANKRBNB", "ANKRBTC", "ANKRUSDT", "ANKRTUSD", "ANKRPAX", "ANKRUSDC", "ONTPAX", "ONTUSDC", "WINBNB", "WINBTC", "WINUSDT", "WINUSDC", "COSBNB", "COSBTC", "COSUSDT", "TUSDBTUSD", "NPXSUSDT", "NPXSUSDC", "COCOSBNB", "COCOSBTC", "COCOSUSDT", "MTLUSDT", "TOMOBNB", "TOMOBTC", "TOMOUSDT", "TOMOUSDC", "PERLBNB", "PERLBTC", "PERLUSDC", "PERLUSDT", "DENTUSDT", "MFTUSDT", "KEYUSDT", "STORMUSDT", "DOCKUSDT", "WANUSDT", "FUNUSDT", "CVCUSDT", "BTTTRX", "WINTRX", "CHZBNB", "CHZBTC", "CHZUSDT", "BANDBNB", "BANDBTC", "BANDUSDT", "BNBBUSD", "BTCBUSD", "BUSDUSDT", "BEAMBNB", "BEAMBTC", "BEAMUSDT", "XTZBNB", "XTZBTC", "XTZUSDT", "RENUSDT", "RVNUSDT", "HCUSDT", "HBARBNB", "HBARBTC", "HBARUSDT", "NKNBNB", "NKNBTC", "NKNUSDT", "XRPBUSD", "ETHBUSD", "BCHABCBUSD", "LTCBUSD", "LINKBUSD", "ETCBUSD", "STXBNB", "STXBTC", "STXUSDT", "KAVABNB", "KAVABTC", "KAVAUSDT", "BUSDNGN", "BNBNGN", "BTCNGN", "ARPABNB", "ARPABTC", "ARPAUSDT", "TRXBUSD", "EOSBUSD", "IOTXUSDT", "RLCUSDT", "MCOUSDT", "XLMBUSD", "ADABUSD", "CTXCBNB", "CTXCBTC", "CTXCUSDT", "BCHBNB", "BCHBTC", "BCHUSDT", "BCHUSDC", "BCHTUSD", "BCHPAX", "BCHBUSD", "BTCRUB", "ETHRUB", "XRPRUB", "BNBRUB", "TROYBNB", "TROYBTC", "TROYUSDT", "BUSDRUB", "QTUMBUSD", "VETBUSD", "VITEBNB", "VITEBTC", "VITEUSDT", "FTTBNB", "FTTBTC", "FTTUSDT", "BTCTRY", "BNBTRY", "BUSDTRY", "ETHTRY", "XRPTRY", "USDTTRY", "USDTRUB", "BTCEUR", "ETHEUR", "BNBEUR", "XRPEUR", "EURBUSD", "EURUSDT", "OGNBNB", "OGNBTC", "OGNUSDT", "DREPBNB", "DREPBTC", "DREPUSDT", "BULLUSDT", "BULLBUSD", "BEARUSDT", "BEARBUSD", "ETHBULLUSDT", "ETHBULLBUSD", "ETHBEARUSDT", "ETHBEARBUSD", "TCTBNB", "TCTBTC", "TCTUSDT", "WRXBNB", "WRXBTC", "WRXUSDT", "ICXBUSD", "BTSUSDT", "BTSBUSD", "LSKUSDT", "BNTUSDT", "BNTBUSD", "LTOBNB", "LTOBTC", "LTOUSDT", "ATOMBUSD", "DASHBUSD", "NEOBUSD", "WAVESBUSD", "XTZBUSD", "EOSBULLUSDT", "EOSBULLBUSD", "EOSBEARUSDT", "EOSBEARBUSD", "XRPBULLUSDT", "XRPBULLBUSD", "XRPBEARUSDT", "XRPBEARBUSD", "BATBUSD", "ENJBUSD", "NANOBUSD", "ONTBUSD", "RVNBUSD", "STRATBUSD", "STRATBNB", "STRATUSDT", "AIONBUSD", "AIONUSDT", "MBLBNB", "MBLBTC", "MBLUSDT", "COTIBNB", "COTIBTC", "COTIUSDT", "ALGOBUSD", "BTTBUSD", "TOMOBUSD", "XMRBUSD", "ZECBUSD", "BNBBULLUSDT", "BNBBULLBUSD", "BNBBEARUSDT", "BNBBEARBUSD", "STPTBNB", "STPTBTC", "STPTUSDT", "BTCZAR", "ETHZAR", "BNBZAR", "USDTZAR", "BUSDZAR", "BTCBKRW", "ETHBKRW", "BNBBKRW", "WTCUSDT", "DATABUSD", "DATAUSDT", "XZCUSDT", "SOLBNB", "SOLBTC", "SOLUSDT", "SOLBUSD", "BTCIDRT", "BNBIDRT", "USDTIDRT", "BUSDIDRT", "CTSIBTC", "CTSIUSDT", "CTSIBNB", "CTSIBUSD", "HIVEBNB", "HIVEBTC", "HIVEUSDT", "CHRBNB", "CHRBTC", "CHRUSDT", "BTCUPUSDT", "BTCDOWNUSDT", "GXSUSDT", "ARDRUSDT", "ERDBUSD", "LENDUSDT", "HBARBUSD", "MATICBUSD", "WRXBUSD", "ZILBUSD", "MDTBNB", "MDTBTC", "MDTUSDT", "STMXBTC", "STMXETH", "STMXUSDT", "KNCBUSD", "KNCUSDT", "REPBUSD", "REPUSDT", "LRCBUSD", "LRCUSDT", "IQBNB", "IQBUSD", "PNTBTC", "PNTUSDT", "BTCGBP", "ETHGBP", "XRPGBP", "BNBGBP", "GBPBUSD", "DGBBTC", "DGBBUSD", "BTCUAH", "USDTUAH", "COMPBTC", "COMPBNB", "COMPBUSD", "COMPUSDT", "BTCBIDR", "ETHBIDR", "BNBBIDR", "BUSDBIDR", "USDTBIDR", "BKRWUSDT", "BKRWBUSD", "SCUSDT", "ZENUSDT", "SXPBTC", "SXPBNB", "SXPBUSD", "SNXBTC", "SNXBNB", "SNXBUSD", "SNXUSDT", "ETHUPUSDT", "ETHDOWNUSDT", "ADAUPUSDT", "ADADOWNUSDT", "LINKUPUSDT", "LINKDOWNUSDT", "VTHOBNB", "VTHOBUSD", "VTHOUSDT", "DCRBUSD", "DGBUSDT", "GBPUSDT", "STORJBUSD", "SXPUSDT", "IRISBNB", "IRISBTC", "IRISBUSD", "MKRBNB", "MKRBTC", "MKRUSDT", "MKRBUSD", "DAIBNB", "DAIBTC", "DAIUSDT", "DAIBUSD", "RUNEBNB", "RUNEBTC", "RUNEBUSD", "MANABUSD", "DOGEBUSD", "LENDBUSD", "ZRXBUSD", "DCRUSDT", "STORJUSDT", "XRPBKRW", "ADABKRW", "BTCAUD", "ETHAUD", "AUDBUSD", "FIOBNB", "FIOBTC", "FIOBUSD", "BNBUPUSDT", "BNBDOWNUSDT", "XTZUPUSDT", "XTZDOWNUSDT", "AVABNB", "AVABTC", "AVABUSD", "USDTBKRW", "BUSDBKRW", "IOTABUSD", "MANAUSDT", "XRPAUD", "BNBAUD", "AUDUSDT", "BALBNB", "BALBTC", "BALBUSD", "YFIBNB", "YFIBTC", "YFIBUSD", "YFIUSDT", "BLZBUSD", "KMDBUSD", "BALUSDT", "BLZUSDT", "IRISUSDT", "KMDUSDT", "BTCDAI", "ETHDAI", "BNBDAI", "USDTDAI", "BUSDDAI", "JSTBNB", "JSTBTC", "JSTBUSD", "JSTUSDT", "SRMBNB", "SRMBTC", "SRMBUSD", "SRMUSDT", "ANTBNB", "ANTBTC", "ANTBUSD", "ANTUSDT", "CRVBNB", "CRVBTC", "CRVBUSD", "CRVUSDT", "SANDBNB", "SANDBTC", "SANDUSDT", "SANDBUSD", "OCEANBNB", "OCEANBTC", "OCEANBUSD", "OCEANUSDT", "NMRBTC", "NMRBUSD", "NMRUSDT", "DOTBNB", "DOTBTC", "DOTBUSD", "DOTUSDT", "LUNABNB", "LUNABTC", "LUNABUSD", "LUNAUSDT", "IDEXBTC", "IDEXBUSD", "RSRBNB", "RSRBTC", "RSRBUSD", "RSRUSDT", "PAXGBNB", "PAXGBTC", "PAXGBUSD", "PAXGUSDT", "WNXMBNB", "WNXMBTC", "WNXMBUSD", "WNXMUSDT", "TRBBNB", "TRBBTC", "TRBBUSD", "TRBUSDT", "ETHNGN", "DOTBIDR", "LINKAUD", "SXPAUD", "BZRXBNB", "BZRXBTC", "BZRXBUSD", "BZRXUSDT", "WBTCBTC", "WBTCETH", "SUSHIBNB", "SUSHIBTC", "SUSHIBUSD", "SUSHIUSDT", "YFIIBNB", "YFIIBTC", "YFIIBUSD", "YFIIUSDT", "KSMBNB", "KSMBTC", "KSMBUSD", "KSMUSDT", "EGLDBNB", "EGLDBTC", "EGLDBUSD", "EGLDUSDT", "DIABNB", "DIABTC", "DIABUSD", "DIAUSDT", "RUNEUSDT", "FIOUSDT", "UMABTC", "UMAUSDT", "EOSUPUSDT", "EOSDOWNUSDT", "TRXUPUSDT", "TRXDOWNUSDT", "XRPUPUSDT", "XRPDOWNUSDT", "DOTUPUSDT", "DOTDOWNUSDT", "SRMBIDR", "ONEBIDR", "LINKTRY", "USDTNGN", "BELBNB", "BELBTC", "BELBUSD", "BELUSDT", "WINGBNB", "WINGBTC", "SWRVBNB", "SWRVBUSD", "WINGBUSD", "WINGUSDT", "LTCUPUSDT", "LTCDOWNUSDT", "LENDBKRW", "SXPEUR", "CREAMBNB", "CREAMBUSD", "UNIBNB", "UNIBTC", "UNIBUSD", "UNIUSDT", "NBSBTC", "NBSUSDT", "OXTBTC", "OXTUSDT", "SUNBTC", "SUNUSDT", "AVAXBNB", "AVAXBTC", "AVAXBUSD", "AVAXUSDT", "HNTBTC", "HNTUSDT", "BAKEBNB", "BURGERBNB", "SXPBIDR", "LINKBKRW", "FLMBNB", "FLMBTC", "FLMBUSD", "FLMUSDT", "SCRTBTC", "SCRTETH", "CAKEBNB", "CAKEBUSD", "SPARTABNB", "UNIUPUSDT", "UNIDOWNUSDT", "ORNBTC", "ORNUSDT", "TRXNGN", "SXPTRY", "UTKBTC", "UTKUSDT", "XVSBNB", "XVSBTC", "XVSBUSD", "XVSUSDT", "ALPHABNB", "ALPHABTC", "ALPHABUSD", "ALPHAUSDT", "VIDTBTC", "VIDTBUSD", "AAVEBNB", "BTCBRL", "USDTBRL", "AAVEBTC", "AAVEETH", "AAVEBUSD", "AAVEUSDT", "AAVEBKRW", "NEARBNB", "NEARBTC", "NEARBUSD", "NEARUSDT", "SXPUPUSDT", "SXPDOWNUSDT", "DOTBKRW", "SXPGBP", "FILBNB", "FILBTC", "FILBUSD", "FILUSDT", "FILUPUSDT", "FILDOWNUSDT", "YFIUPUSDT", "YFIDOWNUSDT", "INJBNB", "INJBTC", "INJBUSD", "INJUSDT", "AERGOBTC", "AERGOBUSD", "LINKEUR", "ONEBUSD", "EASYETH", "AUDIOBTC", "AUDIOBUSD", "AUDIOUSDT", "CTKBNB", "CTKBTC", "CTKBUSD", "CTKUSDT", "BCHUPUSDT", "BCHDOWNUSDT", "BOTBTC", "BOTBUSD", "ETHBRL", "DOTEUR", "AKROBTC", "AKROUSDT", "KP3RBNB", "KP3RBUSD", "AXSBNB", "AXSBTC", "AXSBUSD", "AXSUSDT", "HARDBNB", "HARDBTC", "HARDBUSD", "HARDUSDT", "BNBBRL", "LTCEUR", "RENBTCBTC", "RENBTCETH", "DNTBUSD", "DNTUSDT", "SLPETH", "ADAEUR", "LTCNGN", "CVPETH", "CVPBUSD", "STRAXBTC", "STRAXETH", "STRAXBUSD", "STRAXUSDT", "FORBTC", "FORBUSD", "UNFIBNB", "UNFIBTC", "UNFIBUSD", "UNFIUSDT", "FRONTETH", "FRONTBUSD", "BCHABUSD", "ROSEBTC", "ROSEBUSD", "ROSEUSDT", "AVAXTRY", "BUSDBRL", "AVAUSDT", "SYSBUSD", "XEMUSDT", "HEGICETH", "HEGICBUSD", "AAVEUPUSDT", "AAVEDOWNUSDT", "PROMBNB", "PROMBUSD", "XRPBRL", "XRPNGN", "SKLBTC", "SKLBUSD", "SKLUSDT", "BCHEUR", "YFIEUR", "ZILBIDR", "SUSDBTC", "SUSDETH", "SUSDUSDT", "COVERETH", "COVERBUSD", "GLMBTC", "GLMETH", "GHSTETH", "GHSTBUSD", "SUSHIUPUSDT", "SUSHIDOWNUSDT", "XLMUPUSDT", "XLMDOWNUSDT", "LINKBRL", "LINKNGN", "LTCRUB", "TRXTRY", "XLMEUR", "DFETH", "DFBUSD", "GRTBTC", "GRTETH", "GRTUSDT", "JUVBTC", "JUVBUSD", "JUVUSDT", "PSGBTC", "PSGBUSD", "PSGUSDT", "BUSDBVND", "USDTBVND", "1INCHBTC", "1INCHUSDT", "REEFBTC", "REEFUSDT", "OGBTC", "OGUSDT", "ATMBTC", "ATMUSDT", "ASRBTC", "ASRUSDT", "CELOBTC", "CELOUSDT", "RIFBTC", "RIFUSDT", "CHZTRY", "XLMTRY", "LINKGBP", "GRTEUR", "BTCSTBTC", "BTCSTBUSD", "BTCSTUSDT", "TRUBTC", "TRUBUSD", "TRUUSDT", "DEXEETH", "DEXEBUSD", "EOSEUR", "LTCBRL", "USDCBUSD", "TUSDBUSD", "PAXBUSD", "CKBBTC", "CKBBUSD", "CKBUSDT", "TWTBTC", "TWTBUSD", "TWTUSDT", "FIROBTC", "FIROETH", "FIROUSDT", "BETHETH", "DOGEEUR", "DOGETRY", "DOGEAUD", "DOGEBRL", "DOTNGN", "PROSETH", "LITBTC", "LITBUSD", "LITUSDT", "BTCVAI", "BUSDVAI", "SFPBTC", "SFPBUSD", "SFPUSDT", "DOGEGBP", "DOTTRY", "FXSBTC", "FXSBUSD", "DODOBTC", "DODOBUSD", "DODOUSDT", "FRONTBTC", "EASYBTC", "CAKEBTC", "CAKEUSDT", "BAKEBUSD", "UFTETH", "UFTBUSD", "1INCHBUSD", "BANDBUSD", "GRTBUSD", "IOSTBUSD", "OMGBUSD", "REEFBUSD", "ACMBTC", "ACMBUSD", "ACMUSDT", "AUCTIONBTC", "AUCTIONBUSD", "PHABTC", "PHABUSD", "DOTGBP", "ADATRY", "ADABRL", "ADAGBP", "TVKBTC", "TVKBUSD", "BADGERBTC", "BADGERBUSD", "BADGERUSDT", "FISBTC", "FISBUSD", "FISUSDT", "DOTBRL", "ADAAUD", "HOTTRY", "EGLDEUR", "OMBTC", "OMBUSD", "OMUSDT", "PONDBTC", "PONDBUSD", "PONDUSDT", "DEGOBTC", "DEGOBUSD", "DEGOUSDT", "AVAXEUR", "BTTTRY", "CHZBRL", "UNIEUR", "ALICEBTC", "ALICEBUSD", "ALICEUSDT", "CHZBUSD", "CHZEUR", "CHZGBP", "BIFIBNB", "BIFIBUSD", "LINABTC", "LINABUSD", "LINAUSDT", "ADARUB", "ENJBRL", "ENJEUR", "MATICEUR", "NEOTRY", "PERPBTC", "PERPBUSD", "PERPUSDT", "RAMPBTC", "RAMPBUSD", "RAMPUSDT", "SUPERBTC", "SUPERBUSD", "SUPERUSDT", "CFXBTC", "CFXBUSD", "CFXUSDT", "ENJGBP", "EOSTRY", "LTCGBP", "LUNAEUR", "RVNTRY", "THETAEUR", "XVGBUSD", "EPSBTC", "EPSBUSD", "EPSUSDT", "AUTOBTC", "AUTOBUSD", "AUTOUSDT", "TKOBTC", "TKOBIDR", "TKOBUSD", "TKOUSDT", "PUNDIXETH", "PUNDIXUSDT", "BTTBRL", "BTTEUR", "HOTEUR", "WINEUR", "TLMBTC", "TLMBUSD", "TLMUSDT", "1INCHUPUSDT", "1INCHDOWNUSDT", "BTGBUSD", "BTGUSDT", "HOTBUSD", "BNBUAH", "ONTTRY", "VETEUR", "VETGBP", "WINBRL", "MIRBTC", "MIRBUSD", "MIRUSDT", "BARBTC", "BARBUSD", "BARUSDT", "FORTHBTC", "FORTHBUSD", "FORTHUSDT", "CAKEGBP", "DOGERUB", "HOTBRL", "WRXEUR", "EZBTC", "EZETH", "BAKEUSDT", "BURGERBUSD", "BURGERUSDT", "SLPBUSD", "SLPUSDT", "TRXAUD", "TRXEUR", "VETTRY", "SHIBUSDT", "SHIBBUSD", "ICPBTC", "ICPBNB", "ICPBUSD", "ICPUSDT", "SHIBEUR", "SHIBRUB", "ETCEUR", "ETCBRL", "DOGEBIDR", "ARBTC", "ARBNB", "ARBUSD", "ARUSDT", "POLSBTC", "POLSBNB", "POLSBUSD", "POLSUSDT", "MDXBTC", "MDXBNB", "MDXBUSD", "MDXUSDT", "MASKBNB", "MASKBUSD", "MASKUSDT", "LPTBTC", "LPTBNB", "LPTBUSD", "LPTUSDT", "ETHUAH", "MATICBRL", "SOLEUR", "SHIBBRL", "AGIXBTC", "ICPEUR", "MATICGBP", "SHIBTRY", "MATICBIDR", "MATICRUB", "NUBTC", "NUBNB", "NUBUSD", "NUUSDT", "XVGUSDT", "RLCBUSD", "CELRBUSD", "ATMBUSD", "ZENBUSD", "FTMBUSD", "THETABUSD", "WINBUSD", "KAVABUSD", "XEMBUSD", "ATABTC", "ATABNB", "ATABUSD", "ATAUSDT", "GTCBTC", "GTCBNB", "GTCBUSD", "GTCUSDT", "TORNBTC", "TORNBNB", "TORNBUSD", "TORNUSDT", "MATICTRY", "ETCGBP", "SOLGBP", "BAKEBTC", "COTIBUSD", "KEEPBTC", "KEEPBNB", "KEEPBUSD", "KEEPUSDT", "SOLTRY", "RUNEGBP", "SOLBRL", "SCBUSD", "CHRBUSD", "STMXBUSD", "HNTBUSD", "FTTBUSD", "DOCKBUSD", "ADABIDR", "ERNBNB", "ERNBUSD", "ERNUSDT", "KLAYBTC", "KLAYBNB", "KLAYBUSD", "KLAYUSDT", "RUNEEUR", "MATICAUD", "DOTRUB", "UTKBUSD", "IOTXBUSD", "PHAUSDT", "SOLRUB", "RUNEAUD", "BUSDUAH", "BONDBTC", "BONDBNB", "BONDBUSD", "BONDUSDT", "MLNBTC", "MLNBNB", "MLNBUSD", "MLNUSDT", "GRTTRY", "CAKEBRL", "ICPRUB", "DOTAUD", "AAVEBRL", "EOSAUD", "DEXEUSDT", "LTOBUSD", "ADXBUSD", "QUICKBTC", "QUICKBNB", "QUICKBUSD", "C98USDT", "C98BUSD", "C98BNB", "C98BTC", "CLVBTC", "CLVBNB", "CLVBUSD", "CLVUSDT", "QNTBTC", "QNTBNB", "QNTBUSD", "QNTUSDT", "FLOWBTC", "FLOWBNB", "FLOWBUSD", "FLOWUSDT", "XECBUSD", "AXSBRL", "AXSAUD", "TVKUSDT", "MINABTC", "MINABNB", "MINABUSD", "MINAUSDT", "RAYBNB", "RAYBUSD", "RAYUSDT", "FARMBTC", "FARMBNB", "FARMBUSD", "FARMUSDT", "ALPACABTC", "ALPACABNB", "ALPACABUSD", "ALPACAUSDT", "TLMTRY", "QUICKUSDT", "ORNBUSD", "MBOXBTC", "MBOXBNB", "MBOXBUSD", "MBOXUSDT", "VGXBTC", "VGXETH", "FORUSDT", "REQUSDT", "GHSTUSDT", "TRURUB", "FISBRL", "WAXPUSDT", "WAXPBUSD", "WAXPBNB", "WAXPBTC", "TRIBEBTC", "TRIBEBNB", "TRIBEBUSD", "TRIBEUSDT", "GNOUSDT", "GNOBUSD", "GNOBNB", "GNOBTC", "ARPATRY", "PROMBTC", "MTLBUSD", "OGNBUSD", "XECUSDT", "C98BRL", "SOLAUD", "XRPBIDR", "POLYBUSD", "ELFUSDT", "DYDXUSDT", "DYDXBUSD", "DYDXBNB", "DYDXBTC", "ELFBUSD", "POLYUSDT", "IDEXUSDT", "VIDTUSDT", "SOLBIDR", "AXSBIDR", "BTCUSDP", "ETHUSDP", "BNBUSDP", "USDPBUSD", "USDPUSDT", "GALAUSDT", "GALABUSD", "GALABNB", "GALABTC", "FTMBIDR", "ALGOBIDR", "CAKEAUD", "KSMAUD", "WAVESRUB", "SUNBUSD", "ILVUSDT", "ILVBUSD", "ILVBNB", "ILVBTC", "RENBUSD", "YGGUSDT", "YGGBUSD", "YGGBNB", "YGGBTC", "STXBUSD", "SYSUSDT", "DFUSDT", "SOLUSDC", "ARPARUB", "LTCUAH", "FETBUSD", "ARPABUSD", "LSKBUSD", "AVAXBIDR", "ALICEBIDR", "FIDAUSDT", "FIDABUSD", "FIDABNB", "FIDABTC", "DENTBUSD", "FRONTUSDT", "CVPUSDT", "AGLDBTC", "AGLDBNB", "AGLDBUSD", "AGLDUSDT", "RADBTC", "RADBNB", "RADBUSD", "RADUSDT", "UNIAUD", "HIVEBUSD", "STPTBUSD", "BETABTC", "BETABNB", "BETABUSD", "BETAUSDT", "SHIBAUD", "RAREBTC", "RAREBNB", "RAREBUSD", "RAREUSDT", "AVAXBRL", "AVAXAUD", "LUNAAUD", "TROYBUSD", "AXSETH", "FTMETH", "SOLETH", "SSVBTC", "SSVETH", "LAZIOTRY", "LAZIOEUR", "LAZIOBTC", "LAZIOUSDT", "CHESSBTC", "CHESSBNB", "CHESSBUSD", "CHESSUSDT", "FTMAUD", "FTMBRL", "SCRTBUSD", "ADXUSDT", "AUCTIONUSDT", "CELOBUSD", "FTMRUB", "NUAUD", "NURUB", "REEFTRY", "REEFBIDR", "SHIBDOGE", "DARUSDT", "DARBUSD", "DARBNB", "DARBTC", "BNXBTC", "BNXBNB", "BNXBUSD", "BNXUSDT", "RGTUSDT", "RGTBTC", "RGTBUSD", "RGTBNB", "LAZIOBUSD", "OXTBUSD", "MANATRY", "ALGORUB", "SHIBUAH", "LUNABIDR", "AUDUSDC", "MOVRBTC", "MOVRBNB", "MOVRBUSD", "MOVRUSDT", "CITYBTC", "CITYBNB", "CITYBUSD", "CITYUSDT", "ENSBTC", "ENSBNB", "ENSBUSD", "ENSUSDT", "SANDETH", "DOTETH", "MATICETH", "ANKRBUSD", "SANDTRY", "MANABRL", "KP3RUSDT", "QIUSDT", "QIBUSD", "QIBNB", "QIBTC", "PORTOBTC", "PORTOUSDT", "PORTOTRY", "PORTOEUR", "POWRUSDT", "POWRBUSD", "AVAXETH", "SLPTRY", "FISTRY", "LRCTRY", "CHRETH", "FISBIDR", "VGXUSDT", "GALAETH", "JASMYUSDT", "JASMYBUSD", "JASMYBNB", "JASMYBTC", "AMPBTC", "AMPBNB", "AMPBUSD", "AMPUSDT", "PLABTC", "PLABNB", "PLABUSD", "PLAUSDT", "PYRBTC", "PYRBUSD", "PYRUSDT", "RNDRBTC", "RNDRUSDT", "RNDRBUSD", "ALCXBTC", "ALCXBUSD", "ALCXUSDT", "SANTOSBTC", "SANTOSUSDT", "SANTOSBRL", "SANTOSTRY", "MCBTC", "MCBUSD", "MCUSDT", "BELTRY", "COCOSBUSD", "DENTTRY", "ENJTRY", "NEORUB", "SANDAUD", "SLPBIDR", "ANYBTC", "ANYBUSD", "ANYUSDT", "BICOBTC", "BICOBUSD", "BICOUSDT", "FLUXBTC", "FLUXBUSD", "FLUXUSDT", "ALICETRY", "FXSUSDT", "GALABRL", "GALATRY", "LUNATRY", "REQBUSD", "SANDBRL", "MANABIDR", "SANDBIDR", "VOXELBTC", "VOXELBNB", "VOXELBUSD", "VOXELUSDT", "COSBUSD", "CTXCBUSD", "FTMTRY", "MANABNB", "MINATRY", "XTZTRY", "HIGHBTC", "HIGHBUSD", "HIGHUSDT", "CVXBTC", "CVXBUSD", "CVXUSDT", "PEOPLEBTC", "PEOPLEBUSD", "PEOPLEUSDT", "OOKIBUSD", "OOKIUSDT", "COCOSTRY", "GXSBNB", "LINKBNB", "LUNAETH", "MDTBUSD", "NULSBUSD", "SPELLBTC", "SPELLUSDT", "SPELLBUSD", "USTBTC", "USTBUSD", "USTUSDT", "JOEBTC", "JOEBUSD", "JOEUSDT", "ATOMETH", "DUSKBUSD", "EGLDETH", "ICPETH", "LUNABRL", "LUNAUST", "NEARETH", "ROSEBNB", "VOXELETH", "ALICEBNB", "ATOMTRY", "ETHUST", "GALAAUD", "LRCBNB", "ONEETH", "OOKIBNB", "ACHBTC", "ACHBUSD", "ACHUSDT", "IMXBTC", "IMXBUSD", "IMXUSDT", "GLMRBTC", "GLMRBUSD", "GLMRUSDT", "ATOMBIDR", "DYDXETH", "FARMETH", "FORBNB", "ICPTRY", "JASMYETH", "LINABNB", "OOKIETH", "ROSEETH", "UMABUSD", "UNIETH", "XTZETH", "LOKABTC", "LOKABNB", "LOKABUSD", "LOKAUSDT", "ATOMBRL", "BNBUST", "CRVETH", "HIGHBNB", "NEARRUB", "ROSETRY", "SCRTUSDT", "API3BTC", "API3BUSD", "API3USDT", "BTTCUSDT", "BTTCUSDC", "BTTCTRY", "ACABTC", "ACABUSD", "ACAUSDT", "ANCBTC", "ANCBUSD", "ANCUSDT", "BDOTDOT", "XNOBTC", "XNOETH", "XNOBUSD", "XNOUSDT", "COSTRY", "KAVAETH", "MCBNB", "ONETRY", "WOOBTC", "WOOBNB", "WOOBUSD", "WOOUSDT", "CELRETH", "PEOPLEBNB", "SLPBNB", "SPELLBNB", "SPELLTRY", "TFUELBUSD", "AXSTRY", "DARTRY", "NEARTRY", "IDEXBNB", "ALPINEEUR", "ALPINETRY", "ALPINEUSDT", "ALPINEBTC", "TUSDT", "TBUSD", "API3BNB", "BETAETH", "INJTRY", "TLMBNB", "ASTRBUSD", "ASTRUSDT", "API3TRY", "GLMRBNB", "MBOXTRY", "NBTBIDR", "NBTUSDT", "GMTBTC", "GMTBNB", "GMTBUSD", "GMTUSDT", "ANCBNB", "ATOMEUR", "GALAEUR", "KSMETH", "UMATRY", "KDABTC", "KDABUSD", "KDAUSDT", "APEUSDT", "APEBUSD", "APEBTC", "ALPINEBUSD", "LUNAGBP", "NEAREUR", "TWTTRY", "WAVESEUR", "APEEUR", "APEGBP", "APETRY", "BSWUSDT", "BSWBUSD", "BSWBNB", "APEBNB", "GMTBRL", "GMTETH", "JASMYTRY", "SANTOSBUSD", "APEAUD", "BIFIUSDT", "GMTEUR", "IMXBNB", "RUNEETH", "AVAXGBP", "MULTIBTC", "MULTIBUSD", "MULTIUSDT", "APEETH", "BSWETH", "FILTRY", "FTMEUR", "GMTGBP", "ZILTRY", "GMTTRY", "WAVESTRY", "BTCUST", "ASTRBTC", "ASTRETH", "BSWTRY", "FTTETH", "FUNBNB", "PORTOBUSD", "STEEMUSDT", "ZILEUR", "APEBRL", "AUDIOTRY", "BTTCBUSD", "GMTAUD", "MBLBUSD", "MOBUSDT", "MOBBUSD", "MOBBTC", "NEXOUSDT", "NEXOBUSD", "NEXOBTC", "REIUSDT", "REIBNB", "REIETH", "GALUSDT", "GALBUSD", "GALBNB", "GALBTC", "JASMYEUR", "KNCBNB", "SHIBGBP", "GALEUR", "GALTRY", "LDOBUSD", "LDOUSDT", "LDOBTC", "ENSTRY", "DAREUR", "DARETH", "ALGOETH", "ALGOTRY", "GALETH", "EPXUSDT", "EPXBUSD", "RUNETRY", "GALBRL", "STEEMBUSD", "CVCBUSD", "REIBUSD", "DREPBUSD", "AKROBUSD", "PUNDIXBUSD", "LUNCBUSD", "USTCBUSD", "OPBTC", "OPBUSD", "OPUSDT", "OGBUSD", "KEYBUSD", "ASRBUSD", "FIROBUSD", "NKNBUSD", "OPBNB", "OPEUR", "GTOBUSD", "SNXETH", "WBTCBUSD", "BELETH", "LITETH", "LEVERUSDT", "LEVERBUSD", "BURGERETH", "PEOPLEETH", "UNFIETH", "BONDETH", "STORJTRY","APTUSDT"];

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    let currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
      let a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
      let x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode === 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode === 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode === 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }
  autocomplete(document.getElementById("myInput"), coins);
  autocomplete(document.getElementById("myInput1"), coins);
  autocomplete(document.getElementById("fav"), coins);


  let x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        let y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML === this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    let x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt === y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);