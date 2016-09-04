/* Bissecção */

function ajeitaEquacao(_s) {

    var res = _s;
    var res2;

    if (_s.indexOf("^") > -1)
    {
        var tab = [];
        var powfunc="Math.pow";
        var joker = "___joker___";



        while (_s.indexOf("(") > -1) {
            res2 = res;

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
                res2 = tab[d].replace(/(\w*)\^(\w*)/g, powfunc+"($1,$2)");
            });
        }
        res = res2;
    }

    if (res.indexOf("sen") > -1)
    {
        res2 = res.replace("sen", "Math.sin");
        res = res2;
    }

    if (res.indexOf("cos") > -1)
    {
        res2 = res.replace("cos", "Math.cos");
        res = res2;
    }

    if (res.indexOf("tan") > -1)
    {
        res2 = res.replace("tan", "Math.tan");
        res = res2;
    }

    if (res.indexOf("log") > -1)
    {
        res2 = res.replace("log", "Math.log");
        res = res2;
    }

    if (res.indexOf("exp") > -1)
    {
        res2 = res.replace("exp", "Math.exp");
        res = res2;
    }

    return res;
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
