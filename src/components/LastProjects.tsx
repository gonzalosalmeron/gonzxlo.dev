import CardProject from './CardProject'

const LastProjects = () => {
  return (
    <div className='mx-auto flex max-w-7xl items-center gap-8 overflow-x-scroll px-4 pt-6'>
      {Array(10)
        .fill(0)
        .map((_, i) => {
          return <CardProject key={i} />
        })}
    </div>
  )
}

export default LastProjects
