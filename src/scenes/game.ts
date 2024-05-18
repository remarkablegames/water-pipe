import { EmptyToFilledPipe, Scene, Sound, Tag } from '../constants'
import { checkSolution, rotatePipe } from '../helpers'
import { getLevel, getLevelBackground, hasLevel } from '../levels'

scene(Scene.game, (levelNumber: number) => {
  if (!hasLevel(levelNumber)) {
    levelNumber = 0
  }

  setBackground(...getLevelBackground(levelNumber))
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
      play(Sound.splash)

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
