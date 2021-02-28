# Team_Card_Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Technologies-Used](#technologies-used)
  * [Usage](#usage)
  * [Walkthrough](#walkthrough)
  * [Questions](#questions)
  * [Contributions](#contributions)
  * [License](#license)

  ## Description

  The motivation for building this project was the desire to use the npm inquirer package and JavaScript classes to create an application that takes user input and creates an html with a team roster based on user input. This provides the user with a clean and quick look at their team with useful information for each team member.

  Working on this project I was able to further my knowledge about the inquirer npm package and it's functionality. I was also able to increase my knowledge on JavaScript classes and how to use them to create objects based on provided information.

  ## Installation

  In order to install the required dependencies you can run 'npm i' in your terminal.

  ## Technologies-Used

  * [Bootstrap](https://getbootstrap.com/)
  * [Font Awesome](https://fontawesome.com/)
  * [Inquirer.js](https://www.npmjs.com/package/inquirer)
  * [Jest](https://jestjs.io/)
  * [Node.js](https://nodejs.org/en/)

  ## Usage

  1. After you have installed all required dependencies, use the following command in your terminal: 'node app.js'.
  1. You will then be prompted to select which team member you would like to add.
  * If you select Manager, then you will be asked for their name, id, email, and office number.
  * If you select Engineer, then you will be asked for their name, id, email, and GitHub username.
  * If you select Intern, then you will be asked for their name, id, email, and school name.
  1. When you are done inputting member information you can select 'I don't want to add any more team members.'.
  1. When you are finished with all prompts, the html file with your team will be written to the empty file in 'output/team.html'.
  1. You can create further teams by running the 'node app.js' command in your terminal.
  * Plase note that this will overwrite anything that is already in the team.html file, so make sure to save any changes into another directory if you would like to keep those changes.

  ## Walkthrough

  ![Application usage gif](media/team-generator.gif)

  ## Questions  

  If you have any questions you can reach me at martin7mondaca@gmail.com or via my GitHub [martinmondaca](https://github.com/martinmondaca)

  ## Contributions

  For any contributionns you can reach me at martin7mondaca@gmail.com or via my GitHub [martinmondaca](https://github.com/martinmondaca)

  ## License

  Licensed under [MIT](https://choosealicense.com/licenses/mit/) license.