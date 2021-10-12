# Tmdb-Movie-App

**Application Description**

The database of movies and tv shows is so overwhelmingly enormous with new ones being added in every passing day. Even an enthusiastic movie buff would find himself or herself lost trying to keep track which movie or tv show is streaming on which platform and to seek information about movie cast, movie overview or plot, its rating, etc.<br> 
Hence we felt motivated to create an online database which would include information and statistics about both movies and tv shows as well as about actors, directors and other film industry professionals. This information can include lists of cast and crew members, movie release dates, box office performance, movie plot, trailers, biographies of actors and directors and other trivia related to the movie.<br> 
Because of the time constraint, for now we have only managed to include the display feature of movies and tv shows posters, their titles, their ratings and a short overview about them along with the available trailers. In near future, we plan to add some more features to the database like information about streaming platform of each movie and its link, providing information about its cast and their filmography and relevant links, mentioning the current movie shows running in local theatre etc.

**User Story**<br>
As a person who always turn towards movies or tv-shows as a source of entertainment,<br>
I WANT  : to have a single platform which provides the movies and tv-shows list<br>
So THAT : I am able to decide which movie or show to watch based on its overview, rating and 
          available trailer. I should be able to search the movie with kea-word and genre.


**Acceptance Criteria**


**(1)* I am presented with a landing page where I can see list of some movies based on popularity and I am given option to either search for movies or tv-shows**
------
It's considered done<br>
------
WHEN: an html page is created with a navbar displaying some movies poster absed on polularity.<br>
WHEN: two different divs are created inside the main element having individual ink to search for movie 
      and tv-shows.<br>
WHEN: I click on either link, I am directed to its connecting page to display either movies or tv-shows 
      list.

**(2)* When I am on movie list page or tv-shows page, I am presented with an option to search for any movie with a kea-word**
------
It's considered done<br>
------
WHEN : a "header" is created in html.<br>
WHEN : an "input" element is created inside a "form" tag in html.<br>
WHEN: style attributes are added to the form element using css.

**(3)* I am presented with a list of movies poster based on popularity,their ratings,and an overview of the movie**
------
It's considered done<br>
------
WHEN: multiple divs with "class=movie" are created in html with image tag inside the div which carry 
      image source of the movie poater<br>
WHEN: divs are created inside "class=movie" div which has h3 tag to display movie title, and a span to 
      display movie rating.<br> 
WHEN: another div is created inside "class=movie" div to display the overview of each movie.<br>
WHEN: below given url is imported inside css file to use google font<br>
      @import url(https://fonts.googleapis.com/css?family=Poppins:wght@200;400;700&display=swap)<br>
WHEN: all the style atrributes for search box, movie title, movie rating and overview are added to
      css.<br>
WHEN: an url is created to fetch the movie data from a website using an API and key.<br>
WHEN: a function called "getMovies" is written to get the response from the api in the form of array.<br>
WHEN: fetch(url) method is used  with .then inside the getMovies function.<br>
WHEN: a function called "showMovies(results)" is written.<br>
WHEN: for-loop is used inside the showMovies(results) to loop through the results ontained through 
      getMovies function so that we can display movie details for each one of them.<br>
WHEN: a div is created dynamically using DOM manipulation inside the for-loop so that it is created for 
      each result.<br>
WHEN: a classlist is added for each div.<br>
WHEN: an movie image, its rating, its overview, title are added as an innerhtml to the dynamically 
      created divs by using data from the api fetch results.<br>
WHEN: "main" element is grabbed through a variable and the dynamically created divs are appended as 
       child to the main div inside the for-loop.<br>
WHEN: a function called getColor(vote) is written which will set different color to the span as per the 
      rating.<br>

**(4)* When I click on the search bar, I am able to search for any movie with a kea-word**
------
It's considered done<br>
------
WHEN: an eventListener is add on the submit button.<br>
WHEN: an url is used to search the movie by using api inside eventListener.<br>
WHEN: "search.value" is added tot he url.<br>
WHEN: this url is passed as a parameter in the "getMovies" function inside eventListener.<br>

**(4)* The page prvides me option to search movies based on genre**
------
It's considered done<br>
------
WHEN: an url is created based on genre criteria, base url and api key.<br>
WHEN: this url is used to fetch the data from the browser which is in the form of array.<br>
WHEN: the results of array is stored in a variable.<br>
WHEN: in html, a div with an id of tags is created.<br>
WHEN: multiple divs are created inside the above created div to display various genre name.<br>
WHEN: all the divs are given style attributes in css file.<br>
WHEN: a function called setGenre() is written.<br>
WHEN: div with id tags is grabbed and stored in a variable.<br>
WHEN: this tags div innerHtml is set to empty string so that it disapper fron the page and we can create 
      div dynamically.<br>
WHEN: for loop is used for every id in the array to dynamically generate divs based on id in the array.
      <br>
WHEN: a classList is added to each divs created dynamically.<br>
WHEN: an eventListener is added on these dynamically created divs inside the for-loop.<br>
WHEN: above created url is passed as a parameter inside the "getMovies" function inside the for-loop.<br>
WHEN: a function called "highlightSelectedGenre" is written which will highlight the selected genre from 
      the list.<br>
WHEN: for-loop is used inside the "highlightSelectedGenre" function for each element in the array.<br>
WHEN: a classList of 'highlight' is added to every selected genre.<br>
WHEN: in the style sheet we define the style attribute to the class 'highlight'.<br>
WHEN: a function called clearButton() is written to clear the selected genre.<br>
WHEN: an eventListener is added to the clear button inside the clearButton() function.<br>
WHEN: a background color is given to clear button in style sheet.<br> 


