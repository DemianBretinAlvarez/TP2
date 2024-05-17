// À vous de jouer !
const section_image = document.getElementById("items")

async function recup() {
    let reponse = await fetch("https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs")
    let table_disk = await reponse.json()
    table_disk.forEach(element => {
        section_image.innerHTML += `<a href="./product.html?id=${Object.values(element)[5]}">
                                    <article>
                                        <img src="${Object.values(element)[3]}" alt="${Object.values(element)[0]}">
                                        <h3 class="productName">${Object.values(element)[0]} - ${Object.values(element)[1]}</h3>
                                        <p class="productDescription">${Object.values(element)[4]} €</p>
                                    </article>
                                    </a>
                                    `
    });
}

section_image.innerHTML = ""
fetch("https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs")
    .then(reponse => reponse.json())
    .then(data => {
        data.forEach(element => {
            section_image.innerHTML += `<a href="./product.html?id=${Object.values(element)[5]}">
                                <article>
                                    <img src="${Object.values(element)[3]}" alt="${Object.values(element)[0]}">
                                    <h3 class="productName">${Object.values(element)[0]} - ${Object.values(element)[1]}</h3>
                                    <p class="productDescription">${Object.values(element)[4]} €</p>
                                </article>
                                </a>`
        }) 
})