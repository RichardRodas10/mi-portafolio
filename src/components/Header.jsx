const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Certificaciones', href: '#certificaciones' },
  { name: 'Skills', href: '#skills' },
];

const Header = () => {
  const closeMenu = () => {
    const dialog = document.getElementById('mobile-menu');
    const panel = dialog.querySelector('.dialog-panel-richard');
    
    panel.classList.remove('animate-slide-in');
    panel.classList.add('animate-slide-out');
    
    setTimeout(() => {
      dialog.close();
      panel.classList.remove('animate-slide-out');
      panel.classList.add('animate-slide-in');
    }, 300);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" className="h-8 w-auto" />
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button 
            type="button" 
            onClick={() => {
              const dialog = document.getElementById('mobile-menu');
              dialog.showModal();
              const panel = dialog.querySelector('.dialog-panel-richard');
              panel.classList.add('animate-slide-in');
            }}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-7">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-base font-semibold text-gray-300 hover:text-indigo-400 transition-colors">
                  {item.name}
                </a>
            ))}
        </div>
      </nav>

      <el-dialog>
        <dialog id="mobile-menu" className="backdrop:bg-gray-900/40 backdrop:backdrop-blur-sm lg:hidden">
          <div className="fixed inset-0 focus:outline-none">
            <div className="dialog-panel-richard animate-slide-in fixed inset-y-0 right-0 z-50 w-[70%] bg-gray-900/95 backdrop-blur-xl p-8 border-l border-white/10 shadow-2xl">
              <div className="flex items-center justify-end">
                <button type="button" onClick={closeMenu} className="-m-2.5 rounded-md p-2.5 text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-8">
                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-12 space-y-6">
                  {navigation.map((item) => (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      className="block text-2xl font-bold tracking-tight text-white hover:text-indigo-400 py-2 transition-all"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </dialog>
      </el-dialog>
    </header>
  );
};

export default Header;