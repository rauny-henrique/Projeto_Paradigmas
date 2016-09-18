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
        document.getElementById('campoNewton').style.display = 'none';

        document.getElementById('escondCampoEsq').style.display = 'block';
        document.getElementById('escondCampoDir').style.display = 'block';

        return 1;
    }
    if(x=="Newton-Raphson"){
        document.getElementById('campoNewton').style.display = 'block';

        document.getElementById('escondCampoEsq').style.display = 'none';
        document.getElementById('escondCampoDir').style.display = 'none';

        return 2;
    }
    if(x=="Falsa posição"){
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

    // Recuperando div
    meuDiv = document.getElementById("escreveCalcFuncao");

    // Newton
    xinicial = document.getElementById("campoXNew").value;


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
                    meuDiv.innerHTML = ""; // por para iniciar o Mathjax

                    //"<div class='panel panel-primary'><div class='panel-heading'>Panel with panel-primary class</div> <div class='panel-body'>Panel Content</div></div>"

                    meuDiv.innerHTML += "<div class='panel panel-primary'><div class='panel-heading'><h3>Dados iniciais:</h3></div> <div class='panel-body'><h3>f(x) = "+cop+"<br>f("+aa+") = "+ arredonda(calcula(aa))+
                        "<br>f("+bb+") = "+ arredonda(calcula(bb))+"<br>E = "+erro+"<BR><br></h3></div></div>";

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
                            x=((aa+bb)/2);
                            er=((bb-aa)/2);
                            if (er<=erro) {
                                achou=true;
                                if(first == 0)
                                {
                                    aux += "<div class='panel panel-primary'><div class='panel-heading'><h3>Usando o método da bissecção:</h3></div> <div class='panel-body'><h3>Invervalo 1: ["+aa+","+bb+"]<br></h3>";
                                    first = 1;
                                }
                                aux += "<h3>("+aa+"+"+bb+")/2 = "+x+"<br></h3>"+"<h3>Calculando f("+x+") = 0"+"<br><br></h3></div></div>";
                                meuDiv.innerHTML += aux;
                            }else{
                                if (er>erro){
                                    fr=calcula(x);
                                    if(first == 0)
                                    {
                                        aux += "<div class='panel panel-primary'><div class='panel-heading'><h3>Usando o método da bissecção:</h3></div> <div class='panel-body'><h3>Invervalo 1: ["+aa+","+bb+"]<br></h3>";
                                        first = 1;
                                    }
                                    aux += "<h3>("+aa+"+"+bb+")/2 = "+x+"<br></h3>"+"<h3>Calculando f("+x+") = "+arredonda(calcula(x))+"<br><br></h3></div></div>";
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
                                aux = "<div id='mid' class='panel panel-primary'><div class='panel-body'><h3>Intervalo "+cont+" :   ["+arredonda(aa)+";"+arredonda(bb)+"]<br></h3>";

                                cont++;
                            }
                        }
                        first = 0;
                    }
                    if (achou){
                        document.getElementById('conteiner-passos').style.display = 'block';
                        document.getElementById('conteiner-grafico').style.display = 'block';
                        meuDiv.innerHTML += "<div class='panel panel-primary'><div class='panel-heading'><h3>Portanto:</h3></div> <div class='panel-body'><h3>Intervalo final:   ["+aa+";"+bb+"]<br></h3><h3>Raiz:   "+arredonda(x)+" ± "+er+"</h3></div></div>";

                        escreveTextGraf(cop,a,b);

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
    if(escolha == 2)
    {
        var i = 0;

        var err, x_1, x = parseFloat(xinicial);
        // '<table border="3"><tr><td align="center">i</td><td align="center">x<sub></sub></td><td align="center">error</td></tr>';
        var resultado = "<div class='panel panel-primary'><div class='panel-heading'><h3>Dados iniciais:</h3></div> <div class='panel-body'><h3>f(x) = "+cop+"<br>x<sub>0</sub> = "+x+"<br>f'("+x+") = "+ arredonda(derivada(x))
            +"<br>E = "+erro+"<BR><br></h3></div></div>";
        do {
            //x_1 = x;
            var x_1 = arredonda(x - (calcula(x) / derivada(x)));
            var y = x;
            var e = Math.abs(x-x_1);
            x = x_1;
            err = Math.abs((x - x_1) / x);
            // '<tr><td>x<sub>' + i + '</sub></td><td>' + x_1 + '</td><td>' + err + '</td></tr>'
            if(i == 0)
            {
                resultado += "<div class='panel panel-primary'><div class='panel-heading'><h3>Usando o método de Newton-Raphson:</h3></div> <div class='panel-body'><h3>f("+y+") = "+arredonda(calcula(y))+"<br>f'("+y+") = "+arredonda(derivada(y))+"<br>" +
                    "x<sub>"+i+"</sub> = "+y+" - ("+arredonda(calcula(y))+"/"+arredonda(derivada(y))+") = "+x_1+"" +
                    "<br>E = "+err+"</h3></div></div>";
            }
            else
            {
                resultado += "<div id='mid' class='panel panel-primary'><div class='panel-body'><h3>f("+y+") = "+arredonda(calcula(y))+"<br>f'("+y+") = "+arredonda(derivada(y))+"<br>" +
                    "x<sub>"+i+"</sub> = "+y+" - ("+arredonda(calcula(y))+"/"+arredonda(derivada(y))+") = "+x_1+"<br>E = "+err+"</h3></div></div>";
            }

            i++;
            //I imagine that this is your safety so I would implement it like this
            if(i > 100) break;
        } while (e > erro);
        //        document.getElementById('escreveCalcFuncao').innerHTML = resultado + '</tbody></table><br>' + (i == 100 ? 'La solucion no es convergente. ' : 'La solucion es ' + x);
        veriff = (i == 100 ? "O resultado é divergente." : "Raiz: " +x);
        aux = "<div class='panel panel-primary'><div class='panel-heading'><h3>Portanto:</h3></div><div class='panel-body'><h3>"+veriff+"</h3></div></div>";
        document.getElementById('escreveCalcFuncao').innerHTML = resultado + aux;

        document.getElementById('conteiner-passos').style.display = 'block';
        document.getElementById('conteiner-grafico').style.display = 'block';
        min = 0;
        max = 0;
        if(xinicial >= x)
        {
            max = xinicial;
            min = x;
        }
        else
        {
            min = xinicial;
            max = x;
        }
        escreveTextGraf(cop,min,max);
    }
}

