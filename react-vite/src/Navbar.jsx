const Navbar = () => {
  return (
      <header className="fixed z-10 w-full top-0 bg-gray-800">
          <nav className="container mx-auto px-4">
              <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4">
                  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                      <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" className="h-8" alt="Flowbite Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Lokomotif Dashboard</span>
                  </a>
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="h-8 rounded-full" alt="User Image" />
              </div>
          </nav>
      </header>
  );
};

export default Navbar;
