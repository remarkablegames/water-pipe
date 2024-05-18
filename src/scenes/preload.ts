import { pipes, Scene } from '../constants'

scene(Scene.preload, async () => {
  await Promise.all(
    pipes.map((value) => {
      loadSprite(value, `sprites/pipes/${value}.png`)
    }),
  )

  go(Scene.game, new URLSearchParams(location.search).get('level') || 0)
})
