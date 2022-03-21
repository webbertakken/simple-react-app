declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '*.scss'

declare module '*.svg' {
  const content: any
  export default content
}
