function preisBestellblock() {
    //assign
    var anzahlBestellblock = document.getElementById("anzahlBestellblock");
    var bestellblockGesamtPreis = document.getElementById("bestellblockGesamtPreis");

    //result
    var resultBestellblock = Number(anzahlBestellblock.value) * 650 / 100;

    bestellblockGesamtPreis.value = resultBestellblock;
}

function preisNotizblock() {
    //assign
    var anzahlNotizblock = document.getElementById("anzahlNotizblock");
    var notizblockGesamtPreis = document.getElementById("notizblockGesamtPreis");

    //result
    var resultNotizblock = Number(anzahlNotizblock.value) * 200 / 100;

    notizblockGesamtPreis.value = resultNotizblock;
} 

function preisPutzmittelkatalog() {
    //assign
    var anzahlPutzmittelkatalog = document.getElementById("anzahlPutzmittelkatalog");
    var putzmittelkatalogGesamtPreis = document.getElementById("putzmittelkatalogGesamtPreis");

    //result
    var resultPutzmittelkatalog = Number(anzahlPutzmittelkatalog.value) * 100 / 100;

    putzmittelkatalogGesamtPreis.value = resultPutzmittelkatalog;
}

function preisÖle() {
    //assign
    var anzahlÖle = document.getElementById("anzahlÖle");
    var öleGesamtPreis = document.getElementById("öleGesamtPreis");

    //result
    var resultÖle = Number(anzahlÖle.value) * 20 / 100;

    öleGesamtPreis.value = resultÖle;
}

function preisA5() {
    //assign
    var anzalA5 = document.getElementById("anzalA5");
    var a5GesamtPreis = document.getElementById("a5GesamtPreis");

    //result
    var resultA5 = Number(anzalA5.value) * 15 / 100;

    a5GesamtPreis.value = resultA5;
}

function preisA5ohne() {
    //assign
    var anzalA5ohne = document.getElementById("anzalA5ohne");
    var a5ohneGesamtPreis = document.getElementById("a5ohneGesamtPreis");

    //result
    var resultA5ohne = Number(anzalA5ohne.value) * 15 / 100;

    a5ohneGesamtPreis.value = resultA5ohne;
}

function preisHautpflegeplan() {
    //assign
    var anzahlHautpflegeplan = document.getElementById("anzahlHautpflegeplan");
    var hautpflegeplanGesamtPreis = document.getElementById("hautpflegeplanGesamtPreis");

    //result
    var resultHautpflegeplan = Number(anzahlHautpflegeplan.value) * 15 / 100;

    hautpflegeplanGesamtPreis.value = resultHautpflegeplan;
}

function preisDankeschönkarten() {
    //assign
    var anzahlDankeschönkarten = document.getElementById("anzahlDankeschönkarten");
    var dankeschönkarteGesamtPreis = document.getElementById("dankeschönkarteGesamtPreis");

    //result
    var resultDankeschönkarte = Number(anzahlDankeschönkarten.value) * 10 / 100;

    dankeschönkarteGesamtPreis.value = resultDankeschönkarte;
}

function preisMuttertagskarten() {
    //assign
    var anzahlMuttertagskarten = document.getElementById("anzahlMuttertagskarten");
    var muttertagskartenGesamtPreis = document.getElementById("muttertagskartenGesamtPreis");

    //result
    var resultMuttertagskarte = Number(anzahlMuttertagskarten.value) * 10 / 100;

    muttertagskartenGesamtPreis.value = resultMuttertagskarte;
}

function preisReaumduftflyer() {
    //assign
    var anzahlRaumduftflyer = document.getElementById("anzahlRaumduftflyer");
    var raumduftflyerGesamtPreis = document.getElementById("raumduftflyerGesamtPreis");

    //result
    var resultRaumduftFlyer = Number(anzahlRaumduftflyer.value) * 10 / 100;

    raumduftflyerGesamtPreis.value = resultRaumduftFlyer;
}

