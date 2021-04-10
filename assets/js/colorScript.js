/* 
============== DEMO BUTTON =============
Demo Button ID: #demo-button


==============Color Pickers=============
Font color:         #style-color
Box shadow:         #style-box-shadow
Background color:   #style-bg-color
Gradient color 1:   #style-gradient1-color
Gradient color 2 :  #style-gradient2-color
Border color        #style-border-color
Text shadow         #style-text-shadow
Hover color         #style-color-hover
Hover gradient 1    #style-gradient1-hover
Hover gradient 2    #style-gradient2-hover
Hover border        #hover-border-color


=========CSS Output Spans===============
Font color:         #fontColor
Box shadow          styleBoxShadow
Background color:   #styleBgColor
Gradient color 1:   #styleGr1Color
Gradient color 2:   #styleGr2Color
Border color        #styleBorderColor
Text shadow         #textShadow
Hover color         #styleColorHover
Hover gradient  1   #styleGr1Hover
Hover gradient  2   #styleGr2Hover 
Hover border        #styleBorderHover


*/

//    ========================= JSCOLOR PICKER OPTIONS =========================
// Color picker options
// These options apply to all color pickers on the page

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




function update() {
    var previewButton = document.querySelector("#demo-button");

    //Containers for generated CSS rules
    var fontColor = document.querySelector("#fontColor");
    var styleBoxShadow = document.querySelector("#styleBoxShadow");
    var styleBgColor = document.querySelector("#styleBgColor");
    var styleGr1Color = document.querySelector("#styleGr1Color");
    var styleGr2Color = document.querySelector("#styleGr2Color");
    var styleBorderColor = document.querySelector("#styleBorderColor");
    var styleColorHover = document.querySelector("#styleColorHover");
    var textShadow = document.querySelector("#textShadow");
    var styleGr1Hover = document.querySelector("#styleGr1Hover");
    var styleGr2Hover = document.querySelector("#styleGr2Hover");
    var styleBorderHover = document.querySelector("#styleBorderHover");

    // Color pickers 
    var fontColorPicker = document.querySelector("#style-color").jscolor;
    var boxShadowPicker = document.querySelector("#style-box-shadow").jscolor;
    var backgroundColorPicker = document.querySelector("#style-bg-color").jscolor;
    var gradientBg1ColorPicker = document.querySelector("#style-gradient1-color").jscolor;
    var gradientBg2ColorPicker = document.querySelector("#style-gradient2-color").jscolor;
    var borderColorPicker = document.querySelector("#style-border-color").jscolor;
    var styleHoverColorPicker = document.querySelector("#style-color-hover").jscolor;
    var styleTextShadowColorPicker = document.querySelector("#style-text-shadow").jscolor;
    var hoverGradient1ColorPicker = document.querySelector("#style-gradient1-hover").jscolor;
    var hoverGradient2ColorPicker = document.querySelector("#style-gradient2-hover").jscolor;
    var hoverBorderColorPicker = document.querySelector("#hover-border-color").jscolor;


    // Generate CSS Rules for the CSS output spans
    fontColor.innerText = "color: " + fontColorPicker.toString('rgba') + ";"
    styleBoxShadow.innerText = " box-shadow: 0px 2px 3px " + boxShadowPicker.toString('rgba') + "; ** Not finished, need to add X,Y, BLur"
    styleBgColor.innerText = "background: " + backgroundColorPicker.toString('rgba') + ";"
    //styleBgColor.innerText = "background: " + gradientBg1ColorPicker.toString('rgba') + "," // This is for the gradients, need to work out how to code it, to send it to add gradient color
   // styleBgColor.innerText = "background: " + gradientBg2ColorPicker.toString('rgba') + ");" // This is for the gradients, need to work out how to code it, to send it to add gradient color
    styleBorderColor.innerText = "border-color: " + borderColorPicker.toString('rgba') + ";"
    styleColorHover.innerText = "(solid) color: " + styleHoverColorPicker.toString('rgba') + ";"
    textShadow.innerText = "text-shadow: " + styleTextShadowColorPicker.toString('rgba') + "; ** Not finished, need to add X,Y, BLur"
    styleGr1Hover.innerText = "background-image: -webkit-linear-gradient(top, " + hoverGradient1ColorPicker.toString('rgba') + "," // Gradient
    styleGr2Hover.innerText =  hoverGradient2ColorPicker.toString('rgba') + ");" // Gradient
    styleBorderHover.innerText = "(border)color : " + hoverBorderColorPicker.toString('rgba') + ";"    // Hover border, needs to be set with mousein mouseout

    // Set CSS Styles to the button
    previewButton.style.color = fontColorPicker.toString('rgba');
    previewButton.style.boxShadow = boxShadowPicker.toString('rgba');
    previewButton.style.background = backgroundColorPicker.toString('rgba');
   // previewButton.style.background = gradientBg1ColorPicker.toString('rgba'); // This is for the gradients, need to work out how to code it, to send it to add gradient color
   // previewButton.style.background = gradientBg2ColorPicker.toString('rgba'); // This is for the gradients, need to work out how to code it, to send it to add gradient color

    previewButton.style.borderColor = borderColorPicker.toString('rgba');
  //previewButton.style.color = styleHoverColorPicker.toString('rgba'); // This is not possible to change in js, need to do something else. Is it possible? mouseover mouseof
    previewButton.style.textShadow = styleTextShadowColorPicker.toString('rgba');   // Need set this up in the html with nexted spans with ids for the different attrifbutes.
   // previewButton.style.textShadow = hoverGradient1ColorPicker.toString('rgba');    // Need mousein  mouseout
   // previewButton.style.textShadow = hoverGradient2ColorPicker.toString('rgba');    // Need Mouse in Mouse out
  //  previewButton.style.textShadow = hoverBorderColorPicker.toString('rgba');       // Need Mouse in Mouse out
}


function hover(){

}

// jscolor.install();
// update();

window.addEventListener('DOMContentLoaded', function () {
    jscolor.install();
    update();
});
