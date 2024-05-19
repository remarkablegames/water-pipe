import { Background, pipes, Scene, Sound } from '../constants'

scene(Scene.preload, () => {
  pipes.map((pipe) => loadSprite(pipe, `sprites/pipes/${pipe}.png`))

  loadSprite(Background.brick, 'sprites/backgrounds/brick.png')

  Object.values(Sound).map((sound) => {
    loadSound(sound, `sounds/${sound}.mp3`)
  })

  go(Scene.game, Number(new URLSearchParams(location.search).get('level')))
})
