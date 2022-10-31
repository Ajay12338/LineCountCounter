let count=0
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let resetEl=document.getElementById("reset-btn")
function increment( ){
    count+=1
    countEl.innerText=count

}
function save()
{
    let prevSave=count + ' -  '
    saveEl.textContent+=prevSave
    count=0
    countEl.textContent=0
}
function reset()
{
    count=0
    countEl.textContent=0 
    saveEl.textContent="Previous Entries:"
}

