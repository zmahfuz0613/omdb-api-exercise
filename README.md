## OMDB Api

### Introduction

In this exercise you will fetch movie data from the [OMDB Api](http://www.omdbapi.com/) and render it in the browser.

First, head over to the OMDB website and sign up for your own API key (free option is perfectly fine). Next, check out the documentation under the "Usage" tab. Here you will find instructions on how to structure your endpoint for your axios calls. You can also find different parameters to use and what they are for. Remember, every API is different so you will need to read into what works for this API.

### Starter Code

If you look at the files we've given you, you will find some basic HTML to get you started. In the Javascript file, we've set you up a base url for your endpoint. All you need to do is plug in your API key and add your parameter to the end.

### Requirements

The (final) version of the app should include the following functionality:

- Upon page load, display a list of movies; at least the title and poster should be rendered
- A user should be able to click on either the poster for each movie or a button near the title that triggers a second API call to fetch details for that movie which is then displayed at the top of the page (refer back to our event handler lesson if you need help with this). Include at least the Director and Actors for the movie in the detail section
- If a user clicks on a second movie's button/poster, replace the details at the top with the second movie's information

### ** Bonus **

Once the above is complete, try adding an input field and button that when filled in and submitted replaces the original movie list with a new list matching the search term from the input.

<img src="https://media0.giphy.com/media/oe1kFNiUhLcSA/giphy.gif" width="700px">
