const Aboutme = () => {
  return (
    <div className='m-auto mt-4 flex max-w-7xl flex-col justify-around gap-6 px-4 md:mt-32 md:flex-row md:gap-10'>
      <div className='font-epilogue text-4xl font-extrabold text-white md:text-5xl'>
        <div className='flex items-center'>
          <p>Conóceme un </p>
          <div className='relative'>
            <img
              src='src/assets/imgs/bulb.svg'
              alt=''
              className='z-10 ml-3 w-14 pb-4'
            />
            <div className='absolute right-5 top-5 h-4 w-4 animate-blink'></div>
          </div>
        </div>
        <p>poco más</p>
      </div>
      <div className='text flex flex-col gap-4 text-xl font-medium text-gray-50 md:max-w-[40%] md:pt-10'>
        <p>
          Mi nombre es Gonzalo Salmerón, soy un informático amante de la
          tecnología.
        </p>
        <p>
          Mi ilusión por crecer como profesional hace que cada día quiera
          superarme más a mi mismo para poder lograr mis objetivos y a su vez
          mejorar como programador 👨🏻‍💻.
        </p>
        <p>
          Actualmente estoy continuando mis estudios cursando DAW y al mismo
          tiempo desarrollando mis propios proyectos.
        </p>
      </div>
    </div>
  )
}

export default Aboutme
