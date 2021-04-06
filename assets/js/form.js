// JS COLOR PICKER OPTIONS
jscolor.presets.default = {
	previewPosition:'right', 
    previewSize:60, 
    position:'top',
    palette:'rgba(0,0,0,0) #fff #808080 #000 #996e36 #f55525 #ffe438 #88dd20 #22e0cd #269aff #bb1cd4',
	backgroundColor:'rgba(61,20,130,1)', 
	borderColor:'rgba(54,68,187,1)', 
    width:139, 
    height:80, 
	controlBorderColor:'rgba(54,68,187,1)', 
    sliderSize:12, 
	shadowColor:'rgba(0,0,0,0.43)'
};

// Adding style element for the CSS styles
let styleEl = document.createElement('style');

// Append the style to the HEAD
document.getElementsByTagName('head')[0].appendChild(styleEl);

//
//========================== Function updates style element with given CSS rules
function set_css(css) {
    if (styleEl.styleSheet) {
        styleEl.styleSheet.cssText = css;
        console.log('a');

    } else {
        styleEl.innerHTML = ''; // Empty it to begin
        styleEl.appendChild(document.createTextNode(css));
    }
}

//
//==================Function to generate CSS rules and set them to STYLE element
function update() {
    // The preview button for seeing styling
    let demoButton = document.getElementById('#demo-button');

    // Container to display generated CSS rules 
    let cssContainer = document.querySelector('#cssContainer');

    // INPUTS BY SECTION
    // =========================================================================
    // FONT
    let fontTextColorPicker = document.querySelector('#style-text');
    let fontFamilySelect = document.querySelector('#style-font');
    let fontStyleColorPicker = document.querySelector('#style-color').jscolor;
    let fontSizeRange = document.querySelector('#style-fontsize');
    // =========================================================================
    // SHADOW
    let shadowToggle = document.querySelector('#blur-group-toggle')

    // =========================================================================
    // BOX 

    // =========================================================================
    // PADDING

    // =========================================================================
    // BORDER

    // =========================================================================
    // BACKGROUND

    // =========================================================================
    // HOVER


    // =========================================================================
    // HOVER BORDER







    //======================================================= Generate CSS rules
    let css = [
        `#demo-button.btn {
            font-family: ${fontFamilySelect.value};
            font-size: ${fontSizeRange.value}px;
            color: ${fontStyleColorPicker.toString('rgba')};
        }`
    ].join("\n");

    // Show the CSS rules in the container element
    cssContainer.innerHTML = ''; // Empty it first
    cssContainer.appendChild(document.createTextNode(css));

    // Update STYLE element with new CSS rules
    set_css(css);

}

// Install jscolor picker per documentation
jscolor.install();

// Update the button with current values
update()
