import React, { useState, useEffect } from "react";
import {
  Monitor,
  Cpu,
  Mouse,
  Layout,
  Keyboard,
  FileText,
  Presentation,
  Table,
  ShieldCheck,
  Trophy,
  ChevronDown,
  ChevronUp,
  BookOpen,
  GraduationCap,
  Clock,
  CheckCircle,
  Dices,
  Menu,
  Play,
  X,
  ArrowRight,
  ArrowLeft,
  Star,
  User,
  Lock,
  Award,
  Printer,
  Save,
} from "lucide-react";

// --- DADOS DO CURSO ---
const courseData = {
  info: {
    title: "Informática Kids",
    target: "Nível Infantil (10 anos)",
    duration: "20-30 horas",
    methodology: "80% Prática / 20% Teoria",
    objectives: [
      "Identificar Hardware e Software",
      "Dominar Mouse e Teclado",
      "Organizar arquivos em pastas",
      "Criar textos e apresentações",
      "Segurança básica na internet",
    ],
  },
  modules: [
    {
      id: 1,
      title: "Introdução à Informática",
      duration: "2h",
      icon: <Monitor size={24} />,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      description: "O básico sobre computadores e como eles funcionam.",
      slides: [
        {
          title: "O que é Informática?",
          type: "theory",
          content: [
            "Informática é a ciência que estuda o tratamento da informação automática.",
            "Basicamente: É usar computadores para criar, guardar e encontrar informações!",
            "Onde usamos? Na escola, no hospital, no banco, nos jogos e no celular.",
          ],
        },
        {
          title: "Tipos de Computadores",
          type: "theory",
          content: [
            "🖥️ Desktop (Computador de Mesa): Grande, potente, fica parado.",
            "💻 Notebook: Portátil, bateria, teclado junto da tela.",
            "📱 Tablet/Smartphone: Tela de toque, super portátil.",
          ],
        },
        {
          title: "Hardware vs Software",
          type: "concept",
          content: [
            "🔨 HARDWARE: É tudo o que você pode CHUTAR (A parte física). Ex: Teclado, Tela, Mouse.",
            "👻 SOFTWARE: É tudo o que você pode XINGAR (Os programas). Ex: Windows, Joguinhos, YouTube.",
          ],
        },
        {
          title: "Atividade Prática",
          type: "activity",
          content: [
            "1. Olhe ao seu redor na sua casa ou sala.",
            "2. Liste 3 equipamentos eletrônicos.",
            "3. Classifique: Tem tela? Tem teclado?",
            "4. Exemplo: 'TV da sala' (Tem tela, não tem teclado).",
          ],
        },
        {
          title: "Desafio Rápido!",
          type: "quiz",
          content: [
            "Eu vou falar um nome, e você grita se é HARDWARE ou SOFTWARE!",
            "Mouse? (Hardware)",
            "Minecraft? (Software)",
            "A tela do celular? (Hardware)",
            "O WhatsApp? (Software)",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Hardware do Computador",
      duration: "4h",
      icon: <Cpu size={24} />,
      color: "bg-purple-100 text-purple-600 border-purple-200",
      description: "Entendendo as peças de dentro do computador.",
      slides: [
        {
          title: "O Gabinete",
          type: "theory",
          content: [
            "O gabinete é a caixa que guarda todas as peças importantes.",
            "Não confunda: O monitor é a tela, o gabinete é a 'caixa'!",
            "Dentro dele, tudo se conecta na Placa-Mãe.",
          ],
        },
        {
          title: "As Peças (Analogia do Corpo)",
          type: "concept",
          content: [
            "🧠 Processador (CPU): É o cérebro. Ele pensa e faz os cálculos.",
            "⚡ Fonte: É o coração/estômago. Dá energia para tudo funcionar.",
            "📦 HD ou SSD: É a memória de longo prazo (o armário). Onde guardamos fotos e jogos para sempre.",
          ],
        },
        {
          title: "Memória RAM",
          type: "concept",
          content: [
            "A Memória RAM é a sua 'Mesa de Trabalho'.",
            "Quanto maior a mesa, mais coisas você pode fazer ao mesmo tempo sem travar.",
            "Quando desliga o PC, a mesa é limpa (a RAM apaga)!",
          ],
        },
        {
          title: "Atividade: O Cirurgião",
          type: "activity",
          content: [
            "Vamos olhar uma foto de um computador aberto.",
            "Tente encontrar: Onde está o cooler (ventilador do processador)?",
            "Onde encaixa a memória RAM?",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Periféricos",
      duration: "3h",
      icon: <Mouse size={24} />,
      color: "bg-orange-100 text-orange-600 border-orange-200",
      description: "Dispositivos de entrada e saída.",
      slides: [
        {
          title: "O que são Periféricos?",
          type: "theory",
          content: [
            "São peças que ficam 'na periferia' (em volta) do gabinete.",
            "Eles servem para a gente conversar com o computador.",
          ],
        },
        {
          title: "Entrada vs Saída",
          type: "concept",
          content: [
            "➡️ Entrada (Input): Manda informação PRA DENTRO. Ex: Teclado (manda letras), Microfone (manda voz).",
            "⬅️ Saída (Output): Tira informação PRA FORA. Ex: Monitor (mostra imagem), Impressora (sai papel).",
          ],
        },
        {
          title: "Mistos (Entrada e Saída)",
          type: "concept",
          content: [
            "Alguns fazem os dois!",
            "🎧 Headset: O fone sai som, o microfone entra som.",
            "💾 Pen Drive: Você coloca arquivos nele e tira arquivos dele.",
            "📱 Tela Touch: Você vê (saída) e toca (entrada).",
          ],
        },
        {
          title: "Desafio dos Cabos",
          type: "activity",
          content: [
            "Desconecte o mouse e conecte de novo.",
            "Abra o Bloco de Notas.",
            "Teste o botão direito e o botão esquerdo do mouse.",
            "Use a rodinha (scroll) para subir e descer uma página.",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Sistema Operacional",
      duration: "4h",
      icon: <Layout size={24} />,
      color: "bg-sky-100 text-sky-600 border-sky-200",
      description: "Windows, Pastas e Arquivos.",
      slides: [
        {
          title: "O Chefe do Computador",
          type: "theory",
          content: [
            "O Sistema Operacional (Windows, Linux, MacOS) é o chefe.",
            "Ele controla o hardware e deixa você usar os programas.",
            "Sem ele, o computador é só uma pilha de metal inútil.",
          ],
        },
        {
          title: "A Área de Trabalho",
          type: "concept",
          content: [
            "É a sua mesa digital.",
            "Ícones: Atalhos para programas.",
            "Barra de Tarefas: A barra lá embaixo onde ficam os programas abertos.",
            "Menu Iniciar: Onde tudo começa!",
          ],
        },
        {
          title: "Organizando a Bagunça",
          type: "activity",
          content: [
            "1. Clique com botão direito na Área de Trabalho.",
            "2. Novo > Pasta.",
            "3. Escreva seu NOME.",
            "4. Entre na pasta e crie outra pasta chamada 'Escola'.",
            "5. Dica: Nunca apague arquivos da pasta 'Windows'!",
          ],
        },
        {
          title: "Missão: O Organizador",
          type: "quiz",
          content: [
            "Tarefa valendo nota (brincadeira!):",
            "Crie uma estrutura assim:",
            "Pasta: MEUS HOBBIES",
            "   |-- Pasta: JOGOS",
            "   |-- Pasta: MÚSICA",
            "Se conseguir em 1 minuto, ganha parabéns!",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Digitação Mágica",
      duration: "2h",
      icon: <Keyboard size={24} />,
      color: "bg-green-100 text-green-600 border-green-200",
      description: "Aprendendo a usar o teclado corretamente.",
      slides: [
        {
          title: "As Teclas Poderosas",
          type: "theory",
          content: [
            "ENTER: Confirma ou pula linha. É o botão 'VAI!'",
            "BACKSPACE: Apaga para trás (corrige erros).",
            "SPACE: O maior botão, dá espaço entre palavras.",
            "CAPS LOCK: GRITA (LETRA MAIÚSCULA).",
          ],
        },
        {
          title: "O Segredo do SHIFT",
          type: "concept",
          content: [
            "Se você segurar o SHIFT e apertar uma letra, ela sai Maiúscula momentaneamente.",
            "Se segurar SHIFT e apertar número, sai o símbolo de cima (! @ # $).",
            "Teste: Segure Shift + 1. O que apareceu?",
          ],
        },
        {
          title: "Acentuação",
          type: "activity",
          content: [
            "Para fazer Á, É, Í:",
            "1. Aperte o acento agudo (´) - nada acontece.",
            "2. Solte e aperte a letra (A). Mágica! Á.",
            "Para fazer Ã: Aperte o tio (~), solte, aperte o A.",
          ],
        },
        {
          title: "Corrida de Digitação",
          type: "quiz",
          content: [
            "Abra o Bloco de Notas.",
            "Digite: 'O rato roeu a roupa do rei de Roma.'",
            "Tente não olhar para o teclado!",
            "Quem terminar primeiro sem erros vence.",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Word: O Escritor",
      duration: "4h",
      icon: <FileText size={24} />,
      color: "bg-indigo-100 text-indigo-600 border-indigo-200",
      description: "Criando documentos bonitos.",
      slides: [
        {
          title: "Conhecendo o Word",
          type: "theory",
          content: [
            "É um processador de texto.",
            "Serve para fazer trabalhos escolares, cartas e livros.",
            "A folha branca é onde escrevemos.",
          ],
        },
        {
          title: "Maquiagem do Texto",
          type: "concept",
          content: [
            "Podemos mudar a 'cara' da letra:",
            "Fonte: O desenho da letra (Arial, Comic Sans).",
            "Tamanho: Letra grande ou pequena.",
            "Cor: O pincelzinho com a cor embaixo.",
          ],
        },
        {
          title: "Negrito, Itálico e Sublinhado",
          type: "concept",
          content: [
            "B (Negrito): Deixa a letra gordinha e escura.",
            "I (Itálico): Deixa a letra caidinha pro lado.",
            "U (Sublinhado): Passa um risco embaixo.",
          ],
        },
        {
          title: "Projeto: Carta",
          type: "activity",
          content: [
            "Escreva uma carta para seu personagem favorito.",
            "1. Coloque um Título Grande e Azul.",
            "2. Escreva o texto tamanho 12.",
            "3. Assine seu nome em Negrito no final.",
            "4. Salve como 'Minha Carta' na sua pasta.",
          ],
        },
      ],
    },
    {
      id: 7,
      title: "PowerPoint: O Artista",
      duration: "3h",
      icon: <Presentation size={24} />,
      color: "bg-rose-100 text-rose-600 border-rose-200",
      description: "Criando apresentações e slides.",
      slides: [
        {
          title: "O que é um Slide?",
          type: "theory",
          content: [
            "É como um cartaz digital.",
            "Você usa para apresentar um trabalho na frente da sala.",
            "Pouco texto + Imagens bonitas = Slide Perfeito.",
          ],
        },
        {
          title: "Criando Slides",
          type: "activity",
          content: [
            "1. Abra o PowerPoint.",
            "2. Slide 1 (Capa): Título 'Quem Sou Eu' e seu nome.",
            "3. Novo Slide: Coloque uma foto de algo que você gosta.",
            "4. Novo Slide: Escreva 3 coisas sobre você.",
          ],
        },
        {
          title: "Hora do Show",
          type: "quiz",
          content: [
            "Aperte F5 no teclado.",
            "Isso coloca em TELA CHEIA.",
            "Use as setinhas para passar os slides.",
            "Apresente seu trabalho para o colega do lado!",
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Excel: O Matemático",
      duration: "3h",
      icon: <Table size={24} />,
      color: "bg-emerald-100 text-emerald-600 border-emerald-200",
      description: "Planilhas e tabelas básicas.",
      slides: [
        {
          title: "Batalha Naval (Linhas e Colunas)",
          type: "theory",
          content: [
            "O Excel é uma grade gigante.",
            "Colunas são Letras (A, B, C) - Ficam em pé.",
            "Linhas são Números (1, 2, 3) - Ficam deitadas.",
            "O encontro delas é a Célula (Ex: A1, C5).",
          ],
        },
        {
          title: "A Fórmula Mágica",
          type: "concept",
          content: [
            "O Excel é uma calculadora.",
            "Toda mágica começa com o sinal de IGUAL (=).",
            "Se você digitar =2+2 e der Enter, ele mostra 4.",
            "Se digitar =A1+B1, ele soma o que estiver nessas caixas.",
          ],
        },
        {
          title: "Atividade: Mesada",
          type: "activity",
          content: [
            "1. Coluna A: Escreva 'Lanche', 'Brinquedo', 'Cofre'.",
            "2. Coluna B: Coloque os preços.",
            "3. No final, use a SOMA para ver quanto gastou.",
          ],
        },
      ],
    },
    {
      id: 9,
      title: "Segurança Digital",
      duration: "2h",
      icon: <ShieldCheck size={24} />,
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
      description: "Navegando sem perigos.",
      slides: [
        {
          title: "O Perigo dos Cliques",
          type: "theory",
          content: [
            "Na internet, não aceite doces de estranhos!",
            "Se aparecer 'VOCÊ GANHOU UM IPHONE', é mentira.",
            "Não clique em links estranhos que piscam muito.",
          ],
        },
        {
          title: "Senhas Fortes",
          type: "concept",
          content: [
            "Senha fraca: 123456, data de nascimento, nome do cachorro.",
            "Senha forte: Mistura letras, números e símbolos.",
            "Nunca conte sua senha para amigos, só para os pais.",
          ],
        },
        {
          title: "Saúde Digital",
          type: "activity",
          content: [
            "Não fique curvado na cadeira (Coluna!).",
            "A cada 1 hora, levante e beba água.",
            "Não fique com o rosto colado no monitor.",
          ],
        },
      ],
    },
    {
      id: 10,
      title: "Grande Projeto Final",
      duration: "Fim",
      icon: <Trophy size={24} />,
      color: "bg-amber-100 text-amber-600 border-amber-200",
      description: "Mostrando tudo o que aprendeu.",
      slides: [
        {
          title: "A Missão Final",
          type: "activity",
          content: [
            "Você vai criar uma pasta chamada 'PROJETO FINAL'.",
            "Dentro dela, vai colocar 3 arquivos:",
            "1. Word: Um texto contando o que mais gostou no curso.",
            "2. PowerPoint: 3 slides apresentando esse texto.",
            "3. Excel: Uma lista com o nome de 5 amigos.",
            "Boa sorte, Expert em Informática! 🎓",
          ],
        },
      ],
    },
  ],
};

// --- COMPONENTES AUXILIARES ---

// 1️⃣ TELA DE LOGIN/BOAS-VINDAS
const WelcomeScreen = ({ onStart }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) onStart(name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center animate-fadeIn">
        <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <GraduationCap size={48} className="text-blue-600" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Bem-vindo(a)!
        </h1>
        <p className="text-gray-500 mb-8">
          Digite seu nome para começar sua jornada na Informática.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg font-bold text-gray-700 transition-colors"
              autoFocus
            />
          </div>
          <button
            type="submit"
            disabled={!name.trim()}
            className={`w-full py-4 rounded-xl font-extrabold text-white text-lg shadow-lg transition-all transform ${
              name.trim()
                ? "bg-blue-600 hover:bg-blue-700 hover:scale-105 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Começar Aventura! 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

// 2️⃣ MODO PROFESSOR COM SENHA
const TeacherAuth = ({ onUnlock }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (password === "1234") {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-dashed border-gray-300 text-center animate-fadeIn max-w-md mx-auto mt-10">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-red-100 text-red-600 rounded-full">
          <Lock size={48} />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        Área do Professor
      </h3>
      <p className="text-gray-500 mb-6">
        Esta área é protegida. Digite a senha para acessar as ferramentas.
      </p>

      <form onSubmit={handleUnlock} className="space-y-4">
        <input
          type="password"
          placeholder="Senha (Dica: 1234)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none text-center text-lg font-bold tracking-widest transition-colors ${
            error
              ? "border-red-400 bg-red-50 text-red-600"
              : "border-gray-200 focus:border-red-500"
          }`}
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl shadow-md w-full transition-all"
        >
          Desbloquear
        </button>
      </form>
    </div>
  );
};

// 3️⃣ COMPONENTE DE AULA (ATUALIZADO PARA PROGRESSO)
const LessonView = ({ module, onExit, onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < module.slides.length - 1) {
      setCurrentSlide((curr) => curr + 1);
    } else {
      // Chegou no último slide, completa a lição
      onComplete(module.id);
      onExit();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((curr) => curr - 1);
    }
  };

  const slide = module.slides[currentSlide];
  const isLastSlide = currentSlide === module.slides.length - 1;

  // Helpers de estilo (Mantendo o design original)
  const getSlideStyle = (type) => {
    switch (type) {
      case "activity":
        return "bg-green-50 border-green-200 text-green-900";
      case "quiz":
        return "bg-yellow-50 border-yellow-200 text-yellow-900";
      case "concept":
        return "bg-purple-50 border-purple-200 text-purple-900";
      default:
        return "bg-white border-gray-100 text-gray-800";
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "activity":
        return <Dices className="text-green-600" />;
      case "quiz":
        return <Star className="text-yellow-600" />;
      case "concept":
        return <BookOpen className="text-purple-600" />;
      default:
        return <Monitor className="text-blue-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-100 flex flex-col animate-fadeIn">
      <div
        className={`${
          module.color.split(" ")[0]
        } p-4 shadow-md flex justify-between items-center`}
      >
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-full shadow-sm bg-opacity-50">
            {module.icon}
          </div>
          <div>
            <h2 className="font-bold text-lg md:text-xl text-gray-800">
              {module.title}
            </h2>
            <p className="text-xs font-semibold uppercase opacity-60 tracking-wider">
              Modo Aula
            </p>
          </div>
        </div>
        <button
          onClick={onExit}
          className="bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full transition-all"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 flex items-center justify-center">
        <div
          className={`w-full max-w-4xl min-h-[400px] md:min-h-[500px] rounded-3xl shadow-xl border-4 p-6 md:p-12 flex flex-col relative transition-all duration-500 ${getSlideStyle(
            slide.type
          )}`}
        >
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <span className="bg-white/80 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm flex items-center gap-2">
              {getIcon(slide.type)}
              {slide.type === "theory"
                ? "Teoria"
                : slide.type === "concept"
                ? "Conceito"
                : slide.type === "activity"
                ? "Prática"
                : "Desafio"}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold mb-8 mt-2">
            {slide.title}
          </h1>

          <div className="flex-1 space-y-4 md:space-y-6">
            {slide.content.map((text, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 text-lg md:text-2xl leading-relaxed"
              >
                <span className="mt-1.5 min-w-[10px] h-[10px] rounded-full bg-current opacity-50 block"></span>
                <p>{text}</p>
              </div>
            ))}
          </div>

          {slide.type === "activity" && (
            <div className="mt-8 p-4 bg-white/60 rounded-xl border border-white/50 text-center">
              <p className="font-bold flex items-center justify-center gap-2 text-green-700">
                <CheckCircle /> Hora de colocar a mão na massa!
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              currentSlide === 0
                ? "opacity-30 cursor-not-allowed bg-gray-100"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            <ArrowLeft size={20} /> Anterior
          </button>

          <div className="flex flex-col items-center flex-1">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden max-w-[200px]">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{
                  width: `${
                    ((currentSlide + 1) / module.slides.length) * 100
                  }%`,
                }}
              ></div>
            </div>
            <span className="text-xs text-gray-400 font-bold mt-1">
              Slide {currentSlide + 1} de {module.slides.length}
            </span>
          </div>

          <button
            onClick={nextSlide}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              isLastSlide
                ? "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-200"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200"
            }`}
          >
            {isLastSlide ? "Concluir!" : "Próximo"}{" "}
            {isLastSlide ? <CheckCircle size={20} /> : <ArrowRight size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

// 4️⃣ CERTIFICADO EM PDF
const CertificateView = ({ studentName }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 animate-fadeIn">
      {/* Container visível apenas para impressão */}
      <style>
        {`
          @media print {
            body * { visibility: hidden; }
            #certificate-area, #certificate-area * { visibility: visible; }
            #certificate-area { position: absolute; left: 0; top: 0; width: 100%; height: 100%; margin: 0; padding: 0; display: flex; align-items: center; justify-content: center; background: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            button { display: none !important; }
          }
        `}
      </style>

      <div
        id="certificate-area"
        className="w-full max-w-[800px] h-[600px] bg-white border-[20px] border-double border-blue-600 p-10 relative shadow-2xl text-center flex flex-col justify-between mb-8"
      >
        <div className="absolute top-0 left-0 w-24 h-24 border-r-[20px] border-b-[20px] border-blue-200"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-l-[20px] border-b-[20px] border-blue-200"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-r-[20px] border-t-[20px] border-blue-200"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-l-[20px] border-t-[20px] border-blue-200"></div>

        <div>
          <h1 className="text-5xl font-extrabold text-blue-700 font-serif tracking-widest mt-8 mb-2">
            CERTIFICADO
          </h1>
          <p className="text-xl text-gray-500 font-serif uppercase tracking-widest">
            De Conclusão de Curso
          </p>
        </div>

        <div className="my-8">
          <p className="text-lg text-gray-600">Certificamos que</p>
          <h2 className="text-4xl font-bold text-gray-800 my-4 border-b-2 border-gray-300 inline-block px-10 pb-2 font-serif capitalize">
            {studentName}
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            concluiu com êxito o curso de
          </p>
          <h3 className="text-2xl font-bold text-blue-600 mt-2">
            INFORMÁTICA KIDS
          </h3>
          <p className="text-gray-500 mt-4">
            Demonstrando domínio em Hardware, Windows e Office.
          </p>
        </div>

        <div className="flex justify-around items-end mb-8">
          <div className="text-center">
            <div className="w-40 border-b border-gray-400 mb-2"></div>
            <p className="text-sm text-gray-500 font-bold uppercase">
              Professor Responsável
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Award size={64} className="text-yellow-500 mb-2" />
            <p className="text-xs text-gray-400">
              {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="text-center">
            <div className="w-40 border-b border-gray-400 mb-2"></div>
            <p className="text-sm text-gray-500 font-bold uppercase">
              Direção da Escola
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrint}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg flex items-center gap-3 transition-transform hover:scale-105"
      >
        <Printer size={24} /> Imprimir Certificado
      </button>
      <p className="text-sm text-gray-400 mt-4">
        Dica: Nas opções de impressão, escolha "Salvar como PDF".
      </p>
    </div>
  );
};

// ... ModuleCard Atualizado para mostrar progresso
const ModuleCard = ({
  module,
  isOpen,
  toggleOpen,
  onStartLesson,
  isCompleted,
}) => {
  return (
    <div
      className={`mb-4 border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "shadow-lg bg-white border-blue-200"
          : "bg-white hover:bg-gray-50 border-gray-200"
      }`}
    >
      <div
        onClick={toggleOpen}
        className={`p-4 flex items-center justify-between cursor-pointer`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-full ${module.color} bg-opacity-20 relative`}
          >
            {module.icon}
            {isCompleted && (
              <div className="absolute -top-1 -right-1 bg-yellow-400 text-white rounded-full p-1 shadow-sm border-2 border-white">
                <Star size={12} fill="currentColor" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg md:text-xl flex items-center gap-2">
              {module.title}
              {isCompleted && (
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full border border-green-200 font-bold">
                  Concluído
                </span>
              )}
            </h3>
            <span className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <Clock size={14} /> {module.duration}
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              {module.slides.length} Tópicos
            </span>
          </div>
        </div>
        <div className="text-gray-400">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>

      {isOpen && (
        <div className="p-4 bg-slate-50 border-t border-gray-100 animate-fadeIn">
          <p className="text-gray-600 mb-6 leading-relaxed">
            {module.description}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-700 mb-2 text-sm flex items-center gap-2">
                <BookOpen size={16} className="text-blue-500" /> O que vamos
                ver:
              </h4>
              <ul className="space-y-2">
                {module.slides.map((slide, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                    {slide.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center items-center bg-blue-50/50 rounded-lg border border-blue-100 p-4 text-center">
              <Trophy
                size={32}
                className={`mb-2 ${
                  isCompleted ? "text-yellow-500" : "text-blue-300"
                }`}
              />
              <p className="text-sm text-blue-800 font-medium mb-4">
                {isCompleted
                  ? "Módulo já concluído! Quer revisar?"
                  : "Pronto para começar este módulo?"}
              </p>
              <button
                onClick={() => onStartLesson(module)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                <Play size={20} fill="currentColor" />{" "}
                {isCompleted ? "Revisar Aula" : "Entrar na Aula"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ... TabButton
const TabButton = ({ active, label, icon: Icon, onClick, badge }) => (
  <button
    onClick={onClick}
    className={`relative flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-bold transition-all text-sm md:text-base ${
      active
        ? "bg-blue-600 text-white shadow-lg scale-105"
        : "bg-white text-gray-500 hover:bg-gray-100"
    }`}
  >
    {badge && (
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500"></span>
      </span>
    )}
    <Icon size={18} />
    <span className="hidden md:inline">{label}</span>
  </button>
);

// ... TeacherTools
const TeacherTools = () => {
  const [randomChallenge, setRandomChallenge] = useState(null);

  const generateChallenge = () => {
    let challenges = [];
    courseData.modules.forEach((m) => {
      m.slides.forEach((s) => {
        if (s.type === "quiz" || s.type === "activity") {
          challenges.push({
            module: m.title,
            content: s.content[0],
            type: s.type,
          });
        }
      });
    });
    const random = challenges[Math.floor(Math.random() * challenges.length)];
    setRandomChallenge(random);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-dashed border-gray-300 text-center animate-fadeIn">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-purple-100 text-purple-600 rounded-full">
          <Dices size={48} />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Caixa Surpresa</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Acabou a aula mais cedo? Sorteie uma atividade aleatória do curso para
        revisar!
      </p>

      <button
        onClick={generateChallenge}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all active:scale-95"
      >
        Sortear Atividade
      </button>

      {randomChallenge && (
        <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl animate-bounce-short">
          <span className="text-xs font-bold text-yellow-700 uppercase tracking-wide flex items-center justify-center gap-2">
            {randomChallenge.type === "quiz" ? (
              <Star size={14} />
            ) : (
              <CheckCircle size={14} />
            )}
            {randomChallenge.module}
          </span>
          <p className="text-xl font-medium text-gray-800 mt-2">
            "{randomChallenge.content}"
          </p>
        </div>
      )}
    </div>
  );
};

// --- APP PRINCIPAL ---
export default function App() {
  const [studentName, setStudentName] = useState(
    localStorage.getItem("studentName") || ""
  );
  const [completedModules, setCompletedModules] = useState(
    JSON.parse(localStorage.getItem("completedModules")) || []
  );
  const [teacherUnlocked, setTeacherUnlocked] = useState(false);

  const [activeTab, setActiveTab] = useState("modules");
  const [openModuleId, setOpenModuleId] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);

  // Persistência automática
  useEffect(() => {
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("completedModules", JSON.stringify(completedModules));
  }, [studentName, completedModules]);

  const toggleModule = (id) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  const handleCompleteLesson = (id) => {
    if (!completedModules.includes(id)) {
      setCompletedModules([...completedModules, id]);
    }
  };

  const handleStart = (name) => {
    setStudentName(name);
  };

  const isCourseCompleted =
    completedModules.length === courseData.modules.length;

  // 1️⃣ Renderiza Tela de Login se não tiver nome
  if (!studentName) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  // 3️⃣ Renderiza Aula
  if (activeLesson) {
    return (
      <LessonView
        module={activeLesson}
        onExit={() => setActiveLesson(null)}
        onComplete={handleCompleteLesson}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 md:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
                {courseData.info.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-blue-100 text-sm font-medium items-center">
                <span className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                  <User size={16} /> Olá, {studentName}!
                </span>

                {/* 3️⃣ BARRA DE PROGRESSO AUTOMÁTICA */}
                <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold uppercase">
                    Progresso:
                  </span>
                  <div className="w-24 h-2 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 transition-all duration-500"
                      style={{
                        width: `${
                          (completedModules.length /
                            courseData.modules.length) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold">
                    {completedModules.length}/{courseData.modules.length}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isCourseCompleted && (
                <div className="bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded-xl shadow-lg animate-bounce flex items-center gap-2">
                  <Trophy size={20} /> Curso Concluído!
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 opacity-10 transform translate-x-10 -translate-y-10">
          <Monitor size={200} />
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 -mt-6 relative z-20">
        <div className="flex justify-center gap-2 md:gap-4 pb-2 overflow-x-auto no-scrollbar">
          <TabButton
            active={activeTab === "overview"}
            label="Sobre"
            icon={CheckCircle}
            onClick={() => setActiveTab("overview")}
          />
          <TabButton
            active={activeTab === "modules"}
            label="Aulas"
            icon={Menu}
            onClick={() => setActiveTab("modules")}
          />
          {isCourseCompleted && (
            <TabButton
              active={activeTab === "certificate"}
              label="Certificado"
              icon={Award}
              badge={true}
              onClick={() => setActiveTab("certificate")}
            />
          )}
          <TabButton
            active={activeTab === "tools"}
            label="Professor"
            icon={Dices}
            onClick={() => setActiveTab("tools")}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        {activeTab === "overview" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Trophy className="text-yellow-500" /> O que vamos aprender?
              </h2>
              <ul className="grid gap-3">
                {courseData.info.objectives.map((obj, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100"
                  >
                    <CheckCircle
                      className="text-green-500 min-w-[20px] mt-0.5"
                      size={20}
                    />
                    <span className="font-medium text-gray-700">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "modules" && (
          <div className="animate-fadeIn">
            <div className="mb-6 flex justify-between items-end">
              <h2 className="text-xl font-bold text-gray-600">Sua Jornada</h2>
              <span className="text-xs font-bold uppercase text-blue-500 bg-blue-50 px-2 py-1 rounded">
                {courseData.modules.length} Módulos
              </span>
            </div>

            {courseData.modules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                isOpen={openModuleId === module.id}
                toggleOpen={() => toggleModule(module.id)}
                onStartLesson={setActiveLesson}
                isCompleted={completedModules.includes(module.id)}
              />
            ))}
          </div>
        )}

        {activeTab === "certificate" && isCourseCompleted && (
          <CertificateView studentName={studentName} />
        )}

        {activeTab === "tools" &&
          // 4️⃣ MODO PROFESSOR COM TRAVA
          (teacherUnlocked ? (
            <TeacherTools />
          ) : (
            <TeacherAuth onUnlock={() => setTeacherUnlocked(true)} />
          ))}
      </main>
    </div>
  );
}
