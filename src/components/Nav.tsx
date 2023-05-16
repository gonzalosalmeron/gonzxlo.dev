const Nav = () => {
  return (
    <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
      <div className='flex items-center gap-2'>
        <div className='h-7 w-12 rounded-r-full bg-creme' />
        <p className='text-lg font-bold text-creme'>GONZXLODEV</p>
      </div>

      <div className='hidden items-center gap-4 font-medium text-creme md:flex'>
        <a href='#home'>Home</a>
        <a href='#about'>About me</a>
        <a href='#projects'>Projects</a>
      </div>

      <div className='flex items-center justify-center gap-4'>
        <div className='hidden items-center gap-1.5 text-xs font-light text-creme md:flex'>
          <button className='cursor-not-allowed'>ES</button>
          <span>-</span>
          <button className='underline'>EN</button>
        </div>
        <a
          href='#footer'
          className='rounded-full bg-creme px-3 py-2 text-sm font-medium'
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Nav
