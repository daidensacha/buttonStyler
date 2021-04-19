# Welcome

## Code Institute: Milestone Project 2

### CSS buttonStyler - Daiden Sacha - Full Stack Web Developer

* * *

Building on the skills used to complete my previous project, my goal is to complete a project with interactive features to engage the user. I've decided to build a site that will offer the user tools to create button styles.

## UX DESIGN

* * *

### 1\. Strategy

##### User Stories:

- **External Users** Hobbyists, through to learning and budding developers.
    
    1.  As an aspiring developer:
        - I want to play with styles to see what works and what doesn't work.
        - I want to see how the different style attributes work.
        - I want to see how to write CSS for buttons.
        - I want to create button styles on the fly to save time.
        - I want to learn how to design buttons.
    2.  As a hobbyist who likes to dabble with HTML and CSS:
        - I want to enjoy playing and be able to create buttons easily.
        - I want to see the result as I create it to know what I will have.
    3.  As a developer:
        - I'm always looking and open to trying tools to make my work more efficient and save me time.
        - I want to be able to enter colors that I am working with to easily create buttons that fit within the colors of my project.
        - I want to be able to play with designs and effects, and colors to discover what is possible.
- **The Owner** That would be me in this case.
    
    1.  As the owner:
        - I want to have a tool that makes my job easier.
        - I want to create a tool that I have used online before, but that does things I want it to do.
        - I want to create it to my design preferences and to be able to change it when I want to.
        - I want to be able to add to it and to expand it to improve it.
        - I want to share this tool with others who might also benefit from it.
        - I want to do this project to learn and to be able to put to use the things I have been learning in this last unit.

### 2\. Scope

Having played on a few of these sorts of sites myself, I know what I find interesting. Also, what makes it an experience to which I would return. Given the limit on time and the abundance of ideas, my challenge is to confine the project's scope to submit it in time.

Central to the site will be a playground of features to add styling to buttons.

- **Required Features**
    
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
    - **Footer** \- Simple Footer with the social links from the Navbar replicated, as above so below.
- **Functional Requirements**
    
    - **Color Pickers** \- Will open when clicked and will have an input so users can enter a specific color if they want. They can also use the mouse cursor to select a color. Form inputs have set default values, so there is a designed button to start.
    - **Range Selectors** \- The value will be displayed when the user changes it. As a guide, I will set default minimum and maximum values for different attributes for the user.
    - **Toggle Switches** \- Users will be able to disable or enable some fields of inputs to include or exclude them from the button styling. Not everyone likes a pizza with the works.
    - **Navbar** \- Fixed Navbar, with a toggle button so users will be able to open the off-canvas and see a list of valuable resources.
    - **Copy to clipboard** \- Users will be able to copy the CSS style easily, and there will be visual feedback to confirm the Copy is successful.
    - **Gradients** \- Users will be able to select colors to create gradients. A start color, end color, and a direction are required to compile CSS rules for cross-browser compatibility.
    - **Contact form** \- Users can access the contact form from the Navbar or Footer. Clicking on the email icon will open the modal with the contact form. It will include validation, and they will be able to send a message. A message will inform the user of the message submission's success or failure.
    - **Accordion** \- There will be multiple levels of forms containing fieldsets of grouped inputs providing values to compile CSS rules. The user will work through the different style attributes and see the result live as they change the style values. The Accordion will have one Form open at a time
    - **Demo button** \- The user will add their button text, colors, style attributes by changing the values of the form inputs. The change in values will be updated live to the demo button. The user can change the button's background color to see how it looks against the intended background color.
    - **CSS Output display** \- The CSS markup will be output into a display next to the Form and below the button.
