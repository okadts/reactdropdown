export const highlightText = (text: string, keyword: string, fontColor = 'white', backgroundColor = 'red') => {
  if (!keyword) return text
  const regex = new RegExp(`(${keyword})`, 'gi')
  const parts = text.split(regex)
  const listStyle = { 'color': fontColor, 'backgroundColor': backgroundColor }
  return parts.map((part, index) =>
    regex.test(part) ? <span key={index} style={listStyle}>{part}</span> : part
  )
}
