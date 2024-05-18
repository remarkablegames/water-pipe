import { pipes, Scene, Sound } from '../constants'

scene(Scene.preload, async () => {
  const sprites = pipes.map((pipe) => {
    loadSprite(pipe, `sprites/pipes/${pipe}.png`)
  })

  const sounds = Object.values(Sound).map((sound) => {
    loadSound(sound, `sounds/${sound}.mp3`)
  })

  await Promise.all(sprites.concat(sounds))

  go(Scene.game, new URLSearchParams(location.search).get('level') || 0)
})
