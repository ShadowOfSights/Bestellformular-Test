function preisBestellblock() {
    //assign
    var anzahlBestellblock = document.getElementById("anzahlBestellblock");
    var bestellblockGesamtPreis = document.getElementById("bestellblockGesamtPreis");

    //result
    var resultBestellblock = Number(anzahlBestellblock.value) * 650 / 100;

    bestellblockGesamtPreis.value = resultBestellblock;
    gesamtPreis();
    weight();
}

function preisNotizblock() {
    //assign
    var anzahlNotizblock = document.getElementById("anzahlNotizblock");
    var notizblockGesamtPreis = document.getElementById("notizblockGesamtPreis");

    //result
    var resultNotizblock = Number(anzahlNotizblock.value) * 200 / 100;

    notizblockGesamtPreis.value = resultNotizblock;
    gesamtPreis();
    weight();
} 

function preisPutzmittelkatalog() {
    //assign
    var anzahlPutzmittelkatalog = document.getElementById("anzahlPutzmittelkatalog");
    var putzmittelkatalogGesamtPreis = document.getElementById("putzmittelkatalogGesamtPreis");

    //result
    var resultPutzmittelkatalog = Number(anzahlPutzmittelkatalog.value) * 100 / 100;

    putzmittelkatalogGesamtPreis.value = resultPutzmittelkatalog;
    gesamtPreis();
    weight();
}

function preisÖle() {
    //assign
    var anzahlÖle = document.getElementById("anzahlÖle");
    var öleGesamtPreis = document.getElementById("öleGesamtPreis");

    //result
    var resultÖle = Number(anzahlÖle.value) * 20 / 100;

    öleGesamtPreis.value = resultÖle;
    gesamtPreis();
    weight();
}

function preisA5() {
    //assign
    var anzalA5 = document.getElementById("anzalA5");
    var a5GesamtPreis = document.getElementById("a5GesamtPreis");

    //result
    var resultA5 = Number(anzalA5.value) * 15 / 100;

    a5GesamtPreis.value = resultA5;
    gesamtPreis();
    weight();
}

function preisA5ohne() {
    //assign
    var anzalA5ohne = document.getElementById("anzalA5ohne");
    var a5ohneGesamtPreis = document.getElementById("a5ohneGesamtPreis");

    //result
    var resultA5ohne = Number(anzalA5ohne.value) * 15 / 100;

    a5ohneGesamtPreis.value = resultA5ohne;
    gesamtPreis();
    weight();
}

function preisHautpflegeplan() {
    //assign
    var anzahlHautpflegeplan = document.getElementById("anzahlHautpflegeplan");
    var hautpflegeplanGesamtPreis = document.getElementById("hautpflegeplanGesamtPreis");

    //result
    var resultHautpflegeplan = Number(anzahlHautpflegeplan.value) * 15 / 100;

    hautpflegeplanGesamtPreis.value = resultHautpflegeplan;
    gesamtPreis();
    weight();
}

function preisDankeschönkarten() {
    //assign
    var anzahlDankeschönkarten = document.getElementById("anzahlDankeschönkarten");
    var dankeschönkarteGesamtPreis = document.getElementById("dankeschönkarteGesamtPreis");

    //result
    var resultDankeschönkarte = Number(anzahlDankeschönkarten.value) * 10 / 100;

    dankeschönkarteGesamtPreis.value = resultDankeschönkarte;
    gesamtPreis();
    weight();
}

function preisGutscheine() {
    //assign
    var anzahlGutscheine = document.getElementById("anzahlGutscheine");
    var gutscheineGesamtPreis = document.getElementById("gutscheineGesamtPreis");

    //result
    var resultGutscheine = Number(anzahlGutscheine.value) * 10 / 100;

    gutscheineGesamtPreis.value = resultGutscheine;
    gesamtPreis();
    weight();
}

function preisMuttertagskarten() {
    //assign
    var anzahlMuttertagskarten = document.getElementById("anzahlMuttertagskarten");
    var muttertagskartenGesamtPreis = document.getElementById("muttertagskartenGesamtPreis");

    //result
    var resultMuttertagskarte = Number(anzahlMuttertagskarten.value) * 10 / 100;

    muttertagskartenGesamtPreis.value = resultMuttertagskarte;
    gesamtPreis();
    weight();
}

