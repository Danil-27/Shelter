export const getCard = (id , pet) => {
    return `
    <li class="card" data-card-id="${id}">
    <img src="${pet.img}" alt="${pet.name}">
    <p class="paragraph">${pet.name}</p>
    <a class="button">Learn more</a>
    </li>
    `
}

export function getPopup(pet) {
    return `
        <div class="popup__img">
        <img src="${pet.img}" alt="${pet.type}">
        </div>
        <div class="popup__content">
        <h2 class="title">${pet.name}</h2>
        <p class="subtitle">${pet.type} - ${pet.breed}</p>
        <p class="paragraph">^${pet.description}</p>
        <ul class="popup__options">
            <li><b>Age: </b>${pet.age}</li>
            <li><b>Inoculations: </b>${pet.inoculations.join(', ')}</li>
            <li><b>Diseases: </b>${pet.diseases.join(', ')}</li>
            <li><b>Parasites: </b>${pet.parasites.join(', ')}</li>
        </ul>
        </div>
    `
}