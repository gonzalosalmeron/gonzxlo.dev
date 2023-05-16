import CardProject from './CardProject'

import projectsData from '@/json/projects.json'

const projects = projectsData.reverse()

const LastProjects = () => {
  return (
    <div className='mx-auto flex max-w-7xl items-center gap-8 overflow-x-scroll px-4 pt-6'>
      {projects.map((project, i) => {
        return <CardProject data={project} key={i} />
      })}
    </div>
  )
}

export default LastProjects
