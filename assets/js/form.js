// This code processes the data from the accordion with the forms of inputs that 
// are used to select the CSS styles for the display button. It appends the CSS 
// to the HEAD in style tags, and styles the demo button with live 
//results. The CSS rules for the generated style is output into a <pre> </pre>
// block so the CSS can be copied to use and replicate the generated style.

//============================= JSCOLOR PICKER OPTIONS =========================
jscolor.presets.default = {
	previewPosition:'right', 
    previewSize:60, 
    position:'top',
    format:'auto', 
    // palette:'rgba(0,0,0,0) #fff #808080 #000 #996e36 #f55525 #ffe438 #88dd20 #22e0cd #269aff #bb1cd4', // Simple palette
    palette:'#007bff #6610f2 #6f42c1 #e83e8c #dc3545 #fd7e14 #f0ad4e #28a745 #20c997 #17a2b8 #ffffff #f8f9fa #6c757d #343a40 #000000 rgba(0,0,0,0)', // Bootstrap palette
    hideOnPaletteClick:true,
	backgroundColor:'rgba(1,2,46,0.72)', 
	borderColor:'rgba(120,120,120,1)', 
    width:139, 
    height:80, 
	controlBorderColor:'rgba(130,130,130,1)', 
    sliderSize:12, 
	shadowColor:'rgba(10,10,10,0.55)'
};

// Adding style element for the CSS styles
let styleEl = document.createElement('style');

// Append the style to the HEAD
document.getElementsByTagName('head')[0].appendChild(styleEl);

//
//============== Function updates style element with given CSS rules============
function set_css(css) {
    if (styleEl.styleSheet) {
        styleEl.styleSheet.cssText = css;

    } else {
        styleEl.innerHTML = ''; // Empty it to begin
        styleEl.appendChild(document.createTextNode(css));
    }
}

