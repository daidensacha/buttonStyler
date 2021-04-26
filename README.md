  
# Welcome

## Code Institute: Milestone Project 2
  
### CSS buttonStyler - Daiden Sacha - Full Stack Web Developer

* * *

Building on the skills used to complete my previous project, my goal is to complete a project with interactive features to engage the user. I've decided to build a site that will offer the user tools to create button styles.

See the [buttonStyler Website](https://daidensacha.github.io/buttonStyler/).

## UX DESIGN
### 1\. Strategy

##### User Stories:

- **External Users** Hobbyists, through to learning and budding developers.

  

1. As an aspiring developer:
	- I want to play with styles to see what works and what doesn't work.
	- I want to see how the different style attributes work.
	- I want to see how to write CSS for buttons.
	- I want to create button styles on the fly to save time.
	- I want to learn how to design buttons.

2. As a hobbyist who likes to dabble with HTML and CSS:
	- I want to enjoy playing and be able to create buttons easily.
	- I want to see the result as I create it to know what I will have.

3. As a developer:
	- I'm always looking and open to trying tools to make my work more efficient and save me time.
	- I want to be able to enter colors that I am working with to easily create buttons that fit within the colors of my project.
	- I want to be able to play with designs and effects, and colors to discover what is possible.

  

- **The Owner**


1. As the owner:
	- I want to have a tool that makes my job easier.
	- I want to create a tool that I have used online before, but that does things I want it to do.
	- I want to create it to my design preferences and to be able to change it when I want to.
	- I want to be able to add to it and to expand it to improve it.
	- I want to share this tool with others who might also benefit from it.
	- I want to do this project to learn and to be able to put to use the things I have been learning in this last unit.

[Post development-deployment review](/assets/documentation/testing.md/#user-stories-review-development-deployment) of user stories can be read in the testing.md




### 2\. Scope

Having played on a few of these sorts of sites myself, I know what I find interesting. Also, what makes it an experience to which I would return. Given the limit on time and the abundance of ideas, my challenge is to confine the project's scope to submit it in time.

Central to the site will be a playground of features to add styling to buttons.

**Required Features**

- **Color picker feature** \- Users can select colors for the different attributes of the button.

- **Color Format** \- Users will be able to enter the color in a text input, in preferred format HEX, RGB/A, HSL/A.

- **Range Selector** \- For selecting the size, pixels, distance, etc.

- **Toggle Switch** \- A converted checkbox displayed as a toggle switch for enabling or disabling form fields.

- **Gradient Selector** \- Gradients are becoming the norm, supported in all modern browsers. A feature is needed for users to choose gradients.

- **Social Icons** \- The icons will link to my GitHub, Codepen, and Linkedin profiles.

- **Contact Form** \- Users can contact me by using the contact form.

- **Modal** \- The Modal will be for the contact form so I can keep the site to one page.

- **Navbar** \- Navabar will house the social icons.

- **Offcanvas navbar** \- An off-canvas that can be toggled open at any time, not only for small screens.

- **Accordion** \- It will have forms of inputs grouped so that users can style the demo button.

- **Demo button** \- A demo button to show the styling results visually.

- **CSS display** \- An CSS output display that will update as the user styles the button.

- **Copy to clipboard** \- A button for users to copy the CSS style.

- **Footer** \- Simple Footer with the social links from the navbar replicated, as above so below.

**Functional Requirements**

- **Color Pickers** \- Will open when clicked and will have an input so users can enter a specific color if they want. They can also use the mouse cursor to select a color. Form inputs have set default values, so there is a designed button to start.

- **Range Selectors** \- The value will be displayed when the user changes it. As a guide, I will set default minimum and maximum values for different attributes for the user.

- **Toggle Switches** \- Users will be able to disable or enable some fields of inputs to include or exclude them from the button styling. Not everyone likes a pizza with the works.

- **Navbar** \- Fixed Navbar, with a toggle button so users will be able to open the off-canvas and see a list of valuable resources.

- **Copy to clipboard** \- Users will be able to copy the CSS style easily, and there will be visual feedback to confirm the Copy is successful.

- **Gradients** \- Users will be able to select colors to create gradients. A start color, end color, and a direction are required to compile CSS rules for cross-browser compatibility.

- **Contact form** \- Users can access the contact form from the Navbar or Footer. Clicking on the email icon will open the modal with the contact form. It will include validation, and they will be able to send a message. A message will inform the user of the message submission's success or failure.

- **Accordion** \- There will be multiple levels of forms containing fieldsets of grouped inputs providing values to compile CSS rules. The user will work through the different style attributes and see the result live as they change the style values. The accordion will have one Form open at a time

- **Demo button** \- The user will add their button text, colors, style attributes by changing the values of the form inputs. The change in values will be updated live to the demo button. The user can change the button's background color to see how it looks against the intended background color.

- **CSS Output display** \- The CSS markup will be output to a CSS display block beside the accordion, with the demo button above it.

**Content Requirements**

- **Single page site** \- Keeping it simple with a one-page site, not overcooked with content. The button styling will be the central focus.

- **Bling** \- There will be a full-width banner image to welcome the site user.

- **Forms within the accordion** \- Inputs grouped by CSS rule into fieldsets, laid out sequentially so users can intuitively work through them.

- **CSS Markup Block** \- A block within `<pre><code></code></pre>` tags to display the CSS output from selected CSS rules.

- **Instructions** \- Simple instructions for users, explaining how easy it is to create, copy, and use the style creator.

**Required Form Elements**

- [ ] **Color picker:**  
	It was a process to research and select a color picker. There are many around, with varying degrees of documentation, and each has its pros and cons. In the end, my choice was the [jscolor color picker](https://jscolor.com/). It is well documented and has lots of examples showing different possibilities and how to configure them. They are very friendly and offer great support if you have any questions.

- [ ] **Range Selector:**  
	I found some great examples on [CSS Tricks](https://css-tricks.com/value-bubbles-for-range-inputs/) showing different ways to style range inputs and to output the value as it changes. I used one of these in my formes, with some minor changes to the CSS.

- [ ] **Toggle Switch:**  
	I have little experience or knowledge about this element. It's my preferred option to disable form field groups, so users can easily choose styling they want to include. I found the [Bootstrap Switch Button](https://gitbrent.github.io/bootstrap4-toggle/#usage) API available on Github. There is a working example on Codepen with the Bootstrap Range Selector.

- [ ] **Select:**  
	The select input is pretty straightforward and easy to incorporate. I will use the [Bootstrap Select](https://getbootstrap.com/docs/5.0/forms/select/).

- [ ] **Text Input:**  
	The Form will contain only one text input for entering the button text.

  
### 3\. Structure


**Interaction Design**

- I think it is human nature to be curious and to want to explore. My vision is that the site will engage and invite exploration to discover available features. It will be an intuitive and joyful experience. Color has a powerful impact on feeling and emotion, so this will be a playground for exploring colors.

- There will be color pickers, range selectors, fonts, a variety of features to tweak the color, size, and style of the buttons to see how the CSS is output.

- The user will be able to play, create a button, and easily copy it to use the exact style they want to use.

**Information Architecture** Site information arranged as follows.

- **Simple and sweet:** Home page will be colorful. The center point is the forms with inputs for styling the demo button, a playground full of possibilities.

- **Contact Form** I want it simple and don't want users to navigate away from the reason that brought them to the site. So it will be a one-page site, with a contact form at the bottom of the page. I may put the contact form in a modal if, for some reason, it doesn't fit on the home page.

- **Social Links** There will be social links for connecting to me or viewing my work on GitHub, Codepen, and Linkedin.

- **Planning** Given the number of CSS rules to be generated, and corresponding inputs to create the data for outputting the CSS, [I created a table](/assets/documentation/testing.md/#form-outline) to use as I put the forms together.

- **Layout** The Layout should be such that the button is visible along with the CSS output so the user can see the result as they change the styles.

### 4\. Skeleton
 
**Wireframing:** 

As I'm using Bootstrap, I created the wireframes with the Bootstrap breakpoints in mind for small, medium, and large screens. The header row will have a responsive background image. Next comes the row with accordion and CSS display blocks, followed by a content block and then the footer.

I put the contact form in the footer in the wireframes. However, in the end, I decided to put it in a modal that opens when you click on the email icon.

I combined the three separate wireframes into one image for the README as seeing them side by side gives a better perspective of the scale of difference between the different size screens. The original size wireframes are available for viewing in the assets/images folder.  

![Wireframes](assets/documentation/images/wireframes/wireframes.jpg)
 
### 5\. Surface

**Visual Design:**

Color. Fun. Exploration. I want to take off my conservative hat and be a little daring to create an impression, definitely an experience to remember. It should be a fun experience to play with the button creator, one that the user will remember and return to when they next need to check out button styles.

## TECHNOLOGIES USED

**Languages Used**


1. HTML

2. CSS3

3. SCSS

4. JavaScript

5. jQuery

6. Markdown


**Frameworks, Libraries, Programs used**

1. [Bootstrap](https://getbootstrap.com/)
	The framework used to create a responsive website.

2. [Font Awesome](https://fontawesome.com/)
	I used their icons for the social icon bar and the Copy to clipboard button.

3. [Google Fonts](https://fonts.google.com/)
	I chose a selection of Google Fonts to use in the "select" input for selecting CSS font style for the button styling.

4. [GitHub](https://github.com/)
	Used to host project repository and to deploy the project live via GitHub Pages

5. [Git Version Control](https://git-scm.com/)
	I used it to commit blocks of work to the GitHub repository and create branches to work on specific changes or testing.

6. [Clipboard.js](https://clipboardjs.com/)
	This function provides copy (add to clipboard) functionality for the user to copy the CSS markup.

7. [Balsamiq](https://balsamiq.com/wireframes/?gclid=Cj0KCQjwgtWDBhDZARIsADEKwgNq0GvC2yRLIRMqtOQmJMttVQwRQwncxUgML3HMPxy17ZF6--foTYkaArnQEALw_wcB)
	Used to create wireframes

8. [Adobe Illustrator](https://www.adobe.com/de/creativecloud.html?mv=search&mv=search&sdid=MQH8S7GK&ef_id=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB:G:s&s_kwcid=AL!3085!3!392740825380!b!!g!!%2Badobe!1419110055!55481570853&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB)
	I used it to edit and resize a vector image to create the banner background image.

9. [Adobe Photoshop](https://www.adobe.com/de/creativecloud.html?mv=search&mv=search&sdid=MQH8S7GK&ef_id=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB:G:s&s_kwcid=AL!3085!3!392740825380!b!!g!!%2Badobe!1419110055!55481570853&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB)
	I used it to combine three wireframes into a single image for the README.

10. [EmailJS](https://www.emailjs.com/)
	I used it to process and send contact form information.

11. [Visual Studio Code](https://code.visualstudio.com/)
	My editor of choice. My project was created and worked on locally and then pushed up to GitHub using terminal Git push.  

12. [Joplin](https://joplinapp.org/)
	It's a free, open-source note-taking and markdown application for OSX, iOS, Linux, Windows. I used it to create the README file for GitHub.

13. [Squoosh](https://squoosh.app/)
	I used it to compress images to optimize load performance.

14. [jscolor Color Picker](https://jscolor.com/)
	I used color pickers on the website for choosing colors.  

15. [shoelace](http://shoelace.io/)
	Application for building Bootstrap grids. It is a convenient tool that simplifies building the responsive grid.

## Testing
[Testing-Plan (Pre-development)](/assets/documentation/testing.md/#testing-plan-pre-development  ) outlines my development and testing strategy.

[Testing-Checklist](/assets/documentation/testing.md/#testing-checklist-development-deployment) every element listed and checked. 

### Research
[Testing-Plan/Research](/assets/documentation/testing.md/#research) outline.


***

**1. What's available?**
**2. How does it work?**
**3. What can I expect?**

The three questions I needed answers to start my project. I never used or worked with range selectors, color pickers, or toggle switches, so I need to experiment to understand.

My initial strategy was to research and use Codepen to implement working features to see how they work. I wanted to learn this before starting the development phase. There are several pens where you can see what I was playing with, and you will understand what I have put into the site.

- [Toggle Switch disables fieldset of form inputs](https://codepen.io/daidensacha/pen/yLgzojL) An experiment in styling a toggle switch and using it to disable the fieldset of form elements.

- [Toggle Switch disabling form fieldset,](https://codepen.io/daidensacha/pen/OJWxmvP) In this example, I was outputting the boolean of the toggle switch and fieldset disabled state.

- [Comparing a toggle switch and checkbox.](https://codepen.io/daidensacha/pen/RwKKWbJ) I was also comparing the use of JavaScript vs. jQuery for disabling the inputs.

- [Toggle switch, range selectors, and color picker](https://codepen.io/daidensacha/pen/ZELexZB) Here I was playing with the positioning of the Form with the different features that I wanted to put in it.

- [Bootstrap 4 color pickers](https://codepen.io/daidensacha/pen/jOyVrqW) This was my initial choice, but I moved away from it after experiencing some conflicts and bugs that I couldn't work out. With limited time, my decision to use jscolor color picker was a good one.

- [Bootstrap Offcanvas](https://codepen.io/daidensacha/pen/QWdvyBd) based on a demo version from Bootstrap.

In this preliminary testing phase, I chose what I felt would best suit my needs to create a product that would fulfill my goals established in outlining the five planes of UX.

### Development

***
[Testing-Plan/Development](/assets/documentation/testing.md/#development) outline.


#### Git Version Control

- **Initialise Git**
	To begin my project, I started with `git init` to initialise git within the project.

- **Git Ignore**
	I created a **.gitignore** file to add files and directories I didn't want to upload to GitHub.

	`git echo "file_name" >> .gitignore` is the terminal command I used to add files and directories to **.gitignore**.

- **Incremental Commits**
	I incrementally committed my work in blocks with meaningful commit explanations that are easy to reference to see the completed work.

- **Created branch for form.js**
	Writing the JavaScript to process the input values, generate the CSS styles and output the CSS styles to the demo button and CSS block was a significant part of my code. When I finished completing the forms of inputs, I created a branch `add-colorpickers` as my development branch for writing the javaScript to process the form values and output the CSS styles. It was a fallback in case things went wrong and I needed to start again.

	`git -b add-colorpickers` created the branch.

	`git checkout add-colorpickers` moved me into that branch to write my code.

	`git branch` displays the list of branches. An asterisk identifies the current branch.

	`q` quit the git log mode.

- **Merged form.js to master branch**
	When I had completed the code for implementing the CSS functions, I merged the branch with the master branch.
	To ensure my branch merged into the master, I moved to the master branch.

	`git branch` showed me the current branch.

	`git checkout master` moved me to the master branch.

	`git merge add-colorpickers` merged the branch into the master branch.

  

#### HTML

- GOAL: Implement an accordion containing forms with fieldsets of inputs grouped to provide the values needed to formulate CSS rules.

	- I created the accordion first and tested that it worked by clicking on each part to ensure that the others were closed and only the clicked part would open.

	- Working through one level at a time, I added the inputs and their labels and the headings to ensure the layout was according to the plan. Using Chrome DevTools, I tested the layout at different breakpoints to see that the layout remained as required

	- My goal at this preliminary stage was to ensure the inputs were in place and worked, but I was not yet concerned about processing the values of individual inputs.

	- Having created the accordion, I put the demo button in place with the CSS display block below it to display the CSS.

	- I was not concerned with styling, but it was important that the structure was in place and displayed adequately at different breakpoints.

  

#### JavaScript

- With one text box, three selects, eleven color pickers, thirteen range selectors, and six toggle switches, the accordion forms with inputs were going to be my greatest challenge to implement. It was the central part of the project, so this is where I started. I had no idea how much time it would take.

	- Toggle switches.

		- The starting point was implementing the toggle switches to enable or disable form inputs, or fieldsets, depending on what was needed. Initially, I tried using fieldset class names on the inputs. However, the result was not consistent, and it was unpredictable. I tried to disable the fieldset directly, and it worked but not on the color pickers. I also found that jQuery worked for this, but I could not get JavaScript to do the job. In the end, what worked was using jQuery targeting the ID names of the inputs, along with disabled = true/false.

		- I tested the toggle switches at this point to ensure that fieldsets were disabled or enabled. The input enabled/ disabled states were styled differently, so there was a visual difference to confirm it was working.

	- Text input

		- I wrote a function to listen for a `keyup` event, take the input value, and insert it in the demo button. When I entered any letter in the text field, it immediately showed in the button. There was an issue when deleting the input text. The button shrunk to a small circle. I added an if statement to check if the input value was an empty string and, if true, set a default value to the button.

***

**Obstacle and rethink**

The first four inputs, for button-text, font-family, font-color, font-size, were all added directly to the button. I quickly discovered this would not work as pseudo css classes cannot be added directly to an element using JavaScript. Also, my plan to add spans to the CSS block for the button style attributes was complicated.

I need to research to see if there was a better way.

**The Solution**

1. [Create a style element, append it to the HEAD, and insert the CSS.](https://dev.to/karataev/set-css-styles-with-javascript-3nl5)

	The seed for my solution came from the above link. The CSS style is reflected directly in the demo button and output to the CSS display block.

2. `function update()`

	I came across this function on [Stack Overflow](https://stackoverflow.com/questions/55940670/how-to-get-slider-range-value-and-store-it-in-a-variable-within-javascript/55940824) when researching how to get the value of the range slider and to display it as it changes. There is information online and at [MDN Web Docs](https://developer.mozilla.org/en-US/search?q=.update%28%29).

	Used together with `onchange` or `oninput` event listeners, it is a powerful function that listens to my form inputs and updates values.

The Javascript that processes the form input values and creates the CSS rules is within the `function update()` in form.js.

***

**Onwards with the new plan**  
It was time-consuming, but the plan was clear and easy to implement. It also worked beautifully. I wrote the code in parts, querying selectors, assigning variables, and checking in the DevTools console for error feedback.

My testing in this part of writing the code was to ensure that inputs were assigned variables, the values of those inputs were then assigned to variables and then combined by groups to create the CSS rules. Console.log was my way to see the code was working.

Once I had completed the code in form.js, I was able to see the result in the demo button style and the CSS Output display. At that point, I was able to go one by one through the form inputs, fieldsets and test them to see if they were working. A bug that I thought resolved had returned. The disabling of the color inputs was not working again.

**The Pesky Bug**  
I had added `oninput update(); `to all the form elements, and it worked for the inputs, but my toggle switches were not working properly. I dove into the console, looking for errors, but none were showing. Clicking on the toggle switches was not triggering the `update()` function. I clicked that the toggle is a checkbox in an aha moment, so I changed the event listener to `onchange update()`, and bazinga! The bug disappeared, and the toggle switches started working.

**Contact Form**  
When I click on the contact icon in the navbar or the footer, a modal appears with the contact form. If I click send, a message appears asking me to enter my name, the same for all other fields as all are required. Once I complete all fields, I click send, and the form fields empty. A success message appears, indicating success. It then disappears after 2 seconds.

**Social Icon Block**  
When I click on the GitHub, Linkedin, or Codepen icon in the header or the footer, it opens linked pages in new tabs in the browser.

**Off-Canvas**  
When I click on the navbar toggle icon, the off-canvas opens, the toggle icon is always visible, so the off-canvas can be opened to reveal a list of links to resources used to create the site.
When I click on a link, it opens the webpage in a new tab.
I click anywhere other than on a link, and the off-canvas closes.

**Scroll to top**  
I click on the "to top" icon in the footer, the page smoothly scrolls to the top of the page.

#### Testing the inputs

- Select

	I click on the font-family select, choose a font, and immediately change the font in the demo button. The font family displayed in the CSS display block updates at the same time.

	- When I click on "select direction" for the gradient background and select a different direction, the gradient direction changes accordingly. The changed CSS rule is also output to the CSS output block. It fulfills a need expressed in the user stories to see how syles work, their effect, and the generated CSS output.

![Gradient Direction](/assets/documentation/images/screenshots/rm-form-gradient.jpg)

- Color input

	- I click on the color input, the color picker popup appears. I select a color with the mouse cursor, the color changes in the demo button display, and the color RGBA value displays in the CSS Output block.

	- In the developer user stories, I identified the need for the developer to enter specific colors for button values. I added different values in the color picker input, HEX, HEXA, RGB, and RGBA. The color in the color picker immediately changes to the color entered. It confirms the color pickers accept different color formats and meets the need of the developer. 

    #### Alpha color issue
    - One issue arose when testing the color picker, and initially, I thought it was a bug, but it turns out it is simply a quirk of the color picker or entering a color with 0 opacity.  
    It happens with RGBA or HEXA color formats. When I enter a color, for example, HEXA 00000000 (RRGGBBAA), or rgba(0,0,0,0), it set the opacity to 100% transparent. 
    Note, with HEX or HEXA, it is unnecessary to add the  # before the color number in this color picker. 
    If I add another color, I need to change the opacity for it to be visible. For example, I now add FFFFFF for white, but no color appears. If I enter the same color but add the HEX alpha for 0% transparency FF, i.e., FFFFFFFF, the color appears It is the same with using the rgba, I need to add rgba(255,255,255,1), and the color appears. 
    I will talk with the color picker developer to see that he is aware of this, but for now, there's not a lot I can do about it. At least I understand what is happening; thats a good start.  
    [I have mentioned this issue in the testing.md file Accordion Forms/font-color, Alpha color issue](/assets/documentation/testing.md/#alpha-color-issue).  

    [CSS Tricks](https://css-tricks.com/8-digit-hex-codes/) give a good explanation of the HEX colors with the alpha added. They in turn reference their source as an article in Stack Overflow.      

![Color pickers](/assets/documentation/images/screenshots/rm-colorpickers.jpg)

- Range selector

	- I clicked on the range selector handle to change the font size, dragged it, and the value changed, immediately increasing the font size in the demo button.

- Toggle switch

	- I clicked on the disabled text-shadow input, it does not open. It confirms the bug is not there anymore. I click on the toggle switch, and the default text shadow is immediately visible on the demo button and in the CSS output block. The text-shadow fieldset is enabled, and I can select the color, range selector x-axis, y-axis, and blur. When I select a different color or x-axis, y-axis, or blur value, they change the style of the demo button and the corresponding value updates in the CSS output block.

I checked all the inputs and fieldsets individually to confirm that they are all working as expected.

**Demo Button Background issue**  
When I change the font size, the button gets bigger. However, the background does not increase in size. I had set a fixed height of the background, and through using DevTools, I removed the fixed height and added a top/bottom margin on the demo button. Now when I increase the font size, the button increases in size along with the background.  

**Demo Button Display**  
When I scroll, the button disappears off the screen. I added the bootstrap sticky-top class to the demo button background div. The button and background now stick to the top of the screen and remain visible for longer. It is more friendly.

**Copy to clipboard function**  
In the user stories, I identified the users' need to copy the CSS style easily. I added an icon to the top of the CSS output block and implemented clipboad.js. When I click on the icon, a message appears confirming the copy success, and at the same time, the CSS highlights. I created a codepen where the user can paste the CSS to see it work, and the link to the codepen is under the CSS block highlighted under the heading "Copy the CSS". Pasting the CSS in the codepen creates an exact copy of the button created using the Button Styler.

![CSS Copied](/assets/documentation/images/screenshots/rm-copied.jpg)

In user stories, I identified the need to copy the CSS to use it easily. Users can copy easily, as shown in the image above. They can then test the code in a codepen I created. Users can paste the CSS into the codepen (link below the CSS display block) and see it work.

![Codepen for users to paste the CSS from their button style to test it and see it works.](/assets/documentation/images/screenshots/test-css-codepen.jpg)

**Demo button Styles**  
When I change any form input values, the change displays immediately in the demo-button style. Clicking on a toggle switch adds or removes the corresponding styles to the button. Selecting a different input color changes the corresponding style color of the demo button. The changes are live and immediate.

**CSS Display block**  
Enabled CSS rules display in the CSS display block under the demo button. Then the input values are changed, I see the CSS rules are immediately changing. Enabling or toggling between different options also adds or changes the CSS rules that are displayed.

**Included CSS Styles**

- FONT
	- Button Text _*(accepts 3-16 letters, plus spaces)*_
		- font-family
		- color
		- font-size

- SHADOW
	- text-shadow _*(default off, toggles on)*_
		- x-axis
		- y-axis
		- blur
		- color

- BOX
	- box-shadow _*(default off, toggles on)*_
		- x-axis
		- y-axis
		- blur
		- color
	- padding _*(default "all-sides", toggles to "top-bottom/right-left")*_
		- all sides
		- top-bottom
		- right-left

- BORDER
	- color
	- border-width
	- border-radius

- COLOR
	- background _*(default solid color, toggles gradient on)*_
		- color
		- gradient color 1
		- gradient color 2
		- gradient direction

- HOVER
	- font-color
	- background _*(default solid color, toggles gradient on)*_
		- color
		- gradient color 1
		- gradient color 2
		- gradient direction
	- border _*( default on, toggles off)*_
		- color
		- border-width

There is a variety of properties and options from which to choose. The inputs are easily accessible and work seamlessly. The effect is immediate. Change the value, the style change appears in sync in the demo button, and the CSS appears live in the CSS display block. In the user stories, I identified the users' need to play with the effects, see how they work, and learn how to write CSS to create button styles. Button Styler as a learning tool offers hobbyists, aspiring developers, and developers a learning playground. It's easy to copy the CSS if the user wants to use it. Needs that were identified in the user stories.

**Responsive Design**

[Bootstrap Breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/)

|Breakpoint|Class infix|Dimensions |
|--|--|--|
| X-Small | __None__ | <576px |
|Small|sm|≥576px|
| Medium | md | ≥768px|
|Large|lg|≥992px|
|XL|xl|≥1200px|
|XXL|xxl|≥1400px|

I tested display and responsiveness in Chrome DevTools throughout the development stage for each of the screen sizes. The form inputs with their labels needed to be positioned correctly for all screen sizes.  

**HTML/CSS/JS Validation**

Before deploying I validated the sites code in the [W3C HTML validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), [JSHint JS validator](https://jshint.com/) . I identified some minor issues. A clash between Boostrap and HTML5 use of the footer tag in the header blockquote. As the Bootstrap framework is class-dependent, it was no issue to remove the footer tag from the blockquote and replace it with a `<p>` tag. CSS validated with no issues. JS was missing some semi-colons; otherwise, the JS was clear.

With testing completed to a point where I needed to have the site live to test further and share the work to get feedback, I moved to the deployment phase.  

### Deployment

***
[Testing-Plan/Deployment](/assets/documentation/testing.md/#deployment) outline.

**Deploy to GitHub Pages**

The time arrived to deploy the site live so I could move to the next phase of testing. I needed the website to be live so that I could test it on the GitHub server. I could also share the link to get feedback.

1. Click `Settings` on the repository page.
2. Click on the GitHub Pages tab to the left.
3. Under source, click the dropdown, select `master`, or the branch of your choice.
4. Click save, and the message shows, "Your site is ready to be published at https://daidensacha.github.io/buttonStyler/".

Having the site live enables me to dive deeper into testing and expose it to external users to gain different insights.

**Production Strategy:**

1. Test the site on the live server to see that it performs as expected, as it was on the local server.
2. Run the site code through HTML/ CSS/ JS validation to check it validates.
3. View the features with a critical eye, test the site as a user, and see if it fulfills my expectations.
4. See what works, what doesn't work, and what can be improved.
5. Share the site with friends, colleagues, project mentor, and other developers to get feedback and input.

**Personal Testing Devices/ Software/ Browsers**
- Macbook Pro (15-inch)
	- macOS Big Sur 11.2.3
		- Safari Version 14.0.3 (16610.4.3.1.7)
		- Chrome Version 90.0.4430.72 (Official Build) (x86_64)	
		- Firefox 88 (64-bit)
	- Windows 10 (bootcamp)
		- Microsoft Edge
		- Chrome
		- Firefox
- Dell 2419 Monitor
- iPad Air
- iPhone 11 Pro

**Secondary Testing Device/ Sofware/ Browser**
- HP ProDesk 600 Desktop PC
    - Windows 10 Pro 
        - Microsoft Edge Version 90.0.818.42 (Official Build) (64-Bit)
        - Firefox 78.10.0esr (64-Bit)
        - Chrome Version 90.0.4430.85 (Official Build) (64-Bit)
- AOC 22E15 21.5-inch Full HD 1920x1080 at 75 Hz
  
**Issue 1 - No images**  
I had an issue with my background images not showing up. When I created my site folders, I mistakingly named the images folder "Images". All my image links were to the "images" folder, and I don't know why, but Chome on my local server was forgiving and displayed my images. GitHub, on the other hand, is a little more pedantic. The website images were not showing.
It was a little complicated. I moved all my images to back them up, deleted the "Images" folder, created a new "images" folder, moved images into it.

Terminal `git add .`, `git commit -m "fixing incorrect folder name"`, and `git push`. Finally, images were showing.

I don't know if this is a typical experience, but viewing the same site in Chrome, the local version was viewing perfectly. GitHub Pages presented the same website differently. Suddenly, I was not trusting my local server setup.

**Issue 2 - Margins**  
I wanted my accordion/ CSS block row to fold at `sm` screen size for the columns to stack and the side margins to be gone, as they are a waste of space on mobiles. I was getting x-overflow, and it had me stumped.

I had put flex class on the `container-fluid container-flex`, instead of the child `row row-flex`. I found out that if you do that, Bootstrap columns add a negative margin to make up for it, hence the overflow. I moved the flex class to the row, the margin was not there on xs screens, and there was no overflow.

**Issue 3 - Padding**  
At this point, I noticed that the DevTools iPhone X view displayed differently from my iPhone 11 Pro. Same with my iPad. I was getting padding viewing the live site not showing in DevTools iPad view. One issue was of my own making. When I started, I set a fixed height of the button background. It didn't look nice when the font size of the demo button increased. It looked unbalanced. I changed it to min-height with fixed padding top and bottom, and it looked much better.
Other issues were to refine the styling for xs and Tablet screens so that the margin-left and margin-right were not there.

**Stacking column order**  
On Bootstrap xs screen size, the demo button and CSS block were stacking under the accordion. It didn't look right, and I wanted the button to be above the accordion.

I used the Bootstrap `order` class to move the second column to `order-1 order-lg-2`, and the accordion column to `order-2 order-lg-1`. It fixed the issue.

**Class sticky-top**  
The next issue was that on the iPhone and iPad, and the larger screens, but to a lesser extent, the demo button scrolled off screen very quickly when scrolling.
I added the Boostrap class `sticky-top` to the demo button column, so the button stuck to the top of the screen while I scrolled the CSS block.

**Text Input**  
When the user enters text into the text input, it automatically shows in the demo button. I had a default value for the demo button, `My Button`, and placeholder text in the input `Your button text`.

I became aware that when clicking in the text input and pressing delete, the demo button collapsed to a small circle. I added an if statement that inserted the default value "My Button" in the button if the input value was an empty string. After some more research, I added Regex validation to accept 3-16 letters, lower or upper case, with spaces. If it does not match, it displays a message `enter 3-16 letters only`. Otherwise, the default demo button text is displayed. 
I discovered another issue. When I reduced the font size to zero during additional testing, the button again reduced to a small circle. I set a minimum value for font size to 8px. No one would be able to read it if it was smaller.

**Range Selector Tooltip**  
In the morning, I briefly played with the button styler in Chrome on my MacBook Pro. It was all good. In the afternoon, I was checking the button styler with Chrome using DevTools in Windows 10.  I noted that on small screens, everything appeared ok. On screens bigger than "md", the tooltip on the side of the range inputs was folding under the input track. The range slider width was set to `width: calc(100% - (74px));`. 
A few days earlier, I had added media queries so the font size would change for different screens as the main heading was too big on my iPhone. Initially, I created two headings, the first visible on large screens and hidden on small screens, and the second visible on small screens but hidden on large screens. It was a hack and worked, but I thought the media queries were a better solution. 
I missed that the width calculation changed the equation for the display of the tooltip on large screens. I changed the width to `width: calc(100% - (73px));` and it all fell back into place.

**Information Block Headings**  
I gave the link to buttonStyler to Jürgen, and I chatted with him afterward to see how he got on. He had spent the afternoon playing with it, created some buttons, found his way to the test codepen I made, and even copied the code into a repository. He asked me what he needed to do to get the font he chose, and I explained that the instruction was in point 3 of the information block, "Add your button". It was the part he had not read. The heading color was conservative beige, and I decided to change it to something bolder, as I want it to shout out "read me". It's now fluoro green but fits with the banner image that is a rainbow of colors. 

### Feedback

**Jürgen Jung** - *Software Engineer*  
I gave the link to Jürgen so he could test the button styler and get his feedback. The feedback was positive. He used it to create a button, copied it using the Copy to clipboard, and pasted it into the codepen. He said it functions well, and it inspired him to learn more HTML and CSS.

**Jan Odvárko** - *Developer: jscolor*  
Very well done, Daiden. That's an impressive piece of work.
I just tried it in Chrome, and it works like a charm.
Thanks for sharing it with me, and I wish that your application helps many people to generate nice buttons.

### Credits

* * *

Throughout my project, I was continually challenged to research and learn, to draw upon the vast treasure of experience so widely shared online to fill the gaps in my knowledge. I would like to thank and give recognition to the following resources that contributed to my project.

- [Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/) - I used 4.6 as 5.0 was still in alpha, and I didn't have time to waste on resolving issues that I might otherwise avoid. I continually returned to the documentation to research and look for options and solutions. I used examples, i.e., the fixed navbar with the toggle and off-canvas based on the [Bootstrap example code](https://getbootstrap.com/docs/4.1/examples/offcanvas/).

- [CSS Tricks Range range selector with tooltip](https://css-tricks.com/value-bubbles-for-range-inputs/) - I used this element in my forms, with minor changes to the CSS. 

- [BBBootstrap smooth scroll to top](https://bbbootstrap.com/snippets/simple-back-top-smooth-scroll-17111555) - A simple but effective jQuery function to add smooth "scroll to top" when clicking on an icon in the footer.

- [Stack Overflow solution for closing offcanvas](https://stackoverflow.com/questions/57259093/how-do-i-outside-click-to-close-this-custom-offcanvas-nav-from-bootstraps-docs) - Stack Overflow was a place I ended up a lot and found many answers, like this one that provided a solution for closing the off-canvas when clicking outside of it.

- [Bootstrap 4 Slide Switch](https://gitbrent.github.io/bootstrap4-toggle/#usage) - The API available on GitHub offered an out of the box solution for my toggle switches.

- [jscolor color picker](https://jscolor.com/) - The website has many examples showing various implementations of the color picker. The color picker used in this site works perfectly.

- [clipboard.js](https://clipboardjs.com/) - Handy information on their website, and along with other resources online such as [this script](https://gist.github.com/dguo/1730d4bfeb370d92117e092311262bfa) provided me with sufficient information to implement it in my site. My function was based on resources from both these links and customised to suit my needs.

- [Deposit Photos](https://depositphotos.com/?admitad_uid=Cj0KCQjw1PSDBhDbARIsAPeTqrf7b1JmJYBCrfkdmwbtqQKsrne1ubak8k-HJDV9CSEhsP3YzDp83NMaAnIAEALw_wcB&utm_source=admitad&utm_medium=cpa&utm_campaign=1253026&gclid=Cj0KCQjw1PSDBhDbARIsAPeTqrf7b1JmJYBCrfkdmwbtqQKsrne1ubak8k-HJDV9CSEhsP3YzDp83NMaAnIAEALw_wcB) - I created the header image from a vector image that I purchased from Deposit Photos.

- [Font Awesome](https://fontawesome.com/start) - Icons are from Font Awesome.

- [Google Fonts](https://fonts.google.com/) - I chose fonts from Google Fonts and for the buttonStyler font-family selector.

**NOTES:**

* * *

1. [Form Outline](/assets/documentation/testing.md/#form-outline)  
    Before starting writing the HTML for the forms, I created an excel sheet with the information in the linked table. GitHub markdown does not have colspan or rowspan, which I needed to present the information. For example, using colspan and rowspan makes it more explicit about the function of the toggle switches. In this document, I reverted to using HTML table tags with colspan and rowspan. 

It has been a process to learn and develop this application. I had to use and implement many features that I have not used before. It is my first genuine attempt at using Javascript and jQuery, so at times I felt totally out of my depth. That said, I learned a lot and already viewed my work with a critical eye for ideas on improving and doing better. That will be in a future project when I rebuild this with the wisdom of hindsight.