# newsit-react

NewsIt is a site which allows the user to view news stories from around the world using the News API. There are seven categories which show the most popular 3 headlines from around the world. The categories are as follows; General, Science, Technology, Health, Business, Entertainment, Sports.

The default language setting is that of your browser, so if your browser's default is French then the news items that appear on your landing page will be in French.

## the brief

The objective was to create a news site which shows news stories from around the world. The problem with existing sites is that the news presented follow each site's views and do not allow the user to see the wider aspects of issues at hand. Similarly, different countries assign different importance to a given news item and the coverage can concentrate on different sides of the story.

### the features

NewsIt has a search component which allows the user to submit a search query of a minimum of 2 characters which will return 20 results from that query. So for example "Trump" will return news items mentioning Trump.

The "Home" button returns the user to the default home page. The "Customise" button allows the user to select settings which configure the home page according to their interests. The user can select the categories which most interest them, this then appears on the landing page.

### frameworks used

NewsIt was created using React and redux; these were the frameworks we were introduced to earlier during the course and we wanted to put them into practice.

We wanted the user to specify their preferences. We had several options for storing them: Local storage, Cookies or a Database. We opted for local storage as this means the user doesn't need to register to have the functionality.

We used Sass to style the pages. Although this is a small project Sass means that any colour changes that we wanted to implement can be carried out in a single file.   

We used Jest to test our code. We also set up a continuous integration server using Travis. This meant any pull requests needed to pass the tests before a merge was permitted.

### potential features
* <em>Ignore</em> specific subjects
* multiple language preferences
* spinner
* showing news in all the prefered languages
* word cloud
* user can choose their own colour scheme
* cartoon section

## the team
Olena: [GitHub](https://github.com/OlenaKashuba)
Eugene: [GitHub](https://github.com/yevhensydorov)
Alex: [GitHub](https://github.com/AlexJRFox)
Mathilde: [GitHub](https://github.com/mathildepind)
Ania: [GitHub](https://github.com/AniaMakes) [Twitter](https://twitter.com/AniaMakes)

## take it for a ride

#### skills you need and technologies you need to have set up on your machine
[Skill: Forking a repo and setting it up on your machine](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/)
[Skill & tech: Using direvn and .envrc](https://direnv.net/)
[Skill & tech: Using npm](https://docs.npmjs.com/)
[Skill & tech: Using node](https://nodejs.org/en/)

#### play with the code
1. Fork the repo and set it up on your local machine. If you've never done it before.
2. Set up the API. This projects uses .envrc file to store the News API key. You can [get the API key here](https://newsapi.org/). Once you have the key, you need to create a `.envrc` file in the root directory of the project. The file will need a single line `export API_KEY=yourAPIkey` and you need to replace "yourAPIkey" with the key you obtained. Don't forget to save this file!
3. Open the terminal / command line and use it to navigate to just outside the main project folder. If you're using Linux, you may be able to do this by going to there first, right clicking, and selecting Terminal. Otherwise you need to look up how to navigate using command line in your operating system. Use `cd` to move inside the project folder. You will need to run `direnv allow` to be able to use the API key stored in the .envrc file.
4. Once you're inside the project folder, run, in this order:
  * `npm install` to obtain all the modules used.
  * if you want to run unit tests, this is a good time. `npm test`
  * `npm run dev` to build the app.
  * `node index.js` to start the server - after you do this step, you should have see a message that the `app is listening on port 3000`.
5. Open your favourite browser, and go to http://localhost:3000/

#### see it live
<em>Coming soon</em>
