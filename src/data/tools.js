const tools = {
  categories: [
    {
      id: "transformar-textos",
      name: "Transformar Textos",
      description: "Conversión y cifrado de textos",
      icon: "file.svg",
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: "generadores",
      name: "Generadores",
      description: "Genera contenido aleatorio",
      icon: "globe.svg",
      color: "bg-green-100 text-green-800"
    },
    {
      id: "estadistica-suerte",
      name: "Estadística/Suerte",
      description: "Herramientas de azar y probabilidad",
      icon: "window.svg",
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: "contadores",
      name: "Contadores",
      description: "Cuenta y analiza textos",
      icon: "file.svg",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: "utilidades",
      name: "Utilidades",
      description: "Herramientas prácticas",
      icon: "globe.svg",
      color: "bg-red-100 text-red-800"
    },
    {
      id: "conversores",
      name: "Conversores",
      description: "Convierte entre formatos",
      icon: "window.svg",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      id: "interactivo",
      name: "Interactivo",
      description: "Herramientas con interacción",
      icon: "file.svg",
      color: "bg-pink-100 text-pink-800"
    },
    {
      id: "otros",
      name: "Otros",
      description: "Otras herramientas útiles",
      icon: "globe.svg",
      color: "bg-gray-100 text-gray-800"
    }
  ],
  
  tools: [
    // Transformar Textos
    {
      id: "cesar",
      name: "Cifrado César",
      description: "Cifra y descifra textos usando el método César",
      category: "transformar-textos",
      slug: "cesar",
      icon: "🔐",
      tags: ["cifrado", "texto", "seguridad"]
    },
    {
      id: "atbash",
      name: "Cifrado Atbash",
      description: "Cifrado por sustitución simple",
      category: "transformar-textos",
      slug: "atbash",
      icon: "🔄",
      tags: ["cifrado", "texto"]
    },
    {
      id: "binario-hexadecimal",
      name: "Binario/Hexadecimal",
      description: "Conversión entre binario, hexadecimal y texto",
      category: "transformar-textos",
      slug: "binario-hexadecimal",
      icon: "💻",
      tags: ["conversión", "binario", "hexadecimal"]
    },
    {
      id: "morse",
      name: "Código Morse",
      description: "Traduce texto a código Morse y viceversa",
      category: "transformar-textos",
      slug: "morse",
      icon: "📡",
      tags: ["código", "morse", "traducción"]
    },
    {
      id: "la-p",
      name: "La P",
      description: "Transforma texto usando el método 'La P'",
      category: "transformar-textos",
      slug: "la-p",
      icon: "🔡",
      tags: ["transformación", "texto"]
    },
    
    // Generadores
    {
      id: "contrasena",
      name: "Generador de Contraseñas",
      description: "Genera contraseñas seguras personalizables",
      category: "generadores",
      slug: "contrasena",
      icon: "🔒",
      tags: ["seguridad", "contraseña", "generador"]
    },
    {
      id: "lorem-ipsum",
      name: "Generador de Lorem Ipsum",
      description: "Genera texto de relleno para diseños",
      category: "generadores",
      slug: "lorem-ipsum",
      icon: "📝",
      tags: ["texto", "diseño", "relleno"]
    },
    {
      id: "hashtags",
      name: "Generador de Hashtags",
      description: "Genera hashtags relevantes para redes sociales",
      category: "generadores",
      slug: "hashtags",
      icon: "#️⃣",
      tags: ["redes sociales", "hashtags", "marketing"]
    },
    
    // Estadística/Suerte
    {
      id: "dados",
      name: "Lanzar Dados",
      description: "Simula el lanzamiento de dados virtuales",
      category: "estadistica-suerte",
      slug: "dados",
      icon: "🎲",
      tags: ["juego", "azar", "probabilidad"]
    },
    {
      id: "moneda",
      name: "Lanzar Moneda",
      description: "Cara o cruz virtual",
      category: "estadistica-suerte",
      slug: "moneda",
      icon: "🪙",
      tags: ["azar", "decisión", "juego"]
    },
    {
      id: "bola-8",
      name: "Bola 8 Mágica",
      description: "Responde a tus preguntas como la bola 8 mágica",
      category: "estadistica-suerte",
      slug: "bola-8",
      icon: "🎱",
      tags: ["diversión", "azar", "predicción"]
    },
    
    // Contadores
    {
      id: "contador-caracteres",
      name: "Contador de Caracteres",
      description: "Cuenta caracteres, palabras y líneas en un texto",
      category: "contadores",
      slug: "contador-caracteres",
      icon: "🔢",
      tags: ["texto", "análisis", "conteo"]
    },
    {
      id: "contador-palabras",
      name: "Contador de Palabras",
      description: "Analiza texto y cuenta palabras únicas",
      category: "contadores",
      slug: "contador-palabras",
      icon: "📊",
      tags: ["texto", "estadísticas", "análisis"]
    },
    
    // Utilidades
    {
      id: "paleta-colores",
      name: "Paleta de Colores",
      description: "Genera y explora paletas de colores armoniosas",
      category: "utilidades",
      slug: "paleta-colores",
      icon: "🎨",
      tags: ["diseño", "colores", "ui/ux"]
    },
    {
      id: "selector-colores",
      name: "Selector de Color",
      description: "Seleccionador de color con diferentes formatos",
      category: "utilidades",
      slug: "selector-colores",
      icon: "🖌️",
      tags: ["color", "diseño", "herramienta"]
    },
    
    // Conversores
    {
      id: "conversor-monedas",
      name: "Conversor de Monedas",
      description: "Convierte entre diferentes monedas con tasas actualizadas",
      category: "conversores",
      slug: "conversor-monedas",
      icon: "💱",
      tags: ["dinero", "conversión", "finanzas"]
    },
    {
      id: "imagen-ascii",
      name: "Imagen a Arte ASCII",
      description: "Convierte imágenes a arte ASCII",
      category: "conversores",
      slug: "imagen-ascii",
      icon: "🖼️",
      tags: ["imagen", "arte", "ascii"]
    },
    {
      id: "formato-texto",
      name: "Conversor de Formato de Texto",
      description: "Convierte entre MAYÚSCULAS, minúsculas, camelCase, etc.",
      category: "conversores",
      slug: "formato-texto",
      icon: "🔠",
      tags: ["texto", "formato", "conversión"]
    },
    
    // Interactivo
    {
      id: "morse-audio",
      name: "Morse con Audio",
      description: "Traduce texto a Morse con reproducción de audio",
      category: "interactivo",
      slug: "morse-audio",
      icon: "🔊",
      tags: ["audio", "morse", "interactivo"]
    },
    {
      id: "texto-invisible",
      name: "Texto Invisible",
      description: "Crea y copia texto invisible para compartir",
      category: "interactivo",
      slug: "texto-invisible",
      icon: "👻",
      tags: ["texto", "oculto", "divertido"]
    },
    {
      id: "cps",
      name: "Test de CPS",
      description: "Mide tus clics por segundo",
      category: "interactivo",
      slug: "cps",
      icon: "⚡",
      tags: ["juego", "velocidad", "test"]
    },
    
    // Otros
    {
      id: "timestamp",
      name: "Conversor de Timestamp",
      description: "Convierte entre timestamp y fecha legible",
      category: "otros",
      slug: "timestamp",
      icon: "⏰",
      tags: ["tiempo", "fecha", "conversión"]
    },
    {
      id: "estilos-texto",
      name: "Estilos de Texto",
      description: "Aplica estilos como negrita, cursiva, subrayado",
      category: "otros",
      slug: "estilos-texto",
      icon: "✨",
      tags: ["texto", "formato", "estilos"]
    },
    {
      id: "fuentes-especiales",
      name: "Fuentes Especiales",
      description: "Convierte texto a fuentes bonitas y raras",
      category: "otros",
      slug: "fuentes-especiales",
      icon: "🆒",
      tags: ["fuentes", "texto", "diseño"]
    }
  ]
};

export default tools;