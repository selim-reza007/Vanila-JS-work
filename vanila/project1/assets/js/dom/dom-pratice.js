// let ulist = document.querySelector("#ulid1");
// let newItem = `<li>Milk</li>`;
// let newItem = document.createElement("li");
//newItem.textContent = "Milk";
// let dataText = document.createTextNode("Milk");
// newItem.appendChild(dataText);
// ulist.appendChild(newItem);
// ulist.insertBefore(newItem, document.querySelector(".fanItem"));
// ulist.insertAdjacentHTML("beforeend", newItem)

// console.log(ulist.children[2]);

let ulElement = document.querySelector("#ulid1");
let cardDivElement = document.createElement("div");
let imgElement = document.createElement("img");
let nameP = document.createElement("p");
let detailsP = document.createElement("p");

cardDivElement.setAttribute("class", "card");

imgElement.setAttribute('src', "assets/images/female_avatar.png");
imgElement.setAttribute('alt', "this is some sample pic of Taskin");
imgElement.setAttribute('height', "100");

nameP.setAttribute("class", "card__name");

detailsP.setAttribute("class", "card__details");

nameP.textContent = "Taskin Tamanna";
detailsP.textContent = "She is a cute girl. I have crush on her. The most loved things in her is her smile.";
cardDivElement.append(imgElement, nameP, detailsP);
document.body.insertBefore(cardDivElement, ulElement);

let newCard = `
    <div class="card">
        <img src="assets/images/male_avatar.png" alt="this is some sample pic of Taskin" height=100>
        <p class="card__name">Selim Reza</p>
        <p class="card__details">This is my frofile.</p>
    </div>
`;

cardDivElement.insertAdjacentHTML("afterend", newCard);