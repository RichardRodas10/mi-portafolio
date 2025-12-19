import { Linkedin, Mail, Github, MessageCircle } from 'lucide-react';

const redes = [
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/richard-mauricio-rodas-carhuas-2a795736b', 
    icon: <Linkedin className="size-4" /> 
  },
  { 
    name: 'Gmail', 
    href: 'mailto:kedmomc@gmail.com', 
    icon: <Mail className="size-4" /> 
  },
  { 
    name: 'GitHub', 
    href: 'https://github.com/RichardRodas10', 
    icon: <Github className="size-4" /> 
  },
  { 
    name: 'WhatsApp', 
    href: 'https://wa.me/51970827271', 
    icon: <MessageCircle className="size-4" />,
    colorHover: 'hover:border-green-500/50 hover:bg-green-500/10'
  },
];

const Inicio = () => {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0"> 
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Ingeniero de Software & <span className="text-indigo-400">Desarrollador Frontend</span>
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            Hola, soy <span className="text-white font-semibold">Richard Rodas</span>.
            Egresado de Ingeniería de Software con experiencia en el desarrollo de 
            soluciones web y móviles modernas. Me especializo en tecnologías como 
            React, PHP y Kotlin.
          </p>
        </div>
        
        {/*Badges*/}
        <div className="mt-10 flex flex-wrap gap-4">
          {redes.map((red) => (
            <a
              key={red.name}
              href={red.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-2 rounded-full border border-white/10 bg-white/5 
                px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300
                hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white
                ${red.colorHover || ''}
              `}
            >
              {red.icon}
              {red.name}
            </a>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#proyectos"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 transition"
          >
            Ver Proyectos
          </a>
         <a 
            href="/CV-Richard-Mauricio-Rodas-Carhuas.pdf" 
            download="CV-Richard-Rodas.pdf" 
            className="text-sm font-semibold text-white flex items-center gap-1 hover:text-indigo-400 transition"
          >
            Descargar CV <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;