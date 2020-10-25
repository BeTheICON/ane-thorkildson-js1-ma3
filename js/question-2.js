/*
Question 2
Make a call to the following API endpoint:
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

Loop through the results and display the following properties in HTML, 
but only for the first eight results:

    name
    rating
    number of tags (not the tag details, just the amount of tags)

The styling for this assignment is not important but loading indicator should
 be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.
*/


const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");


async function getGamesList() {
    try {
    const response = await fetch(apiUrl);
    const gamesList = await response.json();
    const results = gamesList.results;
    resultsContainer.innerHTML = "";


    for (let i = 0; i < results.length; i++){   

        console.log(results[i].name);
        console.log(results[i].rating);
        console.log(results[i].tags.length);

        if(i === 8) {
            break;
        }
    
    resultsContainer.innerHTML += `<div class="result"> <p class="name">Name: ${results[i].name}</p> <p class="rating">Rating: ${results[i].rating}</p> <p class="tags">Number of tags: ${results[i].tags.length}</p></div>`;
    }
    }catch(error) {
        console.log("error occured");
        resultsContainer.innerHTML = errorMessage();
    } /* finally {
        console.log("finally");
    } */
}




getGamesList();
