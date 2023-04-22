import LastProjects from '@/components/LastProjects'

const Projects = () => {
  return (
    <div className='z-10 select-none bg-gray-100 pb-20 pt-20 md:-mt-20'>
      <div className='font-epilogue m-auto -mb-2 w-full max-w-6xl select-text px-8 pb-6 text-center md:mb-10 md:border-b md:border-gray-300 md:text-left'>
        <p className='inline-flex rounded-full bg-purple-200 px-2 py-1 text-sm text-purple-600'>
          Trayectoria
        </p>
        <h3 className='m-auto -mt-2 pt-4 text-4xl font-extrabold text-zinc-900'>
          Mis proyectos
        </h3>
      </div>

      <LastProjects />
    </div>
  )
}

export default Projects
