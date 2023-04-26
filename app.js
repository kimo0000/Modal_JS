const btnModal = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close_btn')
const overlay = document.querySelector('.overlay')

btnModal.addEventListener('click', () => {
    closed()
})

closeBtn.addEventListener('click', (e) => {
    closed()
})

function closed() {
    if(modal.classList.contains('show')) {
       modal.classList.remove('show')
       overlay.classList.remove('show')
    } else {
        modal.classList.add('show')
        overlay.classList.add('show')
    }
}

window.addEventListener('click', (e) => {
    if(e.target !== btnModal && e.target !== modal && e.target !== overlay && e.target !== closeBtn) {
      console.log("Yes")
      modal.classList.remove('show')
      overlay.classList.remove('show')
    }
})

