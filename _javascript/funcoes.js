/* Bissecção */

function ajeitaEquacao(_s)
{
    // Troca nx --> n*x
    _s = _s.replace(/([0-9])([\(a-zA-Z])/g,"$1*$2");

    //Troca (...)n --> (...)*n
    _s = _s.replace(/\)([\(0-9a-zA-Z])/g,"\)*$1");

    if (_s.indexOf("^") > -1)
    {
        var tab = [];
        var powfunc="Math.pow";
        var joker = "___joker___";
        while (_s.indexOf("(") > -1) {
            _s = _s.replace(/(\([^\(\)]*\))/g, function(m, t) {
                tab.push(t);
                return (joker + (tab.length - 1));
            });
        }

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1)
        {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                return tab[d].replace(/(\w*)\^(\w*)/g, powfunc+"($1,$2)"); //haha
            });
        }
    }

    if (_s.indexOf("sen") > -1)
    {
        var tab = [];
        var sinfunc="Math.sin";
        var joker = "___joker___";

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1)
        {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                return tab[d].replace(/(\bsen\b)(\([^\(\)]*\))/g, sinfunc+"$2");
            });
            // oq sai aqui, já sai prontoo
        }
    }

    if (_s.indexOf("cos") > -1)
    {
        var tab = [];
        var cosfunc="Math.cos";
        var joker = "___joker___";

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1)
        {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                return tab[d].replace(/(\bcos\b)(\([^\(\)]*\))/g, cosfunc+"$2");
            });
        }
    }

    if (_s.indexOf("tan") > -1)
    {
        var tab = [];
        var tanfunc="Math.tan";
        var joker = "___joker___";

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1)
        {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                return tab[d].replace(/(\btan\b)(\([^\(\)]*\))/g, tanfunc+"$2");
            });
        }
    }

    if (_s.indexOf("log") > -1)
    {
        var tab = [];
        var logfunc="Math.log";
        var joker = "___joker___";

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1)
        {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                return tab[d].replace(/(\blog\b)(\([^\(\)]*\))/g, logfunc+"$2");
            });
        }
    }

    if (_s.indexOf("exp") > -1)
    {
        var tab = [];
        var expfunc="Math.exp";
        var joker = "___joker___";

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1)
        {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                return tab[d].replace(/(\bexp\b)(\([^\(\)]*\))/g, expfunc+"$2"); // vai ser parecida com a pow
            });
        }
    }

    if (_s.indexOf("asen") > -1)
    {
        var tab = [];
        var expfunc="Math.asin";
        var joker = "___joker___";

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1)
        {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                return tab[d].replace(/(\basen\b)(\([^\(\)]*\))/g, expfunc+"$2"); // vai ser parecida com a pow
            });
        }
    }

    if (_s.indexOf("acos") > -1)
    {
        var tab = [];
        var expfunc="Math.acos";
        var joker = "___joker___";

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1)
        {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                return tab[d].replace(/(\bacos\b)(\([^\(\)]*\))/g, expfunc+"$2"); // vai ser parecida com a pow
            });
        }
    }

    if (_s.indexOf("atan") > -1)
    {
        var tab = [];
        var expfunc="Math.atan";
        var joker = "___joker___";

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1)
        {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                return tab[d].replace(/(\batan\b)(\([^\(\)]*\))/g, expfunc+"$2"); // vai ser parecida com a pow
            });
        }
    }

    if (_s.indexOf("raiz") > -1)
    {
        var tab = [];
        var expfunc="Math.sqrt";
        var joker = "___joker___";

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1)
        {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                return tab[d].replace(/(\braiz\b)(\([^\(\)]*\))/g, expfunc+"$2"); // vai ser parecida com a pow
            });
        }
    }

    return _s;
}

var EQUACAO,VERFEQUACAO,cop;

