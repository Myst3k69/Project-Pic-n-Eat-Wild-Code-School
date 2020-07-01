const recipes = [
    {
        id:0,
        imageSrc: "images/avocados.jpg",
        title: "Avocat farci à la feta",
        categories: ["ENTREE"],
        fav: false
    },
    {
        id:1,
        imageSrc: "images/energy-balls-aux-amandes.jpg",
        title: "Energy balls",
        categories: ["ENTREE"],
        fav: false
    },
    {
        id:2,
        imageSrc: "images/entree.png",
        title: "Entrée feuilleté au saumon",
        categories: ["HEALTHY"],
        fav: false
    },
    {
        id:3,
        imageSrc: "images/hummus2.jpg",
        title: "Houmous",
        categories: ["ENTREE","HEALTHY"],
        fav: false
        
    },
    {
        id:4,
        imageSrc: "images/salade-de-fruits-aux-épices.png",
        title: "Salade de fruits",
        categories: ["DESSERT","VEGAN"],
        fav: false
    },
    {
        id:5,
        imageSrc: "images/sandwich.jpg",
        title: "Sandwich au fromage grillé",
        categories: ["PLAT","SANDWICH"],
        fav: false
    },
    {
        id:6,
        imageSrc: "images/smoothier2.webp",
        title: "Smoothies de fruits variés",
        categories: ["SMOOTHY","HEALTHY"] ,
        fav: false
    },
    {
        id:7,
        imageSrc: "images/tartine5.jpg",
        title: "Tartine fraîcheur",
        categories: ["PLAT","TARTINE"],
        fav: false
    },
    {
        id:8,
        imageSrc: "images/wrap2.jpg",
        title: "Wrap au poulet",
        categories: ["PLAT","SANDWICH","CARNIVORE"],
        fav: false
    },
];



const likedRecette= document.getElementsByClassName("heart");
const recette= document.getElementsByClassName("recette");
const favList= document.getElementById("myFavs");
const favHeart =document.getElementsByClassName("heartfav");
const recipeList = document.getElementById("recipeList");
const liked=document.getElementsByClassName("heartfull");


const favRecipes = [];


console.log("FAVORI :" +recipes[1].fav);

// Fonction permettant l'affichage des favoris sur la homepage
const showFavRecipes = (recipes) => {

    return recipes.map((recipe)=>{ 
        
        
        return `<div class="recette">
    <div class="container">
    <a href="recipe.html"><img class="img_recette" src=${recipe.imageSrc}  alt="" ></a>
    <div class="middle">
    <div class="text"><a href="recipe.html">Détails</a></div></div>
    </div>
    <h2 class="titre_recette">${recipe.title} <a class="heartfav" value="${recipe.id}"><i  class=" clickable fa fa-heart"  aria-hidden></i></a></h2>
    
</div>`}).join("");
    }


    //*** 
const showFiltRecipes = (recipes) => {

    return recipes.map((recipe)=>{ 
        
        
        return `<div class="recette">
    <div class="container">
    <a href="recipe.html"><img class="img_recette" src=${recipe.imageSrc}  alt="" ></a>
    <div class="middle">
    <div class="text"><a href="recipe.html">Détails</a></div></div>
    </div>
    <h2 class="titre_recette">${recipe.title} <a class="heartfav" value="${recipe.id}"><i  class=" clickable far fa-heart"  aria-hidden></i></a></h2>
    
</div>`}).join("");
    }





// Fonction permettant l'affichage des recettes sur la homepage
const showRecipes = (recipes) => {

    return recipes.map((recipe)=>{return `<div class="recette">
    <div class="container">
    <a href="recipe.html"><img class="img_recette" src=${recipe.imageSrc}  alt="" ></a>
    <div class="middle">
    <div class="text"><a href="recipe.html">Détails</a></div></div>
    </div>
    <h2 class="titre_recette">${recipe.title} <a class="heart" value="${recipe.id}"><i  class=" clickable far  fa-heart"  aria-hidden></i></a><a class="heartfull"><i  class=" clickable fa fa-heart"  aria-hidden></i></a></h2>
    
</div>`}).join("");
    }




    
    recipeList.innerHTML = showRecipes(recipes);
    
let filters = [];



// Unlike a recipe 


const unlike = () => {
    
    
    for (let i=0;i< favHeart.length;i++)

    {
    
    
    favHeart[i].addEventListener("click", (e) =>
    
    
    {
    
    
    
    recipes[i].fav=false;
    recette[i].style.display='none';
    
    
})}

}




// Récupération des noms des catégories qui sont actives
const checkboxes = document.getElementsByTagName("input");

for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', (e) =>
    {       
        
        if((e.target.checked) ) {
            
            
            filters.push(e.target.value);        
        } 
        else {
            filters = filters.filter((filter) => filter !== e.target.value);       
        }

        const tmpRecipes = filters.length > 0 ? filterRecipes(recipes) : recipes;
        
        recipeList.innerHTML = showFiltRecipes(tmpRecipes);
    });
}


// Filtering recipes

function filterRecipes(arr){
    let tmp = [];


    for(recipe of arr){

         
        //console.log("recipe current", recipe);
        let hasfound = false;
        for(category of recipe.categories){
            console.log("categories", category);
            console.log("filters", filters);
            if(filters.indexOf(category) > -1){
                if((!hasfound)  ){
                    tmp.push(recipe);
                    hasfound = true;
                }
            }
        }
    
    }
    console.log(tmp);
    return tmp;
}






// Like on homepage

const likeRecipe = () => {
for (let i=0;i< likedRecette.length;i++)

{
    liked[i].style.display='none';
    
likedRecette[i].addEventListener("click", (e) => {
    
    
    let value =likedRecette[i].getAttribute("value");
    favRecipes.push( recipes[value]);
    recipes[i].fav=true;
    likedRecette[i].style.display='none';
    liked[i].style.display='initial';
   // savefavRecipes();
    
    
    // Unlike on homepage
    for (let i=0;i< liked.length;i++)

{
    
    
liked[i].addEventListener("click", (e) => {
    
    
    liked[i].style.display='none';
    likedRecette[i].style.display='initial';
   console.log("je souhaite unliker sur la homepage");
   favRecipes.splice(i,1);
    
    
    
        

})}
        

})}
}

likeRecipe();


// Get the button that opens the favorites
let openModal = document.getElementById("myBtn");




// When the user clicks the button, open the favorite recipes
openModal.onclick = function() {
  //modal.style.display = "block";



  
  recipeList.innerHTML=showFavRecipes(favRecipes);

    unlike();
}





/*
const savefavRecipes = () => {

   let curentId=[];

for (let i=0;i<favRecipes.length;i++)

{
    

    localStorage.setItem( favRecipes[i].id,favRecipes[i].id);
     currentId = localStorage.getItem();   
     console.log("Valeur enregistrée : "+currentId);
}



}*/

