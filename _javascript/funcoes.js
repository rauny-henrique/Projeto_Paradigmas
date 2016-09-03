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
                return tab[d].replace(/(\w*)\^(\w*)/g, powfunc+"($1,$2)");
            });
        }
    }
    return _s;
}


function calcula(x, _s) {
    /* x^2 */

    var caretReplace = ajeitaEquacao(_s);

    valor = caretReplace.replace("x", x);;

    //valor = Math.pow(x,2);
    /*valor = eval(x.campoEquacao.value);*/
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
    EQUACAO = eval(aForm.campoEquacao.value);


    var janela="<html><head><TITLE>Calculando a raiz</TITLE></head>";
    janela +="<BODY BGCOLOR='white' TEXT='black'>";
    janela +="<FONT FACE='Arial' SIZE='3'>";
    janela +="<B>Iniciando busca da raiz...</B><BR><BR>";
    if ((a==null) || (b==null) || (erro==null)) {
        janela +="É preciso preencher todos os campos!";
    }else{
        janela +="Dados iniciais:   f("+aa+") = "+ arredonda(calcula(aa, EQUACAO))+ ",     f("+bb+") = "+ arredonda(calcula(bb, EQUACAO))+"<BR><br>"
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