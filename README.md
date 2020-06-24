# _RPG_

#### _Program to test business logic for an RPG, 6/23/2020_

#### By _Michael Petersen & Micheal Hansen_


## Description

_This program is designed as a testing grounds for business logic that would be included in an RPG, focusing primarily on TDD and creating working logic to inform game constructs._

## Setup/Installation Requirements


Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/MPetersen89/RPG`
2. Navigate into the `RPG` directory in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser:
`open index.html`

Current GH-Pages Build:
* N/A_

## Known Bugs

_No known bugs_

## Specs 

| Behavior    | Input | Output |
| :---------- | ----- | -----: |
| Program can create a character object for the player | User clicks New Game | Character Object Created |
| Character object holds health, strength, intelligence, and dexterity stats | None necessary | Character = {health = null; strength = null; intelligence = null; dexterity = null;} |
| Program lets user select a class | None necessary | User can input "Warrior", "Wizard", "Thief" |
| Program defines the class select | User selects "Warrior" | Character  =  {class = "Warrior"; health = null; strength = null; intelligence = null; dexterity = null;}|
| Program assigns stats based on the class selected | None necessary | Character  =  {class = "Warrior"; health = 20; strength = 20; intelligence = 5; dexterity = 10;} |
| Program assigns abilities based on the class selected | None necessary | Character  =  {class = "Warrior"; health = 20; strength = 20; intelligence = 5; dexterity = 10; powerSmash(); doubleStrike()} |


## Support and contact details

* Michael Petersen <michael_petersen_email@yahoo.com>
* Micheal Hansen <micheal.hansen@gmail.com>

## Technologies Used

* HTML
* CSS
* Git
* javascript
* jquery
* bootstrap

### License

Copyright (c) 2020 **_Michael Petersen & Micheal Hansen_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.