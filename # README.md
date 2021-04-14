# Welcome

## Code Institute: Milestone Project 2

### CSS buttonStyler - Daiden Sacha - Full Stack Web Developer

* * *

Building on the skills used to complete my previous project, my goal is to complete a project with interactive features to engage the user. I've decided to build a site that will offer the user tools to create button styles.

## UX DESIGN

* * *

#### 1\. Strategy

##### User Stories:

- **External Users** Hobbyists, through to learning and budding developers.
    
    1.  As an aspiring developer:
        - I want to play with styles to see what works and what doesn't work.
        - I want to see how the differerent style attributes work.
        - I want to see how the CSS is written up for buttons.
        - I want to create button styles on the fly to save time.
        - I want to learn how to design buttons.
    2.  As a hobbyist who like to dabble with HTML and CSS:
        - I want to enjoy playing and be able to easily create buttons.
        - I want to see the result as I create it to know what I will have.
    3.  As a developer:
        - I'm always looking and open to try tools that will make my work more efficient and save me time.
        - I want to be able to enter colors that I am working with so I can easily create buttons that fit within the colors of my project.
        - I want to be able to play with designs and effects, and colors to discover what is possible.
- **The Owner** That would be me in this case.
    
    1.  As the owner:
        - I want to have a tool that makes my job easier.
        - I want to create a tool that i have used online before, but that does things I want it to do.
        - I want to create it to my own design preferences, and to be able to easily change it when I want to.
        - I want to be able to add to it, and to expand it if I think it can be improved.
        - I want to share this tool with others who might also benefit from it.
        - I want to do this project to learn and to be ableto put to use the things I have been learning in this last unit.

#### 2\. Scope

Having played on a few of these sorts of sites myself, I know what I find interesting. Also, what makes it an experience to which I would return. Given the limit on time, and the abundance of ideas, my challenge is to confien the scope to what is possible so the project can be submitted in time.

Central to the site will be a playground of features to add styling to buttons.

- **Required Features**
    
    - **Color picker feature** \- Users can select colors for the different attributes of the button.
    - **Color Format** Users will be able to enter the color in a text input, in preferred format HEX, RGB/A, HSL/A.
    - **Range Selector** For selecting the size, pixels, distance, etc.
    - **Toggle Switch** A checkbox convereted displayed as a toggle switch for enabling or disabling form fields.
    - **Gradient Selector** Gradients are becoming the norm, supported in all modern browsers. Need a feature for users to choose gradients.
    - **Social Icons** The icons will link to my GitHub, Codepen, and Linkedin profiles.
    - **Contact Form** Users will be able to contact me by using the contact form.
    - **Modal**\* The modal will be for the contact form so I can keep the site to one page.
    - **Navbar**\* Navabar will house the social icons.
    - **Offcanvas navbar** An offcanvas that can be toggled open at any time, not only for small screens.
    - **Accordion** To hold the forms of inputs that will be grouped so that users can style the demo button.
    - **Demo button** A demo button to visually show the styling results.
    - **CSS display** An CSS output display that will update as the user styles the button.
    - **Copy to clipboard** A button for users to copy the css style.
    - **Footer** Simple footer with the social links from the navbar replicated, as above so below.
- **Functional Requirements**
    
    - **Color Pickers** Will open when clicked, and will have an input so users can enter a specific color if they want, or use the mouse cursor. Default colors will be set for different attributes, so there is a designed button to start with.
    - **Range Selectors** The value will be displayed when the user changes the it. Default and minimum and maximum values will be set for different attributes as a guide for the user.
    - **Toggle Switches** Users will be able to disable, or enable some fields of inputs to include or exclude them from the button styling. Not everyone likes a pizza with the works.
    - **Navbar** Fixed navbar, with a toggle button so users will be able to open the offcanvas, and see a list of useful resources.
    - **Copy to clipboard** Users will be able to easily copy the CSS style and there will be visual feedback to confirm the copy is successfull.
    - **Gradients** Users will be able to select colors to create gradients. A start color, a end color, and a direction select will be used to compile CSS rules for cross browser compatability.
    - **Contact form** Users will be able to access the contact form from the navbar or footer. By clicking on the email icon will open the modal withe the contact form. It will include validation and they will be able to send a message. A success message will be displayed to let the user know the message has been sent.
    - **Accordion** There will be multiple levels of forms and fieldsets of inputs grouped so they can be compiled into CSS rules. The user will be able to work though the different style atrtibutes and see the result live as they change the style values.
    - **Demo button** The user will be able to add their own button text, colors, style attributes by changing the values of the form inputs. The change in values will be updated live to the demo button. The user will be able to change the background color of the button so they see what the style looks like against the intended backgound for the button.
    - **CSS Output display** The CSS markup will be output into a display next to the form, and below the button.
