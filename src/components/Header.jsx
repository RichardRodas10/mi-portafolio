const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Certificaciones', href: '#certificaciones' },
    { name: 'Skills', href: '#skills' },
];

const Header = () => {
    return (
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/5">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Richard Rodas</span>
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" className="h-8 w-auto" />
            </a>
          </div>
          
          <div className="flex lg:hidden">
            <button type="button" command="show-modal" commandfor="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
              <span className="sr-only">Open main menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          
          <el-popover-group className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="text-sm/6 font-semibold text-white hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </a>
              ))}
          </el-popover-group>
        </nav>
  
        {/* Menú Móvil */}
        <el-dialog>
          <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
            <div tabIndex="0" className="fixed inset-0 focus:outline-none">
              <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5 font-bold text-white">Richard</a>
                  <button type="button" command="close" commandfor="mobile-menu" className="-m-2.5 rounded-md p-2.5 text-gray-400">
                    <span className="sr-only">Close menu</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                      <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-white/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a 
                          key={item.name} 
                          href={item.href} 
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 transition-all"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </el-dialog-panel>
            </div>
          </dialog>
        </el-dialog>
      </header>
    );
};
  
export default Header;