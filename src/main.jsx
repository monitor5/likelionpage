const cssHref = '/assets/app.css'
const jsHref = '/assets/app.js'

if (!document.querySelector(`link[href="${cssHref}"]`)) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = cssHref
  document.head.append(link)
}

await import(jsHref)
