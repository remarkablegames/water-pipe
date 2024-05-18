// △ ▷ ▽ ◁
// ━ ┃ ┏ ┓ ┗ ┛ ┣ ┫ ┳ ┻ ╋
// ═ ║ ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬
// https://colorhunt.co/palettes/sea

interface Level {
  map: string[]
  scale: number
  background: [number, number, number]
}

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
    background: [238, 247, 255],
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
    background: [205, 232, 229],
  },

  // 2
  {
    // prettier-ignore
    map: [
      ' ╔══╦══╗ ',
      ' ║╔═╬═╗║ ',
      '▷╣╠═╬═╣╠◁',
      ' ║╚═╬═╝║ ',
      ' ╚══╩══╝ ',
    ],
    scale: 0.8,
    background: [224, 251, 226],
  },
]
