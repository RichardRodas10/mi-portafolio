const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      category: "Backend & Mobile",
      skills: [
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      ],
    },
    {
      category: "Tools & Cloud",
      skills: [
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      ],
    },
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Habilidades Técnicas</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Mi Stack Tecnológico
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              En mi formación como Ingeniero de Software, he cultivado experiencia en tecnologías modernas para el desarrollo web y móvil.
            </p>
          </div>
  
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {skillsData.map((group) => (
                <div 
                  key={group.category} 
                  className="flex flex-col rounded-2xl bg-gray-800/50 p-8 ring-1 ring-white/10 hover:bg-gray-800 transition-all duration-300 shadow-xl"
                >
                  <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4 tracking-wider uppercase text-center">
                    {group.category}
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center group">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 mb-2"
                        />
                        <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;