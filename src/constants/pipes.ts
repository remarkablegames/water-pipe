export enum EmptyPipe {
  '═' = '═',
  '║' = '║',
  '╔' = '╔',
  '╗' = '╗',
  '╚' = '╚',
  '╝' = '╝',
  '╠' = '╠',
  '╣' = '╣',
  '╦' = '╦',
  '╩' = '╩',
  '╬' = '╬',
}

export enum FilledPipe {
  '━' = '━',
  '┃' = '┃',
  '┏' = '┏',
  '┓' = '┓',
  '┗' = '┗',
  '┛' = '┛',
  '┣' = '┣',
  '┫' = '┫',
  '┳' = '┳',
  '┻' = '┻',
  '╋' = '╋',
}

export enum DirectionPipe {
  '△' = '△',
  '▷' = '▷',
  '▽' = '▽',
  '◁' = '◁',
}

export const pipes = [...Object.values(EmptyPipe), ...Object.values(FilledPipe)]
