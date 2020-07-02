// ********* INTERACTIVE TAGS *********
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


// Déclaration des constantes
const tags= document.getElementsByClassName("buttonTags");
const divRecette=document.getElementById("testRecettes");
const recipeList = document.getElementById("modal-body");
let tagRecettes = [];



// Fonction d'affichage des recettes

const showRecipes = (tabRecettes) => {


  return tabRecettes.map( recipe =>  { return `<div class="container">
  <a href="recipe.html"><img class="img_recette" src=${recipe.imageSrc}  alt="" ></a>
  <div class="middle">
  <div class="text"><a href="recipe.html">Détails</a></div></div>
  </div>
  <h2 class="titre_recette">${recipe.title} <a class="heart" value="${recipe.id}"><i  class=" clickable far  fa-heart"  aria-hidden></i></a><a class="heartfull"><i  class=" clickable fa fa-heart"  aria-hidden></i></a></h2>`}
  );
 




}

/*return `<div class="container">
    <a href="recipe.html"><img class="img_recette" src=${recipe.imageSrc}  alt="" ></a>
    <div class="middle">
    <div class="text"><a href="recipe.html">Détails</a></div></div>
    </div>
    <h2 class="titre_recette">${recipe.title} <a class="heart" value="${recipe.id}"><i  class=" clickable far  fa-heart"  aria-hidden></i></a><a class="heartfull"><i  class=" clickable fa fa-heart"  aria-hidden></i></a></h2>`;

};*/



// Vérification sur le tag clické 
for (let i=0; i< tags.length;i++)

{
tags[i].addEventListener("click", () => {
  tagRecettes=[];

  for (let j=0;j<recipes.length;j++)

  {
  if(recipes[j].categories.includes(tags[i].value)) { tagRecettes.push(recipes[j]); }
}


//Affichage de mes recettes
recipeList.innerHTML = showRecipes(tagRecettes);
// When the user clicks the button, open the modal 
  modal.style.display = "block";


});

}

// Creation de la MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}