- **Content Requirements**
    
    - **Single page site** \- Keeping it simple with a one-page site, not overcooked with content. The button styling will be the central focus.
    - **Bling** \- There will be a full-width banner image to welcome the site user.
    - **Forms within the Accordion** \- Inputs grouped by CSS rule into fieldsets, laid out sequentially so users can intuitively work through them.
    - **CSS Markup Block** \- A block within `<pre><code></code></pre>` tags to display the CSS output from selected CSS rules.
    - **Instructions** \- Simple instructions for users, explaining how easy it is to create, copy, and use the style creator.

**Required Form Elements**

- [ ] **Color picker:**
    
    - [ ] It was a process to research and select a color picker. There are many around, with varying degrees of documentation, and each has its pros and cons. In the end, my choice was the [jscolor color picker](https://jscolor.com/). It is well documented and has lots of examples showing different possibilities and how to configure them. They are very friendly and offer great support if you have any questions.
- [ ] **Range Selector:**
    
    - [ ] I found some great examples on [CSS Tricks](https://css-tricks.com/value-bubbles-for-range-inputs/) showing different ways to style range inputs and to output the value as it changes. I used one of these in my formes, with some minor changes to the CSS.
- [ ] **Toggle Switch:**
    
    - [ ] I have little experience or knowledge about this element. It's my preferred option to disable form field groups, so users can easily choose styling they want to include. I found the [Bootstrap Switch Button](https://gitbrent.github.io/bootstrap4-toggle/#usage) API available on Github. There is a working example on Codepen with the Bootstrap Range Selector.
- [ ] **Select:**
    
    - [ ] This is pretty straightforward and easy to incorporate. I will use the [Bootstrap Select](https://getbootstrap.com/docs/5.0/forms/select/).
- [ ] **Text Input:**
    
    - [ ] The Form will contain only one text input for entering the button text.

### 3\. Structure

- **Interaction Design**
    
    - I think it is human nature to be curious and to want to explore. My vision is that the site will engage and invite exploration to discover available features. It's meant to be an intuitive and joyful experience. Color has a powerful impact on feeling and emotion, so this will be a playground for exploring colors.
    - There will be color pickers, range selectors, fonts, a variety of features to tweak the color, size, and style of the buttons to see how the CSS is output.
    - The user will be able to play, create a button, and easily copy it to be able to use the exact style where they want to use it.
- **Information Architecture** Site information arranged as follows.
    
    - ***Simple and sweet:*** Home page will be colorful. The center point is the forms with inputs for styling the demo button, a playground full of possibilities.
    - ***Contact Form*** I want it simple and don't want users to navigate away from the reason that brought them to the site. So it will be a one-page site, with a contact form at the bottom of the page. I may put the contact form in a modal if, for some reason, it doesn't fit on the home page.
    - ***Social Links*** There will be social links for connecting to me or viewing my work on GitHub, Codepen, and Linkedin.
    - ***Planning*** Given the number of CSS rules to be generated, and corresponding inputs to create the data for outputting the CSS, I have created an excel sheet to use as I put the forms together.
    - ***Layout*** The Layout should be such that the button is visible along with the CSS output so the user can see the result as they change the styles.

### 4\. Skeleton

- **Wireframing:**
    As I'm be using Bootstrap, I created the wireframes with the Bootstrap breakpoints in mind for small, medium, and large screens. The header row will have a responsive background image. Next comes the row with form block and CSS display block. Followed then by a content block and then the Footer.
    I put the contact form in the Footer in the wireframes. However, in the end, I decided to put it in a modal that opens when you click on the email icon. 
    I combined the three separate wireframes into one image for the README as seeing them side by side gives a better perspective of the scale of difference between the different size screens. The original size wireframes are available for viewing in the assets/images folder. 
 
![Wireframes](assets/images/wireframes.png)

### 5\. Surface

**Visual Design:**
Color. Fun. Exploration. I want to take off my conservative hat and be a little daring to create an impression, definitely an experience to remember. It should be a fun experience to play with the button creator, one that the user will remember and return to when they next need to check out button styles.


## TECHNOLOGIES USED

* * *

***Languages Used***

1.  HTML
2.  CSS3
3.  SCSS
4.  JavaScript
5.  jQuery
6.  Markdown

***Frameworks, Libraries, Programs used***

1.  [Bootstrap](https://getbootstrap.com/)
    - Framework used to create a responsive website.
2.  [Font Awesome](https://fontawesome.com/)
    - Icons used for the social icon bar and the Copy to clipboard button.
3.  [Google Fonts](https://fonts.google.com/)
    - I chose a selection of Google Fonts to use in the "select" input for selecting CSS font style for the button styling.
4.  [GitHub](https://github.com/)
    - Used to host project repository and to deploy the project live via GitHub Pages
5.  [Git Version Control](https://git-scm.com/)
    - Used to commit blocks of work to the project and created branches for working on specific changes or testing.
6.  [Clipboard.js](https://clipboardjs.com/)
    - Use Copy (add to clipboard) functionality for the user to copy the CSS markup.
7.  [Balsamiq](https://balsamiq.com/wireframes/?gclid=Cj0KCQjwgtWDBhDZARIsADEKwgNq0GvC2yRLIRMqtOQmJMttVQwRQwncxUgML3HMPxy17ZF6--foTYkaArnQEALw_wcB)
    - Used to create wireframes
8.  [Adobe Illustrator](https://www.adobe.com/de/creativecloud.html?mv=search&mv=search&sdid=MQH8S7GK&ef_id=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB:G:s&s_kwcid=AL!3085!3!392740825380!b!!g!!%2Badobe!1419110055!55481570853&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB)
    - Used to edit and resize vector used for the banner background image.
9.  [Adobe Photoshop](https://www.adobe.com/de/creativecloud.html?mv=search&mv=search&sdid=MQH8S7GK&ef_id=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB:G:s&s_kwcid=AL!3085!3!392740825380!b!!g!!%2Badobe!1419110055!55481570853&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB)
    - Used to combine three wireframes into a single image for the README.
10. [EmailJS](https://www.emailjs.com/)
    - Used to process and send contact form information.
11. [Visual Studio Code](https://code.visualstudio.com/)
    - My editor of choice. My project was created and worked on locally and then pushed up to GitHub using terminal Git push.
12. [Joplin](https://joplinapp.org/)
    - A free, open-source note-taking and markdown application for OSX, iOS, Linux, Windows. I used it to create the README file for GitHub
13. [Squoosh](https://squoosh.app/)
    - Used to compress images to optimize load performance.
14. [jscolor Color Picker](https://jscolor.com/)
    - Color pickers are used on the website for choosing colors.
15. [shoelace](http://shoelace.io/)
    - Application for building Bootstrap grids. It is a convenient tool that simplifies building the responsive grid.

### TESTING

* * *

- **User Stories**
    - The color pickers are easy to use, and the user can use the mouse cursor to select a color, or can enter HEX, HEXA, RGB, or RGBA color in the color picker input. 

    ![Color pickers](/assets/images/rm-colorpickers.png)

	- Tested the color picker inputs to ensure that entering different color formats displays the entered preferred color.
    - Changing the values of each of the form inputs and fieldsets changes the button's styling, and the CSS is output to the CSS display block. 

    ![Form UI and output](/assets/images/rm-form-ui-output.png)

	- The user can select between differnet options, such as solid color or gradient color background.

	![Gradient Color Pickers](/assets/images/rm-form-background.png)

	- The user can also select the direction of the gradient.

	![Gradient Direction](/assets/images/rm-form-gradient.png)

	- Output of the gradient CSS has been written per the following example for a range of cross browser support.

	![CSS Gradient](/assets/images/rm-gradient-css.png)
	`background-image: -webkit-linear-gradient... // For Chrome (v 10-25) and Safari(v 5.1-6)`
    `background-image: -moz-linear-gradient... // For Firefox(v 3.6-15)`
    `background-image: -ms-linear-gradient... // For IE 10+`
    `background-image: -o-linear-gradient... // For Opera(v 11.5)`
    `background-image: linear-gradient... // For Google Chrome 25+, Mozilla Firefox 16+, Opera 15+, Safari 6.1+, IE 10+, iOS 7+, Android 4.4+`
  
  
  	- CSS is updated as the user changes the styles and is easily copied. Clicking on the copy icon highlights the copied CSS and displays a success message.

  	![CSS Copied](/assets/images/rm-copied.png)
      
    - I created a [Codepen](https://codepen.io/daidensacha/pen/oNBqJoR) for this next test,  where the user can enter copied button CSS to see the result. 

	    1. Click on the Copy to clipboard icon to copy the CSS.
	    2. A success message is shown "Bazinga! CSS copied." 
	    3. Go to the Codepen, paste the button CSS into the CSS field. It's marked where to add it. The result is an exact replication of the button displayed in the buttonStyler. It works perfectly.

	![Test CSS Codepen](/assets/images/test-css-codepen.png)

- **Testing Environment**
I have two DELL U2419H monitors, so I can use one for the code editor and the second for displaying the work when I'm working. Together with Visual Studio Live Server, it allows me to check my work in real-time as I work. 
I used console.log at incremental points in the code with specific messages to identify areas where errors appeared.

- **Form Inputs and fieldsets**
    - This was an ongoing and integral part of the development process. From the construction of the Form to start with, I used Google Chrome DevTools to test the Form and HTML on the various screen sizes, including tablet portrait and landscape view. Before I could move onto the next stage, the inputs with their labels needed to display correctly.
   
 - **The CSS display block**   
My idea for to display the CSS rules was that I would create a span per rule, and they would reside within a" `<pre>`" block. I could process values from the inputs, output CSS strings to the spans, and use JS to add the style to the button. I started using this method, and it worked, but it became unviable when I found out pseudo CSS rules cannot be added to an element directly using JavaScript.  I needed to research more to find an alternative way to add styles to the button.
***Solution***
	- [Create a style element, append it to the HEAD, and insert the CSS rule.](https://dev.to/karataev/set-css-styles-with-javascript-3nl5) 
	Perfect, as it would also work for pseudo CSS rules. 
	- `.update()`
	I came across this function on [Stack Overflow](https://stackoverflow.com/questions/55940670/how-to-get-slider-range-value-and-store-it-in-a-variable-within-javascript/55940824) when researching how to get the value of the range slider and to display it as it changes. There is information online and at [MDN Web Docs](https://developer.mozilla.org/en-US/search?q=.update%28%29). 
	Used together with `onchange` or `oninput` event listeners, it is a powerful function that listens to my form inputs and updates values. 
	The Javascript that processes the form input values and creates the CSS rules is within the `function update()`.
	- You can see this code in form.js. 
		- Variables assigned to the individual inputs hold the values from the form inputs. 
		- Using literal notation, I used the variables to make strings that are the CSS rules.
		- A sequence of if statements ascertain if the button style and CSS Output includes the CSS rules; and pushes the included rules to an array. 
		- The array is assigned to a variable using `.join("\n")`. It moves each CSS rule to a new line and removes the comma joining the arrays strings. 
		- The variable holding the CSS rules is then appended to the Style element in the HEAD and output to the CSS output display `<pre id="cssContainer"></pre>`.
- **The Process**
Typos were, on the most part, what was tripping me up. It was a process of checking for misspelled names or variables. Writing on one screen and watching the console as I saved each part that I wrote gave instant feedback in most cases. It was a pretty systematic process. 
 **Bug** 
	-  I had added `oninput update(); `to all the form elements, and it worked for the inputs, but for some reason, my toggle switches were not working properly. The issue was that the event listener was not triggering the function for CSS rules and styling to be updated when the Toggle was clicked. Through a process of elimination, using `console.log()`, and placing this at stages throughout the code, I was able to see that the update was working `oninput` with the form inputs, but not with the toggle switches. In an aha moment, I changed the event listener of the toggle switches to `onchange update()`. Bazinga! The Bug disappeared.

### Testing Notes

* * *

**Research, testing, and choosing what to use**
My starting point was my vision as to what I wanted to create. I never used or worked with range selectors, color pickers, or toggle switches. Also, I wanted to add my contact form into a modal or off-canvas if possible using Bootstrap. I had done this with UiKit, but it is my first project using Bootstrap. 
So my initial strategy was to research, and I used Codepen to create pens and implement working features. I wanted to learn how to do it and what before jumping into writing code. There are several pens where you can see what I was playing with and understand what I have put into the site. 
- [Toggle Switch disables fieldset of form inputs](https://codepen.io/daidensacha/pen/yLgzojL) An experiment in styling a toggle switch and using it to disable the fieldset of form elements.
- [Toggle Switch disabling form fieldset,](https://codepen.io/daidensacha/pen/OJWxmvP) In this example, I was outputting the boolean of the toggle switch and fieldset disabled state. 
- [Comparing a toggle switch and checkbox.](https://codepen.io/daidensacha/pen/RwKKWbJ) I was also comparing the use of JavaScript vs. jQuery for disabling the inputs. 
- [Toggle switch, range selectors, and color picker](https://codepen.io/daidensacha/pen/ZELexZB) Here I was playing with the positioning of the Form with the different features that I wanted to put in it.
- [Bootstrap 4 color pickers](https://codepen.io/daidensacha/pen/jOyVrqW) This was my initial choice, but I moved away from it after experiencing some conflicts and bugs that I couldn't work out. With limited time, my decision to use jscolor color picker was a good one. 
- [Bootstrap Offcanvas](https://codepen.io/daidensacha/pen/QWdvyBd) based on a demo version from Bootstrap.

I made many mistakes playing in Codepen, working things out, and learning a lot in the process. With this knowledge, I proceeded with the site.  

**Form HTML**
The HTML came together really quickly and seamlessly. The Accordion, which has five levels and 33 form elements, was done in a day. All form elements added and viewing perfectly on all screen sizes. Chrome DevTools tools with the ability to switch between different types of devices are helpful.

**JavaScript Implementation**
This project was my first genuine attempt at working with Javascript. I gave no thought to the scale of the job I set myself and only knew what I wanted to create. In taking this path, I was totally out of my comfort zone. I was constantly researching, reading, and faced with finding solutions.
-  I had issues disabling fieldsets of inputs with the toggle buttons using JavaScript. The color pickers were still clickable and would open, even though the color input was disabled. In the end, I discovered that jQuery did the trick.
    -  **Addendum**: I thought this was behind me until I ran my code through the validation. One warning was that I had used `input disabled= "true"`, so I changed it to the recommended `input disabled`. My problem came back with the color picker being disabled but popping up on click when disabled. It turned out that I had removed the disabled from one altogether and relied only on a fieldset group class name and jQuery to disable the group. When I added `input disabled` back in, it worked fine, so it was a relatively easy mistake to sort out.

- **CSS Display Copy to clipboard** 
I researched various options and chose clipboard.js due to cross-browser compatibility and functionality. Their website has clear documentation, and I also found a few other sources with examples showing how to implement clipboard.js. 
    - [add-buttons.js](https://gist.github.com/dguo/1730d4bfeb370d92117e092311262bfa) I used this code and changed it to suit my needs. I added a text node with the `<i>` element, tooltip attributes, and a font awesome copy icon. This added the copy function to the CSS block. 
    - [clipboard.js](https://clipboardjs.com) documentation shows how to handle the event and display the success message or error message. I tried this, but the copy message was gone in a flash and not user-friendly. I added a timeout, so it disappears after 2 seconds. I created class names for the success and error messages. I then added color to the class names with CSS, and when clicking the copy icon, the function adds the class name to the message display. 
- **Git Version Control**
`git status`, `git add .`, `git commit -m "commit text" `, and `git push` was regularly used. I tried to use it as I worked with chunks, so the commits were my reference point if I want to go back and check something. For this project, especially when it came to developing the `form.js` to handle the form input data and output the CSS styles, I decided to create a branch so that if things went haywire, I had a place reserved to start from afresh. Create the branch `git checkout -b add-colorpickers`. It was my first time using this, and it went pretty seamlessly. When I finished and was happy, I sat on it for a few days, fearful of losing the work, not knowing what would happen when I merged it to the master. In the end, I bit the bullet, and Git did not complete the merge but displayed the files with "common code" and the "differences in code" from the two files, so I could choose what to merge and what not to. It was seamless, and I had no real issues. It was a good process, and the experience showed me how to use the git branch. There is a lot to learn, but it is brilliant how it works.  

- [W3C HTML Validation](https://validator.w3.org/nu/): Passes W3C HTML validation.
- [W3C CSS3 Validation](https://jigsaw.w3.org/css-validator/): Passes the W3C CSS3 validation.
- [JS Hint](https://jshint.com/) : Passes JS Hint validation

### DEPLOYMENT

* * *
**Creating the file structure to start**  
I created the initial repository for this project in [GitHub Desktop](https://desktop.github.com/). It's straightforward. With GitHub Desktop open, click in the top left where it says current repository, then on the add button, and then "create new repository". You can choose the location to save it locally, publish it in GitHub, open it in VS Code directly, or view the files in the browser. I opened it in VS Code and started to create my files directly in VS Code terminal. To start with, `git init` initializes your project. Create files, `mkdir assets assets/js assets/css assets/images assets/documents`. Then the files, `touch index.html assets/js/main.js assets/css/style.css`. That was the start of the project. 

**Initialising Git and regular commits**
`git init` initializes git version control. 
`touch .gitignore` creates the git ignore for adding files to be ignored.
`echo 'file_name' >> .gitignore` to add a file to gitignore using terminal.
`git status` shows the status of the staging area and new or changed files.
`git add [file_name]` for one file, or `git add .` for all files adds them.
`git commit -m "commit_comment"` commits the changes
`git push` pushes the commits up to GitHub. 

**Deploying to GitHub Pages**
1. Click `Settings` on the repository page.
2. Click on the GitHub Pages tab to the left. 
3. Under source, click the dropdown, select `master`, or the branch of your choice. 
4. Click save, and the message shows, "Your site is ready to be published at https://daidensacha.github.io/ButtonStyler/".

NOTE: I had an issue with my background images not showing up. Initially, when I created my folders, I named the images folder "Images". GitHub is case sensitive, so it caused problems. In the end, I moved all my images to back them up, deleted the "Images" folder, created a new "images" folder, did my `git add .`, `git commit -m "fixing incorrect folder" name`, and `git push`. It was a small mistake and took a bit to sort out. 

**Deployment Issues**
Until deployment, my only real means of testing was on my local server using Chrome DevTools, Firefox dev tools, and Safari dev tools. On my local server, the site was viewing well; however, the live version on GitHub Pages was presenting an issue with margins and padding that was not showing on the locally served version. The site page had an overflow issue caused by using the Bootstrap helper class `px-0` on the `container-fluid` to remove margin on mobile devices. I moved the helper classes to the `row` element, and the issue was fixed. 
I still had problems, though, with the site appearing to be served differently from my local server and the GitHub pages server. From this point, I worked with Chrome DevTools to identify needed changes, then implemented them locally, committed, and pushed them to the remote master repository. This is why, at the end of my project, there are so many commits. I stopped trusting the locally served version of the site and wanted to check it on the live version before proceeding. 

**CREDITS**

* * *


**NOTES:**

* * *