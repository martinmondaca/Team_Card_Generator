const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { restoreDefaultPrompts } = require("inquirer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
var employeeArr = []


innit();
function innit() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?",
                choices: ["Manager", "Engineer", "Intern", "I don't want to add any more team members."]
            },
        ])
        .then((response) => {
            if (response.memberChoice === "Manager") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "empName",
                            message: "Please input the manager's name.",
                        }, {
                            type: "input",
                            name: "empId",
                            message: "Please input the manager's id.",
                        }, {
                            type: "input",
                            name: "empEmail",
                            message: "Please input the manager's email.",
                        }, {
                            type: "input",
                            name: "empOffNum",
                            message: "Please input the manager's office number.",
                        }
                    ])
                    .then((response) => {
                        const manager = new Manager(response.empName, response.empId, response.empEmail, response.empOffNum)
                        employeeArr.push(manager)
                        innit()
                    })
            } else if (response.memberChoice === "Engineer") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "empName",
                            message: "Please input the engineer's name.",
                        }, {
                            type: "input",
                            name: "empId",
                            message: "Please input the engineer's id.",
                        }, {
                            type: "input",
                            name: "empEmail",
                            message: "Please input the engineer's email.",
                        }, {
                            type: "input",
                            name: "empGitHub",
                            message: "Please input the engineer's GitHub.",
                        }
                    ])
                    .then((response) => {
                        const engineer = new Engineer(response.empName, response.empId, response.empEmail, response.empGitHub)
                        employeeArr.push(engineer)
                        innit()
                    })
            } else if (response.memberChoice === "Intern") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "empName",
                            message: "Please input the intern's name.",
                        }, {
                            type: "input",
                            name: "empId",
                            message: "Please input the intern's id.",
                        }, {
                            type: "input",
                            name: "empEmail",
                            message: "Please input the intern's email.",
                        }, {
                            type: "input",
                            name: "empSchool",
                            message: "Please input the intern's school.",
                        }
                    ])
                    .then((response) => {
                        const intern = new Intern(response.empName, response.empId, response.empEmail, response.empSchool)
                        employeeArr.push(intern)
                        innit()
                    })
            } else {
                console.log(employeeArr)
                writeToFile(outputPath, employeeArr)
            }
        })
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, render(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
};
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
