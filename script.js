const buttons = document.querySelectorAll(".buttons button");
const carItem = document.querySelectorAll(".car-container .card");



const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    
    const filter = e.target.dataset.name;

    
    carItem.forEach((card) => {
        
        card.classList.add("hide");

        
        if(card.dataset.name === filter || filter === "all"){
            card.classList.remove("hide");

        }
    });
};


buttons.forEach(button => button.addEventListener("click", filterCards));




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