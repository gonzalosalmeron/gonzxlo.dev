import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { redirect } from 'react-router-dom'

const TmplContent = () => {
  const { file_name } = useParams()
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    // Carga el archivo .md utilizando import()
    import(`@/content/projects/${file_name}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text().then((text: string) => setContent(text)))
          .catch((error) =>
            console.error('Error al cargar el archivo .md', error)
          )
      })
      .catch(() => redirect('/404'))
  }, [])

  return <p>{content}</p>
}

export default TmplContent
