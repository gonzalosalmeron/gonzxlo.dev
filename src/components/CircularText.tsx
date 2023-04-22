import { useEffect } from 'react'

interface props {
  children: React.ReactNode
  text: string
  cusClass: string
  origin: number
  height: number
  textTop: number
}

const CircularText = (props: props) => {
  const unqID = Math.random().toString(32).slice(2)

  useEffect((): void => {
    const circle = document.getElementById(unqID)
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.top = `${props.textTop}px`
    const deg = 360 / props.text.length
    let origin = props.origin ?? 0

    props.text.split('').forEach((ea: string) => {
      const text = document.createElement('p')
      text.innerText = ea

      text.style.height = `${props.height}px`
      text.style.position = 'absolute'
      text.style.transform = `rotate(${origin}deg)`
      text.style.transformOrigin = '0 100%'
      origin += deg

      container?.appendChild(text)
    })
    circle?.appendChild(container)
  }, [])

  return (
    <div
      id={unqID}
      className={
        'flex flex-col items-center justify-center rounded-full ' +
        props.cusClass
      }
    >
      {props.children}
    </div>
  )
}

export default CircularText
