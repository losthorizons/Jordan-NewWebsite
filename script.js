const buttons = document.querySelectorAll(".buttons button");
const carItem = document.querySelectorAll(".car-container .card");


// define the filtercards function
const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // get the selected filter value of data-name
    const filter = e.target.dataset.name;

    // iterate over each filterable card
    carItem.forEach((card) => {
        // add "hide" class to hide the card initially
        card.classList.add("hide");

        // check if the card matches the selected filter or "all" is selected
        if(card.dataset.name === filter || filter === "all"){
            card.classList.remove("hide");

        }
    });
};

// add click event listener to each filter button
buttons.forEach(button => button.addEventListener("click", filterCards));



// search items 
function search() {
    let filter = document.getElementById('search-input').value.toUpperCase();

    let item = document.querySelectorAll('.card');

    let l = document.getElementsByTagName('h2');

    for(i=0;i<l.length;i++){
        let a=item[i].getElementsByTagName('h2')[0];

        let value=a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display="";
        }
        else{
            item[i].style.display="none";
        }
    }
}