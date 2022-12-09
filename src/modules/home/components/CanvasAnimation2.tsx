import { chakra, ImageProps, list } from '@chakra-ui/react'
import React, { memo, useEffect, useRef, useState } from 'react'
import { colors as themeColors } from '../../../theme/colors'
interface Particle {
  x: number
  y: number
  id?: number
  radius: any
  color: string
  vr: number
}
const CanvasLine = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>()
  const colors = [...Object.values(themeColors['primary'])]
  const animationParticle = {
    radius: 0,
    lastTime: 0,
    interval: 1000 / 60,
    timer: 0,
  }
  const animationFunction = { fn: 0 }

  useEffect(() => {
    const onResize = () => {
      cancelAnimationFrame(animationFunction.fn)

      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
      animate(animationParticle)
    }
    window.addEventListener('resize', onResize)

    intitiateCtx()
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const intitiateCtx = () => {
    const canvas = canvasRef.current

    if (!canvas) return
    setCtx(canvas?.getContext('2d'))
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  useEffect(() => {
    if (ctx) {
      cancelAnimationFrame(animationFunction.fn)
      animate(animationParticle)
    }

    return () => {
      cancelAnimationFrame(animationFunction.fn)
    }
  }, [ctx])
  const draw = (prticle: Particle) => {
    ctx.strokeStyle = prticle.color
    ctx.beginPath()
    ctx.moveTo(prticle.x, prticle.y)
    console.log(prticle.radius.radius, 'prticle.radius.radius')

    const angle =
      (Math.cos(prticle.x) + Math.sin(prticle.y)) * prticle.radius.radius
    ctx.lineTo(prticle.x + angle * 100, prticle.y + angle * 100)
    ctx.stroke()
  }

  const animate = (part: any, timeStamp?) => {
    if (!timeStamp) timeStamp = 0
    const deltaTime = timeStamp - part.lastTime
    part.lastTime = timeStamp

    if (part.timer > part.interval) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      ctx.strokeStyle = 'rgba(255,255,255,0.4)'

      for (let i = 0; i < canvasRef.current.height; i += 14) {
        for (let j = 0; j < canvasRef.current.width; j += 15) {
          const newParticle = {
            x: j,
            y: i,
            color: colors[2],

            vr: 0.003,
            radius: part,
          }
          draw(newParticle)
          part.timer = 0
        }
      }
      part.radius += 0.03
    } else {
      part.timer = part.timer + deltaTime
    }
    if (part.radius > 2) {
      console.log(animationFunction, 'animationFunction.fn')

      cancelAnimationFrame(animationFunction.fn)

      return
    }
    animationFunction.fn = requestAnimationFrame((timeStamp) => {
      animate(part, timeStamp)
    })
  }

  return (
    <canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      ref={canvasRef}
    />
  )
}

export default memo(CanvasLine)