function preisReaumduftflyer() {
    //assign
    var anzahlRaumduftflyer = document.getElementById("anzahlRaumduftflyer");
    var raumduftflyerGesamtPreis = document.getElementById("raumduftflyerGesamtPreis");

    //result
    var resultRaumduftFlyer = Number(anzahlRaumduftflyer.value) * 10 / 100;

    raumduftflyerGesamtPreis.value = resultRaumduftFlyer;
    gesamtPreis();
    weight();
}

function preisA7() {
    //assign
    var anzahlA7 = document.getElementById("anzahlA7");
    var a7GesamtPreis = document.getElementById("a7GesamtPreis");

    //result
    var resultA7 = Number(anzahlA7.value) * 15 / 100;

    a7GesamtPreis.value = resultA7;
    gesamtPreis();
    weight();
}

function preisA7ohne() {
    //assign
    var anzahlA7ohne = document.getElementById("anzahlA7ohne");
    var a7ohneGesamtPreis = document.getElementById("a7ohneGesamtPreis");

    //result
    var resultA7ohne = Number(anzahlA7ohne.value) * 15 / 100;

    a7ohneGesamtPreis.value = resultA7ohne;
    gesamtPreis();
    weight();
}

function preisDuftpartyKarten() {
    //assign
    var anzahlDuftpartyKarten = document.getElementById("anzahlDuftpartyKarten");
    var duftpartyKartenGesamtPreis = document.getElementById("duftpartyKartenGesamtPreis");

    //result
    var resultDuftpartyKarten = Number(anzahlDuftpartyKarten.value) * 5 / 100;

    duftpartyKartenGesamtPreis.value = resultDuftpartyKarten;
    gesamtPreis();
    weight();
}

function preisTesterkarten() {
    //assign
    var anzahlTesterkarten = document.getElementById("anzahlTesterkarten");
    var testerkartenGesamtPreis = document.getElementById("testerkartenGesamtPreis");

    //result
    var resultTesterkarten = Number(anzahlTesterkarten.value) * 5 / 100;

    testerkartenGesamtPreis.value = resultTesterkarten;
    gesamtPreis();
    weight();
}

function preisAufkleber() {
    //assign
    var anzahlAufkleber = document.getElementById("anzahlAufkleber");
    var aufkleberGesamtPreis = document.getElementById("aufkleberGesamtPreis");

    //result
    var resultAufkleber = Number(anzahlAufkleber.value) * 5 / 100;

    aufkleberGesamtPreis.value = resultAufkleber;
    gesamtPreis();
    weight();
}

function gesamtPreis() {
    var p1 = document.getElementById("bestellblockGesamtPreis");
    var p2 = document.getElementById("notizblockGesamtPreis");
    var p3 = document.getElementById("putzmittelkatalogGesamtPreis");
    var p4 = document.getElementById("öleGesamtPreis");
    var p5 = document.getElementById("a5GesamtPreis");
    var p6 = document.getElementById("a5ohneGesamtPreis");
    var p7 = document.getElementById("hautpflegeplanGesamtPreis");
    var p8 = document.getElementById("dankeschönkarteGesamtPreis");
    var p9 = document.getElementById("gutscheineGesamtPreis");
    var p10 = document.getElementById("muttertagskartenGesamtPreis");
    var p11 = document.getElementById("raumduftflyerGesamtPreis");
    var p12 = document.getElementById("a7GesamtPreis");
    var p13 = document.getElementById("a7ohneGesamtPreis");
    var p14 = document.getElementById("duftpartyKartenGesamtPreis");
    var p15 = document.getElementById("testerkartenGesamtPreis");
    var p16 = document.getElementById("aufkleberGesamtPreis")

    var gppa = document.getElementById("gppa");

    gesamtpreis = Number(p1.value)+Number(p2.value)+Number(p3.value)+Number(p4.value)+Number(p5.value)+Number(p6.value)+Number(p7.value)+Number(p8.value)+Number(p9.value)+Number(p10.value)+Number(p11.value)+Number(p12.value)+Number(p13.value)+Number(p14.value)+Number(p15.value)+Number(p16.value);

    gppa.value = gesamtpreis;
}

