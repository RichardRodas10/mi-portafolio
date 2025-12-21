import { Code2, Rocket, Users, Award } from 'lucide-react';

const SobreMi = () => {
  const valores = [
    {
      icon: <Code2 className="size-6" />,
      titulo: "Código Limpio",
      descripcion: "Me enfoco en escribir código modular y reutilizable, reduciendo redundancias hasta en un 30%."
    },
    {
      icon: <Rocket className="size-6" />,
      titulo: "Aprendizaje Continuo",
      descripcion: "Siempre explorando nuevas tecnologías y mejores prácticas para mantenerme actualizado en el ecosistema del desarrollo."
    },
    {
      icon: <Users className="size-6" />,
      titulo: "Trabajo en Equipo",
      descripcion: "Comunicación efectiva y colaboración son claves en mis proyectos, facilitando el desarrollo conjunto."
    },
    {
      icon: <Award className="size-6" />,
      titulo: "Orientado a Resultados",
      descripcion: "Busco soluciones prácticas que aporten valor real, desde la experiencia del usuario hasta la eficiencia técnica."
    }
  ];

  return (
    <section id="sobre-mi" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Sobre Mí
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Mi trayectoria y lo que me impulsa como desarrollador
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="mx-auto max-w-4xl">
          
          {/* Historia */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Mi trayectoria en el desarrollo de software comenzó en la <span className="text-white font-semibold">Universidad 
              Tecnológica del Perú</span>, donde egresé como Ingeniero de Software. Durante mi formación, 
              descubrí que mi verdadera pasión va más allá de escribir código: es crear experiencias digitales 
              que resuelvan problemas reales y mejoren la vida de las personas.
            </p>
            
            <p className="text-lg">
              A lo largo de mi carrera académica y profesional, he desarrollado proyectos que van desde 
              <span className="text-blue-400 font-semibold"> sistemas de gestión documental con validación 
              en tiempo real</span>, hasta <span className="text-blue-400 font-semibold">aplicaciones móviles 
              de salud</span> que manejan datos sensibles de usuarios. Trabajo principalmente con el stack 
              <span className="text-white font-semibold"> React, PHP, Kotlin y Firebase</span>, aunque me 
              adapto rápidamente a nuevas tecnologías según las necesidades del proyecto.
            </p>

            <p className="text-lg">
              Lo que me distingue no es solo mi conocimiento técnico, sino mi enfoque: busco escribir 
              <span className="text-blue-400 font-semibold"> código limpio y mantenible</span>, priorizando 
              la <span className="text-blue-400 font-semibold">experiencia del usuario</span> y la 
              <span className="text-blue-400 font-semibold"> escalabilidad</span> de las soluciones. 
              Me caracterizo por mi creatividad al resolver problemas complejos, mi capacidad de aprender 
              rápidamente y mi comunicación efectiva al trabajar en equipo.
            </p>

            <p className="text-lg">
              Actualmente estoy buscando mi primera oportunidad profesional como <span className="text-white font-semibold">
              desarrollador frontend o mobile</span>, donde pueda contribuir con proyectos desafiantes, 
              seguir creciendo técnicamente y formar parte de un equipo que valore la calidad del código 
              tanto como el impacto del producto final.
            </p>
          </div>

          {/* Valores */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Lo que me define como desarrollador
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valores.map((valor, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-800/30 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                      {valor.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {valor.titulo}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {valor.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Certificaciones
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-sm font-semibold text-blue-300">
                  🌐 Inglés A2 - Nivel Intermedio
                </span>
              </div>
              <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-sm font-semibold text-blue-300">
                  📚 Tutor STEM
                </span>
              </div>
              <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-sm font-semibold text-blue-300">
                  📊 Excel - Nivel Intermedio
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SobreMi;