// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Teste seus conhecimentos!!",
        "main":    "<p>Você se acha o 'bonzão' em cálculo numérico? Então teste seus conhecimentos com o nosso quiz.</p>",
        "results": "<h5>Aprender mais:</h5><p>Acesse nosso material sobre cálculo numérico em <a href='video-aulas.html'><span class='w3-tag w3-black w3-margin-bottom'>video-aulas</span></a> ou acesse o conteudo extra em nosso " +
        "<a href='material-complementar.html'><span class='w3-tag w3-black w3-margin-bottom'>material complementar</span></a>.</p>",
        "level1":  "Sua mãe tem orgulho de você!",
        "level2":  "Aluno aplicado",
        "level3":  "Aluno esforçado",
        "level4":  "Estude mais..",
        "level5":  "Melhor você estudar um pouco mais..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Qual dos métodos numérico abaixo recorre ao uso de derivadas? ",
            "a": [
                {"option": "Bissecção",      "correct": false},
                {"option": "Regula-Falsi (Falsa Posição)",     "correct": false},
                {"option": "Newton",      "correct": true},
                {"option": "Iterativo Linear (Ponto Fixo)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Está certo!</span>O métedo numérico que recorre ao uso de derivadas é o de Newton.</p>",
            "incorrect": "<p><span>Ah não, você errou :(</span>A resposta certa era o método de Newton.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Uma função $f$  estabelece uma relação entre dois conjuntos X e Y, por exemplo. Onde cada elemento de X estar relacionado a um elemento de Y. Esta afirmação é: ",
            "a": [
                {"option": "Verdadeira",               "correct": true},
                {"option": "Falsa", "correct": false} // no comma here
            ],
            "correct": "<p><span>Ótimo!</span>Você acertou.</p>",
            "incorrect": "<p><span>Você errou.</span>A afirmação era verdadeira.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Métodos como Bissecção, Newton e Secante podem ser usados para qualquer tipo de problema de função, não apenas aos problemas de zero de funções.  Esta afirmação é: ",
            "a": [
                {"option": "Verdadeira",                  "correct": false},
                {"option": "Falsa",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Parabéns!</span>Você realmente está estudando em.. :D</p>",
            "incorrect": "<p><span>Errou.</span>A afirmação era falsa.</p>" // no comma here
        },
        { // Question 4
            "q": "Qual o número máximo de raízes de uma determinada função de grau $n$?",
            "a": [
                {"option": "$1$",    "correct": false},
                {"option": "$n-1$",     "correct": false},
                {"option": "$n$",      "correct": true},
                {"option": "$n^2$",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Exelente!</span>Você acertou!</p>",
            "incorrect": "<p><span>Errou.</span>A resposta certa era $n$.</p>" // no comma here
        },
        { // Question 5
            "q": "Em quais dos métodos a seguir é obrigatório o uso do teorema de Bolzano?",
            "a": [
                {"option": "Bissecção e Falsa posição (Regula Falsi)",    "correct": true},
                {"option": "Bissecção e secante",     "correct": false}, // no comma here
                {"option": "Secante e Método de Newton",     "correct": false}, // no comma here
                {"option": "Somente Bissecção",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Bom trabalho!</span>Você acertou!</p>",
            "incorrect": "<p><span>Errou :(</span>A resposta correta é: Bissecção e Falsa posição (Regula Falsi).</p>" // no comma here
        } // no comma here
    ]
};


var quizJSON2 = {
    "info": {
        "name":    "Teste seus conhecimentos!!",
        "main":    "<p>Você se acha o 'bonzão' em calculo númerico? Então teste seus conhecimentos com o nosso quiz.</p>",
        "results": "<h5>Aprender mais:</h5><p>Acesse nosso material sobre cálculo numérico em <a href='video-aulas.html'><span class='w3-tag w3-black w3-margin-bottom'>video-aulas</span></a> ou acesse o conteudo extra em nosso " +
        "<a href='material-complementar.html'><span class='w3-tag w3-black w3-margin-bottom'>material complementar</span></a>.</p>",
        "level1":  "Sua mãe tem orgulho de você!",
        "level2":  "Aluno aplicado",
        "level3":  "Aluno esforçado",
        "level4":  "Estude mais..",
        "level5":  "Melhor você estudar um pouco mais..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Qual dos métodos a seguir utiliza uma reta tangente para o cálculo do zero de função?",
            "a": [
                {"option": "Método da Bissecção",      "correct": false},
                {"option": "Método da Secante",     "correct": false},
                {"option": "Método de Newton",      "correct": true},
                {"option": "Método do Ponto Fixo (Iterativo Linear)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Está certo!</span>Acertou.</p>",
            "incorrect": "<p><span>Ah não, você errou :(</span>A resposta certa era o método de Newton.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "O método de Newton é sempre o melhor método de se utilizar. Verdadeiro ou Falso?",
            "a": [
                {"option": "Verdadeiro. Pois esse método sempre converge",               "correct": false},
                {"option": "Falso. Porque o método da bissecção é sempre melhor",   "correct": false},
                {"option": "Verdadeiro. Porque é um método simples de ser utilizado",               "correct": false},
                {"option": "Falso. Nem sempre o método de Newton é o melhor, depende da dificuldade do cálculo da Derivada da função.", "correct": true} // no comma here
            ],
            "correct": "<p><span>Ótimo!</span>Você acertou.</p>",
            "incorrect": "<p><span>Você errou.</span>A afirmação era falsa, pois nem sempre o método de Newton é o melhor, depende da dificuldade do cálculo da derivada da função.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Qual método recorre ao uso de funções $φ(x)$ auxiliares para o cálculo do zero de função?",
            "a": [
                {"option": "Método do Ponto Fixo (Iterativo Linear)",           "correct": true},
                {"option": "Método de Newton",                  "correct": false},
                {"option": "Método da Secante",  "correct": false},
                {"option": "Método da Bissecção",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Parabéns!</span>Você realmente está estudando em.. :D</p>",
            "incorrect": "<p><span>Errou.</span>A afirmação correta é o método do Ponto Fixo (Iterativo Linear).</p>" // no comma here
        },
        { // Question 4
            "q": "No método de Regula Falsi, dado um intervalo $[x_1,x_2]$ tal que $f(x_1) > 0$ e $f(x_2) < 0$ , a determinação dos próximos valores podem ser efetuados sequencialmente, com os valores $x_k$ e $x_{k-1}$:",
            "a": [
                {"option": "Sim, pois no método Regula Falsi, o número “n” de iterações pode ser reduzido em até $\\frac{n}{2}$.",    "correct": false},
                {"option": "Não, pois para todo valor $x_{k+1}$ que venha a ser calculado, é necessário fazer a verificação $f(x_{k-1}) * f(x_k) < 0$.",     "correct": true},
                {"option": "Sim, pois é necessário fazer a verificação, tal que $f(x_{k-1}) * f(x_k) < 0$ apenas no valor de $x_3$ e $x_4$.",      "correct": false},
                {"option": "Não, pois é necessário fazer a verificação $f(x_{k-1}) * f(x_k) < 0$, tal que  sempre que o valor $x_{k+1}$ resultar num valor de $f(x_{k+1}) > 0$.",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Exelente!</span>Você acertou!</p>",
            "incorrect": "<p><span>Errou.</span>Resposta: Não, pois para todo valor $x_{k+1}$ que venha a ser calculado, é necessário fazer a verificação $f(x_{k-1}) * f(x_k) < 0$.</p>" // no comma here
        },
        { // Question 5
            "q": "Dada a função $f(x) = x^2-1$, podemos afirmar que:<br>" +
            "I) Os valores mais prováveis de $x_1$ e $x_2$ para o intervalo $[x_1, x_2]$ são $[0,1]$.<br><br>" +
            "II) Dados os intervalos $[0,1]$ e $[-3,2]$, é melhor utilizar o maior intervalo, pois a quantidade de iterações diminuem.<br><br>" +
            "III)Podem ser utilizados outros métodos, como o de Newton, para deixar o intervalo $[x_1, x_2]$  mais aproximado da raiz.<br><br>" +
            "Está(ão) correta(s) a(s) alternativa(s):",
            "a": [
                {"option": "1 e 3",    "correct": true},
                {"option": "1 e 2",     "correct": false}, // no comma here
                {"option": "Apenas 1",     "correct": false}, // no comma here
                {"option": "1, 2 e 3",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Bom trabalho!</span>Você acertou!</p>",
            "incorrect": "<p><span>Errou :(</span>Resposta: 1 e 3.</p>" // no comma here
        } // no comma here
    ]
};


var quizJSON3 = {
    "info": {
        "name":    "Teste seus conhecimentos!!",
        "main":    "<p>Você se acha o 'bonzão' em calculo númerico? Então teste seus conhecimentos com o nosso quiz.</p>",
        "results": "<h5>Aprender mais:</h5><p>Acesse nosso material sobre cálculo numérico em <a href='video-aulas.html'><span class='w3-tag w3-black w3-margin-bottom'>video-aulas</span></a> ou acesse o conteudo extra em nosso " +
        "<a href='material-complementar.html'><span class='w3-tag w3-black w3-margin-bottom'>material complementar</span></a>.</p>",
        "level1":  "Sua mãe tem orgulho de você!",
        "level2":  "Aluno aplicado",
        "level3":  "Aluno esforçado",
        "level4":  "Estude mais..",
        "level5":  "Melhor você estudar um pouco mais..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Sobre o método Regula Falsi, é correto afirmar:",
            "a": [
                {"option": "É o método quase igual ao método da secante, só difere pela questão de utilizar derivadas na determinação dos valores $x_{k+1}$.",      "correct": false},
                {"option": "O método Regula Falsi é mais rápido que o método da Secante para encontrar a raiz; no entanto, tem menor desempenho do que o método do ponto fixo.",     "correct": false},
                {"option": "É o único método que realiza a verificação de Bolzano em todas as iterações de $x_{k+1}$ para os valores  $x_{k-1}$ e $x_k$.",      "correct": true}
            ],
            "correct": "<p><span>Está certo!</span>Acertou.</p>",
            "incorrect": "<p><span>Ah não, você errou :(</span>Resposta: É o único método que realiza a verificação de Bolzano em todas as iterações de x(k+1) para os valores  x(k-1) e xk.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Seja $f(x)$ uma função contínua num intervalo $[a, b]$. Se $f(a) f(b) < 0$ então existe pelo menos um ponto $x =Ɛ$ entre $a$ e $b$ que é zero de $f(x)$. Essa afirmação é:",
            "a": [
                {"option": "Falsa",               "correct": false},
                {"option": "Verdadeira", "correct": true} // no comma here
            ],
            "correct": "<p><span>Ótimo!</span>Você acertou.</p>",
            "incorrect": "<p><span>Você errou.</span>Resposta: Verdadeira.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Qual dos métodos numérico abaixo não pertencem à classe dos métodos iterativos:",
            "a": [
                {"option": "Eliminação de Gauss",           "correct": true},
                {"option": "Bissecção",                  "correct": false},
                {"option": "Secante",  "correct": false},
                {"option": "Newton",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Parabéns!</span>Você realmente está estudando em.. :D</p>",
            "incorrect": "<p><span>Errou.</span>Resposta: Eliminação de Gauss.</p>" // no comma here
        },
        { // Question 4
            "q": "Sobre a escolha do melhor método para calcular zero de funções, podemos afirmar:",
            "a": [
                {"option": "Método de Newton é o mais indicado, pois é fácil calcular $f'(x)$ e verificar as condições de convergência.",    "correct": false},
                {"option": "A escolha do método está diretamente relacionado com a equação que se quer resolver, no que diz respeito ao comportamento da função na região da raiz exata, as dificuldades com o cálculo de $f'(x)$, critério de parada etc.",     "correct": true},
                {"option": "Método da Secante é o mais indicado, pois é o método que converge mais rapidamente.",      "correct": false},
                {"option": "Método da Bissecção é o mais indicado, pois é o método que efetua cálculos mais simples por interação.",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Exelente!</span>Você acertou!</p>",
            "incorrect": "<p><span>Errou.</span>Resposta: A escolha do método está diretamente relacionado com a equação que se quer resolver, no que diz respeito ao comportamento da função na região da raiz exata, as dificuldades com o cálculo de f'(x), critério de parada etc.</p>" // no comma here
        },
        { // Question 5
            "q": "Dada a função $f(x) = x^2-1$, podemos afirmar que:<br>" +
            "I) Os valores mais prováveis de $x_1$ e $x_2$ para o intervalo $[x_1, x_2]$ são $[0,1]$.<br><br>" +
            "II) Dados os intervalos $[0,1]$ e $[-3,2]$, é melhor utilizar o maior intervalo, pois a quantidade de iterações diminuem.<br><br>" +
            "III)Podem ser utilizados outros métodos, como o de Newton, para deixar o intervalo $[x_1, x_2]$  mais aproximado da raiz.<br><br>" +
            "Está(ão) correta(s) a(s) alternativa(s):",
            "a": [
                {"option": "1 e 3",    "correct": true},
                {"option": "1 e 2",     "correct": false}, // no comma here
                {"option": "Apenas 1",     "correct": false}, // no comma here
                {"option": "1, 2 e 3",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Bom trabalho!</span>Você acertou!</p>",
            "incorrect": "<p><span>Errou :(</span>Resposta: 1 e 3.</p>" // no comma here
        } // no comma here
    ]
};
