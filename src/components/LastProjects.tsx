import CardProject from './CardProject'

import projectsData from '@/json/projects.json'

const projects = projectsData.reverse()

const LastProjects = () => {
  return (
    <div className='scrollbar-hide mx-auto flex max-w-7xl snap-x items-center gap-8 overflow-x-scroll px-8 pt-6 sm:px-6 md:px-4'>
      {projects.map((project, i) => {
        return <CardProject data={project} key={i} />
      })}
    </div>
  )
}

export default LastProjects