function Escolha()
{
    var x = document.getElementById("mySelect").value;

    if(x=="Bisseccao"){
        document.getElementById('campoNewton').style.display = 'none';

        document.getElementById('qntIteracoes').style.display = 'none';

        document.getElementById('escondCampoEsq').style.display = 'block';
        document.getElementById('escondCampoDir').style.display = 'block';

        return 1;
    }
    if(x=="Newton-Raphson"){
        document.getElementById('campoNewton').style.display = 'block';

        document.getElementById('qntIteracoes').style.display = 'none';

        document.getElementById('escondCampoEsq').style.display = 'none';
        document.getElementById('escondCampoDir').style.display = 'none';

        return 2;
    }
    if(x=="Pontofixo"){
        document.getElementById('campoNewton').style.display = 'block';
        document.getElementById('qntIteracoes').style.display = 'block';

        document.getElementById('escondCampoEsq').style.display = 'none';
        document.getElementById('escondCampoDir').style.display = 'none';

        return 3;
    }
    if(x=="Secante"){
        document.getElementById('campoNewton').style.display = 'none';

        document.getElementById('qntIteracoes').style.display = 'none';

        document.getElementById('escondCampoEsq').style.display = 'block';
        document.getElementById('escondCampoDir').style.display = 'block';

        return 4;
    }
    if(x=="Falsaposicao"){
        document.getElementById('campoNewton').style.display = 'none';

        document.getElementById('qntIteracoes').style.display = 'none';

        document.getElementById('escondCampoEsq').style.display = 'block';
        document.getElementById('escondCampoDir').style.display = 'block';

        return 5;
    }
}

function calcula(x)
{
    valor = eval(EQUACAO);
    return valor
}

function calculaVERIF(x) {
    valor = eval(VERFEQUACAO);
    return valor
}

function arredonda(x) {
    valor = Math.floor(10000000 * x)/10000000;
    return valor
}

function veficarIntervalo(aForm)
{
    a = eval(aForm.raizVerifEsq.value);
    b = eval(aForm.raizVerifDir.value);
    aa = parseFloat(a);
    bb = parseFloat(b);
    //EQUACAO = document.getElementById('textAreaEquaVerif').value;
    VERFEQUACAO = ajeitaEquacao(VERFEQUACAO);

    fa = arredonda(calculaVERIF(aa));
    fb = arredonda(calculaVERIF(bb));

    if(isNaN(fa))
    {
        fa = "Indefinido";
    }
    if(isNaN(fb))
    {
        fb = "Indefinido";
    }


    div = document.getElementById("escreveVerif");
    auxescreve = "";

    if ((a == null) || (b == null) || (VERFEQUACAO == ""))
    {
        showSnackbar("snackbar02");
    }
    else
    {
        div.innerHTML = ""; // (1+2)/2 = 1.5

        if (VERFEQUACAO.indexOf("x") > -1)
        {
            if ((arredonda(calculaVERIF(aa)) * arredonda(calculaVERIF(bb))) < 0) {
                auxescreve = "<h4>$f(" + a + ") = " + fa + "$</h4><h4>" + "$f(" + b + ") = " + fb + "$</h4><h4><font color='green'>$f(" + a + ") * f(" + b + ") < 0$</h4>";
            }
            else {
                showSnackbar("snackbar04");
                auxescreve = "<h4>$f(" + a + ") = " + fa + "$</h4><h4>" + "$f(" + b + ") = " + fb + "$</h4><h4><font color='red'>$f(" + a + ") * f(" + b + ") > 0$</h4>";
            }
        }
        else
        {
            showSnackbar("snackbar03");
        }
    }
    div.innerHTML = auxescreve;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "escreveVerif"]); // sempre chamar por ultimo!!!
}