function preisA7() {
    //assign
    var anzahlA7 = document.getElementById("anzahlA7");
    var a7GesamtPreis = document.getElementById("a7GesamtPreis");

    //result
    var resultA7 = Number(anzahlA7.value) * 15 / 100;

    a7GesamtPreis.value = resultA7;
}

function preisA7ohne() {
    //assign
    var anzahlA7ohne = document.getElementById("anzahlA7ohne");
    var a7ohneGesamtPreis = document.getElementById("a7ohneGesamtPreis");

    //result
    var resultA7ohne = Number(anzahlA7ohne.value) * 15 / 100;

    a7ohneGesamtPreis.value = resultA7ohne;
}

function preisDuftpartyKarten() {
    //assign
    var anzahlDuftpartyKarten = document.getElementById("anzahlDuftpartyKarten");
    var duftpartyKartenGesamtPreis = document.getElementById("duftpartyKartenGesamtPreis");

    //result
    var resultDuftpartyKarten = Number(anzahlDuftpartyKarten.value) * 5 / 100;

    duftpartyKartenGesamtPreis.value = resultDuftpartyKarten;
}

function preisTesterkarten() {
    //assign
    var anzahlTesterkarten = document.getElementById("anzahlTesterkarten");
    var testerkartenGesamtPreis = document.getElementById("testerkartenGesamtPreis");

    //result
    var resultTesterkarten = Number(anzahlTesterkarten.value) * 5 / 100;

    testerkartenGesamtPreis.value = resultTesterkarten;
}

































function pö() {
    //assign
    var aö = document.getElementById("aö");
    var ögp = document.getElementById("ÖGP");
    //result
    var resö = Number(aö.value) * 20 / 100;

    ögp.value = resö;
    gesamtp();
    weight();
}

function pb() {
    //assign
    var ab = document.getElementById("ab");
    var bgp = document.getElementById("BGP");
    //result
    var resb = Number(ab.value) * 650 / 100;

    bgp.value = resb;
    gesamtp();
    weight();
}

function pa6() {
    //assign
    var aa6 = document.getElementById("aa6");
    var a6gp = document.getElementById("A6GP");
    //result
    var resa6 = Number(aa6.value) * 10 / 100;

    a6gp.value = resa6;
    gesamtp();
    weight();
}

function pv() {
    //assign
    var av = document.getElementById("av");
    var vgp = document.getElementById("VGP");
    //result
    var resv = Number(av.value) * 5 / 100;

    vgp.value = resv;
    gesamtp();
    weight();
}

function pg() {
    //assign
    var ag = document.getElementById("ag");
    var ggp = document.getElementById("GGP");
    //result
    var resg = Number(ag.value) * 10 / 100;

    ggp.value = resg;
    gesamtp();
    weight();
}

function ph() {
    //assign
    var ah = document.getElementById("ah");
    var hgp = document.getElementById("HGP");
    //result
    var resh = Number(ah.value) * 15 / 100;

    hgp.value = resh;
    gesamtp();
    weight();
}

function pk() {
    //assign
    var ak = document.getElementById("ak");
    var kgp = document.getElementById("KGP");
    //result
    var resk = Number(ak.value) * 3900 / 100;

    kgp.value = resk;
    gesamtp();
    weight();
}

function pa5() {
    //assign
    var aa5 = document.getElementById("aa5");
    var a5gp = document.getElementById("A5GP");
    //result
    var resa5 = Number(aa5.value) * 15 / 100;

    a5gp.value = resa5;
    gesamtp();
    weight();
}

function pa7() {
    //assign
    var aa7 = document.getElementById("aa7");
    var a7gp = document.getElementById("A7GP");
    //result
    var resa7 = Number(aa7.value) * 15 / 100;

    a7gp.value = resa7;
    gesamtp();
    weight();
}

function pa() {
    //assign
    var aa = document.getElementById("aa");
    var agp = document.getElementById("AGP");
    //result
    var resa = Number(aa.value) * 5 / 100;

    agp.value = resa;
    gesamtp();
    weight();
}

function pr() {
    //assign
    var ar = document.getElementById("ar");
    var rgp = document.getElementById("RGP");
    //result
    var resr = Number(ar.value) * 10 / 100;

    rgp.value = resr;
    gesamtp();
    weight();
}