- **Content Requirements**
    
    - **Single page site** Keeping it simple with a one page site, not overcooked with content. The button styling will be the central focus.
    - **Bling** There will be a full width banner image to welcome the site user.
    - **Forms within the accordion** Inputs grouped by CSS rule into fieldsets, layed out sequetially so users can intuitively work through them.
    - **CSS Markup Block** A block within `<pre><code></code></pre>` tags to display the CSS output from selected CSS rules.
    - **Instructions** Simple insturutions for users, explaing how easy it is to create, copy, and use the style createor.

**Required Form Elements**

- [ ] **Color picker:**
    
    - [ ] It was a process to research and select a color picker. There are many around, with varying degrees of documentation, and each has its pro's and cons. In the end my choice was the [jscolor color picker](https://jscolor.com/). It is well documented and has lots of examples showing different possiblities, and how to configure them. They are very friendly and offer great support if you have any questions.
- [ ] **Range Selector:**
    
    - [ ] I found some greate examples on [CSS Tricks](https://css-tricks.com/value-bubbles-for-range-inputs/) showing differnet ways to style range inputs and to output the value as it changes. I used one of these in my formes, with some minor changes to the CSS.
- [ ] **Toggle Switch:**
    
    - [ ] I have little experience or knowledge about this element. It's my preferred option to disable form field groups, so users can easily choose styling they want to include. I found the [Bootstrap Switch Button](https://gitbrent.github.io/bootstrap4-toggle/#usage) API available on Github. There is a working example on Codepen with the Bootstrap Range Selector.
- [ ] **Select:**
    
    - [ ] This is pretty straightforward and easy to incorporate. I will use the [Bootstrap Select](https://getbootstrap.com/docs/5.0/forms/select/).
- [ ] **Text Input:**
    
    - [ ] In the whole form only one will be needed, for entering the button text.

#### 3\. Structure

- **Interaction Design**
    
    - I think it is human nature to be curious and to want to explore. My vision is that the site will engage and invite exploration to discover available features. Its meant to be an intuitive and joyful experience. Color has a powerful impact on feeling and emotion, so this will be a playground for exploring colors.
    - There will be color pickers, range selectors, fonts, a variety of features to tweak the color, size, and style of the buttons to see how the CSS is output.
    - The user will be able to play, create a button, and be able to easly copy it to be able to use the exact style where they want to use it.
- **Information Architecture** Site information arranged as follows.
    
    - ***Simple and sweet:*** Home page will be colorful. The centre point beign the forms with inputs for styling the b=demo button. A playground full of possibilities.
    - ***Contact Form*** I want it simple and don't want users to navigate away from the reason that brought them to the site. So it will be a one-page site, with a contact form at the bottom of the page. I may put the contact form in a modal if, for some reason, it doesn't fit on the home page.
    - ***Social Links*** There will be social links for connecting to me or viewing my work on GitHub, Codepen, and Linkedin.
    - ***Planning*** Given the quantity of CSS rules to be generated, and corresponding inputs to create the data for outputing the CSS, I have created an excel sheet to use as I put the forms together.
    - ***Layout*** The layout should be such that the button is visible along with the CSS output so the user can see the result as they change the styles.

#### 4\. Skeleton

- **Wireframing:**
    As i'm be using Bootstrap, I created the wireframes with the Bootstrap breakpoints in mind for small, medium and large screens. The header row will have a responsive background image. Next are the Next somes the row with form block and CSS display block. Follwed then by a content block and then the footer.
	In the wireframes I put the contact form in the footer, however in the end I decided to put it in a modal that opens when you click on the email icon. 
	I combined the 3 separate wireframes into one image for the README as seeing them side by side gives a better persepctive with of the scale of difference between the different size screens The original size wireframes are available for viewing in the document folder.

![wireframes.png](:/8d920349db814f2a8ecbf3bdcf23b459)

#### 5\. Surface

**Visual Design:**
Color. Fun. Exploration. I want to take off my conservative hat and be a little daring to create an impression, definitely an experience to remember. It should be a fun experience to play with the button creator, one that the user will remember and return to when they next need to check out button styles.

&lt;< Here is the technologies used section &gt;>

### TECHNOLOGIES USED

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
    - Framework used to create responsive website.
2.  [Font Awesome](https://fontawesome.com/)
    - Icons used for the social icon bar, and the copy to clipboard button.
3.  [Google Fonts](https://fonts.google.com/)
    - A selection of Google Fonts were used in the “select” input for selecting CSS font style for the button styling.
4.  [GitHub](https://github.com/)
    - Used to host project repository, and to deploy the project live via GitHub Pages
5.  [Git Version Control](https://git-scm.com/)
    - Used to commit blocks of work to project. Also created branches for working on specific changes or testing.
6.  [Clipboard.js](https://clipboardjs.com/)
    - Used to include copy (add to clipboard) functionality for user to copy the CSS markup.
7.  [Balsamiq](https://balsamiq.com/wireframes/?gclid=Cj0KCQjwgtWDBhDZARIsADEKwgNq0GvC2yRLIRMqtOQmJMttVQwRQwncxUgML3HMPxy17ZF6--foTYkaArnQEALw_wcB)
    - Used to create wireframes
8.  [Adobe Illustrator](https://www.adobe.com/de/creativecloud.html?mv=search&mv=search&sdid=MQH8S7GK&ef_id=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB:G:s&s_kwcid=AL!3085!3!392740825380!b!!g!!%2Badobe!1419110055!55481570853&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB)
    - Used to edit and resize vector used for the banner background image.
9.  [Adobe Photoshop](https://www.adobe.com/de/creativecloud.html?mv=search&mv=search&sdid=MQH8S7GK&ef_id=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB:G:s&s_kwcid=AL!3085!3!392740825380!b!!g!!%2Badobe!1419110055!55481570853&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgPZA7lnHvCbzk4T9-Q7HVENkRXnk1GxIseaWipJrYnWF0LQvFTw21MaAlQ6EALw_wcB)
    - Used to combine the wireframe images into a single image for the README.
10. [EmailJS](https://www.emailjs.com/)
    - Used to process and send contact form information.
11. [Visual Studio Code](https://code.visualstudio.com/)
    - My editor of choice. My project was created and worked on locally, and then pushed up to GitHub using terminal Git push.
12. [Joplin](https://joplinapp.org/)
    - A free open-source note-taking and markdown application, for OSX, iOS, Linux, Windows. I used it to create the README file for GitHub
13. [Squoosh](https://squoosh.app/)
    - Used to compress images to optimise load performance.
14. [jscolor Color Picker](https://jscolor.com/)
    - Color pickers used on the website for choosing colors.
15. [shoelace](http://shoelace.io/)
    - Application for building Bootstrap grids. A really handy tool that simplifies building the responsive grid.

**TESTING**

* * *

- **User Stories**
    
    - Tested each of the form inputs and fieldsets to see that the styling is added to the button, and the CSS is output to the CSS display block.
    - Tested the color picker inputs to ensure that different color formats can be entered to see a preferred color.
    - For this next test I created a [Codepen](https://codepen.io/daidensacha/pen/oNBqJoR) where the button CSS can be tested to see the result. Click on the copy to clipboard icon, and a message is shown to confirm the CSS was copied. You can then go to the Codepen, paste the button CSS into the CSS field. It's marked where to add it. The result is an exact replication of the button that was displayed in the buttonStyler. It works perfectly.
- **Form Inputs and fieldsets**
    
    - This was an ongoing and integral part of the development process. From construction the form to start with, I used google Chrome dev tools to test the form and HTML on the various screen sizes, including tablet portrait and landscape view. It was really important that the inputs and their labels displayed correctly throughout the process before I could move onto the next stage.
    - When it came to adding JS and the code to bring the styling to life, I worked with 2 x DELL U2419H monitors, so I could have one screen for VS Code, and the other for displaying the work, and watching the console for errors. I used console.log at incremental points in the code with specific messages to identify areas where errors showed.
- **Visual Studio Code - Live Server**
    
    - I found it really beneficial to be able to view the changes to the work live as on saving the work. I meant that I could monitor for mistakes and fix them knowing where they were arising, rather than looking for them.
        
    
  
    


3.  At this point I started to look at the form fieldsets of inputs and work out how to generate the CSS output and styling. The first fieldset was pretty straight forward, as the inputs individually geranted single CSS rules. The font-family (a selection of 10 stylish google fonts listed in a select), font-color (color picker), and font-size (range selector). My initial idea was to create spans and place them with in `<pre></pre>` tags within a div beside the accordion with the fomrs. The CSS rule was created, placed in the corresponding span, and the CSS rule also added to the display button using Javascript. Then I came to the second fieldset, for font-shadow, and i needed to combine the values from 4 inputs, that are initually disabled, to output the CSS and style. I need to research and learned that I would not be able to impliment the hover as its not possible to apply pseudo classes on an element directy with Javascript.
4.  I had to take a step back, and research. In the end the solution was to create a style tag, and append it as a child to the HEAD of the HTML.
5.  `update()`I came acros this function on [Stack Overflow](https://stackoverflow.com/questions/55940670/how-to-get-slider-range-value-and-store-it-in-a-variable-within-javascript/55940824) when researching how to get the value of the range slider and to display it as it changes. There is information online and at [MDN Web Docs](https://developer.mozilla.org/en-US/search?q=.update%28%29). I used it bay adding it to the form inputs with an event listener. My code to process the form data is wrtten inside a `function update()` that updates when the event listeners trigger the function. This powerful function made it possible to easily output live CSS rules and CSS styles.
6.  Values from the inputs are stored in variables assigned to the individual inputs. This made it easy to combine the variables into strings using literal notation, and assign those individual strings to variables. I created an array, and each time update() is triggered, it runs the function reseting the empty array, and through if statements selected iputs are pushed to the array in a sequential order that makes allows for outputing the CSS. Then the array is assigned to a variable using `.join("\n")`. this variable aptly named `css`, is then appended to the TextNode, e.g. `cssContainer.appendChild(document.createTextNode(css));` in the head as css in the style tabs. I didn't need the many spans that I initially created, and `<pre id="cssContainer"></pre>` became the target for displaying the live CSS rules.
7.  I had added `oninput update();`to all the form elements, and it worked for the inputs, but for some reason my toggle switchs were not working properly. The issue was that the event listener was not triggering the fucntion for CSS rules and styling to be updated when the toggle were clicked. Trough a process of elemination, using `console.log()`, and placing this at stages thoughout the code, I was able to see that the update was working `oninput` with the form inputs, but not with the toggle switches. In an aha moment, I changed the event listener of the toggle switches to `onchange update()`. Bazinga! The bug disspaeared.

### Testing Notes

* * *

**Research, testing and choosing what to use**
My starting point was my vision as to what I wanted to create. I never used or worked with range selectors, color pickers, or toggle switches. In addition, I wanted to add my contact form into a modal, or offcanvas if possible using Bootstrap. I had done this with UiKit, but it is my first project using Bootstrap. 
So my initial strategy was to research, and I used Codepen to createa pens and implement working features there so I could learn how to do it, and what was needed before jumping into writing code. There are several pens where you can see what I was playing with, and understand then what I have put into the site. 
- [Toggle Switch disabling fieldset of form inputs](https://codepen.io/daidensacha/pen/yLgzojL) An experiment in styling a toggle switch, and using it to disable the fieldset of form elements.
- [Toggle switch disabling form fieldset,](https://codepen.io/daidensacha/pen/OJWxmvP) In this example I was outputting the boolean of the toggle switch and fieldset disabled state to see how it was reflected. 
- [Comparing a toggle switch and checkbox.](https://codepen.io/daidensacha/pen/RwKKWbJ) I was also comparing the use of JavaScript vs jQuery for disabling the inputs. 
- [Toggle switch, range selectors, and color picker](https://codepen.io/daidensacha/pen/ZELexZB) Here I was playing with the positioning of the form with the different features that I wanted to put in it.
- [Bootstrap 4 color pickers](https://codepen.io/daidensacha/pen/jOyVrqW) This was my initial choice, but I moved away from it after experiencing some conficts and bugs that I couldn't work out. With limited time, my choice to use jscolor color picker was a good one. 
- [Bootstrap Offcanvas](https://codepen.io/daidensacha/pen/QWdvyBd) is base don an demo version from Bootstrap, and was used in my site.

I made a lot of my mistakes playing in Codepen, woring things out, and learning a lot in the process. With this knowledge I proceeded to with the site.  

**Form HTML**
The HTML came together really quickly and seamlessly. The accordion with 5 levels and 33 form elements in it, took a little while, but the whole page was done in a day, with all form elements added, and viewing perfectly on all screen sizes. Chrome developer tools with the ability to switch between different types of devices is really helpful.

**JavaScript Implementation**
This was my first real attempt at working with Javascript. I gave no thought to the scale of the job I set myself, and only knew what I wanted to create. In taking this path I was totally out of my comfort zone. I was constantly researching, reading, and faced with finding solutions.
-  I had issues disabling fieldsets of inputs with the toggle buttons using JavaScript. It worked, however the colro pickers were still clickable and would open, even though the input was disabled. In the end, I discovered that jQuery did the trick, and although Javascript was the primary code used, I used jQuery in a few places where it was needed. 
	-  **Addendum**: I thought this was behing me, untill I ran my code though the validation. One warning was that I had used `input disabled="true"`, and that it is no longer used, so I changed it to the recomended `input disabled`. My probelm came back with the color picker being disabled but popping up on click when disabled. It turned out that I had removed the disabled from one altogether, and was relying only on the gourp class name and jQuery to disable the group. When I added `input disabled` back in, it worked fine, so was a relatively easy bug to sort out.
-  **How to set CSS styles and display the CSS Markup** 
I started by applying the CSS Styling directly to the demo button. It was pretty straight forward with applying styles form individual imputs. But when I reached the second fieldset and was faced with compiling CSS markup from a ncombination of fields, it stumped me. through research I also dicovered that pseudo CSS styles cannot be applied directly to elements using JavaScript. 
My solution in the end was to scrap my initial JavaScript, and to start again but with a different strategy. Create a style tags, append them to the head, and then set the css rules directly to those tags. All inputs have an event listner with .update() funtion so they update oninput, or onchange, depending on the input. This is all in the form.js, where I assign variables to the inputs, the toggle switches, color pickers, the demo button, the CSS output display block. I used literal notation to create strings with the die=fferent values from inputs in fieldsets to create rules Using if statements, each fieldset passed with the function and if the syle is to be included it is pushed to an array. Here it was important that the order is sequential, so the output was in order. 
What brings it together in the end, is to assign the array to a variable using this statement. `let css = lines.join("\n");` The strings within the array are joind with the new line escape, so the rules display per normal CSS. I needed to add `\t` at teh begining of each string that was then assigned to a variable. 
This was the major part fo the work, and it was a week of highs and lows, long hours, dispair, however in the end I'm really happy with how it turned out. 
- **CSS Display Copy to clipboard** 
I reaerched various options and concluded that clipboard.js was the best option due to cross brower compatability, and functionality. There website has clear documentation, and I also found a few other sources with examples showing how to impement the clipboard. 
	- [add-buttons.js](https://gist.github.com/dguo/1730d4bfeb370d92117e092311262bfa) I used this code, and changed to to suit my needs. I added a text note with the `<i>`, and tooltip attributes, with font awesome copy icon using and this created the copy fucntion. 
	- [clipboard.js](https://clipboardjs.com) documentatin shows how to handle the event and diplay the success message or error message. This was cool, but the message ws gone in a flash and not really user friendly. I added a timeout so it dissapears after 2 seconds. The coloring is accomplished by adding class names styled specifically for the message display. 
- **CSS Display background issue**
The CSS display block is for good reason beside the accordion with the styling inputs. The CSS markup can vary, from half the height of the accorion, to almost full height. With no backgroudn it leaf an empty space that just didn't look right. I added a background color to the CSS block, but it inluded the background of the conatiner padding that is normally invisible. It had the effect of looking out of balance, as the accordion to the left had invisible padding. It took me a whiel to find out what was causing it, and my solution in the end, was to move up a level and add the background color to the whole row, so it no longer looks out of balance, and the CSS display looks ok if the markup is not filling the display block.
- **Git Version Control**
`git status`, `git add .`, `git commit -m ""` and `git push` were regularly used. I tried to use it as I worked with chunks, so the commits were commented in stages. For this project, especially when it came to developing the `form.js` to handle the form input data and output the CSS styles, I decided create a branch, so that if things went really haywire then I had a place reserved to start from afresh. Create the branch `git checkout -b add-colorpickers`. It was my first time using this, and it went pretty seemlessly. When I finished and was happy, i sat on it for a few days in fear of loosing the work, not knowing what would happen when I merged it to the master. In the end, I bit the bullet, and Git did not complete the merge, but showed me the files with commone code shown, and the differneces in coce from teh two files, so I could choose what to merge and what not to. I was seamless and I had no real issues. It was a good process, and I the experience showed me how to use git branch. There is alot to learn, but it is brilliant how it works.  

- [W3C HTML Validation](https://validator.w3.org/nu/): Passes W3C HTML validation.
- [W3C CSS3 Validation](https://jigsaw.w3.org/css-validator/): Passes the W3C CSS3 validation.
- [JS Hint](https://jshint.com/) : Passes JS Hint validation

**DEPLOYMENT**

* * *
**Creating the file structure to start**  
The initial repository for this project was created in [GitHub Desktop](https://desktop.github.com/). Its very easy. With GitHub Desktop open, click in the top left where t says current repository, then on the add button, and then on "create new repository". You can choose the location to save it locally, to publish it in GitHub, to open it in VS Code directly, or to view the files in the browser. I opened it in VS Code and started to create my files directly in VS Code terminal. To start with, `git init` initialises your project. Create files, `mkdir assets assets/js assets/css assets/images assets/documents`. Then the files, `touch index.html assets/js/main.js assets/css/style.css`. That was the start of the project. 

**Initialising Git and regular commits**
`git init` initialises git version control. 
`touch .gitignore` creates the git ignore for adding files to be ignored.
`echo 'file_name' >> .gitignore` to add a file to gitignore using terminal.
`git status` shows the status of the staging area, and new or changed files.
`git add [file_name]` for one file, or `git add .` for all files adds them.
`git commit -m "commit_comment"` commits the changes
`git push` pushes the commits up to GitHub. 

**Deploying to GitHub Pages**
1. Click `Settings` on the repository page.
2. Click on the GItHub Pages tab to the left. 
3. Under source, click the dropdown, select `master`, or the branch of your choice. 
4. Click save, and the message shows, " Your site is ready to be published at https://daidensacha.github.io/ButtonStyler/".

NOTE: I had an issue with my background images not showing up. Originally when i created my folders, I named the images folder "Images". GitHub is cas sensitive, so it caused problems. In the end I moved all my images to back them up, deleted the "Images" folder, created a new "images" folder, did my `git add .`, `git commit -m "fixing incorrect folder" name`, and `git push`. It was a small mistake, and took a bit to sort it out. 

**CREDITS**

* * *


**NOTES:**

* * *