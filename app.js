
  function show(){
  let btn = document.getElementById('togglebtn');
  let close = document.getElementById('close')
  let banner = document.getElementById('banner')
  banner.classList.add('change-bg')
  let item = document.querySelectorAll('.items');
  item.forEach(items =>{
    items.classList.add('translateZ')
  })
  btn.style.display = 'none'
  close.style.display = 'block'
  document.body.style.color = '#FFFF'
}
function closebanner(){
  console.log('h1')
  let btn = document.getElementById('togglebtn');
  let close = document.getElementById('close')
  let banner = document.getElementById('banner')
  banner.classList.remove('change-bg')
  let item = document.querySelectorAll('.items');
  item.forEach(items =>{
    items.classList.remove('translateZ')
  })
  btn.style.display = 'block'
  close.style.display = 'none'
}



