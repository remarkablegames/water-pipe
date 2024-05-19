import { EmptyToFilledPipe, Scene, Sound, Tag } from '../constants'
import {
  checkSolution,
  getDeviceScale,
  rotatePipe,
  setRandomBackgroundColor,
} from '../helpers'
import { getLevel, hasLevel } from '../levels'

scene(Scene.game, (levelNumber: number) => {
  if (!hasLevel(levelNumber)) {
    levelNumber = 0
  }

  play(Sound.waves, { loop: true, volume: 0.4 })

  add([
    text(String(levelNumber), {
      align: 'center',
      size: Math.max(64 * getDeviceScale(), 42),
    }),
    pos(center().x, 24),
    color(15, 16, 53),
  ])

  setRandomBackgroundColor()
  const level = addLevel(...getLevel(levelNumber))

  level.get(Tag.pipe).forEach((pipe) => {
    Array(randi(4))
      .fill(undefined)
      .forEach(() => rotatePipe(pipe))
  })

  onClick(Tag.pipe, (pipe) => {
    if (!checkSolution(level)) {
      play(Sound.click)
      rotatePipe(pipe)
    }

    if (checkSolution(level)) {
      play(Sound.splash, { volume: 0.5 })

      level.get(Tag.pipe).forEach((pipe) => {
        pipe.use(
          sprite(
            EmptyToFilledPipe[pipe.solution as keyof typeof EmptyToFilledPipe],
          ),
        )
      })

      wait(1, () => {
        go(Scene.game, levelNumber + 1)
      })
    }
  })
})