//
//==========Function to generate CSS rules and set them to STYLE element========
function update() {
    // The preview button for seeing styling
    let demoButton = document.querySelector('#demo-button');

    // Container to display generated CSS rules 
    let cssContainer = document.querySelector('#cssContainer');

    // Assign varian to the button background color picker
    let displayBgPicker = document.querySelector("#display-bg-picker").jscolor;

    // Assign variable to the demo button background
    let demoBtnBackground = document.querySelector("#css-button");

    // Output the color do the button background
    demoBtnBackground.style.background = displayBgPicker.toString('rgba');

    ////////////////////////////////////////////////////////////////////////////

    // INPUTS BY SECTION
    // =========================================================================
    // FONT INPUTS
    let styleText = document.querySelector('#style-text');
    let fontFamilySel = document.querySelector('#style-font');
    let fontFamilySelect = fontFamilySel.options[fontFamilySel.selectedIndex].text;
   // let fontFamilySelect = document.querySelector('#style-font');
    let fontStyleColorPicker = document.querySelector('#style-color').jscolor;
    let fontSizeRange = document.querySelector('#style-fontsize');
 
    // =========================================================================
    // SHADOW
    let shadowToggle = document.querySelector('#blur-group-toggle');
    let textShadowColorPicker = document.querySelector('#style-text-shadow').jscolor;
    let textShadowXRange = document.querySelector('#style-text-x');
    let textShadowYRange = document.querySelector('#style-text-y');
    let textShadowBlurRange = document.querySelector('#style-text-blur');

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
    let boxLrPaddingRange = document.querySelector('#style-rl-padding');

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
    let gradientDirectionSel = document.querySelector('#gradient-direction');
    let gradientDirectionSelect = gradientDirectionSel.options[gradientDirectionSel.selectedIndex].text;
 
    // =========================================================================
    // HOVER
    let hoverGroupToggle = document.querySelector('#hover-group-toggle');
    let backgroundHoverColorPicker = document.querySelector('#style-color-hover').jscolor;
    let gradient1HoverColorPicker = document.querySelector('#style-gradient1-hover').jscolor;
    let gradient2HoverColorPicker = document.querySelector('#style-gradient2-hover').jscolor;
    let gradientHoverDirectionSel = document.querySelector('#gradient-hover-direction');
    let gradientHoverDirectionSelect = gradientHoverDirectionSel.options[gradientHoverDirectionSel.selectedIndex].text;

    // =========================================================================
    // HOVER BORDER
    let hoverBorderToggle = document.querySelector('#hover-border-toggle');
    let hoverColor = document.querySelector('#hover-color').jscolor;
    let hoverBorderColorPicker = document.querySelector('#hover-border-color').jscolor;
    let hoverBorderWidthRange = document.querySelector('#hover-border-width');

    ////////////////////////////////////////////////////////////////////////////

    //
    // ============= Validate text and set the text of the button ==============
    // 
    styleText.addEventListener('keyup', setText);
    function setText() {
        let re = /^[a-zA-Z ]{3,16}$/; // Regex validate input text
        let btnText = styleText.value;
        let isOk = re.test(btnText);
        let errorSpan = document.querySelector("#required-message");
        errorSpan.innerText = "Enter 3-16 letters only";
        if (btnText == "" || btnText.length < 3 || isOk == false) {
            errorSpan.className = "show-span"; // Adds error class with css fade in
            demoButton.innerText = "My Button"; // Keeps default value if value invalid
            setTimeout(() => {
                errorSpan.className = "hide-span"; // Adds error class with css fade out
            }, 3000);
        } else {
            demoButton.innerText = btnText;
        }
    }

    // ========================CSS VARIABLES AND STRINGS========================

    /* CSS Font Strings */ 
    let fontFamily = "\tfont-family: " + fontFamilySelect + ";";
    //let fontFamily = "\tfont-family: " + fontFamilySelect.value + ";";
    let fontColor = "\tcolor: " + fontStyleColorPicker.toString('rgba') + ";";
    let fontSize = "\tfont-size: " + fontSizeRange.value + "px;";   

    /* CSS Text Shadow Strings */ 
    let textShadow = `\ttext-shadow: ${textShadowXRange.value}px ${textShadowYRange.value}px ${textShadowBlurRange.value}px ${textShadowColorPicker.toString('rgba')};`;

    /* CSS Box Shadow String */ 
    let boxShadow = `\tbox-shadow: ${boxXRange.value}px ${boxYRange.value}px ${boxBlurRange.value}px ${boxColorPicker.toString('rgba')};`;

    /* CSS Padding Strings */ 
    let padding = `\tpadding: ${boxPaddingRange.value}px;`;
    let paddingTbRl = `\tpadding: ${boxTbPaddingRange.value}px ${boxLrPaddingRange.value}px;`;

    /* CSS Border String */ 
    let border = `\tborder: ${borderWidthRange.value}px solid ${borderColorPicker.toString('rgba')};`;
    let borderRadius = `\tborder-radius: ${borderRadiusRange.value}px;`;

    /* CSS Background Strings */ 
    let background = `\tbackground: ${backgroundColorPicker.toString('rgba')};`;
    let backgroundGradient = ` \tbackground: ${gradient1ColorPicker.toString('rgba')};
    \tbackground-image: -webkit-linear-gradient(${gradientDirectionSelect}, ${gradient1ColorPicker.toString('rgba')}, ${gradient2ColorPicker.toString('rgba')});
    \tbackground-image: -moz-linear-gradient(${gradientDirectionSelect}, ${gradient1ColorPicker.toString('rgba')}, ${gradient2ColorPicker.toString('rgba')});
    \tbackground-image: -ms-linear-gradient(${gradientDirectionSelect}, ${gradient1ColorPicker.toString('rgba')}, ${gradient2ColorPicker.toString('rgba')});
    \tbackground-image: -o-linear-gradient(${gradientDirectionSelect}, ${gradient1ColorPicker.toString('rgba')}, ${gradient2ColorPicker.toString('rgba')});
    \tbackground-image: linear-gradient(${gradientDirectionSelect}, ${gradient1ColorPicker.toString('rgba')}, ${gradient2ColorPicker.toString('rgba')});`;

    /* CSS Hover Strings */ 
    let backgroundHover = `\tbackground: ${backgroundHoverColorPicker.toString('rgba')};`;
    let backgroundGradientHover = `\tbackground: ${gradient1HoverColorPicker.toString('rgba')};
    \tbackground-image: -webkit-linear-gradient(${gradientHoverDirectionSelect}, ${gradient1HoverColorPicker.toString('rgba')}, ${gradient2HoverColorPicker.toString('rgba')});
    \tbackground-image: -moz-linear-gradient(${gradientHoverDirectionSelect}, ${gradient1HoverColorPicker.toString('rgba')}, ${gradient2HoverColorPicker.toString('rgba')});
    \tbackground-image: -ms-linear-gradient(${gradientHoverDirectionSelect}, ${gradient1HoverColorPicker.toString('rgba')}, ${gradient2HoverColorPicker.toString('rgba')});
    \tbackground-image: -o-linear-gradient(${gradientHoverDirectionSelect}, ${gradient1HoverColorPicker.toString('rgba')}, ${gradient2HoverColorPicker.toString('rgba')});
    \tbackground-image: linear-gradient(${gradientHoverDirectionSelect}, ${gradient1HoverColorPicker.toString('rgba')}, ${gradient2HoverColorPicker.toString('rgba')});`;

    /* Border Hover string */
    let hoverFontColor = `\tcolor: ${hoverColor.toString('rgba')};`;
    let borderHover = `\tborder: ${hoverBorderWidthRange.value}px solid ${hoverBorderColorPicker.toString('rgba')};`;

    // CSS STRINGS
    let openTag = "\n#demo-button.btn {";
    let closeTag =      "}";
    let hoverOpenTag = `\n#demo-button.btn:hover {`;
    let hoverCloseTag = `}`;

    // CREATE THE ARRAY TO HOLD THE CSS VARIABLES
    let lines = []; // lines of CSS rules

    // PUSH THE REQUIRED CSS RULES TO THE ARRAY

    // Button name and opening css rule tag
    lines.push(openTag); // opening tag of CSS rules

    // FONT-FAMILY - FONT-COLOR - FONT-SIZE
    lines.push(fontFamily);
    lines.push(fontColor);
    lines.push(fontSize);

    // TEXT SHADOW
        if (!shadowToggle.checked){
        // console.log("Text Shadow Toggle OFF");
    } else {
        lines.push(textShadow);
        // console.log("Text Shadow Toggle ON");
    }

    // BOX SHADOW 
    if (!shadowGroupToggle.checked){
        // console.log("Box Shadow Toggle OFF");
    } else {
        lines.push(boxShadow);
        // console.log("Box Shadow Toggle ON");
    }

    // PADDING
    if (!paddingGroupToggle.checked){
        lines.push(padding);
        // console.log("Padding TRBL ON/ TB-LR OFF");
    } else {
        lines.push(paddingTbRl);
        // console.log("Padding TRBL OFF/ TB-LR ON");
    }
    // BORDER 
    lines.push(border);

    // BORDER RADIUS
    lines.push(borderRadius);

    // BACKGROUND
    if (!backgroundGroupToggle.checked) {
        lines.push(background);
        // console.log("Solid background: " + backgroundGroupToggle.checked);
    } else {
        lines.push(backgroundGradient);
        // console.log("Gradient background: " + backgroundGroupToggle.checked);
    }

    // CLOSING TAG
    lines.push(closeTag); // closing tag of CSS rules

    // HOVER CSS RULE OPENING TAG
    lines.push(hoverOpenTag);

    // HOVER FONT COLOR
    lines.push(hoverFontColor);

    // HOVER BACKGROUND COLOR
    if (!hoverGroupToggle.checked) {
        lines.push(backgroundHover);
        // console.log("Hover Solid background: " + hoverGroupToggle.checked);
    } else {
        lines.push(backgroundGradientHover);
        // console.log("Hover Gradient background: " + hoverGroupToggle.checked);
    }

    // HOVER BORDER
    if (hoverBorderToggle.checked) {
        lines.push(borderHover);
    }

    // HOVER CLOSING TAG
    lines.push(hoverCloseTag);

    let css = lines.join("\n");

    // Show the CSS rules in the container element
    cssContainer.innerHTML = ''; // Empty it first
    
    cssContainer.appendChild(document.createTextNode(css));

    // Update STYLE element with new CSS rules
    set_css(css);

}

// Install jscolor picker per documentation
jscolor.install();

// Update the button with current values
update();


