type TAnyFunction = (...args: any[]) => void

export function throttle (func: TAnyFunction, wait: number) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  let timer:any = null
  return function (...args: any[]) {
    if (timer) return
    timer = setTimeout(() => {
      func.call(func, ...args)
      timer = null
    }, wait)
  }
}