function weight() {
    var a1 = document.getElementById("anzahlBestellblock");
    var a2 = document.getElementById("anzahlNotizblock");
    var a3 = document.getElementById("anzahlPutzmittelkatalog");
    var a4 = document.getElementById("anzahlÖle");
    var a5 = document.getElementById("anzalA5");
    var a6 = document.getElementById("anzalA5ohne");
    var a7 = document.getElementById("anzahlHautpflegeplan");
    var a8 = document.getElementById("anzahlDankeschönkarten");
    var a9 = document.getElementById("anzahlGutscheine");
    var a10 = document.getElementById("anzahlMuttertagskarten");
    var a11 = document.getElementById("anzahlRaumduftflyer");
    var a12 = document.getElementById("anzahlA7");
    var a13 = document.getElementById("anzahlA7ohne");
    var a14 = document.getElementById("anzahlDuftpartyKarten");
    var a15 = document.getElementById("anzahlTesterkarten");
    var a16 = document.getElementById("anzahlAufkleber");

    var v1 = Number(a1.value) * 234 / 1000;
    var v2 = Number(a2.value) * 140 / 1000;
    var v3 = Number(a3.value) * 791 / 10000;
    var v4 = Number(a4.value) * 33 / 1000;
    var v5 = Number(a5.value) * 85 / 10000;
    var v6 = Number(a6.value) * 85 / 10000;
    var v7 = Number(a7.value) * 85 / 10000;
    var v8 = Number(a8.value) * 45 / 10000;
    var v9 = Number(a9.value) * 45 / 10000;
    var v10 = Number(a10.value) * 45 / 10000;
    var v11 = Number(a11.value) * 64 / 10000;
    var v12 = Number(a12.value) * 39 / 10000;
    var v13 = Number(a13.value) * 39 / 10000;
    var v14 = Number(a14.value) * 14 / 10000;
    var v15 = Number(a15.value) * 14 / 10000;
    var v16 = Number(a16.value) * 1 / 10000;

    var gppg = document.getElementById("gppg");

    var gewicht = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10 + v11 + v12 + v13 + v14 + v15 + v16;
    var temp = gewicht;
    var zusatz;
    var test = 1;

    if(temp == 0 && test == 1) {
        zusatz = 0;
        temp = 0;
        test = 0;
    }

    if(temp > 0 && temp <= 0.5 && test == 1) {
        zusatz = 0.055;
        temp = 0;
        test = 0;
    }

    if(temp > 0.5 && temp <= 1 && test == 1) {
        zusatz = 0.060;
        temp = 0;
        test = 0;
    }

    if(temp > 1 && temp <= 2 && test == 1) {
        zusatz = 0.120;
        temp = 0;
        test = 0;
    }
    
    if(temp > 2 && temp <= 5 && test == 1) {
        zusatz = 0.120;
        temp = 0;
        test = 0;
    }

    if(temp > 5 && test == 1) {
        zusatz = 0.250;
        temp = 0;
        test = 0;
    }

    var vk = document.getElementById("vk");
    
    if(gewicht == 0) {
        vk.value = Number(0.00);
    }

    if(gewicht > 0 && gewicht <= 0.5 ) {
        vk.value = Number(1.60);
    }

    if(gewicht > 0.5 && gewicht <= 1) {
        vk.value = Number(2.75);
    }

    if(gewicht > 1 && gewicht <= 2) {
        vk.value = Number(3.99);
    }

    if(gewicht > 2 && gewicht <= 5) {
        vk.value = Number(6.99);
    }

    if(gewicht > 5 && gewicht <= 10) {
        vk.value = Number(9.49);
    }

    if(gewicht > 10) {
        vk.value = Number(16.49);
    }


    gppg.value = gewicht;
    gespreis();
}

function gespreis() {
    var gppa = document.getElementById("gppa");
    var vk = document.getElementById("vk");

    var gpv = document.getElementById("gpv");

    respr = Number(gppa.value) + Number(vk.value);
    gpv.value = respr;
}