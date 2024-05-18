// https://wikipedia.org/wiki/Box-drawing_characters
// ▲ ▼ ► ◄ ↑ ↓ → ← ⇦ ⇧ ⇨ ⇩
// △ ▷ ▽ ◁ ⬤ ◉ ◎
// ┓ ┗ ┏ ┛ ┣ ┫ ┳ ┻ ╋ ━ ┃
// ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬ ═ ║

export const levels = [
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
      ' ╔══╦══╗ ',
      ' ║╔═╬═╗║ ',
      '▷╣╠═╬═╣╠◁',
      ' ║╚═╬═╝║ ',
      ' ╚══╩══╝ ',
    ],
    scale: 0.8,
  },
]
