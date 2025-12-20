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
    category: "Backend & Database",
    skills: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  },
  {
    category: "Mobile & Tools",
    skills: [
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Skills
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Tecnologías y herramientas con las que trabajo
          </p>
        </div>

        {/* Cards de Skills */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {skillsData.map((group) => (
            <div 
              key={group.category} 
              className="group flex flex-col rounded-3xl bg-gray-800/30 border border-white/10 p-6 hover:border-blue-500/30 transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/10 text-center group-hover:text-blue-400 transition-colors">
                {group.category}
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="relative">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="h-12 w-12 transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-400 hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;