/* Update do grafico plotado */
function escreveTextGraf(funcao, ax, bx)
{
    while (funcao.indexOf("sen") > -1)
    {
        funcao = funcao.replace("sen","sin");
    }

    aw = 1;
    ay = 1;
    at = 0.5;

    aa = parseFloat(ax);
    bb = parseFloat(bx);

    document.getElementById("picture1input").innerHTML = "";
    document.getElementById("picture1input").innerHTML += "setBorder(25 );";

    if((arredonda(calcula(aa))) < 1 || (arredonda(calcula(bb))) < -1)
    {
        document.getElementById("picture1input").innerHTML += "initPicture("+ax+","+bx+",-2,2);";
        if(ax > 5 && ax < -5 || bx > 5 && bx < -5)
        {
            document.getElementById("picture1input").innerHTML += "axes("+aw+", "+ay+", 'labels', "+at+");";
        }
        else
        {
            document.getElementById("picture1input").innerHTML += "axes("+aw+", "+ay+", 'labels', 5);";
        }

        if(ax > 99 && ax < -99 || bx > 99 && bx < -99)
        {
            document.getElementById("picture1input").innerHTML += "axes("+aw*10+", "+ay+", 'labels', 30);";
        }
        else
        {
            document.getElementById("picture1input").innerHTML += "axes("+aw*10+", "+ay+", 'labels', 40);";
        }
    }
    else
    {
        document.getElementById("picture1input").innerHTML += "initPicture("+ax+","+bx+");";
        if(ax > 9 && ax < -9 || bx > 9 && bx < -9)
        {
            document.getElementById("picture1input").innerHTML += "axes("+aw*10+", "+ay+", 'labels', 15);";
        }
        else
        {
            document.getElementById("picture1input").innerHTML += "axes("+aw+", "+ay+", 'labels', 5);" ;
        }
        if(ax > 99 && ax < -99 || bx > 99 && bx < -99)
        {
            document.getElementById("picture1input").innerHTML += "axes("+aw*10+", "+ay+", 'labels', 30);";
        }
        else
        {
            document.getElementById("picture1input").innerHTML += "axes("+aw*10+", "+ay+", 'labels', 40);";
        }
    }

    document.getElementById("picture1input").innerHTML += "stroke = 'blue';" ;
    document.getElementById("picture1input").innerHTML += "plot("+funcao+");";
    updatePicture(0);
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

var limit2 = 0;

function barraProgresso2()
{
    if(limit2 < 100)
    {
        var elem = document.getElementById("myBar2");
        limit2 += 10; // ajustar aqui
        var width = 0;
        var id = setInterval(frame,40);

        function frame()
        {
            if (width >= limit2) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                document.getElementById("demo2").innerHTML = width * 1  + '%';
            }
        }
    }
    else
    {

    }
}


// Newton-Raphson
function derivada(x){
    var func = document.getElementById("textAreaEqua").value;
    return nerdamer('diff(' + func + ')').buildFunction().call(undefined, x);
}





