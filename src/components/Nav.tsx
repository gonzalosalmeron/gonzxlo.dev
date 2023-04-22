const Nav = () => {
  return (
    <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
      <div className='flex items-center gap-2'>
        <div className='h-7 w-12 rounded-r-full bg-creme' />
        <p className='text-lg font-bold text-creme'>GONZXLODEV</p>
      </div>

      <div className='flex items-center gap-4 font-medium text-creme'>
        <a href='#'>Home</a>
        <a href='#'>About me</a>
        <a href='#'>Projects</a>
      </div>

      <div className='flex items-center justify-center gap-4'>
        <div className='flex items-center gap-1.5 text-xs font-light text-creme'>
          <a href='#'>ES</a>
          <span>-</span>
          <a href='#' className='underline'>
            EN
          </a>
        </div>
        <a
          href='#'
          className='rounded-full bg-creme px-3 py-2 text-sm font-medium'
        >
          Contacto
        </a>
      </div>
    </nav>
  )
}

export default Nav
