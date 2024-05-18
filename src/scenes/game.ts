import { EmptyToFilledPipe, Scene, Tag } from '../constants'
import { checkSolution, rotatePipe } from '../helpers'
import { getLevel, hasLevel } from '../levels'

scene(Scene.game, (levelNumber: number) => {
  if (!hasLevel(levelNumber)) {
    levelNumber = 0
  }

  const level = addLevel(...getLevel(levelNumber))

  level.get(Tag.pipe).forEach((pipe) => {
    Array(randi(4))
      .fill(undefined)
      .forEach(() => rotatePipe(pipe))
  })

  onClick(Tag.pipe, (pipe) => {
    if (!checkSolution(level)) {
      rotatePipe(pipe)
    }

    if (checkSolution(level)) {
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
