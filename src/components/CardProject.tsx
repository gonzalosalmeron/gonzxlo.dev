interface props {
  title?: string
  description?: string
  date?: string
}

const CardProject = (props: props) => {
  return (
    <div className='group relative m-auto w-[280px] shrink-0 cursor-pointer'>
      <div className='absolute -right-6 -top-6 z-10 h-[66px] w-[66px] scale-0 transform cursor-pointer rounded-full border-[7px] border-gray-100 bg-purple-400 p-1 opacity-0 transition duration-200 md:group-hover:scale-100 md:group-hover:opacity-100'>
        <div className='flex h-full w-full items-center justify-center rounded-full border border-white bg-purple-400'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='3'
            stroke='currentColor'
            className='m-2 h-6 w-6 text-white'
          >
            <path
              stroke-linecap='square'
              stroke-linejoin='square'
              d='M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25'
            />
          </svg>
        </div>
      </div>
      <img
        src='https://fastly.picsum.photos/id/866/800/1200.jpg?hmac=dMtn2g5Iba-xMMzrTGgBGUrYERWiQdeqVjoRka3FL5E'
        alt=''
        className='h-auto w-full shrink-0 rounded-[35px] object-cover transition duration-500 md:grayscale md:group-hover:grayscale-0'
      />
      <div className='font-epilogue pl-5 text-left'>
        <h3 className='mt-3 text-2xl font-medium transition duration-300 md:group-hover:text-purple-600'>
          {props.title ?? 'XASEISF?'}
        </h3>
        <p className='line-clamp-2 text-sm font-thin text-zinc-600 transition duration-300 md:group-hover:text-purple-500'>
          {props.description ??
            'Xaseisf?aseisf? xaseisf?aseisf? xaseisf?aseisf? xaseisf?aseisf? xaseisf?aseisf? xaseisf?aseisf? xaseisf?aseisf? xaseisf?aseisf?'}
        </p>
        <p className='mt-1 text-sm font-thin text-zinc-600 transition duration-300 md:group-hover:text-purple-500'>
          {props.date ?? '2X-x, 202X'}
        </p>
      </div>
    </div>
  )
}

export default CardProject
