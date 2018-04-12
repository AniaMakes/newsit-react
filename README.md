# NewsIt

NewsIt is a site which allows the user to view news stories from around the world using the [News API](https://newsapi.org/). There are seven categories which show the most popular 3 headlines from around the world. The categories are as follows; General, Science, Technology, Health, Business, Entertainment, Sports.

The default language setting is that of your browser, so if your browser's default is French then the news items that appear on your landing page will be in French.

## The brief

The objective was to create a news site which shows news stories from around the world. The problem with existing sites is that the news presented follow each site's views and do not allow the user to see the wider aspects of issues at hand. Similarly, different countries assign different importance to a given news item and the coverage can concentrate on different sides of the story.

### The features

NewsIt has a search component which allows the user to submit a search query of a minimum of 2 characters which will return 20 results from that query. So for example "Trump" will return news items mentioning Trump.

The "Home" button returns the user to the default home page. The "Customise" button allows the user to select settings which configure the home page according to their interests. The user can select the categories which most interest them, this then appears on the landing page.

### Frameworks used

NewsIt was created using React and Redux; these were the frameworks we were introduced to earlier during the course and we wanted to put them into practice.

We wanted the user to specify their preferences. We had several options for storing them: Local storage, Cookies or a Database. We opted for local storage as this means the user doesn't need to register to have the functionality.

We used Sass to style the pages. Although this is a small project Sass means that any colour changes that we wanted to implement can be carried out in a single file.   

We used Jest to test our code. We also set up a continuous integration server using Travis. This meant any pull requests needed to pass the tests before a merge was permitted.

### Potential features
* <em>Ignore</em> specific subjects
* multiple language preferences
* spinner
* showing news in all the prefered languages
* word cloud
* user can choose their own colour scheme
* cartoon section

## The team
* Olena: [GitHub](https://github.com/OlenaKashuba)
* Eugene: [GitHub](https://github.com/yevhensydorov)
* Alex: [GitHub](https://github.com/AlexJRFox)
* Mathilde: [GitHub](https://github.com/mathildepind)
* Ania: [GitHub](https://github.com/AniaMakes) [Twitter](https://twitter.com/AniaMakes)

## Try it out!

### See it live
This project is deployed on heroku for free. This means that the connection isn't always awake; it will take longer to load than a page that is permanently awake. We appreciate your patience.

Furthermore, the News API has a limited number of requests allowed per day, so in rare cases you may see errors. Please be patient and visit the following day.
If you would like to use NewsIt as your primary source of news, we would appreciate if you could deploy your own copy on heroku to avoid exhausting the API key.

[Visit NewsIt](https://cl-newsit.herokuapp.com/)

### Play with the code

#### Skills you need and technologies you need to have set up on your machine
* [Skill: Forking a repo and setting it up on your machine](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/)
* [Skill & tech: Using direvn and .envrc](https://direnv.net/)
* [Skill & tech: Using npm](https://docs.npmjs.com/)
* [Skill & tech: Using node](https://nodejs.org/en/)

#### Set up
* Fork the repo and set it up on your local machine.
* Set up the API. This projects uses .envrc file to store the News API key. You can [get the API key here](https://newsapi.org/). Once you have the key, you need to create a `.envrc` file in the root directory of the project. The file will need a single line `export API_KEY=yourAPIkey` and you need to replace "yourAPIkey" with the key you obtained. Don't forget to save this file!
* Open the terminal / command line and use it to navigate to just outside the main project folder. If you're using Linux, you may be able to do this by going to there first, right clicking, and selecting Terminal. Otherwise you need to look up how to navigate using command line in your operating system. Use `cd` to move inside the project folder. You will need to run `direnv allow` to be able to use the API key stored in the .envrc file.

#### Deployment
* Once you're inside the project folder, run, in this order:
  * `npm install` to obtain all the modules used.
  * `npm run dev` to build the app.
  * `node index.js` to start the server - after you do this step, you should have see a message that the `app is listening on port 3000`.
* Open your favourite browser, and go to http://localhost:3000/

#### Testing
`npm test` will run the test suite.
