import { chakra, ImageProps, list } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
interface Particle {
  x: number
  y: number
  id?: number
  radius: number
  color: string
  speedX: number
  speedY: number
}
const Canvas = ({ ElementRef }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>()
  const ref = []
  const CanvasElement = chakra('canvas')
  useEffect(() => {
    intitiateCtx()
    return () => {}
  }, [])

  const intitiateCtx = () => {
    const canvas = canvasRef.current

    if (!canvas) return
    setCtx(canvas?.getContext('2d'))
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  useEffect(() => {
    let mouseListener
    const listOfParticles = []
    const mouseEvent = (e) => {
      const colors = ['#35BFC5', '#31afb5', '#26888d', '#c3edef']
      for (let index = 0; index < 2; index++) {
        const newParticle = {
          x: e.x,
          y: e.y,
          radius: Math.random() * 11 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedY: Math.random() * 1 - 0.5,
          speedX: Math.random() * 1 - 0.5,
        }
        listOfParticles.push(newParticle)
      }
    }
    if (ElementRef) {
      mouseListener = ElementRef.current.addEventListener(
        'mousemove',
        mouseEvent
      )
    }

    if (ctx) {
      animate(listOfParticles)
    }

    return () => {
      if (mouseListener)
        mouseListener?.removeEventListener('mousemove', mouseEvent)
    }
  }, [ElementRef, ctx])

  const update = (particle: Particle) => {
    particle.x += particle.speedX
    particle.y += particle.speedY
    if (particle.radius > 0.1) particle.radius = particle.radius - 0.1
    return particle
  }
  const draw = (prticle: Particle) => {
    console.log(prticle, 'list')

    ctx.fillStyle = prticle.color
    ctx.beginPath()
    ctx.arc(prticle.x, prticle.y, prticle.radius, 0, Math.PI * 2)
    ctx.fill()
  }
  window.addEventListener('resize', function () {
    canvasRef.current.width = window.innerWidth
    canvasRef.current.height = window.innerHeight
  })
  const animate = (listOfParticles: Particle[]) => {
    ctx.fillStyle = 'rgba(255,255,255,0.2)'
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    for (let i = 0; i < listOfParticles.length; i++) {
      console.log(listOfParticles[i], 'list')

      listOfParticles[i] = update(listOfParticles[i])
      console.log(listOfParticles[i], 'list2')

      draw(listOfParticles[i])
      if (listOfParticles[i].radius < 0.2) {
        listOfParticles.splice(i, 1)
        i--
      }
    }
    requestAnimationFrame(() => {
      animate(listOfParticles)
    })
  }

  return (
    <canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 2,
        height: '100%',
        background: 'transparent',
      }}
      ref={canvasRef}
    />
  )
}

export default Canvas
