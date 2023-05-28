import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer id='footer' className='font-epilogue bg-gray-100 px-4 pb-4'>
      <div className='m-auto max-w-7xl rounded-[60px] bg-black px-8 py-10 text-sm text-gray-100 lg:rounded-[80px] lg:px-14'>
        <div className='flex justify-center border-b border-t border-gray-400 px-4 py-6 lg:justify-between'>
          <h1 className='text-center text-5xl font-medium leading-[60px] tracking-wide lg:my-4 lg:text-left'>
            {t('want_to')}
            <span className='text-purple-400'>{t('contact')}</span>
            <br />
            {t('me')}?
          </h1>
          <div className='hidden w-[1px] bg-gray-400 lg:inline-block' />
          <div className='my-4 hidden flex-col justify-between rounded-[50px] bg-purple-400 px-4 py-2 ring-8 ring-purple-400 ring-offset-2 ring-offset-white lg:flex'>
            <p className='pr-3 text-end text-6xl'>*</p>
            <p className='-mt-6 pb-2 pl-2 pr-14 text-2xl font-medium'>
              {t('let_work')} <br /> {t('together')}!
            </p>
          </div>
        </div>
        <div className='flex justify-between px-4 pt-6 md:pt-14'>
          <div className='hidden flex-col gap-4 text-lg font-light text-gray-400 md:flex'>
            <a href='#'>{t('home')}</a>
            <a href='#about'>{t('about')}</a>
            <a href='#projects'>{t('projects')}</a>
          </div>
          <div className='grid grid-cols-1 gap-x-20 gap-y-6 md:grid-cols-2 md:grid-rows-2'>
            <div>
              <h3 className='text-2xl font-medium capitalize text-purple-400'>
                {t('contact')}
              </h3>
              <a
                href='mailto:gonzxlosalmeron@gmail.com'
                className='font-light text-gray-300'
              >
                gonzxlosalmeron@gmail.com
              </a>
            </div>
            <div className='row-span-2'>
              <h3 className='text-2xl font-medium text-purple-400'>
                {t('location')}
              </h3>
              <div className='flex flex-col gap-1'>
                <p className='text-lg font-light text-gray-300'>Teatinos</p>
                <p className='text-base font-light text-gray-300'>
                  29010 Málaga
                </p>
                <p className='text-sm font-light text-gray-300'>España</p>
              </div>
            </div>
            <div className='row'>
              <h3 className='text-2xl font-medium text-purple-400'>
                {t('networks')}
              </h3>
              <div className='mt-1 flex gap-2'>
                <a
                  href='https://www.linkedin.com/in/gonzalo-jos%C3%A9-salmer%C3%B3n-robles-301261209/'
                  target='_blank'
                  rel='noopener'
                  className='flex items-center'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className='fill-current text-gray-300/90 hover:text-purple-400'
                  >
                    <path d='M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z'></path>
                  </svg>
                </a>
                <a
                  href='https://play.google.com/store/apps/developer?id=gonzxlodev'
                  target='_blank'
                  rel='noopener'
                  className='flex items-center'
                >
                  <svg
                    className='w-[18px] text-gray-300/90 hover:text-purple-400'
                    _ngcontent-kxx-c10=''
                    data-name='Layer 1'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1'
                  >
                    <path
                      _ngcontent-kxx-c10=''
                      d='M20.91887 10.653c-.31445-.16992-3.01074-1.73438-4.02246-2.32324l-.00293-.002L4.6386 1.25262a1.679 1.679 0 0 0-1.40711-.1593c-.02618.0094-.05078.01886-.07623.03051a1.41835 1.41835 0 0 0-.17291.06922 1.51864 1.51864 0 0 0-.73828 1.36426v18.98535a1.43542 1.43542 0 0 0 .69238 1.2705 1.30761 1.30761 0 0 0 .15479.06373c.02893.01336.05651.025.08636.03552a1.37893 1.37893 0 0 0 .44635.0824 1.67263 1.67263 0 0 0 .83106-.23145c.38867-.22559 12.43847-7.18262 12.43847-7.18262l4.02052-2.32129a1.52522 1.52522 0 0 0 .8418-1.334 1.49078 1.49078 0 0 0-.83693-1.27245Zm-16.6748 9.186V4.10186l7.94012 7.85907Zm5.018-2.16168 4.34351-4.30957 1.14954 1.13782c-1.26465.73026-3.40131 1.96403-5.49305 3.17179Zm4.3418-7.125L9.206 6.19933l5.55365 3.2063Zm2.94678 2.91668-1.52539-1.50977 1.52774-1.51582c.72027.41828 1.84283 1.06934 2.6159 1.51429Z'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='m-auto mt-5 flex max-w-7xl justify-end px-4 md:pr-20'>
        <p className='text-sm font-light text-gray-500'>
          {t('developed_by_me')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
