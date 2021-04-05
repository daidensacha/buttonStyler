# Welcome
## Code Institute: Milestone Project 2 
### Portfolio - Daiden Sacha - Full Stack Web Developer
* * *
Building on the skills used to complete my previous project, my goal is to complete a project with interactive features to engage the user. I've decided to build a site that will offer the user tools to create button styles. It's not new, as I've used such sites and found them to be helpful. To be inspired and learn in the process. 

## Planning
* * *

### UX - The five planes of user experience

1. STRATEGY

The target market will be primarily for:
- **External Users** *Hobbyists, though to learning and budding developers.* 
	- Those interested in learning, perhaps with a specific need for a personal project. 
	- Developers interested in playing with styling, experimenting to see what new ideas might arise. 
	- Budding web developers interested in seeing what happens, how, and why when creating effects.

- **The Owner** That would be me. If I'm honest, I see it's an opportunity to meet a challenge and see how I can use the new knowledge. I would say that learning Javascript and jQuery has been an up-and-down process. I'm constantly learning, falling in holes, and researching to fill gaps in what I know and don't know. 
- This I know, that the time is short because, though I have four weeks, I also have a million ideas. This process to kick it off is to narrow the scope to what is possible given the allotted time, and what I can't add now, I can add later. 

2. SCOPE

Having played on a few of these sorts of sites myself, I have an idea from my perspective of what I find interesting. Also, what makes it an experience to which I would return. Given my limit for time, I will list ideas that I would like to incorporate, and my challenge will be to narrow to scope to what is possible in the allotted time. The site will invite the curious to tinker.

Central to the site will be a playground of features to add styling to buttons.

- **Required Features**
	-  ***Color picker feature*** - Users can select colors for the different attributes of the button. 
	-  ***Color Format*** Users will be able to enter the color in a text input, in preferred format HEX, RGB/A, HSL/A.
	-  ***Range Selector*** For selecting the size, pixels, distance, etc. 
	-  ***Toggle Switch*** Users will be able to disable groups of fields that might not be required. The toggle switch is the preferable option from my perspective. 
	-  ***Gradient Selector*** Gradients are becoming the norm,  supported in all modern browsers.
	-  I would like the CSS to output to a field where the user can copy it easily when their work complete. 
	- Also, I want to play with color to add some feature where the user can interact with the color schemes and change styling to suit personal preference. I'm thinking of a button or a few buttons that will change certain elements. For this, I will need to create class names that will make it easy to update the colors. 
	-  I don't want it to be too big, preferring a single page to keep it light and simple. 
	-  It will include a navbar with links to my GitHub, Codepen, Linkedin, and a contact form. 
	-  Possibly a google map if I have time and it fits. 
	-  I would also like to incorporate FontAwaome icons, along with google fonts on the wishlist. 



- **Functional Requirements**
	- Being new to coding, what I am anticipating is that I will encounter bugs that will eat the time. Whatever site I produce in 4 weeks, from a personal perspective, needs to be clean and working. Color pickers need to function, and it needs to be an easy and enjoyable experience so users can walk away with a good feeling. 
	- My approach to building this site will be mobile-first; it will scale up for larger screens. 



- **Content Requirements**
	In terms of content, I don't want it to be overly heavy. The primary communication engagement will be without words. Some short introduction and explanations; it will be a simple and intuitive process that the user can enjoy through discovery.
	- The landing page will be welcoming, the centerpiece being the form selector elements for styling a button that will update live as the button attributes are defined. 
	- The CSS will be output directly to a text area, that when clicked upon, will copy the CSS to the users' clipboard. Note that I could also use a button to copy the CSS to the clipboard.
	- There will be a contact form so users can contact me.


**NOTE - Technologies:**

