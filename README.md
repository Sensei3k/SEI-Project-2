# SEI Project Two, Hackathon - Front-End React Application

## Timeframe
2 days

## Technologies Used
* React
* Webpack
* JavaScript (ES6)
* HTML5
* CSS
* Bulma
* GitHub

## Installation
1. Clone or download the repository.
2. Run `npm run serve` within the repository folder in the terminal.

## Project Scope
For our second project, we were put into groups of two and given a timeframe of two days to complete a front-end application using React. We were to pick a theme, and implement a relevant API to populate our application with data. We were also required to use Webpack, as our module builder, for bundling and deployment purposes.

## Project Overview
We decided to create an application that displays up-to-date data for five professional football leagues in Europe. By implementing the 'football-data.org' API, we were able to display stats for the clubs in each league, the standings in each league, and the roster of each club.

#### Website Navigation
![Football Data Centre](https://i.imgur.com/yBPlFF7.gif)

#### Key Takeaways
The main purpose of this project was to develop an introductory understanding of the React framework, as well as how to make AJAX requests to APIs and utilize the response. A big takeaway from this exercise was related to how data exists in React. We learned that in a React component, there are two main types of data: 'state' and 'props'. 'State' is data specific to that component, directly initialized within that component. 'Props' is data passed to a component by another component, usually a parent or sibling component.

#### React Lifecycle
The React lifecycle methods were another crucial topic we gained experience with. The basic setup of each React component starts with defining a class that is an extension of 'React.component'. This is followed by creating the `constructor()` function, calling the `super()` function inside to pull down all relevant properties from the base class constructor function. The state of the component is also defined within the constructor function. Next, the `render()` function, which is the only mandatory method for a React component, is defined. The `render()` function is responsible for rendering the content of the component to the user interface. The `render()` function runs during the mounting and updating of a component. When a component loads, the `componentDidMount()` function runs once and the component then re-renders. Anytime the state of the component is updated, the `componentDidUpdate()` function runs, and the component then re-renders.

#### React Lifecycle Diagram
![React Lifecycle](https://i.imgur.com/mVMz8AH.png)

#### AJAX Requests
Another important topic we learned about during this project was AJAX requests. In the context of our project, an AJAX 'GET' request was made to the football-data.org API in order to obtain a response, which we could manipulate and apply to our webpage. An ideal location to make an AJAX request, if the page is not expected to be updated by the user, is within the `componentDidMount()` function. We made our 'GET' requests using the `fetch()` method, providing the API URL and an object containing the type of request and the authorization header as parameters. The `fetch()` call returns a promise, in the form of a response object, which is then converted into JSON, before the data of interest is stored in state. To change state within a component (besides manually changing it in the `constructor()` function), one must use the `.setState()` method. Also, if an error occurs when making an AJAX request, the `.catch()` method catches the error and allows the developer to display it for development purposes, and in some cases, display this error to the user, ie. invalid password, etc.

#### Example GET Request from our Competitions Component.
![Example GET Request](https://i.imgur.com/GlkMiiy.png)

#### Styling
The styling for this application is made up of a combination of the Bulma framework, CSS, and the Animate.css library. Bulma is a framework for CSS, which is very useful for creating general page layouts, however, it is difficult to use this to apply specific styles to HTML elements. Therefore, we added classes and used these to overwrite some of the default Bulma styling in our `style.css` file. We then found an open-source CSS animation library online, and implemented some animations to bring our pages to life.

## Process Breakdown
The process of creating this application can be broken down into a series of stages as follows:
#### Research Stage:
1. Brainstorming ideas for the application.
2. Researching open-source APIs relevant to our idea.
3. Requesting an access token for these APIs.
4. Testing AJAX requests to the APIs with Insomnia, to ensure sufficient data in the response.

#### Preliminary Design/Configuration Stages:
1. Drawing wireframes for each of the webpages.
2. Drawing a flowchart for the user experience.
3. Pseudocoding the functionality for each of the components.
4. Configure the module builder, Webpack, ie. installing dependencies, adding `app.js` and `index.html` etc.

#### Development & Testing Stages:
1. Setup a backbone `index.html` template, in which to render the components.
2. Build a router in the `app.js` file, containing the paths to each React component.
3. Develop and test each component.
4. Style the application.

#### Deployment & Presentation Stages:
1. Deploy the application to GitHub Pages.
2. Present our application to the class.

## Challenges
The biggest challenge of this project that we faced was related to time management. Given only two days to create our first React application, it was difficult to plan exactly how much content and functionality we had time to achieve. We decided rather than working separately and then merging our work into one app, we would pair code through the whole project. This way, we could ensure we agreed before adding new features and we could brainstorm about different approaches to solving problems.

## Future Add-ons
One extra feature we would have liked to add to this project is a search bar where the user can search for a specific football player. The search bar would have a dropdown of suggestions that the user could choose from. The user would then click on the player of interest and be redirected to a new page displaying that player's stats. Due to timing constraints, we did not get the opportunity to add these features.
