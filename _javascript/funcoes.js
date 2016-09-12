/* Bissecção */

function ajeitaEquacao(_s) {
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
                return tab[d].replace(/(\bsen\b)\((\w+)\)/g, sinfunc+"($2)");
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
                return tab[d].replace(/(\bcos\b)\((\w+)\)/g, cosfunc+"($2)");
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
                return tab[d].replace(/(\btan\b)\((\w+)\)/g, tanfunc+"($2)");
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
                return tab[d].replace(/(\blog\b)\((\w+)\)/g, logfunc+"($2)");
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
                return tab[d].replace(/(\bexp\b)\((\w+)\)/g, expfunc+"($2)"); // vai ser parecida com a pow
            });
        }
    }


    return _s;
}

var EQUACAO;

function Escolha()
{
    var x = document.getElementById("mySelect").value;
    document.getElementById("escolhaEquacao").innerHTML = "Sua escolha: " + x;

    if(x=="Bisseccao"){
        return 1;
    }
    if(x=="Falsa posição"){
        return 2;
    }
    if(x=="Newton-Raphson"){
        return 3;
    }
    if(x=="Secante"){
        return 4;
    }
    if(x=="Ponto fixo"){
        return 5;
    }
}

function calcula(x) {
    valor = eval(EQUACAO);
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
    EQUACAO = document.getElementById('textAreaEquaVerif').value;
    EQUACAO = ajeitaEquacao(EQUACAO);

    fa = arredonda(calcula(aa));
    fb = arredonda(calcula(bb));

    div = document.getElementById("escreveVerif");

    if ((a == null) || (b == null) || (EQUACAO == ""))
    {
        document.getElementById('id02').style.display='block';
    }
    else
    {
        if (EQUACAO.indexOf("x") > -1)
        {
            if ((arredonda(calcula(aa)) * arredonda(calcula(bb))) < 0) {
                return div.innerHTML = "<h3>f(" + a + ") = " + fa + "<br>" + "f(" + b + ") = " + fb + "<br><font color='green'>f(" + a + ") * f(" + b + ") < 0</h3>";
            }
            else {
                document.getElementById('id04').style.display='block';
                return div.innerHTML = "<h3>f(" + a + ") = " + fa + "<br>" + "f(" + b + ") = " + fb + "<br><font color='red'>f(" + a + ") * f(" + b + ") > 0</h3>";
            }
        }
        else
        {
            document.getElementById('id03').style.display='block';
        }
    }
}


function leitura(aForm, escolha)
{
    a = eval(aForm.raizEsq.value);
    b = eval(aForm.raizDir.value);
    aa = parseFloat(a);
    bb = parseFloat(b);
    erro = eval(aForm.preci.value);
    EQUACAO = document.getElementById('textAreaEqua').value;
    cop = EQUACAO;

    EQUACAO = ajeitaEquacao(EQUACAO);

    // Recuperando iframe
    meuDiv = document.getElementById("escreveCalcFuncao");

    if (escolha == 1)
    {
        if ((a == null) || (b == null) || (erro == null) || (EQUACAO == ""))
        {
            document.getElementById('id02').style.display='block';
        }
        else
        {
            if(EQUACAO.indexOf("x") > -1)
            {
                if ((arredonda(calcula(aa)) * arredonda(calcula(bb))) < 0)
                {
                    meuDiv.innerHTML += "<h3>Dados iniciais:<br>f(x) = "+cop+"<br>f("+aa+") = "+ arredonda(calcula(aa))+ "<br>f("+bb+") = "+ arredonda(calcula(bb))+"<br>E = "+erro+"<BR><br></h3></h3>"+
                        "<h3>Usando o método da bissecção:<br><br>Invervalo 1: ["+aa+","+bb+"]<br></h3>";

                    var achou=false;
                    fa=calcula(aa);
                    fb=calcula(bb);
                    cont=2;

                    var fr;

                    if ((a!=null) && (b!=null) && (erro!=null))
                    {
                        while (!achou)
                        {
                            x=((aa+bb)/2);
                            er=((bb-aa)/2);
                            if (er<=erro) {
                                achou=true;
                                meuDiv.innerHTML += "<h3>("+aa+"+"+bb+")/2 = "+x+"<br></h3>"+"<h3>Calculando f("+x+") = 0"+"<br><br></h3>";
                            }else{
                                if (er>erro){
                                    fr=calcula(x);
                                    meuDiv.innerHTML += "<h3>("+aa+"+"+bb+")/2 = "+x+"<br></h3>"+"<h3>Calculando f("+x+") = "+arredonda(fr)+"<br><br></h3>";
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
                                meuDiv.innerHTML += "<h3>Intervalo "+cont+" :   ["+arredonda(aa)+";"+arredonda(bb)+"]<br></h3>";

                                cont++;
                            }
                        }
                    }
                    if (achou){
                        meuDiv.innerHTML += "<h3>Portanto,"+"<br><br></h3>"+"<h3>Intervalo final:   ["+aa+";"+bb+"]<br></h3>"+
                            "<h3>Raiz:   "+arredonda(x)+" ± "+er+"</h3>";
                    }

                }
                else
                {
                    document.getElementById('id01').style.display='block';
                }
            }
            else
            {
                document.getElementById('id03').style.display='block';
            }
        }
    }
}


var limit = 0;

function barraProgresso()
{
    if(limit < 100)
    {
        var elem = document.getElementById("myBar");
        limit += 10; // ajustar aqui
        var width = 0;
        var id = setInterval(frame,40);

        function frame()
        {
            if (width >= limit) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                document.getElementById("demo").innerHTML = width * 1  + '%';
            }
        }
    }
    else
    {

    }
}













