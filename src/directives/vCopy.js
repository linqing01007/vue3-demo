const copy = {
  mounted (el, binding) {
    el.$value = binding.value
    el.handler = () => {
      if (!el.$value) {
        console.log('无复制内容')
        return
      }
      const textarea = document.createElement('textarea')
      textarea.readOnly = true
      textarea.style.position = 'absolute'
      textarea.style.left = '-99999px'
      textarea.value = el.$value
      document.body.appendChild(textarea)
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) {
        console.log('复制成功')
      }
      document.body.removeChild(textarea)
    }
    el.addEventListener('click', el.handler)
  },
  updated (el, binding) {
    el.$value = binding.value
  },
  beforeUnMount (el) {
    el.removeEventListener('click', el.handler)
  }
}

export default copy
