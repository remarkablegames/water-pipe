import { TILE_SIZE } from '../constants'
import { levels } from './levels'
import { getTiles } from './tiles'

/**
 * Gets level data.
 *
 * @param level - Level number.
 * @returns - Level data.
 */
export function getLevel(level: number) {
  const { map, scale } = levels[level]

  const tileWidth = TILE_SIZE * scale
  const tileHeight = TILE_SIZE * scale

  const width = tileWidth * map[0].length
  const height = tileHeight * map.length

  const options = {
    tileWidth,
    tileHeight,
    tiles: getTiles(scale),

    pos: vec2(
      center().x + tileWidth / 2 - width / 2,
      center().y + tileHeight / 2 - height / 2,
    ),
  }

  return [map, options] as const
}

/**
 * Checks if level exists.
 *
 * @param level - Level number.
 * @returns - Whether level exists.
 */
export function hasLevel(level: number): boolean {
  return Boolean(levels[level])
}
