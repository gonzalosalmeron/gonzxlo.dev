import { useTranslation } from 'react-i18next'

const Aboutme = () => {
  const { t } = useTranslation()

  return (
    <div
      id='about'
      className='m-auto mt-4 flex max-w-7xl flex-col justify-around gap-6 px-4 md:mt-32 md:flex-row md:gap-10'
    >
      <div className='font-epilogue text-4xl font-extrabold text-white md:text-5xl'>
        <div className='flex items-center'>
          <p>{t('get_to_know_me')}</p>
          <div className='relative'>
            <img
              src='/images/bulb.svg'
              alt=''
              className='z-10 ml-3 w-14 pb-4'
            />
            <div className='absolute right-5 top-5 h-4 w-4 animate-blink'></div>
          </div>
        </div>
        <p>{t('a_little_better')}</p>
      </div>
      <div className='text flex flex-col gap-4 text-xl font-medium text-gray-50 md:max-w-[40%] md:pt-10'>
        <p>{t('me_first')}</p>
        <p>{t('me_second')}</p>
        <p>{t('me_third')}</p>
      </div>
    </div>
  )
}

export default Aboutme
