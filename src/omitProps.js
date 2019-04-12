export default function omitProps(target, keys) {
  const len = keys.length
  if (len < 1) return target
  const copy = { ...target }

  for (let i = 0; i < len; i++) {
    if (copy[keys[i]] !== "undefined") {
      delete copy[keys[i]]
    }
  }

  return copy
}