function leitura(aForm, escolha)
{
    a = eval(aForm.raizEsq.value);
    b = eval(aForm.raizDir.value);
    aa = parseFloat(a);
    bb = parseFloat(b);
    erro = eval(aForm.preci.value);
    //EQUACAO = document.getElementById('textAreaEqua').value;
    cop = codecop;
    //var myRe = /([A-Za-z]+)/g;
    //var myArray = myRe.exec(cop);
    //veriforma = myRe.lastIndex;

    EQUACAO = ajeitaEquacao(EQUACAO);
    //alert(EQUACAO);

    // Recuperando div
    meuDiv = document.getElementById("escreveCalcFuncao");

    // Newton
    xinicial = document.getElementById("campoXNew").value;

    //Ponto Fixo
    niteracoes = document.getElementById("campoIteracoes").value;

    //Flag para verificar se o intervalo é valido
    flagInter = 0;


    // Bissecção
    if (escolha == 1)
    {
        if ((a == null) || (b == null) || (erro == null) || (EQUACAO == ""))
        {
            showSnackbar("snackbar02");
        }
        else
        {
            if(EQUACAO.indexOf("x") > -1)
            {
                if ((arredonda(calcula(aa)) * arredonda(calcula(bb))) < 0)
                {
                    meuDiv.innerHTML = ""; // (1+2)/2 = 1.5

                    meuDiv.innerHTML += "<div class='panel panel-primary'><div class='panel-heading'><h3>Dados iniciais:</h3></div> <div class='panel-body'><h3>$f(x) = "+cop+"$<br>$f("+aa+") = "+ arredonda(calcula(aa))+
                        "$<br>$f("+bb+") = "+ arredonda(calcula(bb))+"$<br>$E = "+erro+"$<br></h3></div></div>";

                    var achou=false;
                    fa=calcula(aa);
                    fb=calcula(bb);
                    cont=2;

                    var first = 0;
                    var fr;
                    var aux = "";

                    if ((a!=null) && (b!=null) && (erro!=null))
                    {
                        while (!achou)
                        {
                            x=arredonda((aa+bb)/2);
                            er=arredonda((bb-aa)/2);
                            if (er<=erro) {
                                achou=true;
                                if(first == 0)
                                {
                                    aux += "<div class='panel panel-primary'><div class='panel-heading'><h3>Usando o método da bissecção:</h3></div> <div class='panel-body'><h3>Invervalo 1: $["+aa+","+bb+"]$<br></h3>";
                                    first = 1;
                                }
                                aux += "<h3>$\\frac{("+aa+"+"+bb+")}{2} = "+x+"$<br></h3>"+"<h3>Calculando $f("+x+") = 0$"+"<h3>$E = "+er+"$<br></h3>"+"<br><br></h3></div></div>";
                                meuDiv.innerHTML += aux;
                            }else{
                                if (er>erro){
                                    fr=calcula(x);
                                    if(first == 0)
                                    {
                                        aux += "<div class='panel panel-primary'><div class='panel-heading'><h3>Usando o método da bissecção:</h3></div> <div class='panel-body'><h3>Invervalo 1: $["+aa+","+bb+"]$<br></h3>";
                                        first = 1;
                                    }
                                    aux += "<h3>$\\frac{("+aa+"+"+bb+")}{2} = "+x+"$<br></h3>"+"<h3>Calculando $f("+x+") = "+arredonda(calcula(x))+"$<h3>$E = "+er+"$<br></h3><br><br></h3></div></div>";
                                    meuDiv.innerHTML += aux; // principal
                                }
                                if (fr==0) {
                                    achou=true;
                                }else{
                                    if (fr<0){
                                        aa=x;
                                    }else{
                                        bb=x;
                                    }
                                }
                            }
                            if (!achou){
                                // id='mid'
                                aux = "<div id='mid' class='panel panel-primary'><div class='panel-body'><h3>Intervalo "+cont+" :   $["+arredonda(aa)+";"+arredonda(bb)+"]$<br></h3>";

                                cont++;
                            }
                        }
                        first = 0;
                    }
                    if (achou){
                        document.getElementById('conteiner-passos').style.display = 'block';
                        document.getElementById('conteiner-grafico').style.display = 'block';
                        meuDiv.innerHTML += "<div class='panel panel-primary'><div class='panel-heading'><h3>Portanto:</h3></div> <div class='panel-body'><h3>Intervalo final:   $["+aa+";"+bb+"]$<br></h3><h3>Raiz:   $"+arredonda(x)+" ± "+er+"$</h3></div></div>";

                        escreveTextGraf(cop,arredonda(x));

                    }

                    flagInter = 1;

                }
                else
                {
                    document.getElementById('conteiner-passos').style.display = 'none';
                    document.getElementById('conteiner-grafico').style.display = 'none';

                    showSnackbar("snackbar01");
                }
            }
            else
            {
                showSnackbar("snackbar03");
            }
        }
    }

    // Newton-Raphson
    if(escolha == 2)
    {
        if ((xinicial == null) || (erro == null) || (EQUACAO == ""))
        {
            showSnackbar("snackbar02");
        }
        else
        {
            if(EQUACAO.indexOf("x") > -1)
            {
                //copia da equação "bruta"... ex: x^2-4 (sem Math).. só para mostrar ao usuário
                var cop2 = cop;

                // Foi preciso tirar o "Math.sqrt", que estava vindo da conversão de raiz(x+2) => Math.sqrt(x+2), pois a derivada(neramer) não aceita Math... só aceita ex: (x+2)^(1/2) ou sqrt(x+2).. usei a ultima
                // tudo isso para ficar mais facil a vida do usuário :)
                if(cop.indexOf("raiz") > -1)
                {
                    while (cop.indexOf("raiz") > -1)
                    {
                        cop = cop.replace(/(\braiz\b)(\([^\(\)]*\))/g, "sqrt"+"$2");
                    }
                }


                var i = 0;
                flag = 0;
                flagaux = 1;

                var err, x_1, x = parseFloat(xinicial);

                dervv = arredonda(derivada(x));
                if(dervv === Infinity || isNaN(dervv))
                {
                    dervv = "Indefinido";
                }

                var resultado = "<div class='panel panel-primary'><div class='panel-heading'><h3>Dados iniciais:</h3></div> <div class='panel-body'><h3>$f(x) = " + cop2 + "$</h3><h3>$x_{0} = " + x + "$</h3><h3>$f'(" + x + ") = " + dervv
                    + "$</h3><h3>$E = " + erro + "$<br></h3></div></div>";
                do {
                    //verifica raizes negativas
                    if(EQUACAO.indexOf("Math.sqrt") > -1)
                    {
                        auxeq = calcula(x);
                        if(isNaN(auxeq))
                        {
                            flagaux = 0;
                            break;
                        }
                    }

                    // Verifica se a derivada é 0
                    if(derivada(x) == 0)
                    {
                        flag = 1;
                        x += 1;
                        var x_1 = arredonda(x - (calcula(x) / derivada(x)));
                    }
                    else
                    {
                        var x_1 = arredonda(x - (calcula(x) / derivada(x)));
                        flag = 0;
                    }
                    var y = x;
                    var e = Math.abs(x - x_1);
                    err = arredonda(Math.abs((x - x_1) / x));
                    if(err === Infinity || isNaN(err))
                    {
                        err = "Indefinido";
                    }
                    x = x_1;
                    if (i == 0)
                    {
                        auxDerivada = "";
                        if(flag == 1){
                            auxDerivada = "<font color='blue'><h3>Como $f'(x) = 0$, $x_{0} = 1$</h3></font>";
                        }
                        resultado += "<div class='panel panel-primary'><div class='panel-heading'><h3>Usando o método de Newton-Raphson:</h3></div> <div class='panel-body'><h3>"+auxDerivada+"$f(" + y + ") = " + arredonda(calcula(y)) + "$</h3><h3>$f'(" + y + ") = " + arredonda(derivada(y)) + "$</h3><h3>" +
                            "$x_{"+i+"} = " + y + " - (\\frac{" + arredonda(calcula(y)) + "}{" + arredonda(derivada(y)) + "}) = " + x_1 + "$" +
                            "</h3><h3>$E = " + err + "$</h3><br><br></div></div>";
                    }
                    else {
                        resultado += "<div id='mid' class='panel panel-primary'><div class='panel-body'><h3>$f(" + y + ") = " + arredonda(calcula(y)) + "$</h3><h3>$f'(" + y + ") = " + arredonda(derivada(y)) + "$</h3><h3>" +
                            "$x_{"+i+"} = " + y + " - (\\frac{" + arredonda(calcula(y)) + "}{" + arredonda(derivada(y)) + "}) = " + x_1 + "$</h3><h3>$E = " + err + "$</h3><br><br></div></div>";
                    }

                    i++;
                    //I imagine that this is your safety so I would implement it like this
                    if (i > 100) break;
                } while (e > erro);
                veriff = (i == 100 || flagaux == 0 ? "<font color='red'>O resultado é divergente.</font>" : "$"+x+"$");
                aux = "<div class='panel panel-primary'><div class='panel-heading'><h3>Portanto:</h3></div><div class='panel-body'><h3>Raiz: " + veriff + "</h3></div></div>";
                document.getElementById('escreveCalcFuncao').innerHTML = resultado + aux;

                document.getElementById('conteiner-passos').style.display = 'block';

                if(flagaux == 0)
                {
                    document.getElementById('conteiner-grafico').style.display = 'none';

                }

                if(flagaux == 1)
                {
                    document.getElementById('conteiner-grafico').style.display = 'block';
                    escreveTextGraf(cop2, x_1);
                }

                flagInter = 1;

            }
            else
            {
                showSnackbar("snackbar03");
            }
        }
    }

    // Iterativo linear/ Ponto fixo
    if(escolha == 3)
    {
        if ((xinicial == null) || (EQUACAO == null) || (niteracoes == null) || (erro == null))
        {
            showSnackbar("snackbar02");
        }
        else
        {
            if(EQUACAO.indexOf("x") > -1)
            {
                //copia da equação "bruta"... ex: x^2-4 (sem Math)
                var cop2 = cop;

                // Foi preciso tirar o "Math.sqrt", que estava vindo da conversão de raiz(x+2) => Math.sqrt(x+2), pois a derivada(neramer) não aceita Math... só aceita ex: (x+2)^(1/2) ou sqrt(x+2).. usei a ultima
                // tudo isso para ficar mais facil a vida do usuário :)
                if(cop.indexOf("raiz") > -1)
                {
                    while (cop.indexOf("raiz") > -1)
                    {
                        cop = cop.replace(/(\braiz\b)(\([^\(\)]*\))/g, "sqrt"+"$2");
                    }
                }


                var i = 0;
                flag = 0;
                flagaux = 1;


                var err, x_1, x = parseFloat(xinicial);
                var resultado = "<div class='panel panel-primary'><div class='panel-heading'><h3>Dados iniciais:</h3></div> <div class='panel-body'><h3>$f(x) = " + cop2 + "$</h3><h3>$x_{0} = " + x + "$</h3><h3>$f'(" + x + ") = " + arredonda(derivada(x))
                    + "$</h3><h3>$E = " + erro + "$<br></h3></div></div>";
                do {
                    //verifica raizes negativas
                    if(EQUACAO.indexOf("Math.sqrt") > -1)
                    {
                        auxeq = calcula(x);
                        if(isNaN(auxeq))
                        {
                            flagaux = 0;
                            break;
                        }
                    }

                    if(i == 0 && derivada(x) < 1)
                    {
                        flag = 1;
                    }
                    else
                    {
                        if(flag == 0)
                        {
                            flag = 0;
                            break;
                        }
                    }


                    countxx = 0;
                    auxx = x;
                    for (j=0; j < 10; j++)
                    {
                        x_1 = arredonda(calcula(auxx));
                        if(auxx < x_1)
                        {
                            countxx++;
                        }
                        auxx = x_1;
                    }
                    if(countxx >= 5)
                    {
                        flag = 0;
                        break;
                    }



                    if(flag == 1)
                    {
                        x_1 = arredonda(calcula(x));
                    }

                    var y = x;
                    var e = Math.abs(x - x_1);
                    err = arredonda(Math.abs((x - x_1) / x));
                    if(err === Infinity || isNaN(err))
                    {
                        err = "Indefinido";
                    }

                    x = x_1;
                    if (i == 0)
                    {
                        auxDerivada = "";
                        if(flag == 1){
                            auxDerivada = "<font color='green'><h3>Como $f'(x) < 1$, logo $f(x)$ converge</h3></font>";
                        }
                        resultado += "<div class='panel panel-primary'><div class='panel-heading'><h3>Usando o método iterativo linear:</h3></div> <div class='panel-body'>"+auxDerivada+"<h3>$x_{"+i+"} = "+y+"$</h3><h3>$f(" + y + ") = " + arredonda(calcula(y)) + "$</h3><h3>" +
                            "$E = " + err + "$</h3><br><br></div></div>";
                    }
                    else {
                        resultado += "<div id='mid' class='panel panel-primary'><div class='panel-body'><h3>$x_{"+i+"} = "+y+"$</h3><h3>$f(" + y + ") = " + arredonda(calcula(y)) + "$</h3><h3>" +
                            "$E = " + err + "$</h3><br><br></div></div>";
                    }

                    i++;

                    if (i > niteracoes) break;
                } while (e > erro);
                veriff = (i == niteracoes || flag == 0 || flagaux == 0 ? "<font color='red'>O resultado é divergente.</font>" : "$"+x_1+"$");
                aux = "<div class='panel panel-primary'><div class='panel-heading'><h3>Portanto:</h3></div><div class='panel-body'><h3>Raiz: " + veriff + "</h3></div></div>";
                document.getElementById('escreveCalcFuncao').innerHTML = resultado + aux;

                document.getElementById('conteiner-passos').style.display = 'block';

                if(flag == 0 || flagaux == 0)
                {
                    document.getElementById('conteiner-grafico').style.display = 'none';

                }

                if(flag == 1 || flagaux == 1)
                {
                    document.getElementById('conteiner-grafico').style.display = 'block';
                    escreveTextGraf(cop2, x_1);
                }

                flagInter = 1;

            }
            else
            {
                showSnackbar("snackbar03");
            }

        }

    }


    // Secante
    if(escolha == 4)
    {
        if ((a == null) || (b == null) || (erro == null) || (EQUACAO == ""))
        {
            showSnackbar("snackbar02");
        }
        else
        {
            // verificar se existe ao menos uma letra.. por expressão regular
            if(EQUACAO.indexOf("x") > -1)
            {
                var i = 2;
                flagaux = 1;

                x_0 = aa;
                x_1 = bb;

                pt0 = arredonda(calcula(x_0));
                pt1 = arredonda(calcula(x_1));
                if(pt0 === Infinity || isNaN(pt0))
                {
                    pt0 = "Indefinido";
                }
                if(pt1 === Infinity || isNaN(pt1))
                {
                    pt1 = "Indefinido";
                }


                var err, x_2;
                var resultado = "<div class='panel panel-primary'><div class='panel-heading'><h3>Dados iniciais:</h3></div> <div class='panel-body'><h3>$f(x) = " + cop + "$<br></h3><h3>$x_{0} = " + x_0 + "$<br></h3><h3>$f(" + x_0 + ") = " +pt0+ "$<br></h3><h3>$x_{1} = "+x_1+"$<br></h3><h3>$f(" + x_1 + ") = " +pt1+ "$<br></h3><h3>$E = " + erro + "$<br></h3></div></div>";
                do {
                    //verifica raizes negativas
                    if(EQUACAO.indexOf("Math.sqrt") > -1)
                    {
                        auxeq = calcula(x_0);
                        auxeq2 = calcula(x_1);
                        if(isNaN(auxeq) || isNaN(auxeq2))
                        {
                            flagaux = 0;
                            break;
                        }
                    }

                    var x_2 = arredonda(x_0 - (calcula(x_0)*(x_1 - x_0))/(calcula(x_1) - calcula(x_0)));

                    var e = Math.abs(x_2 - x_1);
                    // salva o valor antes de mudar
                    antx0 = x_0;
                    antx1 = x_1;
                    x_0 = x_1;
                    x_1 = x_2;

                    err = arredonda(Math.abs((x_1 - x_0) / x_1));
                    if(err === Infinity || isNaN(err))
                    {
                        err = "Indefinido";
                    }

                    eqq = arredonda(calcula(antx0));
                    if(eqq < 0)
                    {
                        sinal = "+";
                        eqq *= -1;
                    }
                    else
                    {
                        sinal = "-";
                    }

                    if (i == 2)
                    {
                        resultado += "<div class='panel panel-primary'><div class='panel-heading'><h3>Usando o método da Secante:</h3></div> <div class='panel-body'><h3>$x_{0} = " + antx0 + "$<br></h3><h3>$x_{1} = " + antx1 + "$<br></h3><h3>$f(" + antx0 + ") = " + arredonda(calcula(antx0)) + "$<br></h3><h3>$f(" + antx1 + ") = " + arredonda(calcula(antx1)) + "$<br></h3><h3>" +
                            "$x_{"+i+"} = \\frac{("+arredonda(calcula(antx1))+"*"+arredonda(antx0)+sinal+eqq+"*"+arredonda(antx1)+")}{"+arredonda(calcula(antx1))+sinal+eqq+"} = "+x_2+"$<br></h3><h3>$E = " + err + "$</h3><br><br></div></div>";
                    }
                    else {
                        resultado += "<div id='mid' class='panel panel-primary'><div class='panel-body'><h3>$x_{"+(i-2)+"} = " + antx0 + "$<br></h3><h3>$x_{"+(i-1)+"} = " + antx1 + "$<br></h3><h3>$f(" + antx0 + ") = " + arredonda(calcula(antx0)) + "$<br></h3><h3>$f(" + antx1 + ") = " + arredonda(calcula(antx1)) + "$<br></h3><h3>" +
                            "$x_{"+i+"} = \\frac{("+arredonda(calcula(antx1))+"*"+arredonda(antx0)+sinal+eqq+"*"+arredonda(antx1)+")}{"+arredonda(calcula(antx1))+sinal+eqq+"} = "+x_2+"$<br></h3><h3>$E = " + err + "$</h3><br><br></div></div>";
                    }

                    i++;
                    //I imagine that this is your safety so I would implement it like this
                    if (i > 100) break;
                } while (e > erro);
                veriff = (i == 100 || flagaux == 0 ? "<font color='red'>O resultado é divergente.</font>" : "$"+x_2+"$");
                aux = "<div class='panel panel-primary'><div class='panel-heading'><h3>Portanto:</h3></div><div class='panel-body'><h3>Raiz: " + veriff + "</h3></div></div>";
                document.getElementById('escreveCalcFuncao').innerHTML = resultado + aux;

                document.getElementById('conteiner-passos').style.display = 'block';

                if(flagaux == 0)
                {
                    document.getElementById('conteiner-grafico').style.display = 'none';
                }

                if(flagaux == 1)
                {
                    document.getElementById('conteiner-grafico').style.display = 'block';
                    escreveTextGraf(cop, x_2);
                }

                flagInter = 1;

            }
            else
            {
                showSnackbar("snackbar03");
            }
        }
    }

    // Falsa Posição
    if (escolha == 5)
    {
        if ((a == null) || (b == null) || (erro == null) || (EQUACAO == ""))
        {
            showSnackbar("snackbar02");
        }
        else
        {
            if(EQUACAO.indexOf("x") > -1)
            {
                if ((arredonda(calcula(aa)) * arredonda(calcula(bb))) < 0)
                {
                    var i = 2;
                    flagaux = 1;

                    x_0 = aa;
                    x_1 = bb;

                    pt0 = arredonda(calcula(x_0));
                    pt1 = arredonda(calcula(x_1));
                    if(pt0 === Infinity || isNaN(pt0))
                    {
                        pt0 = "Indefinido";
                    }
                    if(pt1 === Infinity || isNaN(pt1))
                    {
                        pt1 = "Indefinido";
                    }

                    var err, x_2;
                    var resultado = "<div class='panel panel-primary'><div class='panel-heading'><h3>Dados iniciais:</h3></div> <div class='panel-body'><h3>$f(x) = " + cop + "$<br></h3><h3>$x_{0} = " + x_0 + "$<br></h3><h3>$f(" + x_0 + ") = " +pt0+ "$<br></h3><h3>$x_{1} = "+x_1+"$<br></h3><h3>$f(" + x_1 + ") = " +pt1+ "$<br></h3><h3>$E = " + erro + "$<br></h3></div></div>";
                    do {
                        //verifica raizes negativas
                        if(EQUACAO.indexOf("Math.sqrt") > -1)
                        {
                            auxeq = calcula(x_0);
                            auxeq2 = calcula(x_1);
                            if(isNaN(auxeq) || isNaN(auxeq2))
                            {
                                flagaux = 0;
                                break;
                            }
                        }

                        var x_2 = arredonda(x_0 - (calcula(x_0)*(x_1 - x_0))/(calcula(x_1) - calcula(x_0)));

                        var e = Math.abs(x_2 - x_1);
                        // salva o valor antes de mudar
                        antx0 = x_0;
                        antx1 = x_1;
                        x_0 = x_1;
                        x_1 = x_2;

                        err = arredonda(Math.abs((x_1 - x_0) / x_1));
                        if(err === Infinity || isNaN(err))
                        {
                            err = "Indefinido";
                        }

                        eqq = arredonda(calcula(antx0));
                        if(eqq < 0)
                        {
                            sinal = "+";
                            eqq *= -1;
                        }
                        else
                        {
                            sinal = "-";
                        }

                        if (i == 2)
                        {
                            resultado += "<div class='panel panel-primary'><div class='panel-heading'><h3>Usando o método da Falsa posição:</h3></div> <div class='panel-body'><h3>$x_{0} = " + antx0 + "$<br></h3><h3>$x_{1} = " + antx1 + "$<br></h3><h3>$f(" + antx0 + ") = " + arredonda(calcula(antx0)) + "$<br></h3><h3>$f(" + antx1 + ") = " + arredonda(calcula(antx1)) + "$<br></h3><h3>" +
                                "$x_{"+i+"} = \\frac{("+arredonda(calcula(antx1))+"*"+arredonda(antx0)+sinal+eqq+"*"+arredonda(antx1)+")}{"+arredonda(calcula(antx1))+sinal+eqq+"} = "+x_2+"$<br></h3><h3>$E = " + err + "$</h3><br><br></div></div>";
                        }
                        else {
                            resultado += "<div id='mid' class='panel panel-primary'><div class='panel-body'><h3>$x_{"+(i-2)+"} = " + antx0 + "$<br></h3><h3>$x_{"+(i-1)+"} = " + antx1 + "$<br></h3><h3>$f(" + antx0 + ") = " + arredonda(calcula(antx0)) + "$<br></h3><h3>$f(" + antx1 + ") = " + arredonda(calcula(antx1)) + "$<br></h3><h3>" +
                                "$x_{"+i+"} = \\frac{("+arredonda(calcula(antx1))+"*"+arredonda(antx0)+sinal+eqq+"*"+arredonda(antx1)+")}{"+arredonda(calcula(antx1))+sinal+eqq+"} = "+x_2+"$<br></h3><h3>$E = " + err + "$</h3><br><br></div></div>";
                        }

                        i++;
                        //I imagine that this is your safety so I would implement it like this
                        if (i > 100) break;
                    } while (e > erro);
                    veriff = (i == 100 || flagaux == 0 ? "<font color='red'>O resultado é divergente.</font>" : "$"+x_2+"$");
                    aux = "<div class='panel panel-primary'><div class='panel-heading'><h3>Portanto:</h3></div><div class='panel-body'><h3>Raiz: " + veriff + "</h3></div></div>";
                    document.getElementById('escreveCalcFuncao').innerHTML = resultado + aux;

                    document.getElementById('conteiner-passos').style.display = 'block';

                    if(flagaux == 0)
                    {
                        document.getElementById('conteiner-grafico').style.display = 'none';
                    }

                    if(flagaux == 1)
                    {
                        document.getElementById('conteiner-grafico').style.display = 'block';
                        escreveTextGraf(cop, x_2);
                    }


                    flagInter = 1;

                }
                else
                {
                    document.getElementById('conteiner-passos').style.display = 'none';
                    document.getElementById('conteiner-grafico').style.display = 'none';

                    showSnackbar("snackbar01");
                }
            }
            else
            {
                showSnackbar("snackbar03");
            }
        }
    }

    if(flagInter == 1)
    {
        $('html, body').animate({ scrollTop: $('#ancoraPassos').offset().top}, 1000);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "escreveCalcFuncao"]);
        flagInter = 0;
    }
}


