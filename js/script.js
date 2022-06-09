const elList = document.querySelector(".pakemon__list");

for(let item of pokemons){

    //CREATE
    const boxLi = document.createElement("li");
    const boxImg = document.createElement("img");
    const boxDiv = document.createElement("div");
    const bottomDiv = document.createElement("div");
    const boxTitle = document.createElement("p");
    const boxCandy = document.createElement("p");
    const boxIcon = document.createElement("img");
    const pakemonWeight = document.createElement("p");
    const pakemonAge = document.createElement("p");


    //SETATTRIBUTE
    boxLi.setAttribute("class", "card mb-4 mt-3 border border-3 border-dark");
    boxLi.style.width = "300px";
    boxLi.style.height = "450px";
    boxImg.setAttribute("class", "pokemon__img");
    boxImg.setAttribute("src", item.img);
    boxDiv.setAttribute("class", "d-flex, justify-content-around, border-top");
    boxTitle.setAttribute("class",  " fw-bold ,fs-3,m-0, p-0");
    boxIcon.setAttribute("src", "images/Mask.png");
    boxIcon.classList.add("d-inline");
    bottomDiv.setAttribute("class", "d-flex , jum-0, p-0, justify-content-around fw-bold align-center");
    boxCandy.setAttribute("class", "fw-bolder fs-6")




    // TEXT-CONTENT
    boxTitle.textContent = item.name;
    boxCandy.textContent = item.candy;
    pakemonWeight.textContent = item.weight;
    pakemonAge.textContent = item.candy_count;

    // APPEND
    elList.appendChild(boxLi);
    boxLi.appendChild(boxImg);
    boxLi.appendChild(boxDiv);
    boxDiv.appendChild(boxTitle);
    boxDiv.appendChild(boxIcon);
    boxLi.appendChild(boxCandy);
    boxLi.appendChild(bottomDiv);
    bottomDiv.appendChild(pakemonWeight);
    bottomDiv.appendChild(pakemonAge);

}