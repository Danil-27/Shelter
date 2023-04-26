import { pets } from "./pets.js";
import  { getCard , getPopup } from "./getCard.js";


const load = () => {
    const list = document.querySelector('.our-friends__list')
    const gallery = document.querySelector('.gallery__wrapper')
    
    pets.forEach( (pet,index) => {
        const card = getCard(index, pet)
        list?.insertAdjacentHTML('beforeend', card)
        gallery?.insertAdjacentHTML('beforeend', card)
    })
    const width = window.innerWidth
    const currentCard =  width >= 1280 ? 3 : width >= 768 ? 2 : 1 
    const cards = document.querySelectorAll('[data-card-id]')
    const popup = document.querySelector('.popup')
    const popupContainer = popup.querySelector('.popup__container')
    console.log(cards)
    cards.forEach( (card) => {
        card.addEventListener('click', (e) => {
            const cardId = e.currentTarget.dataset.cardId
            popup.id = `popup-${cardId}`
            const popupContent = getPopup( pets[cardId])
            popupContainer.innerHTML = ''
            popupContainer.insertAdjacentHTML('beforeend', popupContent)
            document.getElementById(`popup-${cardId}`).classList.add('active')
            document.documentElement.classList.add('noScrollPopup')
        })
    })
}

document.addEventListener('DOMContentLoaded', load)