/* Update do grafico plotado */
function escreveTextGraf(funcao, raiz)
{
    while (funcao.indexOf("sen") > -1 || funcao.indexOf("raiz") > -1)
    {
        funcao = funcao.replace("sen","sin");
        funcao = funcao.replace("raiz","sqrt");
    }

    aw = 1;
    ay = 1;
    at = 1;

    // colocar para aparecer de acordo com a raiz, o eixo Y... testar com x^2-400 .. 0 e 500.. Math.max(0,500);


    if(raiz < 0)
    {
        xmin = raiz-2;
        xmax = raiz*(-1)+2;
        ymenor = raiz-1;
        ymaior = raiz*(-1)+1;
    }
    else
    {
        xmin = raiz*(-1)-2;
        xmax = raiz+2;
        ymenor = raiz*(-1)-1;
        ymaior = raiz+1;
    }

    maximoY = Math.pow(raiz,2)+5;
    minimoY = Math.pow(raiz,2)*(-1)-5;

    if(maximoY >= 100)
    {
        aw = 10;
        ay = 10;
        at = 10;
    }

    aux = "";

    document.getElementById("picture1input").innerHTML = "";
    aux += "setBorder(25);";
    aux += "xunitlength='50';";
    aux += "yunitlength='50';";

    // define o tamanho dos eixos
    aux += "initPicture("+xmin+","+xmax+", "+minimoY+", "+maximoY+");";
    // define o intervalo em cada eixo
    aux += "axes("+aw+", "+ay+", 'labels', "+at+");";


    aux += "stroke = 'blue';";
    aux += "strokewidth = '2';";

    // plota a função e define os pontos dela
    aux += "plot("+funcao+","+ymenor+","+ymaior+");";

    document.getElementById("picture1input").innerHTML = aux;

    updatePicture(0);
}


