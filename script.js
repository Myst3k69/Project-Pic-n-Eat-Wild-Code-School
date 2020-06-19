const recipes = [
    {
        imageSrc: "images/avocados.jpg",
        title: "Avocat farci à la feta",
        categories: ["ENTREE"]
    },
    {
        imageSrc: "images/energy-balls-aux-amandes.jpg",
        title: "Energy balls",
        categories: ["ENTREE","HEALTHY"]
    },
    {
        imageSrc: "images/entree.png",
        title: "Entrée feuilleté au saumon",
        categories: ["HEALTHY"]
    },
    {
        imageSrc: "images/hummus2.jpg",
        title: "Houmous",
        categories: ["ENTREE"]
        
    },
    {
        imageSrc: "images/salade-de-fruits-aux-épices.png",
        title: "Salade de fruits",
        categories: ["ENTREE","VEGAN"]
    },
    {
        imageSrc: "images/sandwich.jpg",
        title: "Sandwich au fromage grillé",
        categories: ["PLAT"]
    },
    {
        imageSrc: "images/smoothier2.webp",
        title: "Smoothies de fruits variés",
        categories: ["SMOOTHY"]
    },
    {
        imageSrc: "images/tartine5.jpg",
        title: "Tartine fraîcheur",
        categories: ["PLAT"]
    },
    {
        imageSrc: "images/wrap2.jpg",
        title: "Wrap au poulet",
        categories: ["PLAT"]
    }
  
];


const recipeList = document.getElementById("recipeList");

// Fonction permettant l'affichage des recettes sur la homepage
const showRecipes = (recipes) => {

    return recipes.map((recipe)=>{return `<div class="recette">
    <img src=${recipe.imageSrc}  alt="" >
    <h2 class="titre_recette">${recipe.title}</h2></a>
</div>`}).join("");
    }



    

recipeList.innerHTML = showRecipes(recipes);
let filters = [];
let tmpRecipes =[];
let removeRecipes=[];
let tmpRecipes2=[];
let difference=[];


// Récupération des noms des catégories qui sont actives
const checkboxes = document.getElementsByTagName("input");
for (let checkbox of checkboxes)

{
    checkbox.addEventListener('change', (e) =>
    
    
    {       
        if(e.target.checked)
        
            {
                
            filters.push(e.target.value);

            //Affichage des recettes [Filtres activés]

                for ( recipe of recipes)
                {

                        
                    for (filter of filters)

                    {
                        
                    
                if(filter==recipe.categories)
                
                    {   
                        tmpRecipes.push(recipe);
                        console.log("Recette à afficher :"+tmpRecipes.title);
                        
                    }




                    }

                }
                
                tmpRecipes=tmpRecipes.filter((item,index) => tmpRecipes.indexOf(item)===index);
                recipeList.innerHTML = showRecipes(tmpRecipes);

                
               
                

            } 
           
            
        
        else {
            
            filters = filters.filter((filter) => filter !== e.target.value);
            
           
                console.log("Je viens de décocher un filtre :"+e.target.value);

                
            //Désaffichage des recettes [Filtres dessactivés]

            for ( recipe of tmpRecipes)
            {
                

                    console.log("Title : "+ recipe.title+ " Categorie : " + recipe.categories+ "Longueur du tableau" + tmpRecipes.length);
                  
                   
            
                    
                
            if(e.target.value !==recipe.categories)

                {   
                   
                     removeRecipes.push(recipe);
                     console.log("Nb elements à retirer : "+removeRecipes.length);
                     for (recipe of removeRecipes)
                     {console.log("Recettes à retirer :"+recipe.title);}
                   
                }


                 difference = tmpRecipes.filter(x => !removeRecipes.includes(x));
                
                

            }
            
            recipeList.innerHTML= showRecipes(difference);

           tmpRecipes2=[];



            }
        
    


        
    });
}




// const tmpRecipes = recipes
     //   showRecipes(tmpRecipes)
      //  recipeList.innerHTML = showRecipes(tmpRecipes);
      //  showRecipes(recipes)



/*
  //Affichage des recettes filtres
  for (let i=0;i<filters.length;i++)
  {  
      
      console.log("Valeur de i : "+i);
      for (let j=0;j<recipes.length;j++)
      
      {
          console.log("Valeur de j : "+j);
          console.log("valeur de filtre : "+filters[i]);
          console.log("valeur de recipe : "+recipes[j].categories);
         
        
          if (recipes[j].categories == filters[i]) 
    
          {
              console.log(recipes[0]);
              recipeList.innerHTML = `<div class="recette">
              <img src=${recipes[j].imageSrc}  alt="" >
              <h2 class="titre_recette">${recipes[j].title}</h2>
          </div>`+recipeList.innerHTML

          }
          

      }
       foreach
              
            recipeList.innerHTML = showRecipes(tmpRecipes);
      

  }

  // Fonction permettant d'enlever des recettes sur la homepage
const hideRecipes = (trecipes,recipes) => {

    console.log("Je suis dans la fonction hideRecipes et je vais afficher"+ tmprecipes3.length + " recettes");
    showRecipes(trecipes);
    console.log("Je suis dans la fonction hideRecipes et je vais enlever"+ recipes.length + " recettes");


    return recipes.map((recipe)=>{return (""); }).join("")
    
}

  */


  /*

  else {
            filters = filters.filter((filter) => filter !== e.target.value);
            
           
                console.log("Je viens de décocher un filtre :"+e.target.value);

                
            //Désaffichage des recettes [Filtres dessactivés]

            for ( recipe of recipes)
            {
                
                    console.log(recipe.categories);
                  
                    
            
                    
                
            if(filter==recipe.categories)

                {   
                   
                     removeRecipes.push(recipe);
                     console.log("Nb elements à retirer : "+removeRecipes.length);
                     for (recipe of removeRecipes)
                     {console.log("Recettes à retirer :"+recipe.title);}
                   
                }


                 difference = tmpRecipes.filter(x => !removeRecipes.includes(x));

                

            }
            
            recipeList.innerHTML= showRecipes(difference);

           tmpRecipes2=[];



            }
        */