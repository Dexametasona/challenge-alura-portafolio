function labelIn(id){
  const label=document.querySelector(`[data-label-${id}]`);
  const input=document.querySelector(`[data-input-${id}]`)

  label.classList.add('labelIn')
  
}
function labelOut(id){
  const label=document.querySelector(`[data-label-${id}]`);
  const input=document.querySelector(`[data-input-${id}]`)

  if(input.value=='' || input.value==null){
    label.classList.toggle('labelIn')
  }
}