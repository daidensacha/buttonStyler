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

    } else {
        styleEl.innerHTML = ''; // Empty it to begin
        styleEl.appendChild(document.createTextNode(css));
    }
}

//
//==================Function to generate CSS rules and set them to STYLE element
function update() {
    // The preview button for seeing styling
    let demoButton = document.querySelector('#demo-button');

    // Container to display generated CSS rules 
    let cssContainer = document.querySelector('#cssContainer');

    ////////////////////////////////////////////////////////////////////////////

    // INPUTS BY SECTION
    // =========================================================================
    // FONT INPUTS
    let styleText = document.querySelector('#style-text');
    let fontFamilySelect = document.querySelector('#style-font');
    let fontStyleColorPicker = document.querySelector('#style-color').jscolor;
    let fontSizeRange = document.querySelector('#style-fontsize');
 
    // =========================================================================
    // SHADOW
    let shadowToggle = document.querySelector('#blur-group-toggle');
    let textShadowColorPicker = document.querySelector('#style-text-shadow').jscolor;
    let textShadowXRange = document.querySelector('#style-text-x');
    let textShadowYRange = document.querySelector('#style-text-y');
    let textShadowBlurRange = document.querySelector('#style-text-blur');

    //  SHADOW CSS STRING
    let textShadowStyle =     `text-shadow: ${textShadowXRange.value}px ${textShadowYRange.value}px ${textShadowBlurRange.value}px ${textShadowColorPicker.toString('rgba')};`;

    // shadowToggle.addEventListener('toggle', function(){
    //     textShadowStyle.hidden = true;

    // })
    
    // if (shadowToggle.checked === true) {
    //     //console.log("true is "+shadowToggle.checked);
    //     textShadowStyle = [
    //         `text-shadow: ${textShadowXRange.value}px ${textShadowYRange.value}px ${textShadowBlurRange.value}px ${textShadowColorPicker.toString('rgba')};`
    //     ]
    //     } else {
            
    //     //textShadowStyle = undefined;
    //         // console.log("false is "+shadowToggle.checked)
    //     };

    // =========================================================================
    // BOX 
    let shadowGroupToggle = document.querySelector('#shadow-group-toggle');
    let boxColorPicker = document.querySelector('#style-box-shadow').jscolor;
    let boxXRange = document.querySelector('#style-box-x');
    let boxYRange = document.querySelector('#style-box-y');
    let boxBlurRange = document.querySelector('#style-box-blur');

    // =========================================================================
    // PADDING
    let paddingGroupToggle = document.querySelector('#padding-group-toggle');
    let boxPaddingRange = document.querySelector('#style-box-padding');
    let boxTbPaddingRange = document.querySelector('#style-tb-padding');
    let boxLrlPaddingRange = document.querySelector('#style-rl-padding');


    // =========================================================================
    // BORDER
    let borderColorPicker = document.querySelector('#style-border-color').jscolor;
    let borderWidthRange = document.querySelector('#style-border-width');
    let borderRadiusRange = document.querySelector('#style-border-radius');


    // =========================================================================
    // BACKGROUND
    let backgroundGroupToggle = document.querySelector('#bg-group-toggle');
    let backgroundColorPicker = document.querySelector('#style-bg-color').jscolor;
    let gradient1ColorPicker = document.querySelector('#style-gradient1-color').jscolor;
    let gradient2ColorPicker = document.querySelector('#style-gradient2-color').jscolor;
    let gradientDirectionSelect = document.querySelector('#gradient-direction');
 

    // =========================================================================
    // HOVER
    let hoverGroupToggle = document.querySelector('#hover-group-toggle');
    let backgroundHoverColorPicker = document.querySelector('#style-color-hover').jscolor;
    let gradient1HoverColorPicker = document.querySelector('#style-gradient1-hover').jscolor;
    let gradient2HoverColorPicker = document.querySelector('#style-gradient2-hover').jscolor;
    let gradientHoverDirectionSelect = document.querySelector('#gradient-hover-direction');


    // =========================================================================
    // HOVER BORDER
    let hoverBorderToggle = document.querySelector('#hover-border-toggle');
    let hoverBorderColorPicker = document.querySelector('#hover-border-color').jscolor;
    let hoverBorderWidthRange = document.querySelector('#hover-border-width');


    ////////////////////////////////////////////////////////////////////////////


    //================================================Set the text of the button
    styleText.addEventListener('keyup', setText);
    function setText() {
        demoButton.innerText = styleText.value;
    }

    // ========================CSS VARIABLEd AND STRINGS========================

    /* CSS Font Strings */ 
    let fontFamily = `font-family: ${fontFamilySelect.value};`;
    let fontColor = `color: ${fontStyleColorPicker.toString('rgba')};`;
    let fontSize = `font-size: ${fontSizeRange.value}px;`;   
    /* CSS Text Shadow Strings */ 
    let textShadow = `text-shadow: ${textShadowXRange.value} ${textShadowYRange.value} ${textShadowYRange.value} ${textShadowColorPicker.toString('rgba')};`;
    /* CSS Box Shadow String */ 
    let boxShadow = `box-shadow: ${boxXRange.value} ${boxYRange.value} ${boxBlurRange.value} ${boxColorPicker.toString('rgba')};`;
    /* CSS Padding Strings */ 
    let padding = `padding: ${boxPaddingRange.value}px;`;
    let paddingTbRl = `padding: ${boxTbPaddingRange.value}px ${boxLrlPaddingRange.value}px;`;
    /* CSS Border String */ 
    let border = `border: ${borderWidthRange.value}px solid ${borderColorPicker.toString('rgba')};`;
    let borderRadius = `border-radius: ${borderRadiusRange.value}px;`;
    /* CSS Background Strings */ 
    let background = `background: ${backgroundColorPicker.toString('rgba')};`;
    let backgroundGradient = ` background: ${gradient1ColorPicker.toString('rgba')};
    background-image: -webkit-linear-gradient(${gradientDirectionSelect.value}, ${gradient1ColorPicker.toString('rgba')}, ${gradient2ColorPicker.toString('rgba')});
    background-image: -moz-linear-gradient(${gradientDirectionSelect.value}, ${gradient1ColorPicker.toString('rgba')}, ${gradient2ColorPicker.toString('rgba')});
    background-image: -ms-linear-gradient(${gradientDirectionSelect.value}, ${gradient1ColorPicker.toString('rgba')}, ${gradient2ColorPicker.toString('rgba')});
    background-image: -o-linear-gradient(${gradientDirectionSelect.value}, ${gradient1ColorPicker.toString('rgba')}, ${gradient2ColorPicker.toString('rgba')});
    background-image: linear-gradient(${gradientDirectionSelect.value}, ${gradient1ColorPicker.toString('rgba')}, ${gradient2ColorPicker.toString('rgba')});`;
    /* CSS Hover Strings */ 
    let backgroundHover = `background: ${backgroundHoverColorPicker.toString('rgba')};`;
    let backgroundGradientHover = ` background: ${gradient1HoverColorPicker.toString('rgba')};
    background-image: -webkit-linear-gradient(${gradientHoverDirectionSelect.value}, ${gradient1HoverColorPicker.toString('rgba')}, ${gradient2HoverColorPicker.toString('rgba')});
    background-image: -moz-linear-gradient(${gradientHoverDirectionSelect.value}, ${gradient1HoverColorPicker.toString('rgba')}, ${gradient2HoverColorPicker.toString('rgba')});
    background-image: -ms-linear-gradient(${gradientHoverDirectionSelect.value}, ${gradient1HoverColorPicker.toString('rgba')}, ${gradient2HoverColorPicker.toString('rgba')});
    background-image: -o-linear-gradient(${gradientHoverDirectionSelect.value}, ${gradient1HoverColorPicker.toString('rgba')}, ${gradient2HoverColorPicker.toString('rgba')});
    background-image: linear-gradient(${gradientHoverDirectionSelect.value}, ${gradient1HoverColorPicker.toString('rgba')}, ${gradient2HoverColorPicker.toString('rgba')});`;
    /* Border Hover string */
    let borderHover = `border: ${hoverBorderWidthRange.value} solid ${hoverBorderColorPicker.toString('rgba')}`;

    // CSS STRINGS
let openTag = `#demo-button.btn {`;
let closeTag = `        }`;


let lines = []; // lines of CSS rules

lines.push(openTag); // opening tag of CSS rules
lines.push(fontFamilySelect.value);
lines.push(fontSizeRange.value)

lines.push(closeTag); // closing tag of CSS rules


    //======================================================= Generate CSS rules
    let css = [
        `#demo-button.btn {
            font-family: ${fontFamilySelect.value};
            font-size: ${fontSizeRange.value}px;
            ${textShadowStyle}
            padding: ${boxPaddingRange.value}px;
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
