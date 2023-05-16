const Footer = () => {
  return (
    <footer id='footer' className='font-epilogue bg-gray-100 px-4 pb-4'>
      <div className='m-auto max-w-7xl rounded-[60px] bg-black px-8 py-10 text-sm text-gray-100 lg:rounded-[80px] lg:px-14'>
        <div className='flex justify-center border-b border-t border-gray-400 px-4 py-6 lg:justify-between'>
          <h1 className='text-center text-5xl font-medium leading-[60px] tracking-wide lg:my-4 lg:text-left'>
            ¿Want to <span className='text-purple-400'>contact</span>
            <br />
            me?
          </h1>
          <div className='hidden w-[1px] bg-gray-400 lg:inline-block' />
          <div className='my-4 hidden flex-col justify-between rounded-[50px] bg-purple-400 px-4 py-2 ring-8 ring-purple-400 ring-offset-2 ring-offset-white lg:flex'>
            <p className='pr-3 text-end text-6xl'>*</p>
            <p className='-mt-6 pb-2 pl-2 pr-14 text-2xl font-medium'>
              Let's work <br /> Together!
            </p>
          </div>
        </div>
        <div className='flex justify-between px-4 pt-6 md:pt-14'>
          <div className='hidden flex-col gap-4 text-lg font-light text-gray-400 md:flex'>
            <a href='#'>Home</a>
            <a href='#about'>About me</a>
            <a href='#projects'>Projects</a>
          </div>
          <div className='grid grid-cols-1 gap-x-20 gap-y-6 md:grid-cols-2 md:grid-rows-2'>
            <div>
              <h3 className='text-2xl font-medium text-purple-400'>Contact</h3>
              <a
                href='mailto:gonzxlosalmeron@gmail.com'
                className='font-light text-gray-300'
              >
                gonzxlosalmeron@gmail.com
              </a>
            </div>
            <div className='row-span-2'>
              <h3 className='text-2xl font-medium text-purple-400'>Location</h3>
              <div className='flex flex-col gap-1'>
                <p className='text-lg font-light text-gray-300'>Teatinos</p>
                <p className='text-base font-light text-gray-300'>
                  29010 Málaga
                </p>
                <p className='text-sm font-light text-gray-300'>España</p>
              </div>
            </div>
            <div className='row'>
              <h3 className='text-2xl font-medium text-purple-400'>Networks</h3>
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
                {/* <a href='' className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className='fill-current text-gray-300/90 hover:text-purple-400'
                  >
                    <path d='M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z'></path>
                    <circle cx='16.806' cy='7.207' r='1.078'></circle>
                    <path d='M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z'></path>
                  </svg>
                </a> */}
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
          Developed by Gonzalo Salmerón with ♥
        </p>
      </div>
    </footer>
  )
}

export default Footer
