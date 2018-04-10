# newsit-react

NewsIt is a site which allows the user to view news stories from around the world using the News API. There are seven categories which show the most popular 3 headlines from around the world. The categories are as follows; General, Science, Technology, Health, Business, Entertainment, Sports.

The default language setting is that of your browser, so if your browser's default is French then the news items that appear on your landing page will be in French.


## the brief

The objective was to create a news site which shows news stories from around the world. The problem with existing sites is that the news presented follow each site's views and do not allow the user to see the wider aspects of issues at hand. Similarly, different countries assign different importance to a given news item and the coverage can concentrate on different sides of the story.

### the features

NewsIt has a search component which allows the user to submit a search query of a minimum of 2 characters which will return 20 results from that query. So for example "Trump" will return news items mentioning Trump.

The "Home" button returns the user to the default home page. The "Customise" button allows the user to select settings which configure the home page according to their interests. The user can select the categories which most interest them, this then appears on the landing page.

#### frameworks used

NewsIt was created using React and redux; these were the frameworks we were introduced to earlier during the course and we wanted to put them into practice.

We wanted the user to specify their preferences. We had several options for storing them: Local storage, Cookies or a Database. We opted for local storage as this means the user doesn't need to register to have the functionality.

We used Sass to style the pages. Although this is a small project Sass means that any colour changes that we wanted to implement can be carried out in a single file.   

We used Jest to test our code. We also set up a continuous integration server using Travis. This meant any pull requests needed to pass the tests before a merge was permitted.