function pt() {
    //assign
    var at = document.getElementById("at");
    var tgp = document.getElementById("TGP");
    //result
    var rest = Number(at.value) * 5 / 100;

    tgp.value = rest;
    gesamtp();
    weight();
}

function gesamtp() {
    var ögp = document.getElementById("ÖGP");
    var bgp = document.getElementById("BGP");
    var a6gp = document.getElementById("A6GP");
    var vgp = document.getElementById("VGP");
    var ggp = document.getElementById("GGP");
    var hgp = document.getElementById("HGP");
    var kgp = document.getElementById("KGP");
    var ngp = document.getElementById("NGP");
    var a5gp = document.getElementById("A5GP");
    var a7gp = document.getElementById("A7GP");
    var agp = document.getElementById("AGP");
    var pgp = document.getElementById("PGP");
    var rgp = document.getElementById("RGP");
    var tgp = document.getElementById("TGP");

    var gppa = document.getElementById("gppa");

    resultprice = Number(ögp.value) + Number(bgp.value) + Number(a6gp.value) + Number(vgp.value)+Number(ggp.value)+Number(hgp.value)+Number(kgp.value)+Number(ngp.value)+Number(a5gp.value)+Number(a7gp.value)+Number(agp.value)+Number(pgp.value)+Number(rgp.value)+Number(tgp.value);

    gppa.value = resultprice;
}

function weight() {
    var aö = document.getElementById("aö");
    var ab = document.getElementById("ab");
    var aa6 = document.getElementById("aa6");
    var av = document.getElementById("av");
    var ag = document.getElementById("ag");
    var ah = document.getElementById("ah");
    var ak = document.getElementById("ak");
    var an = document.getElementById("an");
    var aa5 = document.getElementById("aa5");
    var aa7 = document.getElementById("aa7");
    var aa = document.getElementById("aa");
    var ap = document.getElementById("ap");
    var ar = document.getElementById("ar");
    var at = document.getElementById("at");

    var gö = Number(aö.value) * 33 / 1000;
    var gb = Number(ab.value) * 234 / 1000;
    var ga6 = Number(aa6.value) * 45 / 10000;
    var gv = Number(av.value) * 14 / 10000;
    var gg = Number(ag.value) * 45 / 10000;
    var gh = Number(ah.value) * 85 / 10000;
    var gk = Number(ak.value) * 600 / 1000;
    var gn = Number(an.value) * 140 / 1000;
    var ga5 = Number(aa5.value) * 85 / 10000;
    var ga7 = Number(aa7.value) * 39 / 10000;
    var ga = Number(aa.value) * 1 / 10000;
    var gp = Number(ap.value) * 759 / 10000;
    var gr = Number(ar.value) * 64 / 10000;
    var gt = Number(at.value) * 14 / 10000;

    var gppg = document.getElementById("gppg");

    var vk = document.getElementById("vk");

    var gesgew = gö + gb + ga6 + gv + gg + gh + gk + gn + ga5 + ga7 + ga + gp + gr + gt;

    if(gesgew == 0) {
        vk.value = Number(0.00);
    }

    if(gesgew > 0 && gesgew <= 0.5 ) {
        vk.value = Number(1.60);
    }

    if(gesgew > 0.5 && gesgew <= 1) {
        vk.value = Number(2.75);
    }

    if(gesgew > 1 && gesgew <= 2) {
        vk.value = Number(3.99);
    }

    if(gesgew > 2 && gesgew <= 5) {
        vk.value = Number(6.99);
    }

    if(gesgew > 5 && gesgew <= 10) {
        vk.value = Number(9.49);
    }

    if(gesgew > 10) {
        vk.value = Number(16.49);
    }

    gppg.value = gesgew;
    gespreis();
   }

function gespreis() {
    var gppa = document.getElementById("gppa");
    var vk = document.getElementById("vk");

    var gpv = document.getElementById("gpv");

    respr = Number(gppa.value) + Number(vk.value);
    gpv.value = respr;
}