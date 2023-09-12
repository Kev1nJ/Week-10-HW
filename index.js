const { Shape, Triangle, Circle, Square } = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

class Svg{
  constructor(){
      this.textElement = ''
      this.shapeElement = ''
  }
  render(){

      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
  }
  setTextElement(text,color){
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  setShapeElement(shape){
      this.shapeElement = shape.render()

  }
  
}


const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: (input) => input.length < 3,
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hex)',
  },
  {type: 'list',
  name: 'shape',
message: 'Choose a shape',
choices: ['Triangle', 'Circle', 'Square'],
},
{
  type: 'input',
  name: 'shapeColor',
  message: 'Enter shape color (keyword or hex):',
},
];

inquirer.prompt(questions).then((answers) => {
  const {text,textColor,shape, shapeColor} = answers;
  const shapeObj = new Shape();
  let svgElement = '';
