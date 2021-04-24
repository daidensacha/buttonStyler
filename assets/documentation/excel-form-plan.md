## INITIAL PLAN FOR FORM INPUTS
[Back to README/UX DESIGN/Structure](/README.md/#3-structure)


### Form information 
I had so many inputs to put into the accordion; I created this table to be clear with what I was adding. I can focus my 
mind on more important things while writing code when I have it written down. 

|Label                        |Element     |Toggle Action        |toggleId         |ID                       |Variable                  |
|:----------------------------|:-----------|:--------------------|:----------------|:------------------------|:-------------------------|
|FORM ONE - Text Styling Block|            |                     |                 |                         |                          |
|Button Text                  |Textbox     |                     |                 |#style-text              |styleText                 |
|Font family                  |select      |                     |                 |#style-font              |fontFamilySel             |
|Font color                   |color picker|                     |                 |#style-color             |fontStyleColorPicker      |
|Font size                    |range       |                     |                 |#style-size              |fontSizeRange             |
|                             |            |                     |                 |                         |                          |
|text shadow                  |color picker|toggle on/off        |toggleShadow     |#style-text-shadow       |textShadowColorPicker     |
|x-axis                       |range       |                     |                 |#style-text-x            |textShadowXRange          |
|y-axis                       |range       |                     |                 |#style-text-y            |textShadowYRange          |
|blur                         |range       |                     |                 |#style-text-blur         |textShadowBlurRange       |
|                             |            |                     |                 |                         |                          |
|FORM 2 - Box Styling         |            |                     |                 |                         |                          |
|box-shadow                   |color picker|toggle on/off        |toggleBox        |#style-box-shadow"       |boxColorPicker            |
|x-axis                       |range       |                     |                 |#style-box-x             |boxXRange                 |
|y-axis                       |range       |                     |                 |#style-box-y             |boxYRange                 |
|blur                         |range       |                     |                 |#style-box-blur          |boxBlurRange              |
|padding                      |range       |toggle on            |togglePadding    |#style-box-padding       |boxPaddingRange           |
|padding top-bottom           |range       |toggle off           |                 |#style-tb-padding        |boxTbPaddingRange         |
|padding right-left           |range       |                     |                 |#style-lr-padding        |boxLrlPaddingRange        |
|                             |            |                     |                 |                         |                          |
|FORM 3 - Border Styling      |            |                     |                 |                         |                          |
|border-radius                |range       |                     |                 |#style-border-radius     |borderRadiusRange         |
|border-width                 |range       |                     |                 |#style-border-width      |borderWidthRange          |
|border-color                 |color picker|                     |                 |#style-border-color      |borderColorPicker         |
|                             |            |                     |                 |                         |                          |
|FORM 4  - Color Styling      |            |                     |                 |                         |                          |
|background (solid)           |color picker|toggle on (solid)    |toggleBackground |#style-bg-color          |backgroundColorPicker     |
|start color                  |color picker|toggle off (gradient)|                 |#style-gradient1-color   |gradient1ColorPicker      |
|end color                    |color picker|                     |                 |#style-gradient2-color   |gradient2ColorPicker      |
|gradient direction           |select      |                     |                 |#gradient-direction      |gradientDirectionSel      |
|                             |            |                     |                 |                         |                          |
|FORM 5 Hover - Hover Styling |            |                     |                 |                         |                          |
|background (solid)           |color picker|toggle on (solid)    |toggleHover      |#style-color-hover       |backgroundHoverColorPicker|
|start color                  |color picker|toggle off (gradient)|                 |#style-gradient1-hover   |gradient1HoverColorPicker |
|end color                    |color picker|                     |                 |#style-gradient2-hover   |gradient2HoverColorPicker |
|gradient direction           |select      |                     |                 |#gradient-hover-direction|gradientHoverDirectionSel |
|Hover border color           |color picker|toggle on/off        |toggleHoverBorder|#hover-border-color      |hoverBorderColorPicker    |
|Border width                 |range       |                     |                 |#hover-border-width      |hoverBorderWidthRange     |