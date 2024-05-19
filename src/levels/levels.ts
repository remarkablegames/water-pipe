interface Level {
  map: string[]
  scale: number
}

/**
 * @see https://wikipedia.org/wiki/Box-drawing_characters
 *
 * ```
 * △ ▷ ▽ ◁
 * ═ ║ ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬
 * ━ ┃ ┏ ┓ ┗ ┛ ┣ ┫ ┳ ┻ ╋
 * ```
 */
export const levels: Level[] = [
  // 0
  {
    // prettier-ignore
    map: [
      '▷═╗  ',
      '  ║  ',
      '  ╚═◁',
    ],
    scale: 1,
  },

  // 1
  {
    // prettier-ignore
    map: [
      '╔═╦═◁',
      '╚═╬═╗',
      '▷═╩═╝',
    ],
    scale: 1,
  },

  // 2
  {
    // prettier-ignore
    map: [
      '▷═╦═◁',
      '╔═╬═╗',
      '╚═╩═╝',
    ],
    scale: 1,
  },

  // 3
  {
    // prettier-ignore
    map: [
      '▽╔╦═╗▽',
      '║╠╬╦╩╣',
      '╚╝╚╩═╝',
    ],
    scale: 1,
  },

  // 4
  {
    // prettier-ignore
    map: [
      '╔╦═╦╗▽',
      '╠╬╦╣╠╣',
      '╚╩╬╬╬╣',
      '▷═╩╩╩╝',
    ],
    scale: 1,
  },

  // 5
  {
    // prettier-ignore
    map: [
      '▽╔═╦═╗ ',
      '╠╣╔╬╗╚╗',
      '╚╣╠╩╬═╣',
      ' ╚╩═╝ △',
    ],
    scale: 0.8,
  },

  // 6
  {
    // prettier-ignore
    map: [
      ' ╔══╦══╗ ',
      ' ║╔═╬═╗║ ',
      '▷╣╠═╬═╣╠◁',
      ' ║╚═╬═╝║ ',
      ' ╚══╩══╝ ',
    ],
    scale: 0.65,
  },
]
