## Testing

### Research
***

**1. Whats available? 
2. How does it work? 
3. What can be expected?**
The three questions I needed answers to in order to start my project. I never used or worked with range selectors, color pickers, or toggle switches, so I need to experiment to at least have some understanding. 
My initial strategy was to research, and use Codepen to implement working features, to see how they work. I wanted to learn this before writing any code. There are several pens where you can see what I was playing with and you will understand what I have put into the site. 
- [Toggle Switch disables fieldset of form inputs](https://codepen.io/daidensacha/pen/yLgzojL) An experiment in styling a toggle switch and using it to disable the fieldset of form elements.
- [Toggle Switch disabling form fieldset,](https://codepen.io/daidensacha/pen/OJWxmvP) In this example, I was outputting the boolean of the toggle switch and fieldset disabled state. 
- [Comparing a toggle switch and checkbox.](https://codepen.io/daidensacha/pen/RwKKWbJ) I was also comparing the use of JavaScript vs. jQuery for disabling the inputs. 
- [Toggle switch, range selectors, and color picker](https://codepen.io/daidensacha/pen/ZELexZB) Here I was playing with the positioning of the Form with the different features that I wanted to put in it.
- [Bootstrap 4 color pickers](https://codepen.io/daidensacha/pen/jOyVrqW) This was my initial choice, but I moved away from it after experiencing some conflicts and bugs that I couldn't work out. With limited time, my decision to use jscolor color picker was a good one. 
- [Bootstrap Offcanvas](https://codepen.io/daidensacha/pen/QWdvyBd) based on a demo version from Bootstrap.

In this preliminary testing phase I was able to choose what I felt would best suit my needs to create a product that would fullfill my goals established in outlining the 5 planes of UX.

### Development
***
#### Git Version Control
- **Initialise Git** 
To begin my project I started with `git init` to initialise git within the project. 
- **Git Ignore**
I created a **.gitignore** file so I could add files or directories I didn't want uploaded to GitHub.
`git echo "file_name" >> .gitignore` is the terminal command I used to add files and directories to **.gitignore**.
- **Incremental Commits** 
I incrementally commited my work in blocks with  meaningful commit explanations that are easy to reference to see the work that was completed. 
- **Created branch for form.js**
Writing the JavaScript to process the input values, generate the CSS styles and output the CSS styles to the demo buttona and CSS block was a major part of my code. When I finished completing the forms of inputs, I created a branch `add-colorpickers` as my development branch for writing the javaScript to process the form values and output the CSS styles. it was a fallback in case things went wrong and I needed to start again.
`git -b add-colorpickers` created the branch.
`git checkout add-colorpickers` moved me into that branch to write my code.
`git branch` displayed the list of branches, with an asterisk bedide the branch that I was currently in.
`q` quit the git log mode.
- **Merged form.js to master branch**
When I had completed the code for implementing the CSS functions, I merged the branch with the master branch. 
To ensure my branch was merged into the master, I moved to the master branch.
`git branch` showed me the current branch I was in.
`git checkout master` moved me to the master branch.
`git merge add-colorpickers` merged the branch into the master branch. 
   

#### HTML
- GOAL: Implement an accordion, containing forms with fieldsets of inputs grouped to provide the values needed to formulate CSS rules.  
	 - I created the accordion first, and tested that it worked bu clicking on ech part to ensure that the others were closed and only the clicked part would open. 
	 - I Working through one level at at time I added the inputs along with their labels and the headings, to ensure the layout was accoring to the plan. Using Chrome DevTools I tested the layout at different breakpoints to see that the layout remained as required 
	 - My gol at this preliminary stage was only to ensure the inputs were in place and worked, but was not yest concered about processing the values of individual inputs. 
	 - Having created the accordion, I then put the demo button in place with the block below it that would display the CSS. 
	 - I was not concerned with styling, but it was important that the structure was in place, and displayed properly at different breakpoints. 

#### JavaScript 
-	With 1 text box, 3 selects, 11 color pickers 13 range selectors and 6 toggle switches, the accordion forms with inputs were going to be my greatest challenge to implement. It was the central part of the project, so this is where I started. I had no idea how much time it would take. 
	-	Toggle switches. 
		- The starting point was to implement the toggle switches, so that they enabled or disabled form inputs, or fieldsets, depending on what was needed. Initially I tried using fieldset class names on the inputs, however the result was not consisited and it was unpredictalble. I tried to disable the fielset directly, and it worked but not on the color pickers. I also found that jQuery worked for this but could not get JavaScript to do the job. In the end, what worked was using jQuery targeting the ID names of the inputs, along with disabled = true/false.
		- I tested the toggle switches at this point to ensure that fielsets disabled or enabled. The input enabled/ disabled states were styled differently so there a visual change to confirm it was working. 
	-	Text input
		-	I wrote the function to listen for a `keyup` event, and to take the input value and insert it in the demo button. When I entered any letter in the text field, it was immediately shown in the button. There was an issue when the input text was deleted, the button reduced to a small circle. I added an if statement to check if the input value was an empty string, and to set a value to the button if it was true. This corrected that bug. 
	***	
	**Obstacle and rethink**
	The first four inputs, for button-text, font-family, font-color, font-size, were all added directly to the button, and I quickly discovered this would not work as pseudo css classes cannot be added directly to an element using JavaScript. In addition, my plan to add spans to the CSS block for the button style attributes was complicated.
	I need to research to see if there was a better way.
	
	**The Solution**
	1. [Create a style element, append it to the HEAD, and insert the CSS.](https://dev.to/karataev/set-css-styles-with-javascript-3nl5) 
	My solution was based on the information in the above link. The CSS style is reflected directly in the demo-button, and output live to the CSS display block.  
	2. `.update()`
	I came across this function on [Stack Overflow](https://stackoverflow.com/questions/55940670/how-to-get-slider-range-value-and-store-it-in-a-variable-within-javascript/55940824) when researching how to get the value of the range slider and to display it as it changes. There is information online and at [MDN Web Docs](https://developer.mozilla.org/en-US/search?q=.update%28%29). 
	Used together with `onchange` or `oninput` event listeners, it is a powerful function that listens to my form inputs and updates values. 
	The Javascript that processes the form input values and creates the CSS rules is within the `function update()` in form.js.
	***
	
	**Onwards with the new plan**
	It was time consuming, but the plan was clear, and easy to implement. It also worked beautifully. I wrote the code in parts, querying selectors, assigning variables, and checking in the DevTools console for error feedback.

	My testing in this part of writing the code was to ensure that inputs were assigned to variables, the values of those inputs were then assigned to variables, and then combined by groups to create the CSS rules. Console.log was my way to see the code was working.

	Once I had completed the code in form.js, I was able to see the result in the demo button style, and the CSS Output display. At that point I was able to go one by one through the form inputs, fieldsets, and test them to see if they were working. I bug that I thought was resolved had returned, the disabling of the color inputs was not working again.

 	**The Pesky Bug** 
	I had added `oninput update(); `to all the form elements, and it worked for the inputs, but my toggle switches were not working properly. I dove into the console, lookingn for errors, but none were showing. Clicking on the toggle switches was not triggering the `update()` function. In an aha moment, i clicked that the toggle is basically a checkbox, so I changed the event listener to `onchange update()`, and bazinga! The bug dissapeared and the toggle switches started working. 
	**Contact Form**
	When I click on the contact icon in the navbar, or the footer, a modal appears with the contact form. If I click send, a message appears asking me to enter my name, as all and the same for all other fields as they are all required. With all fields completed, when I click send, the form fields empty, and a success message appears saying the message has been sent. It then disappears after 2 seconds. 
	
	**Social Icon Block**
	When I click on the GitHub, Linkedin, or Codepen icon in the header or the footer, it opens a new window in the browser for my profile to the corresponding website.
	
	**Off Canvas**
	When i click on the navbar toggle icon, the offcanvas opens. The toggle icon is always visible, so the offcanvas can be opened to reveal a list of links to resources used to create the site. 
	When I click on a link it opens the webpage in a new tab.
When I click anywhere other than on a link, the offcanvas closes. 
	
	**Scroll to top**
	When I click on the "to top" icon in the footer, the page smoothly scrolls to the top of the webpage. 
	
	**Toggle Switch Not Working**
	The issue was that the event listener was not triggering updates of CSS rules when the Toggle was clicked. Through a process of elimination, using `console.log()`, and placing this at stages throughout the code, I was able to see that the update was working `oninput` with the form inputs, but not with the toggle switches. In an aha moment, I realised the `oninput` was the issue, so I changed the event listener of the toggle switches to `onchange update()`. Bazinga! The Bug disappeared.
-	#### Testing the inputs 
	- Select
		-	I clicked on the font-family select, choose a font, and the font in the demo button changes immediately. The font-family is displayed in the CSS display block.
		-	When I click on the direction select for the gradient background, and select a different direction, the gradient direction changes, and the CSS rule is output to the CSS output block. 
![Gradient Direction](/assets/documentation/images/screenshots/rm-form-gradient.png)
	- Color input
		-   I click on the color input, the color picker popup appears. I selected a color with the mouse cursor, the color changes in the demo button display and the color RGBA value is displayed in the CSS Output block. 
		-   In the color input, I added different values, HEX, HEXA, RGB, and RGBA. The color in the color picker immediately changes to the color that was entered. This confirms the color pickers accept different color formats. 
![Color pickers](/assets/documentation/images/screenshots/rm-colorpickers.png)
	- Range selector
		- I clicked on font change range selector handle, dragged it and the value changed, immmediately increasing the font size in the demo button. 
	- Toggle switch
		- I clicked on the disabled text shadow input, it does not open. This confirms the bud is not there anymore. I click on the toggle switch, the default text shadow is immediately visible on the demo button, and in the CSS output block. The text shadow fieldset is enabled, and I can select the color, range selector x-axis, y-axis, and blur. When I select a different color, or x-axis, y-axis or blur value, they change the style of the demo button and the corresponding value is updated in the CSS output block. 

I checked all the inputs and fieldsets individually to confirm that they are all working as expected. 

**Demo Button Background issue**
When I change the font size, the button gets bigger, however the background does not incorease in size. I had set a fixed height of the background, and though using DevTools I removed the fixed height, and added a top/bottom margin on the demo button. Now when I increase the font size, the button increases in size along with the background. 

**Demo Button Display**
When I scroll the button disappears off screen. I added the boostrap sticky-top class to the demo button background div. The button and background now sticks to the top of the screen and remains visible for longer. It is more friendly. 

**Copy to clipboard function**
In the user stories I identified the users need to be able to easily copy the CSS style. I added an icon to the top of the CSS output block, and implemented clipboad.js. When I click on the icon, a message appears confirming the copy success, and at the same time, the CSS is highlighted. I created a codepen where the user can paste the CSS to see it work, and the link to the codepen is under the CSS block highlighted under the heading "Copy the CSS". Pasting the CSS in the codepen creates an exact copy of the button that was ceated using the Button Styler. 
![CSS Copied](/assets/documentation/images/screenshots/rm-copied.png)
![Test CSS Codepen](/assets/documentation/images/screenshots/test-css-codepen.png)

**Demo button Styles**
When I change any of the form input values, the change is immediately displayed in the demo-button style. Clicking on a toggle switch adds or removes the corresponding styles to the button. Selecting a different input color changes the corresponding style color of the demo-button. The changes are live and immediate. 

**CSS Display block**
All enabled CSS rules are displayed in the CSS display block under the demo button. Then the input vlaues are changed, I see the CSS rules are immediately changing. Enabling or toggling between differnet options also adds or changes the CSS rules that are displayed. 


### Production/ Deployment
***
- How to test for production
	- Different screens display after deployment
	- DIfferent operating systems
	- testing?
-	Testing	
	-	Operating systems
		-	OSX
		-	WIndows
	- Screen sizes
		- Macbook Pro
		- Dell 2419
		- iPad Air
		- iPhone 11 Pro
	- Sharing with friends/ developers/ software engineers.
		- Monis clients son in law
		- RObins contact from work
		- Jan from jscolor 
		-


		-


