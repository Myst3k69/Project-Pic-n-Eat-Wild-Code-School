const recipes = [
    {
        imageSrc: "images/avocados.jpg",
        title: "Avocat farci à la feta",
        categories: ["ENTREE"]
    },
    {
        imageSrc: "images/energy-balls-aux-amandes.jpg",
        title: "Energy balls",
        categories: ["ENTREE"]
    },
    {
        imageSrc: "images/feuille_saumon2.png",
        title: "Entrée feuilleté au saumon",
        categories: ["HEALTHY"]
    },
    {
        imageSrc: "images/hummus2.jpg",
        title: "Houmous",
        categories: ["ENTREE","HEALTHY"]
        
    },
    {
        imageSrc: "images/salade-de-fruits-aux-épices.png",
        title: "Salade de fruits",
        categories: ["ENTREE","VEGAN"]
    },
    {
        imageSrc: "images/sandwich.jpg",
        title: "Sandwich au fromage grillé",
        categories: ["PLAT","SANDWICH"]
    },
    {
        imageSrc: "images/smoothier2.webp",
        title: "Smoothies de fruits variés",
        categories: ["SMOOTHY","HEALTHY"]
    },
    {
        imageSrc: "images/tartine5.jpg",
        title: "Tartine fraîcheur",
        categories: ["PLAT","TARTINE"]
    },
    {
        imageSrc: "images/wrap2.jpg",
        title: "Wrap au poulet",
        categories: ["PLAT","SANDWICH","CARNIVORE"]
    },
];

const recipeList = document.getElementById("recipeList");

// Fonction permettant l'affichage des recettes sur la homepage
const showRecipes = (recipes) => {

    return recipes.map((recipe)=>{return `<div class="recette">
    <img class="img_recette" src=${recipe.imageSrc}  alt="" >
    <h2 class="titre_recette">${recipe.title}</h2></a>
</div>`}).join("");
    }

    recipeList.innerHTML = showRecipes(recipes);
let filters = [];
//let tmpRecipes =[];



// Récupération des noms des catégories qui sont actives
const checkboxes = document.getElementsByTagName("input");

for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', (e) =>
    {       
        if(e.target.checked) {
            filters.push(e.target.value);        
        } 
        else {
            filters = filters.filter((filter) => filter !== e.target.value);       
        }

        const tmpRecipes = filters.length > 0 ? filterRecipes(recipes) : recipes;
        recipeList.innerHTML = showRecipes(tmpRecipes);
    });
}

function filterRecipes(arr){
    let tmp = [];
    for(recipe of arr){
        //console.log("recipe current", recipe);
        let hasfound = false;
        for(category of recipe.categories){
            console.log("categories", category);
            console.log("filters", filters);
            if(filters.indexOf(category) > -1){
                if(!hasfound){
                    tmp.push(recipe);
                    hasfound = true;
                }
            }
        }
    }
    console.log(tmp);
    return tmp;
}




