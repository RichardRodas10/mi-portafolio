import React, { useState } from 'react';
import { ExternalLink, Github, Monitor, Tablet, Smartphone, Download } from 'lucide-react';

import pcFertex from '../assets/proyectos/laptop-fertex.webp';
import tabletFertex from '../assets/proyectos/tablet-fertex.webp';
import movilFertex from '../assets/proyectos/movil-fertex.webp';
import movilUTP from '../assets/proyectos/movil-utp.webp';
import pcJuridico from '../assets/proyectos/laptop-juridico.webp';
import pcElectrof from '../assets/proyectos/pc-electrof.webp';
import pcMesaPartes from '../assets/proyectos/pc-mesapartes.webp';

const proyectos = [
  {
    id: 1,
    titulo: "Landing Page Fertex",
    tipo: "web",
    descripcion: "Página informativa diseñada para la promoción de clases de Taekwondo. Implementa una navegación fluida tipo SPA con 7 componentes reutilizables y un diseño totalmente adaptable.",
    tags: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    repo: "https://github.com/RichardRodas10/fertex",
    demo: "https://fertex-67h9.vercel.app/",
    imagenes: {
      pc: pcFertex, 
      tablet: tabletFertex,
      movil: movilFertex
    }
  },
  {
    id: 2,
    titulo: "Mesa de Partes Virtual",
    tipo: "web",
    descripcion: "Sistema Full-Stack para gestión documental con autenticación de Firebase. Incluye validación de DNI en tiempo real, carga de documentos (PDF, Word, Excel) y un panel para seguimiento de trámites.",
    tags: [
      { name: "Html", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ],
    repo: "https://github.com/RichardRodas10/mesa-de-partes.git",
    demo: "https://mesa-de-partes-5c6c2.web.app/",
    imagenes: {
      pc: pcMesaPartes, 
      tablet: null,
      movil: null
    }
  },
  {
    id: 3,
    titulo: "App de Salud UTP",
    tipo: "movil",
    descripcion: "Aplicación móvil desarrollada en Kotlin con arquitectura MVVM. Permite el monitoreo de datos fisiológicos, mensajería directa médico-paciente y exportación de historiales en formatos PDF y CSV.",
    tags: [
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ],
    repo: "https://github.com/RichardRodas10/UTPsalud",
    demo: "https://drive.google.com/drive/folders/12Wb88-00u9dM0F2LU26TqubZkrorvsxt",
    imagenes: {
      pc: null,
      tablet: null,
      movil: movilUTP
    }
  },
  {
    id: 4,
    titulo: "Estudio Jurídico e Inmobiliario",
    tipo: "web",
    descripcion: "Plataforma web con navegación dinámica sin recarga. Incluye modales interactivos para visualización de detalles legales y una estructura optimizada que reduce la duplicidad de código mediante componentes.",
    tags: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ],
    repo: "https://github.com/RichardRodas10/Estudio_Juridico",
    demo: "https://estudio-juridico-sepia.vercel.app/#",
    imagenes: {
      pc: pcJuridico, 
      tablet: null,
      movil: null
    }
  },
  {
    id: 5,
    titulo: "E-commerce Electrof",
    tipo: "web",
    descripcion: "Sistema de comercio electrónico con gestión de inventario y usuarios. Implementa autenticación de sesiones, carrito de compras por categorías y generación automática de historial de compras en PDF.",
    tags: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ],
    repo: "https://github.com/RichardRodas10/Electrof",
    demo: "https://rodas.infinityfreeapp.com//index.php?i=1",
    imagenes: {
      pc: pcElectrof, 
      tablet: null,
      movil: null
    }
  }
];

const Proyectos = () => {
  const totalProyectos = proyectos.length;

  return (
    <section id="proyectos" className="bg-gray-900 py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Proyectos</h2>
          <p className="mt-4 text-lg text-gray-400">Seleccionados para demostrar mis habilidades técnicas.</p>
        </div>

        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {proyectos.map((proyecto, index) => {
              const esUltimoYHuertano = totalProyectos % 2 !== 0 && index === totalProyectos - 1;
              
              if (esUltimoYHuertano) return null;

              return (
                <div key={proyecto.id} className="w-full">
                  <CardProyecto proyecto={proyecto} />
                </div>
              );
            })}
          </div>

          {totalProyectos % 2 !== 0 && (
            <div className="w-full">
              <CardProyecto proyecto={proyectos[totalProyectos - 1]} esHorizontal={true} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const CardProyecto = ({ proyecto, esHorizontal = false }) => {
  const [vista, setVista] = useState(proyecto.imagenes.pc ? 'pc' : 'movil');

  return (
    <div className={`
      flex rounded-3xl bg-gray-800/30 border border-white/10 p-6 
      hover:border-blue-500/30 transition-all duration-500 group
      ${esHorizontal ? 'flex-col lg:flex-row gap-10' : 'flex-col'}
    `}>
      
      {/* Visualizador Interactivo */}
      <div className={`
        relative aspect-video overflow-hidden rounded-2xl bg-gray-950 flex items-center justify-center border border-white/5
        ${esHorizontal ? 'w-full lg:w-1/2' : 'w-full'}
      `}>
        <img 
          src={proyecto.imagenes[vista]} 
          alt={proyecto.titulo}
          className="h-full w-full object-contain p-4 transition-all duration-500"
        />

        {/* Selector de Dispositivo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 bg-gray-900/60 backdrop-blur-md p-2 rounded-xl border border-white/10 group-hover:opacity-100 transition-opacity">
          {proyecto.imagenes.pc && (
            <button onClick={() => setVista('pc')} className={`p-2 rounded-lg transition ${vista === 'pc' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>
              <Monitor className="size-4" />
            </button>
          )}
          {proyecto.imagenes.tablet && (
            <button onClick={() => setVista('tablet')} className={`p-2 rounded-lg transition ${vista === 'tablet' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>
              <Tablet className="size-4" />
            </button>
          )}
          {proyecto.imagenes.movil && (
            <button onClick={() => setVista('movil')} className={`p-2 rounded-lg transition ${vista === 'movil' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>
              <Smartphone className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* Información */}
      <div className={`flex flex-col grow ${esHorizontal ? 'lg:justify-center lg:py-4' : 'mt-8'}`}>
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {proyecto.titulo}
        </h3>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {proyecto.tags.map((tag) => (
            <div 
              key={tag.name} 
              className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full"
            >
              <img src={tag.icon} alt="" className="size-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
                {tag.name}
              </span>
            </div>
          ))}
        </div>

        <p className={`mt-4 text-gray-400 text-sm leading-relaxed grow ${esHorizontal ? 'max-w-xl' : ''}`}>
          {proyecto.descripcion}
        </p>

        <div className={`mt-8 grid grid-cols-2 gap-4 ${esHorizontal ? 'lg:max-w-sm' : ''}`}>
          <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-blue-500/10 border border-blue-500/20 py-2.5 text-sm font-bold text-blue-400 hover:bg-blue-500 hover:text-white transition-all">
            {proyecto.tipo === 'web' ? <><ExternalLink className="size-4" /> Sitio Web</> : <><Download className="size-4" /> APK Móvil</>}
          </a>
          <a href={proyecto.repo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition-all">
            <Github className="size-4" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;