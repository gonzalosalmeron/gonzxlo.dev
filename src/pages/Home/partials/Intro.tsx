import ArrowDown from '@heroicons/react/24/outline/ChevronDoubleDownIcon'
import Cursor from '@heroicons/react/24/outline/CursorArrowRaysIcon'
import Globe from '@heroicons/react/24/outline/GlobeAltIcon'
import { useTranslation } from 'react-i18next'

import CircularText from '@/components/CircularText'

const Intro = () => {
  const { t } = useTranslation()

  return (
    <div className='relative w-full overflow-hidden pb-10'>
      <div className='m-auto max-w-7xl'>
        <h1
          className='text-center font-bold text-white'
          style={{ fontSize: 'min(12vw, 164px)' }}
        >
          FULLSTACK DEV
        </h1>
      </div>

      <div className='gridPattern relative h-auto w-full bg-creme md:w-[85vw] md:rounded-r-full'>
        <img
          src='/images/logo/gonzxlo.webp'
          alt=''
          height={40}
          className='m-auto h-max max-h-[60vh] pt-10'
        />

        <div className='absolute right-[10%] top-20 hidden rotate-12 cursor-help duration-200 hover:scale-105 md:flex lg:right-[16%]'>
          <div className='text-lg font-bold uppercase text-white'>
            <span className='rounded-t-xl rounded-br-xl bg-red-400 px-3 py-1'>
              {t('user_design')}
            </span>
            <br />
            <span className='rounded-b-xl rounded-tr-xl bg-red-400 px-3 py-1'>
              {t('user_experience')}
            </span>
          </div>
        </div>

        <div className='absolute -top-6 left-[12%] hidden aspect-square w-min -rotate-[8deg] cursor-help flex-col items-center justify-center rounded-full bg-cyan-200 px-6 text-lg font-extrabold uppercase text-black duration-200 hover:scale-105 md:flex'>
          <svg
            className=''
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            style={{ fill: 'rgba(0, 0, 0, 1)' }}
          >
            <path d='M12 2c-4.963 0-9 4.038-9 9v8h.051c.245 1.691 1.69 3 3.449 3 1.174 0 2.074-.417 2.672-1.174a3.99 3.99 0 0 0 5.668-.014c.601.762 1.504 1.188 2.66 1.188 1.93 0 3.5-1.57 3.5-3.5V11c0-4.962-4.037-9-9-9zm7 16.5c0 .827-.673 1.5-1.5 1.5-.449 0-1.5 0-1.5-2v-1h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1H8v1c0 1.845-.774 2-1.5 2-.827 0-1.5-.673-1.5-1.5V11c0-3.86 3.141-7 7-7s7 3.14 7 7v7.5z'></path>
            <circle cx='9' cy='10' r='2'></circle>
            <circle cx='15' cy='10' r='2'></circle>
          </svg>
          <p className='text-center'>{t('design')}</p>
          <p className='-mt-1 text-center'>{t('strategy')}</p>
          <p className='text-xs font-light'>
            {t('previus')} {`->`}
          </p>
          <p className='text-xs font-light'>{t('study')}</p>
        </div>

        <div className='absolute bottom-[170px] left-[6%] -rotate-12 scale-90 cursor-help duration-200 sm:scale-[1.2] md:bottom-20 md:left-[18%] md:hover:scale-105'>
          <div className='stop-on-hover animate-float text-lg font-bold uppercase text-black'>
            <p className='flex items-center gap-2 rounded-t-xl rounded-br-xl bg-yellow-400 px-3 py-1'>
              {t('developer')}
            </p>
            <p className='-mt-2 flex w-min items-center gap-2 whitespace-nowrap rounded-br-xl bg-yellow-400 px-3 py-1'>
              {t('specialist')}
            </p>
            <div className='-mt-8 inline-flex w-min whitespace-nowrap rounded-b-xl bg-yellow-400 px-3 py-1'>
              <div className='flex items-center gap-1 rounded-full bg-black px-2 py-1 text-sm text-yellow-400'>
                <p>WWW.</p>
                <Cursor className='h-5 w-5' />
              </div>
            </div>
          </div>
        </div>

        <div className='absolute bottom-6 right-4 duration-200 md:hover:scale-105'>
          <CircularText
            origin={-80}
            height={70}
            text='REACT · VUE · NODE · LARAVEL · FLUTTER ·'
            textTop={5}
            cusClass='bg-green-200 text-sm font-bold text-black w-[150px] h-[150px] animate-spin-slow md:stop-on-hover cursor-help'
          >
            <Globe className='h-10 w-10' />
          </CircularText>
        </div>
      </div>

      <ArrowDown className='mx-auto mt-4 h-6 w-6 animate-pulse text-white opacity-90' />
    </div>
  )
}

export default Intro
