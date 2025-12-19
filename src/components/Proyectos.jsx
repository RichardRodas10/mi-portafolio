import React, { useState } from 'react';
import { ExternalLink, Github, Monitor, Tablet, Smartphone, Download } from 'lucide-react';

import pcFertex from '../assets/proyectos/laptop-fertex.png';
import tabletFertex from '../assets/proyectos/tablet-fertex.png';
import movilFertex from '../assets/proyectos/movil-fertex.png';

const proyectos = [
  {
    id: 1,
    titulo: "Landing Page Fertex",
    tipo: "web",
    descripcion: "Sistema Full-Stack para la gestión documental. Incluye validación de identidad y almacenamiento en la nube.",
    tags: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    repo: "https://github.com/RichardRodas10/mesa-de-partes.git",
    demo: "https://mesa-de-partes-5c6c2.web.app/",
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
    descripcion: "Sistema Full-Stack para la gestión documental. Incluye validación de identidad y almacenamiento en la nube.",
    tags: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    repo: "https://github.com/RichardRodas10/mesa-de-partes.git",
    demo: "https://mesa-de-partes-5c6c2.web.app/",
    imagenes: {
      pc: pcFertex, 
      tablet: tabletFertex,
      movil: movilFertex
    }
  },
  {
    id: 3,
    titulo: "App de Salud UTP",
    tipo: "movil",
    descripcion: "Aplicación móvil para el monitoreo fisiológico y comunicación médico-paciente.",
    tags: [
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ],
    repo: "https://github.com/RichardRodas10/UTPsalud.git",
    demo: "https://drive.google.com/drive/folders/12Wb88-00u9dM0F2LU26TqubZkrorvsxt",
    imagenes: {
      pc: null,
      tablet: null,
      movil: "https://tu-link-imagen-movil.png"
    }
  },
  {
    id: 4,
    titulo: "Estudio Jurídico e Inmobiliario",
    tipo: "web",
    descripcion: "Sistema Full-Stack para la gestión documental. Incluye validación de identidad y almacenamiento en la nube.",
    tags: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    repo: "https://github.com/RichardRodas10/mesa-de-partes.git",
    demo: "https://mesa-de-partes-5c6c2.web.app/",
    imagenes: {
      pc: pcFertex, 
      tablet: tabletFertex,
      movil: movilFertex
    }
  },
  {
    id: 5,
    titulo: "E-commerce Electrof",
    tipo: "web",
    descripcion: "Sistema Full-Stack para la gestión documental. Incluye validación de identidad y almacenamiento en la nube.",
    tags: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    repo: "https://github.com/RichardRodas10/mesa-de-partes.git",
    demo: "https://mesa-de-partes-5c6c2.web.app/",
    imagenes: {
      pc: pcFertex, 
      tablet: tabletFertex,
      movil: movilFertex
    }
  }
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="bg-gray-900 py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Proyectos</h2>
          <p className="mt-4 text-lg text-gray-400">Seleccionados para demostrar mis habilidades técnicas.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {proyectos.map((proyecto) => (
            <CardProyecto key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CardProyecto = ({ proyecto }) => {
  const [vista, setVista] = useState(proyecto.imagenes.pc ? 'pc' : 'movil');

  return (
    <div className="flex flex-col rounded-3xl bg-gray-800/30 border border-white/10 p-6 hover:border-indigo-500/30 transition-all duration-500 group">
      
      {/* Visualizador Interactivo */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-950 flex items-center justify-center border border-white/5">
        <img 
          src={proyecto.imagenes[vista]} 
          alt={proyecto.titulo}
          className={`h-full w-full object-contain p-4 transition-all duration-500`}
        />

        {/* Selector de Dispositivo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 bg-gray-900/60 backdrop-blur-md p-2 rounded-xl border border-white/10 group-hover:opacity-100 transition-opacity">
          {proyecto.imagenes.pc && (
            <button onClick={() => setVista('pc')} className={`p-2 rounded-lg transition ${vista === 'pc' ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:text-white'}`}>
              <Monitor className="size-4" />
            </button>
          )}
          {proyecto.imagenes.tablet && (
            <button onClick={() => setVista('tablet')} className={`p-2 rounded-lg transition ${vista === 'tablet' ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:text-white'}`}>
              <Tablet className="size-4" />
            </button>
          )}
          {proyecto.imagenes.movil && (
            <button onClick={() => setVista('movil')} className={`p-2 rounded-lg transition ${vista === 'movil' ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:text-white'}`}>
              <Smartphone className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* Información */}
      <div className="mt-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
          {proyecto.titulo}
        </h3>
        
        {/* Tags con Color por Default */}
        <div className="mt-4 flex flex-wrap gap-2">
          {proyecto.tags.map((tag) => (
            <div 
              key={tag.name} 
              className="flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
            >
              <img 
                src={tag.icon} 
                alt="" 
                className="size-3.5"
              />
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">
                {tag.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-gray-400 text-sm leading-relaxed grow">
          {proyecto.descripcion}
        </p>

        {/* Botones de Acción Dinámicos */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <a href={proyecto.demo} target="_blank" className="flex items-center justify-center gap-2 rounded-xl bg-teal-500/10 border border-teal-500/20 py-2.5 text-sm font-bold text-teal-400 hover:bg-teal-500 hover:text-white transition-all">
            {proyecto.tipo === 'web' ? (
              <><ExternalLink className="size-4" /> Sitio Web</>
            ) : (
              <><Download className="size-4" /> APK Móvil</>
            )}
          </a>
          <a href={proyecto.repo} target="_blank" className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition-all">
            <Github className="size-4" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;