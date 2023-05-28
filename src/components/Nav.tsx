import { useTranslation } from 'react-i18next'

const Nav = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
      <div className='flex items-center gap-2'>
        <div className='h-7 w-12 rounded-r-full bg-creme' />
        <p className='text-lg font-bold text-creme'>GONZXLODEV</p>
      </div>

      <div className='hidden items-center gap-4 font-medium text-creme md:flex'>
        <a href='#home'>{t('home')}</a>
        <a href='#about'>{t('about')}</a>
        <a href='#projects'>{t('projects')}</a>
      </div>

      <div className='flex items-center justify-center gap-4'>
        <div className='items-center gap-1.5 text-xs font-light text-creme md:flex'>
          <button
            onClick={() => changeLanguage('es')}
            className={i18n.language === 'es' ? 'underline' : ''}
          >
            ES
          </button>
          <span>-</span>
          <button
            onClick={() => changeLanguage('en')}
            className={i18n.language === 'en' ? 'underline' : ''}
          >
            EN
          </button>
        </div>
        <a
          href='#footer'
          className='rounded-full bg-creme px-3 py-2 text-sm font-medium capitalize'
        >
          {t('contact')}
        </a>
      </div>
    </nav>
  )
}

export default Nav
