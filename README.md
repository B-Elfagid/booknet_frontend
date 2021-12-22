BookNet

** Introduction **

BookNet app is created using Rails as an API for the backend and React/Redux for the front end functionality, thunk middleware has been used to handle asynchronous fetch and dispatch requests.

The app is made for readers to browse, search books, add books to the book list and leave comments for recomendation to other readers.

It also has a delete functionality to delete books and it has like button functionality that increases it's count when clicked.

For styling the app, basic CSS styling has been used.

This app is developed as a final portfolio project for Flatiron School's Online part time Software Engineering Program.

The template for the application backend was mainly created using Rails scaffolding generator which created most of the file directory when comencing the project and the templete for the front end is created using npx create-react-app.

** Usage **

fork and clone this repository and cd to the directory from the terminal -run `bundle install` to install all required gems, run `rails db:migrate`, `rails db:seed` and run `rails server -p 8080` in order to start the server to get up and running which will take you to http://localhost:8080/ in your web browser and for the front end cd in to the front end directory and run `npm install` and start the front end server with `npm start` which will take you to http://localhost:3000/ and navigate the app.


** License **

The project is available as open source under the terms of the MIT License.

** Code of Conduct **

Everyone interacting in the BookNet project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.
