const cardData = document.querySelectorAll('[data-card-id]')
const popupBg = document.querySelectorAll('.popup__bg')
const popupClose = document.querySelectorAll('.popup__close')

// Находим и открываем попап 
cardData.forEach( (card) => {
    card.addEventListener('click', (e) => {
        const popup = document.querySelector('.popup')
        let cardId = e.currentTarget.dataset.cardId
        popup.id = `popup-${cardId}`
        document.getElementById(`popup-${cardId}`).classList.add('active')
        document.documentElement.classList.add('noScrollPopup')
    })
})

// Закрываем попап
function popupShut(id) {
    document.getElementById(id).classList.remove('active')
    document.documentElement.classList.remove('noScrollPopup')
}


popupBg.forEach( (bg) => {
    bg.addEventListener('click', (event) => {
        let id = event.target.closest('.popup').id
        console.log(id)
        popupShut(id)
    })
})

popupClose.forEach( (Close) => {
    Close.addEventListener('click', (event) => {
        let id = event.target.closest('.popup').id
        console.log(id)
        popupShut(id)
    })
})