- [ ] [Bootstrap](https://getbootstrap.com/): I've decided to use Bootstrap this time round, as opposed to last time using [UiKit](https://getuikit.com/). I do like the features that come with UiKit, more so than Bootstrap. Class names aside, they are very similar in that they provide the base structure for responsive websites. I want to get to know Bootstrap as it has long been setting a standard in the industry. 
- [ ] [HTML](https://devdocs.io/html/) I will endevour to complete the HTML using latest HTML5 standards. 
- [ ] [CSS](https://devdocs.io/css/) - [Sass](https://sass-lang.com/):  I want to use Scss. Writing CSS is simplified by creating and using variables, to compile Sass to CSS using VS Code.
- [ ] [JQuery](https://jquery.com/) - JavaScript: I will be using these languages to create effects and features, hopefully finding the balance so that I don't overdo it. 
- [ ] I started using [NPM](https://www.npmjs.com/) as it is so much easier now that my projects begin to have multiple dependencies, especially now that I'm integrating the various features that I want in the site. 


**REQUIRED FORM ELEMENTS**
- [ ] ***Color picker:*** 
	- I have absolutely no experience with these applications apart from using them in the UI of websites I have visited. I've done some initial research to see what's around, available, and what would fit for me. My considerations in choosing are 1. It's aesthetically pleasing, is easy to use, and within my ability to configure and code it to the forms. 
	- [Bootsrap colorpicker](https://github.com/itsjavi/bootstrap-colorpicker#:~:text=Fork%20358-,Bootstrap%20Colorpicker%20is%20a%20modular%20color%20picker%20plugin%20for%20Bootstrap,1.4k%20stars%20358%20forks): After some initial research, at this point, I'm leaning towards the Bootstrap color picker. It's well documented and fits my criteria. Based on Stefan Petre's work from 2013, a name I seem to come across a bit. Funnily enough, the next item in the list is also based on work by him. 
	- [Codepen example](https://codepen.io/daidensacha/pen/jOyVrqW): Note, It's a work in process. I'm still analysing the code and working out what and how to add the required parameters of preference.
- [ ] ***Range Selector:***
	- [Bootstrap Range Slider](https://seiyria.com/bootstrap-slider/): Designed for and taking the Bootstrap name, but it isn't a Bootstrap product. I am suitably impressed with it, as it does the job and fits with the Bootstrap framework. I have a [codepen example](https://codepen.io/daidensacha/pen/RwKKWbJ) I have been working on to have it sorted before I start thinking about adding it into the site. Just a warning, it's a work in process at this stage, and I decided that it was good to work on it somewhere that I could easily ask for help if I got stuck or needed input. 
	- It's reasonably simple to convert an input into the slider, then add styling to it. 
	 
- [ ] ***Toggle Switch:***
	- I have little experience or knowledge about this element. It's my preferred option to disable form field groups, so users can easily choose styling they want to include. Researching, and wouldn't you know it, there is a [Bootstrap Switch Button](https://gitbrent.github.io/bootstrap4-toggle/#usage) API available on Github. There is a working example on Codepen with the Bootstrap Range Selector. 
- [ ] ***Select:***
	- This is pretty straightforward and easy to incorporate. I will use the [Bootstrap Select](https://getbootstrap.com/docs/5.0/forms/select/).
	
3. STRUCTURE
- **Interaction Design**
- I think it is human nature to be curious and to want to explore. My vision is that the site will engage and invite the exploration to discover available features. Color has a powerful impact on feeling and emotion, so this will be a playground for exploring colors.
- There will be color pickers, range sliders, fonts, a variety of features to tweak the color, size, and style of the buttons to see how the CSS is output. 
- Stefan Petre did impressive work with the color picker, so much so I'm not sure I will have sufficient time to do it justice. Nevertheless, some exciting features come with it. Like it generates complementary colors to the color that is selected. It opens up possibilities to engage interested users allowing them to change element colors on the pages. 

- **Information Architecture** Site information arranged as follows.
	- ***Simple and sweet:*** Home page will be colorful, and I envisage users will be able to change the color scheme. The site's main attraction will be there for the visitor when they hit the home page, simplicity, and a playground full of possibilities. 
	- ***Contact Form*** I want it simple and don't want users to navigate away from the reason that brought them to the site. So it will be a one-page site, with a contact form at the bottom of the page. I may put the contact form in a modal if, for some reason, it doesn't fit on the home page. 
	- ***Social Links*** There will be social links for connecting to me or viewing my work on GitHub, Codepen, and Linkedin.
	- ***Planning***  I will be writing JS/ jQuery to implement much of the work, and given many features will be replicated, I realised that functions save me from repeating code. For example, To implement the color pickers, I will create an object array with the ID names, Class names, and required parameters for the color pickers. A function can loop through an array, create the element; place it in the HTML page, and simplify adding it to the HTML. It will also be easy to update. For this reason, to save time, I will plan for element attributes that I'll need.  I want to add and create a spreadsheet with all the features and parameters. I don"t want to waste time thinking it out or having to change the HTML structure. I'll need time to iron out bugs and find solutions for unanticipated issues. 


4. SKELETON
- ***Wireframing:***
In my first project last year, I submitted mockups created in Adobe XD. It was fun but way overkill. I'm giving Balsamiq a try this time around. 

NOTE TO SELF>> Add links to or images here. 

5. SURFACE
***Visual Design:*** 
 Color. Fun. Exploration. I want to take off my conservative hat and be a little daring to create an impression, definitely an experience to remember. It should be a fun experience to play with the button creator, one that the user will remember and return to when they next need to check out button styles. 



**TESTING**
* * *


***Testing Notes*** 



**DEPLOYMENT**
* * *


**CREDITS**
* * *


**NOTES:**
* * *
