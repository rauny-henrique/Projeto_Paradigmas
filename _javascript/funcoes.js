function calcula(x) {
    valor =4*(Math.sin(x))-Math.exp(x)
    return valor
}

function arredonda(x) {
    valor = Math.floor(10000000 * x)/10000000
    return valor
}

function leitura(aForm)
{

    a = eval(aForm.inicial.value)
    b = eval(aForm.final.value)
    aa = parseFloat(a)
    bb = parseFloat(b)
    erro=eval(aForm.erro.value);


    var janela="<html><head><TITLE>Calculando a raiz</TITLE></head>";
    janela +="<BODY BGCOLOR='black' TEXT='yellow'>";
    janela +="<FONT FACE='Arial' SIZE='3'>";
    janela +="<B>Iniciando busca da raiz...</B><BR><BR>";
    if ((a==null) || (b==null) || (erro==null)) {
        janela +="É preciso preencher todos os campos!";
    }else{
        janela +="Dados iniciais:   f("+aa+") = "+ arredonda(calcula(aa))+ ",     f("+bb+") = "+ arredonda(calcula(bb))+"<BR><br>"
        janela +="Invervalo 1: ["+aa+","+bb+"]<br>";
    }

    var achou=false
    fa=calcula(aa);
    fb=calcula(bb);
    cont=2;

    Jan1=open("", "", "scrollbars=yes,resizable=0,width=400,height=400");
    Jan1.focus();
    Jan1.document.write(janela);
    var fr

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
        Jan1.document.write("<br>")
        Jan1.document.write("Intervalo final:   ["+aa+";"+bb+"]<br>")
        Jan1.document.write("Raiz:   "+arredonda(x)+" ± "+er)
    }
}