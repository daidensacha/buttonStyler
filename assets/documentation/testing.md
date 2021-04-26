# TESTING

## TESTING PLAN
[README/Testing](/README.md/#testing)
### RESEARCH
[README/Research](/README.md/#research)

#### Required elements
    
   -  Investigate what components will be suitable and meet the needs of this project.
   -  Research how the components work and how to write code to implement them.
   -  It is crucial to understand how the components function and what I can expect from them.
   -  Use Codepen to experiment, learn, and implement instances of the components to see which are better suited for the button styler project.

### DEVELOPMENT
[README/Development](/README.md/#development)

  #### HTML
    
   - Incorporate form components using HTML5 and Bootstrap with SCSS/ CSS.
    - Form components to incorporate 
		- Accordion
		- Forms with Fieldsets
		- Inputs with labels
		- Nav-bar/ Off-canvas
		- Modal with contact form
		- Social icon block 
    - Incorporate Bootstrap Breakpoints as media queries in CSS for responsive display.
    - Use Chrome DevTools to ensure positioning of elements for each breakpoint.
    
 #### JavaScript
    
   -   Write code to process data from form inputs and to create CSS styling for the demo button.
   -   What is expected from the different components?
		- **Text input**: When a user enters text, the text will show in the demo button.
		- **Range selector**: When the user changes the value, it will change the corresponding CSS rule style.
		- **Color Picker** - When a user selects or enters a color, it will change the corresponding  CSS rule/ style.
		- **Toggle switches**: When clicked, it will toggle fieldsets on/ off or toggle between options.
		- **Forms with Fieldsets**: The contact form will have required fields for browser validation, and the user will be able to send a message using the contact form.  
		- **Demo button**: The Demo Button will display the CSS style, which will change when the user changes the input values.  
		- **CSS Display block**: The CSS rules for the styles displayed in the Demo Button will be output to the CSS Display Block  
		- **Copy to clipboard**: User can click an icon and copy the CSS to the clipboard.
- Use Chrome DevTools JS console to monitor for errors and test code with "console.logs".

### DEPLOYMENT
[README/Deployment](/README.md/#deployment)

#### Test for production

- **Test local and test live**
	- Until this point, the website has been tested on the local server.
	- Compare and test deployed version of the website.
		- Ensure it is the same and there are no bugs.
		- Inputs, forms, features need to display and function as expected.

 -  **Responsiveness**
    - Chrome DevTools: 
	    - Test by screen sizes
	    - Test by viewing media queries which will specifically include Bootstrap breakpoints.
	    - Test on different devices, different operating systems, different browsers, screen sizes.
    - Share the application to get third party feedback
-  **Function**
	- Test on different devices, operating systems, and browsers.
	- Test all external links, inputs, forms, navigation links, and features.
-  **User Experience** 
    - **Feedback**: Share the application to get feedback and to test the UI to see how users intuit the process of using the application.
    - **User Stories**: Check the application fulfills the needs expressed in the user stories.
    
### DEVELOPMENT SETUP
#### Code Editor
- [Visual Studio Code](https://code.visualstudio.com/) 
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

I edit my work locally using Visual Studio Code with Live Server and Chrome DevTools.
I have a USB-C to dual HDMI hub for my MacBook Pro, with 2 x Dell U2419H monitors, wireless keyboard, and mouse.
    
### TESTING DEVICES

#### MacBook Pro 15 inch
	- Operating System
		- macOS Big Sur 11.2.3
			- Safari Version 14.0.3 (16610.4.3.1.7)
			- Chrome Version 90.0.4430.72 (Official Build) (x86_64)			
			- Firefox 88 (64-bit)
		- Windows 10 Pro (Boot Camp installation)
			- Microsoft Edge Version 
			- Firefox 
			- Chrome Version 
	- External Monitors
		-  2 x Dell U2419H Monitor 23.8-inch Full HD 1920 x 1080 at 60 Hz

#### HP ProDesk 600 Desktop PC
	- Operating System
		- Windows 10 Pro 
			- Microsoft Edge Version 90.0.818.42 (Official Build) (64-Bit)
			- Firefox 78.10.0esr (64-Bit)
			- Chrome Version 90.0.4430.85 (Official Build) (64-Bit)
	- Monitor
		- AOC 22E15 21.5-inch Full HD 1920x1080 at 75 Hz

#### Apple iPad Air Gen 1 9.7 inches 4:3 ratio
	- Operating System
		- iOS 12.5.2 (16H30) released March 26
	- Screen resolution
		- 1536 x 2048 pixels, 4:3 ratio (~264 ppi density)
#### Apple iPhone 11 Pro
	- Operating System
		- iOS 14.4.2
	- Screen resolution
		- 2436‑by-1125‑pixel resolution at 458 ppi
		- 5.8‑inch (diagonal) all‑screen OLED Multi‑Touch display
		- Width: 2.81 inches (71.4 mm)
		- Height: 5.67 inches (144.0 mm)

## INITIAL PLAN FOR FORM INPUTS
[Back to README/UX DESIGN/Structure](/README.md/#3-structure)


## Form outline 
I had so many inputs to put into the accordion; I created this table to be clear with what I was adding. I can focus my 
mind on more important things while writing code when I have it written down. 


<table>
    <thead>
        <tr><th>Label</th><th>Element/Type</th><th>Toggles</th><th>Toggle Id</th><th>Element Id</th><th>Element Variable</th></tr>
    </thead>
    <tbody>
        <tr><td colspan="6">FORM 1 - TEXT STYLING BLOCK</td>
        <tr><td>button&nbsp;text</td><td>text</td><td>&nbsp;</td><td>&nbsp;</td><td>style-text</td><td>styleText</td></tr>
        <tr><td>font&nbsp;family</td><td>select</td><td>&nbsp;</td><td>&nbsp;</td><td>style-font</td><td>fontFamilySel</td></tr>
        <tr><td>font&nbsp;color</td><td>color</td><td>&nbsp;</td><td>&nbsp;</td><td>style-color</td><td>fontStyleColorPicker</td></tr>
        <tr><td>font&nbsp;size</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-size</td><td>fontSizeRange</td></tr><tr><td colspan="6">&nbsp;</td></tr>
        <tr><td>text&nbsp;shadow</td><td>color</td><td rowspan="4">on/off</td><td rowspan="4">toggleShadow</td><td>style-text-shadow</td><td>textShadowColorPicker</td></tr>
        <tr><td>x-axis</td><td>range</td><td>style-text-x</td><td>textShadowXRange</td></tr>
        <tr><td>y-axis</td><td>range</td><td>style-text-y</td><td>textShadowYRange</td></tr>
        <tr><td>blur</td><td>range</td><td>style-text-blur</td><td>textShadowBlurRange</td></tr>
        <tr><td colspan="6">FORM 2 - BOX STYLING</td></tr>
        <tr><td>box-shadow</td><td>color</td><td rowspan="4">on/off</td><td rowspan="4">toggleBox</td><td>style-box-shadow</td><td>boxColorPicker</td></tr>
        <tr><td>x-axis</td><td>range</td><td>style-box-x</td><td>boxXRange</td></tr>
        <tr><td>y-axis</td><td>range</td><td>style-box-y</td><td>boxYRange</td></tr>
        <tr><td>blur</td><td>range</td><td>style-box-blur</td><td>boxBlurRange</td></tr>
        <tr><td>padding</td><td>range</td><td>on/off</td><td rowspan="3">togglePadding</td><td>style-box-padding</td><td>boxPaddingRange</td></tr>
        <tr><td>padding&nbsp;top-bottom</td><td>range</td><td rowspan="2">off/on</td><td>style-tb-padding</td><td>boxTbPaddingRange</td></tr>
        <tr><td>padding&nbsp;right-left</td><td>range</td><td>style-lr-padding</td><td>boxLrPaddingRange</td></tr>
        <tr><td colspan="6">FORM 3 - BORDER&nbsp;STYLING</td></tr>
        <tr><td>border-radius</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-border-radius</td><td>borderRadiusRange</td></tr>
        <tr><td>border-width</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-border-width</td><td>borderWidthRange</td></tr>
        <tr><td>border-color</td><td>color</td><td>&nbsp;</td><td>&nbsp;</td><td>style-border-color</td><td>borderColorPicker</td></tr>
        <tr><td colspan="6">FORM 4 - COLOR STYLING</td></tr>
        <tr><td>background&nbsp;(solid)</td><td>color</td><td>on/off</td><td rowspan=4>toggleBackground</td><td>style-bg-color</td><td>backgroundColorPicker</td></tr>
        <tr><td>start&nbsp;color</td><td>color</td><td rowspan=3>off/on</td><td>style-gradient1-color</td><td>gradient1ColorPicker</td></tr>
        <tr><td>end&nbsp;color</td><td>color</td><td>style-gradient2-color</td> <td>gradient2ColorPicker</td></tr>
        <tr><td>gradient&nbsp;direction</td><td>select</td><td>gradient-direction</td><td>gradientDirectionSel</td></tr>
        <tr><td colspan="6">FORM 5 HOVER - HOVER STYLING</td></tr>
        <tr><td>background&nbsp;(solid)</td><td>color</td><td>on/off</td><td rowspan=4>toggleHover</td><td>style-color-hover</td><td>backgroundHoverColorPicker</td></tr>
        <tr><td>start&nbsp;color</td><td>color</td><td rowspan=3>off/on</td><td>style-gradient1-hover</td><td>gradient1HoverColorPicker</td></tr>
        <tr><td>end&nbsp;color</td><td>color</td><td>style-gradient2-hover</td><td>gradient2HoverColorPicker</td></tr>
        <tr><td>gradient&nbsp;direction</td><td>select</td><td>gradient-hover-direction</td><td>gradientHoverDirectionSel</td></tr>
        <tr><td>hover&nbsp;border&nbsp;color</td><td>color</td><td rowspan=2>on/off</td><td rowspan=2>toggleHoverBorder</td><td>hover-border-color</td><td>hoverBorderColorPicker</td></tr>
        <tr><td>border&nbsp;width</td><td>range</td><td>hover-border-width</td><td>hoverBorderWidthRange</td></tr>
    </tbody>
</table>


## Testing Checklist
[README/Testing](/README.md/#testing)

## Navbar

- **Offcanvas toggle**
	- [x] **Offcanvas toggle icon** - The toggle icon is visible at all times, on all size screens, as expected.
		- [x] **Open offcanvas** - I click on the navbar toggle icon, and the offcanvas opens.
		- [x] **Close offcanvas** - I click anywhere other than on a link in the offcanvas, and the offcanvas closes.
		- [x] **Offcanvas links** - All links are showing correctly on all size screens.
			- [x] **Bootstrap** - I click on the link, and it opens the Bootstrap 4.6 documentation page in a new browser tab.
			- [x] **Bootstrap 4 Toggle** - I click on the link, and it opens the Bootstrap 4 Toggle GitHub documentation page in a new browser tab.
			- [x] **JS Color** - I click on the link, and it opens the JS Color homepage page in a new browser tab.
			- [x] **w3schools** - I click on the link, and it opens the w3schools JS tutorial page in a new browser tab.
			- [x] **Shoelace** - I click on the link, and it opens the Shoelace application in a new browser tab.
			- [x] **Google Fonts** - I click on the link, and it opens the Google Font homepage in a new browser tab.
			- [x] **Font Awesome** - I click on the link, and it opens the Font Awesome homepage in a new browser
- **Navbar Social & Contact icons**
	- [x] **Navbar Icon Tooltips** - I hover over the icons, and a tooltip appears showing what the icon links.
	- [x] **GitHub** - I click on the icon, and it opens the linked webpage in a new browser tab.
	- [x] **Linkedin** - I click on the icon, and it opens the linked webpage in a new browser tab.
	- [x] **Codepen** - I click on the icon, and it opens the linked webpage in a new browser tab.  

    ![Soclial Icons Navbar](/assets/documentation/images/screenshots/social-icons-header.jpg) 

	- [x] **Contact form** - I click on the contact form icon, and it opens the modal with the contact form.
		- [x] **Form validation** - I click send without filling in the required fields, and a popover appears, prompting me to fill in the required field.  

        ![Contact Form Validation](/assets/documentation/images/screenshots/contact-form.jpg)!  

		- [x]  **Send validation** - I complete the form fields and click send, the form fields empty, and a success message in green appears under the form. The message disappears after a few seconds. The modal remains open.
		- [x] **Form close** - I click on the form close icon, the close modal icon, or anywhere outside the modal, and the modal with the form closes.  

## Accordion Forms

![All Accordion Form Inputs](/assets/documentation/images/screenshots/rm-form-inputs.jpg)

- [x] **Accordion default open** - When I open the webpage, the first level of the accordion is visible.
- [x] **Accordion folding levels** - When I click on the header of each of the other four groups in the accordion, it opens that level and closes the others. 
	- **Font Inputs**
		- **Text Input**  
			- [x] Placeholder text visible; input is not disabled.
			- [x] I type 1-2 letters, an error message appears, and the default button text remains unchanged.
			- [x] The error message is not permanent; it fades out after a few seconds.
			- [x] Upon entering the third letter, the entered text appears in the display button.
			- [x] I enter letters, and it accepts a maximum of 16 letters.
			- [x] Only letters a-z, A-Z, and spaces are accepted.
			- [x] When I enter any other character, an error message appears, and the button text reverts to the default text.
			- [x] I remove the disallowed character, the error message disappears, and my text displays in the demo button.  

            ![Font/Font Shadow Form](/assets/documentation/images/screenshots/rm-form-ui-output.jpg)  

		- **Font Family Select**
			- [x] I click on the font family select, it opens, and a list of 12 fonts appears.
			- [x] I select a font, the font in the demo button changes, as does the font-family name in the CSS display.
			- [x] I check all fonts one by one, and they perform the same.  

			![Select font example 1](/assets/documentation/images/screenshots/select-font-1.jpg)  
			![Select font example 2](/assets/documentation/images/screenshots/select-font-2.jpg)  

		- **Font Color**
			- [x] I click on the color input, and the color picker appears. 
			- [x] I select a color using the mouse cursor; it changes the demo button font color, and the font-color CSS property changes.
			- [x] I select a color from the color picker palette of colors, the font color changes, the font-color CSS property changes, and displays RGBA color format. 
			- [x] I enter a HEX color value in the input, and the color picker automatically updates to the entered color, the button font color changes. The font-color CSS property displays the RGBA color value. 
            - [x] I test similarly entering HEXA, RGB, RGBA colors in the color picker input. It accepts all formats just like it does for HEX.  

            ![Entering Color Values](/assets/documentation/images/screenshots/rm-colorpickers.jpg)  

			- [x] I click anywhere outside of the color picker, and the color picker closes.
		- **Font Size** 
			- [x] I select the font size range handle and move it to change the font size, the font size in the demo button changes, and the font-size CSS value is immediately updated.
			- [x] I change the font size and can select a minimum font size 8px and maximum font-size 64px.
	- **Shadow Toggle**
		- [x] The text-shadow toggle is disabled by default.
		- [x] I click the text-shadow toggle switch, the fieldset inputs are immediately enabled, the default text-shadow appears in the demo button, and the CSS rule appears in the CSS display block. 
		- [x] I click the toggle again, the fieldset is disabled, the inputs turn grey, the text-shadow style is not visible in the demo button or the CSS display.
	- **Shadow Inputs**
		- **Text Shadow**
			- [x] I click in the text-shadow color picker input, the color picker appears.
			- [x] I select a color using the mouse cursor; it changes the demo button text-shadow color, as it does the CSS text-shadow value.
			- [x] I click anywhere outside of the color picker, and the color picker closes.
		- **X-Axis**
			- [x] I select the text-shadow x-axis range handle and increase the value; the text-shadow in the demo button moves to the right.
			- [x] I select the text-shadow x-axis range handle and decrease the value; the text-shadow in the demo button moves to the left.
			- [x] When I change the text-shadow x-axis value, it immediately updates the value in the CSS display block.
		- **Y-Axis**
			- [x] I select the text-shadow y-axis range handle and increase the value; the text-shadow in the demo button moves downwards.
			- [x] I select the text-shadow y-axis range handle and decrease the value; the text-shadow in the demo button moves upwards.
			- [x] When I change the text-shadow y-axis value, it immediately updates the value in the CSS display block.
		- **Blur**
			- [x] I select the text-shadow blur range handle and increase the value, the demo button text-shadow blur increases.
			- [x] I select the text-shadow blur range handle and decrease the value, the demo button text-shadow blur decreases.
			- [x] When I change the text-shadow blur value, it immediately updates the value in the CSS display block.
	- **Box Toggle**
		- [x] The box-shadow is disabled by default.
		- [x] I click on the box-shadow toggle switch, the box-shadow fieldset is immediately enabled, the box-shadow style appears behind the demo button, the CSS rule appears in the CSS display block.
		- [x] I click on the box-shadow toggle switch again, the box-shadow inputs turn grey and are disabled, and the CSS rule disappears from the CSS display block. 
	- **Box Inputs**
		- **Shadow**
			- [x] I click in the box-shadow color picker input, the color picker appears.
			- [x] I select a color using the mouse cursor, the demo button box-shadow color changes, as does the CSS box-shadow value.
			- [x] I click outside of the color picker, and it closes.
		- **X-Axis**
			- [x] I select the box-shadow x-axis range handle and increase the value; the box-shadow in the demo button moves to the right.
			- [x] I select the box-shadow x-axis range handle and decrease the value; the box-shadow in the demo button moves to the left.
			- [x] When I change the box-shadow x-axis value, it immediately updates the value in the CSS display block.
		- **Y-Axis**
			- [x] I select the box-shadow y-axis range handle and increase the value; the box-shadow in the demo button moves downwards.
			- [x] I select the box-shadow y-axis range handle and decrease the value; the box-shadow in the demo button moves upwards.
			- [x] When I change the box-shadow y-axis value, it immediately updates the value in the CSS display block.
		- **Blur**
			- [x] I select the box-shadow blur range handle and increase the value, the demo button box-shadow blur increases.
			- [x] I select the box-shadow blur range handle and decrease the value, the demo button box-shadow blur decreases.
			- [x] When I change the box-shadow value, it immediately updates the value in the CSS display block.
	- **Padding Toggle**
		- [x] By default, padding all sides is enabled, and padding top-bottom/ padding right-left is disabled.
		- [x] I click the padding toggle, padding all-sides input is disabled, becomes grey, and padding top-bottom/ padding right-left inputs are enabled. 
		- [x] I click the padding toggle again, padding all-sides input is enabled, padding top-bottom/ padding right-left inputs become disabled and turn grey. 
	- **Padding Inputs**
		- **Padding All Sides**
			- [x] I select the padding all-sides range handle and increase the value, the padding top-right-bottom-left in the demo button increases, the button becomes larger.
			- [x] I select the padding all-sides range handle and decrease the value, the padding top-right-bottom-left in the demo button decreases, the button becomes smaller.
			- [x] When I change the padding all-sides value, it immediately updates the value in the CSS display block.
		- **Padding Top Bottom**
			- [x] I select the padding top-bottom range handle and increase the value, the padding top-bottom of the demo button increases, the button height increases. 
			- [x] I select the padding top-bottom range handle and decrease the value, the padding top-bottom of the demo button decreases, the button height decreases. 
			- [x] When I change the padding top-bottom value, it immediately updates the value in the CSS display block.
		- **Padding Right Left**
			- [x] I select the padding right-left range handle and increase the value, the padding right-left of the demo button increases, the button width increases. 
			- [x] I select the padding right-left range handle and decrease the value, the padding right-left of the demo button decreases, the button width decreases. 
			- [x] When I change the padding right-left value, it immediately updates the value in the CSS display block.
	- **Border Inputs**
		- **Border Color**
			- [x] I click in the border color picker input, the color picker appears.
			- [x] I select a color using the mouse cursor, the demo button border-color changes.
			- [x] When I change the border color, it immediately updates the value in the CSS display block.
			- [x] I click outside of the color picker, and it closes.
		- **Border Width**
			- [x] I select the border width range handle and increase the value, the demo button border-width increases. 
			- [x] I select the border width range handle and decrease the value, the demo button border width decreases.
			- [x] When I change the border width, it immediately updates the value in the CSS display block.
		- **Border Radius**
			- [x] I select the border radius range handle and increase the value; it increases the demo button border radius.
			- [x] I select the border-radius range handle and decrease the value, the demo button border radius decreases.
			- [x] When I change the border radius, it immediately updates the value in the CSS display block.
	- **Background Toggle**
		- [x] By default, solid background color is enabled, and gradient background is disabled.
		- [x] I click the background toggle, the solid background input is disabled, becomes grey, and gradient background inputs are enabled. 
		- [x] I click the background toggle, the solid background input is enabled, gradient background inputs are disabled, and become grey.
		- [x] When gradient background is enabled, the gradient background is immediately visible on the demo button, and it adds the CSS rule to the CSS block. 
	- **Background**
		- **Background Color**
			- [x] I click in the background color picker input, the color picker appears.
			- [x] I select a color using the mouse cursor; it changes the demo button background color.
			- [x] When I change the background color, it immediately updates the background color value in the CSS display block.
			- [x] I click outside of the color picker, and it closes.
		- **Gradient Color 1**
			- [x] I click in the "gradient color 1" color picker input, the color picker appears.
			- [x] I select a color using the mouse cursor, the demo button "gradient color 1" color changes.
			- [x] When I change the "gradient color 1" color, it immediately updates the "gradient color 1" color value in the CSS display block.
			- [x] I click outside of the color picker, and it closes.
		- **Gradient Color 2**
			- [x]  I click in the "gradient color 2" color picker input, the color picker appears.
			- [x] I select a color using the mouse cursor, the demo button "gradient color 2" color changes.
			- [x] When I change the "gradient color 2" color, it immediately updates the "gradient color 2" color value in the CSS display block.
			- [x] I click outside of the color picker, and it closes.
		- **Gradient Direction**
			- [x] I click on the gradient direction select, it opens, and a list of 4 options appears. (to top, to bottom, to right, to left)
			- [x] I sequentially select each of the options, the direction of the gradient background in the demo button changes.
			- [x]  When I change the gradient direction, it immediately updates the gradient direction value in the CSS display block.  

            ![Background Inputs](/assets/documentation/images/screenshots/rm-form-background.jpg)  
            ![Gradient Direction](/assets/documentation/images/screenshots/rm-form-gradient.jpg)  

	- **Hover Inputs**
		- **Hover Font Color**
			- [x] I click on the hover font color input, and the color picker appears. 
			- [x] I select a color using the mouse cursor, the font-color CSS property changes.
			- [x] I hover over the demo button, and the hover font color has changed.
			- [x] I click anywhere outside of the color picker, and the color picker closes.
	- **Hover Background Toggle**
		- **Hover Background Color**
			- [x] I click in the hover-background color picker input, the color picker appears.
			- [x] I select a color using the mouse cursor; it immediately updates the hover background color in the CSS display.
			- [x] I hover over the demo button, and the hover background color has changed.
			- [x] I click outside of the color picker, and it closes.
		- **Hover Gradient Background Color 1**
			- [x] I click in the "hover gradient color 1" color picker input, the color picker appears.
			- [x] I select a color using the mouse cursor; it immediately updates the "hover gradient color 1" color in the CSS display.
			- [x] I hover over the demo button, and the "hover gradient color 1" color has changed.
			- [x] I click outside of the color picker, and it closes.
		- **Hover Gradient Background Color 2**
			- [x] I click in the "hover gradient color 2" color picker input, the color picker appears.
			- [x] I select a color using the mouse cursor; it immediately updates the "hover gradient color 2" color in the CSS display.
			- [x] I hover over the demo button, and the "hover gradient color 2" color has changed.
			- [x] I click outside of the color picker, and it closes
		- **Hover Gradient direction**
			- [x] I click on the gradient direction select, it opens, and a list of 4 options appears. (to-bottom, to-top, to-right, to-left)
			- [x] I sequentially select each option, the direction of the gradient background in the demo button changes.
			- [x]  When I change the gradient direction, it immediately updates the gradient direction value in the CSS display block.
	- **Hover Border Toggle**
		- **Hover Border Color**
			- [x] I click in the hover-border-color color picker input, the color picker appears.
			- [x] I select a color using the mouse cursor; it immediately updates the hover border-color value in the CSS display.
			- [x] I hover over the demo button, and the hover border color has changed.
			- [x] I click outside of the color picker, and it closes.
		- **Hover Border Width**
			- [x] I select the hover border-width range handle and increase the value; it immediately updates the hover border-width value in the CSS display.
			- [x] I hover over the demo button, and the hover border-width has changed.
			- [x] I select the border width range handle and decrease the value, hover over the demo button, and the hover border-width has reduced.
		
## Button Display

- **Button background color picker**
	- [x] I click on the demo button background-color color picker input, the color picker appears.
	- [x] I select a color using the mouse cursor, the background color of the demo button immediately changes.
	- [x] I select the transparent palette, and the background becomes transparent.
	- [x] I click outside of the color picker, and it closes.
- [x] **Bootstrap Sticky Top Class**
	- [x] I scroll the page; when the button background hits the top of the page, it stops scrolling until the bottom of the CSS display reaches the button. It remains visible for longer. 
	- [x] When I scroll the page back down, the button sticks to the top until the full CSS display comes into view. Then it scrolls down with the CSS display.
- [x] **Bootstrap Order Column Class**
	- [x] At 992px or bigger, the accordion and CSS Display columns display side by side. Less than 992px, the CSS display column displays above the accordion, so the demo button with the sticky-top class remains viewable as long as possible. It makes more sense to be at the top rather than at the bottom in order of priority.
- [x] **Button background height**
	- [x] When I increase the font size, the button size increases, and the background height also increases. The button remains centered in the background. 

## CSS Display Block

- **CSS Output**
	- [x] I change an input value to style the demo button; the corresponding CSS rule immediately displays the CSS display. I can see it changing as I incrementally change the value. 
	- [x] I enable a fieldset of inputs, and the default values of those inputs are output immediately to the CSS display.
	- [x] I disable a fieldset of inputs, and the input values immediately disappear from the CSS display.
-  **Copy Icon**
	- [x] I hover over the copy icon, and it turns green; a tooltip appears with the message "Copy CSS". 
	- [x] I click on the copy icon, the background color of the CSS rules is immediately highlighted with a blue color. A message appears, green in color, "Bazinga, CSS Copied!". 
	- [x] I test this by pasting the copied CSS to a css file. It works.  

    ![Bazinga, CSS Cpoied!](/assets/documentation/images/screenshots/rm-copied.jpg)  


### Information Section
- **Codepen link to testing codepen**
	- [x] I click on the "Codepen" link in the information section under the accordion and CSS display. It opens the link to a codepen in a new browser tab,  where I paste in the copied CSS. After about 5 seconds, the same button style I created in the button styler appears. I see the code is easily transferable.  

    ![Testing CSS Codepen](/assets/documentation/images/screenshots/test-css-codepen.jpg)  

- [x] **Google Font link Google Fonts**
	- [x] I click on the Google Font link in the information block under the accordion, under the heading "3. Add your button". It opens the link in a new browser tab, where I see that I can search for the Google Font I selected in my button style.  

    ![Information Section](/assets/documentation/images/screenshots/direction-section.jpg)  

## Footer

- **Social Icons**
	- [x] **Footer Icon Tooltips** - I hover over the footer icons, and a tooltip appears showing what the icons link.
	- [x] **GitHub** - I click on the icon, and it opens the linked webpage in a new browser tab.
	- [x] **Linkedin** - I click on the icon, and it opens the linked webpage in a new browser tab.
	- [x] **Codepen** - I click on the icon, and it opens the linked webpage in a new browser tab.
	- [x] **Contact form** - I click on the contact form icon, and it opens the modal with the contact form.
		- [x] **Form validation** - I click send without filling in the required fields, and a popover appears, prompting me to fill in the required field.
		- [x] **Send validation** - After completing the form fields, I click send, the form fields empty, and a success message in green appears under the form. The message disappears after a few seconds. The modal remains open.
		- [x] **Form close** - I click on the form close icon, the close modal icon, or anywhere outside the modal, and the modal with the form closes. 
    - [x] **Smooth to top icon** - I click on the upward arrow icon in the footer, the page scrolls smoothly to the top.  

    ![Social Icons Footer](/assets/documentation/images/screenshots/social-icons-footer.jpg)  

## Responsive Breakpoints and media queries
- [x] **Large** Large devices (large desktops, 992px and up) `@media (min-width: 992px)` 
- [x] **Medium** Medium devices (medium desktops, 768px and up) `@media (min-width: 768px)` 
- [x] **Small** Small devices (small desktops, 576px and up) `@media (min-width: 576px)` 
- [x] **Extra Small** // X-Small devices (portrait phones, less than 576px) // No media query for `xs` since this is the default in Bootstrap

I tested responsiveness with Chrome DevTools, on a variety of different devices and in various browsers. 
The site's main content is the accordion with inputs for changing CSS styles, the demo button, and the CSS display.
I positioned them so that it is possible to make changes, see the CSS output and the changing style of the demo button. 

**The HTML main content structure with boostrap classes**

![Main Row Content](/assets/documentation/images/screenshots/main-row-html.jpg)  

The two columns display side by side on a screen size larger than 992px. On screens smaller than 992px, the two columns stack with
the second moving to a position above the accordion in the first column. 

The demo button and CSS display in the second column are also in separate full-width columns, displaying the demo button column above the CSS display column. 
When scrolling the CSS display block, the bootstrap `sticky-top ` class added to the demo button column means it sticks to the top when it hits the top of the window.  Only when the CSS Display has scrolled up, the demo button also scrolls off-screen. 

**Screensize greater than 992px, `stiky-top` demo button**  

![sticky-top Screens > 992px](/assets/documentation/images/screenshots/sticky-top-1.jpg)  

**Screensize equal to or less than 992px, `stiky-top` demo button**  

![sticky-top Screens <= 992px](/assets/documentation/images/screenshots/sticky-top-2.jpg)  

**Screensize equal to or less than 576px, `stiky-top` demo button**  
 
![sticky-top Screens < 576px](/assets/documentation/images/screenshots/sticky-top-3.jpg)  


## Testing Devices

#### **MacBook Pro (15-inch, 2017)**
		- Operating System
			- macOS Big Sur 11.2.3
				- Safari Version 14.0.3 (16610.4.3.1.7)
				- Chrome Version 90.0.4430.72 (Official Build) (x86_64)
				- Firefox 8 (64-bit)
			- Windows 10 Pro (Boot Camp installation)
				- Microsoft Edge Version 
				- Firefox 
				- Chrome Version 
			- External Monitors
				-  2 x Dell U2419H Monitor 23.8-inch Full HD 1920 x 1080 at 60 Hz
				- 
####  **Apple iPad Air** Gen 1 9.7 inches 4:3 ratio
		- Operating System
			- iOS 12.5.2 (16H30) released March 26
		- Screen resolution
			- 1536 x 2048 pixels, 4:3 ratio (~264 ppi density)
			- 
#### **Apple iPhone 11 Pro**
		- Operating System
			- iOS 14.4.2
		- Screen resolution
			- 2436‑by-1125‑pixel resolution at 458 ppi
			- 5.8‑inch (diagonal) all‑screen OLED Multi‑Touch display
			- Width: 2.81 inches (71.4 mm)
			- Height: 5.67 inches (144.0 mm)

#### HP ProDesk 600 Desktop PC
		- Operating System
			- Windows 10 Pro 
				- Microsoft Edge Version 90.0.818.42 (64-Bit)
				- Firefox 78.10.0esr (64-Bit)
				- Chrome Version 90.0.4430.85 (64-Bit)
		- Monitor
			- AOC 22E15 21.5-inch Full HD 1920x1080 at 75 Hz
	

## USER STORY IMAGES

[Return to README](/README.md/#user-story-review)


1. As an aspiring developer:
	- I want to play with styles to see what works and what doesn't work.

	- I want to see how the different style attributes work.
	- I want to see how to write CSS for buttons.
	- I want to create button styles on the fly to save time.
	- I want to learn how to design buttons.

The layout of the elements benefits the user by allowing them to see what is changing and what happens as they change the styling. 
The change is instantaneous. The JavaScript function processes changes in values from the inputs and CSS rules are updated, appended to the head style tags and the CSS display block. Playing with the form inputs, you can watch as you slowly slide a range selector, for instance. Watch the value change in the range selector tooltip that shows the range value. That same value instantly changes in the CSS display block, and you can observe how the style of the button is changing. As a learning tool, it is brilliant and accelerates the learning of CSS. I believe that this meets the need of the aspiring developer in the user stories. There I identified that the aspiring developer wants to see what works and what doesn't work. They also what to know how the different attributes 
work, and learn how to write CSS for buttons. 
In the short time I played with this tool, my understanding of balancing the different attributes to create a styled button has improved.  

![CSS Output](/assets/documentation/images/screenshots/css-output.jpg)  

The above image shows the CSS output displayed simultaneously in the head style tags and the CSS output display block.
Being able to witness that change as it happens and see it visually in the style of the button is helpful.  

![CSS Gradient Output](/assets/documentation/images/screenshots/css-output-2.jpg)  

The above example shows how the gradient CSS rule output.
In the CSS block, the CSS output is in `<code><pre></pre></code>` tags so that it will overflow when needed and will not fold. It's a quirk of using the `pre` tags.   It's easy to copy with the copy to clipboard icon. Note the button is showing the gradient background.


2. As a hobbyist who likes to dabble with HTML and CSS:
	- I want to enjoy playing and be able to create buttons easily.
	- I want to see the result as I create it to know what I will have.

The project meets the needs identified in the "hobbyist" user stories. 
The included form elements provide a variety of options for the user to play and experiment.

I made it as simple as possible for the inexperienced user to copy the CSS after creating a button style. They can 
then click the link to codepen in the "2. Copy the CSS" section under the CSS display, and paste the button CSS to see it work.

**Information Section targets the inexperienced user**  

![Information Section](/assets/documentation/images/screenshots/direction-section.jpg)  


3. As a developer:
	- I'm always looking and open to trying tools to make my work more efficient and save me time.
	- I want to be able to enter colors that I am working with to easily create buttons that fit within the colors of my project.
	- I want to be able to play with designs and effects, and colors to discover what is possible.

The following image illustrates how I tested the color pickers. I entered HEX, HEXA, RGB, RGBA color format into the color picker input and the corresponding color 
was displayed in the color picker. 

![Entering different color formats](/assets/documentation/images/screenshots/rm-colorpickers.jpg)  

Additionally, I the pallete of colors I added in the color pickers, as follows.


**Bootstrap palette:**

`palette:'#007bff #6610f2 #6f42c1 #e83e8c #dc3545 #fd7e14 #f0ad4e #28a745 #20c997 #17a2b8 #fff #f8f9fa #6c757d #343a40 #000 rgba(0,0,0,0)',`

| Bootstrap Name    | bootstrap color   |Class Name         |
|:------------------|:------------------|:------------------|
|--blue:            |#007bff;           |.primary           |      
|--indigo:          |#6610f2            |                   |     
|--purple:          |#6f42c1            |                   |     
|--pink:            |#e83e8c            |                   |      
|--red:             |#dc3545            |.danger            |   
|--orange:          |#fd7e14            |                   |   
|--yellow:          |#f0ad4e            |.warning           |     
|--green:           |#28a745            |.success           |     
|--teal:            |#20c997            |                   |      
|--cyan:            |#17a2b8            |.info              |     
|--white:           |#fff               |.white             |      
|--light            |#f8f9fa            |.light             |    
|--gray:            |#6c757d            |.secondary         |    
|--gray-dark:       |#343a40            |.dark              |    
|--black            |#000               |                   |  
|                   |rgba(0,0,0,0)      |.opacity-0         | 

This is a convenient feature for users who might be using the Boostrap framework, given the ablity to easily select Bootstrap 
default colors if they are needed.

**Color palette of Bootstrap default colors**  

![Bootstrap color palette](/assets/documentation/images/screenshots/bootstrap-palette.jpg)  

**A variety of options conveniently folded up inside the accordion**  

A text box, three selects, eleven color pickers, thirteen range selectors, and six toggle switches are all bundled up neatly inside the accordion to offer various options for all anticipated users. Here are some images showing the different forms, with their inputs that change the style of the button and the CSS display values. 

**Collapsed accordion**

![Accordion collapsed](/assets/documentation/images/screenshots/form-accordion-collapsed.jpg)  

**Text Styling open by default**

![Text styling](/assets/documentation/images/screenshots/form-text-styling.jpg)  

**Box styling**  

![Box styling](/assets/documentation/images/screenshots/form-box-styling.jpg)  

**Border styling**  

![Border styling](/assets/documentation/images/screenshots/form-border-styling.jpg)  

**Color styling**  

![Color styling](/assets/documentation/images/screenshots/form-color-styling.jpg)  

**Hover styling**  

![Hover styling](/assets/documentation/images/screenshots/form-hover-styling.jpg)  



- **The Owner**


1. As the owner:
	- I want to have a tool that makes my job easier.
	- I want to create a tool that I have used online before, but that does things I want it to do.
	- I want to create it to my design preferences and to be able to change it when I want to.
	- I want to be able to add to it and to expand it to improve it.
	- I want to share this tool with others who might also benefit from it.
	- I want to do this project to learn and to be able to put to use the things I have been learning in this last unit.

Developing this tool has given me invaluable experience. I've had this opportunity to apply what I have been learning to 
build something that does a job I want it to do. 

As my first JavaScript project, in hindsight, I would do some things differently, but I can say that I did the best possible 
with the information and experience, I had at this time. 

The time I spent working my way through problems and finding solutions has given me an excellent ground to look at such a project again
with a different perspective. What I created can be easily replicated. I can add new features very quickly, as I know the code of this site backward. 

Adding inputs, color pickers, or range selectors is as easy as copy and paste, and writing a little bit of JS to define variables and CSS strings. 

It has arisen out of a need and the desire to fulfill that need. I'm curious how it might evolve with input from other sources. 

![THe button styler](/assets/documentation/images/screenshots/button-styler.jpg)  

