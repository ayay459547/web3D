const apikey = "21826520-96a49335d11f68a80b7f656e6"

//防止短時間超多次調用
function debounce(func, delay){
  let timer = null 
  
  return function (...args){
    if(timer) clearTimeout(timer)

    itmer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}

export {apikey, debounce}
