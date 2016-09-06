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
            // oq sai aqui, já sai pronto
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
                return tab[d].replace(/(\exp\b)\((\w+)\)/g, expfunc+"($2)"); // vai ser parecida com a pow
            });
        }
    }
    return _s;
}

var EQUACAO;

function Escolha() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("escolhaEquacao").innerHTML = "Sua escolha: " + x;

    if(x=="Bissetriz"){
        //executa calculaBissetriz()
    }
    if(x=="escolha1"){
        //executa calculaSeno()
    }
    if(x=="escolha1"){
        //executa calculaTangente()
    }
    if(x=="escolha4"){
        //executa calculaGauss()
    }
}

function calcula(x) {
    //caretReplace = ajeitaEquacao(_s);

    //valor = equacao;
    valor = eval(EQUACAO);
    return valor
}

function arredonda(x) {
    valor = Math.floor(10000000 * x)/10000000;
    return valor
}

function leitura(aForm)
{
    a = eval(aForm.raizEsq.value);
    b = eval(aForm.raizDir.value);
    aa = parseFloat(a);
    bb = parseFloat(b);
    erro=eval(aForm.preci.value);
    EQUACAO = document.getElementById('textAreaEqua').value;

    //var res = EQUACAO.split("^");
    //alert(eval(Math.pow(res[0],res[1])));
    //alert(eval("Math.pow(2,2)*(5*2-2)"));

    EQUACAO = ajeitaEquacao(EQUACAO);
    alert(EQUACAO);

    var janela="<html><head><TITLE>Calculando a raiz</TITLE></head>";
    janela +="<BODY BGCOLOR='white' TEXT='black'>";
    janela +="<FONT FACE='Arial' SIZE='3'>";
    janela +="<B>Iniciando busca da raiz...</B><BR><BR>";
    if ((a==null) || (b==null) || (erro==null)) {
        janela +="É preciso preencher todos os campos!";
    }else{
        janela +="Dados iniciais:   f("+aa+") = "+ arredonda(calcula(aa))+ ",     f("+bb+") = "+ arredonda(calcula(bb))+"<BR><br>"
        janela +="Invervalo 1: ["+aa+","+bb+"]<br>";
    }

    var achou=false;
    fa=calcula(aa);
    fb=calcula(bb);
    cont=2;

    Jan1=open("", "", "scrollbars=yes,resizable=0,width=400,height=400");
    Jan1.focus();
    Jan1.document.write(janela);
    var fr;

    if ((a!=null) && (b!=null) && (erro!=null)) {
        while (!achou){
            x=((aa+bb)/2);
            er=((bb-aa)/2);
            if (er<=erro) {
                achou=true;
            }else{
                if (er>erro){
                    fr=calcula(x);
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
                Jan1.document.write("Intervalo "+cont+" :   ["+arredonda(aa)+";"+arredonda(bb)+"]<br>")
                cont++;
            }
        }
    }
    if (achou){
        Jan1.document.write("<br>");
        Jan1.document.write("Intervalo final:   ["+aa+";"+bb+"]<br>");
        Jan1.document.write("Raiz:   "+arredonda(x)+" ± "+er)
    }
}
