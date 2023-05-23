const bts = document.querySelectorAll(`.buttons button`);
const notifications = document.querySelector(`.notifications`)

bts.forEach((bt) =>{
    bt.style.backgroundColor = bt.classList[0];
    bt.addEventListener(`click` , (e) => {
        let toast = document.createElement(`div`)
        toast.className =`toast`
        toast.style = `--color :${e.target.classList[0]};`
        toast.innerHTML = `
        <div class="content">
            <i class="fa-solid fa${e.target.classList[1]}"></i>
            <p>this is a ${e.target.id} toast</p>
        </div>
        <i class="fa-solid fa-xmark" onclick = "removeToast(this)"></i>
        `
        notifications.prepend(toast)

        setTimeout(()=>{
            toast.style.animation =`toastOut 1s forwards`
        } , 5500)
        setTimeout(()=>{
            notifications.removeChild(toast)
        } , 6500)
        
    })
})

function removeToast(xMark){
    xMark.offsetParent.style.animation =`toastOut 1s forwards`
    setTimeout(()=>{
        notifications.removeChild(xMark.offsetParent)
    } , 1000)
}