// Newton-Raphson
function derivada(x){
    var func = cop;
    return nerdamer('diff(' + func + ')').buildFunction().call(undefined, x);
}



function scrollToTop(scrollDuration) {
    var cosParameter = window.scrollY / 2,
        scrollCount = 0,
        oldTimestamp = performance.now();
    function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}


function Onscroolll()
{
    window.onscroll = function(){
        var top = window.pageYOffset || document.documentElement.scrollTop
        if( top > 500 ) {
            document.getElementById("topBut").style.display = "block";
        }
        else
        {
            document.getElementById("topBut").style.display = "none";
        }
    }
}


function myAccFunc(acord) {
    var x = document.getElementById(acord);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}



var flag = 0;
var codecop = "";
var codecop2 = "";
function refreshMathJax(code, aux, divesc)
{
    if(code == "")
    {

    }
    else
    {
        if(aux == 1)
        {
            codecop = code;
            var html = "\<span id='"+divesc+"'\>\<script type='math/tex;mode=in-line'\> "+ code + "\</script\></span>";
        }
        else
        {
            codecop2 = code;
            var html = "\<span id='"+divesc+"'\>\<script type='math/tex;mode=in-line'\> "+ code + "\</script\></span>";
        }
        flag = 1;
    }

    if(aux == 1)
    {
        $('#textAreaEqua').html('');
        EQUACAO = code;
    }
    else
    {
        $('#textAreaEquaVerif').html('');
        VERFEQUACAO = code;
    }
    document.execCommand('insertHTML', false, html);

    MathJax.Hub.Queue(["Typeset", MathJax.Hub, divesc]);
}


function showSnackbar(id) {
    var x = document.getElementById(id);
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
