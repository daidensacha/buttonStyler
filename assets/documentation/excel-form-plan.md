## INITIAL PLAN FOR FORM INPUTS
[Back to README/UX DESIGN/Structure](/README.md/#3-structure)


### Form information 
I had so many inputs to put into the accordion; I created this table to be clear with what I was adding. I can focus my 
mind on more important things while writing code when I have it written down. 

|Label                        |Element     |Toggle Action        |toggle Id         |Id                       |Variable                  |
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
|padding top-bottom           |range       |toggle off           |                 |#style-tb-padding        |boxLrPaddingRange         |
|padding right-left           |range       |                     |                 |#style-lr-padding        |boxLrPaddingRange        |
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

<table>
    <thead>
        <tr><th>Label</th><th>Element</th><th>Toggles</th><th>toggleId</th><th>ID</th><th>Variable</th></tr>
    </thead>
    <tbody>
        <tr><td colspan=6>FORM ONE - Text Styling Block</td></tr>
        <tr><td>Button Text</td><td>Textbox</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-text</td><td>styleText</td></tr>
        <tr><td>Font family</td><td>select</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-font</td><td>fontFamilySel</td></tr>
        <tr><td>Font color</td><td>color picker</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-color</td><td>fontStyleColorPicker</td></tr>
        <tr><td>Font size</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-size</td><td>fontSizeRange</td></tr>
        <tr><td colspan=6></td></tr>
        <tr><td>text shadow</td><td>color picker</td><td>toggle on/off</td><td>toggleShadow</td><td>#style-text-shadow</td><td>textShadowColorPicker</td></tr>
        <tr><td>x-axis</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-text-x</td><td>textShadowXRange</td></tr>
        <tr><td>y-axis</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-text-y</td><td>textShadowYRange</td></tr>
        <tr><td>blur</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-text-blur</td><td>textShadowBlurRange</td></tr>
        <tr><td colspan=6></td></tr>
        <tr><td colspan=6>FORM 2 - Box Styling</td></tr>
        <tr><td>box-shadow</td><td>color picker</td><td>toggle on/off</td><td>toggleBox</td><td>#style-box-shadow"</td><td>boxColorPicker</td></tr>
        <tr><td>x-axis</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-box-x</td><td>boxXRange</td></tr>
        <tr><td>y-axis</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-box-y</td><td>boxYRange</td></tr>
        <tr><td>blur</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-box-blur</td><td>boxBlurRange</td></tr>
        <tr><td>padding</td><td>range</td><td>toggle on</td><td>togglePadding</td><td>#style-box-padding</td><td>boxPaddingRange</td></tr>
        <tr><td>padding top-bottom</td><td>range</td><td>toggle off</td><td>&nbsp;</td><td>#style-tb-padding</td><td>boxLrPaddingRange</td></tr>
        <tr><td>padding right-left</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-lr-padding</td><td>boxLrPaddingRange</td></tr>
        <tr><td colspan=6></td></tr>
        <tr><td colspan=6>FORM 3 - Border Styling</td></tr>
        <tr><td>border-radius</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-border-radius</td><td>borderRadiusRange</td></tr>
        <tr><td>border-width</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-border-width</td><td>borderWidthRange</td></tr>
        <tr><td>border-color</td><td>color picker</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-border-color</td><td>borderColorPicker</td></tr>
        <tr><td colspan=6></td></tr>
        <tr><td colspan=6>FORM 4  - Color Styling</td></tr>
        <tr><td>background (solid)</td><td>color picker</td><td>toggle on (solid)</td><td>toggleBackground</td><td>#style-bg-color</td><td>backgroundColorPicker</td></tr>
        <tr><td>start color</td><td>color picker</td><td>toggle off (gradient)</td><td>&nbsp;</td><td>#style-gradient1-color</td><td>gradient1ColorPicker</td></tr>
        <tr><td>end color</td><td>color picker</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-gradient2-color</td><td>gradient2ColorPicker</td></tr>
        <tr><td>gradient direction</td><td>select</td><td>&nbsp;</td><td>&nbsp;</td><td>#gradient-direction</td><td>gradientDirectionSel</td></tr>
        <tr><td colspan=6></td></tr>
        <tr><td colspan=6>FORM 5 Hover - Hover Styling</td></tr>
        <tr><td>background (solid)</td><td>color picker</td><td>toggle on (solid)</td><td>toggleHover</td><td>#style-color-hover</td><td>backgroundHoverColorPicker</td></tr>
        <tr><td>start color</td><td>color picker</td><td>toggle off (gradient)</td><td>&nbsp;</td><td>#style-gradient1-hover</td><td>gradient1HoverColorPicker</td></tr>
        <tr><td>end color</td><td>color picker</td><td>&nbsp;</td><td>&nbsp;</td><td>#style-gradient2-hover</td><td>gradient2HoverColorPicker</td></tr>
        <tr><td>gradient direction</td><td>select</td><td>&nbsp;</td><td>&nbsp;</td><td>#gradient-hover-direction</td><td>gradientHoverDirectionSel</td></tr>
        <tr><td>Hover border color</td><td>color picker</td><td>toggle on/off</td><td>toggleHoverBorder</td><td>#hover-border-color  </td><td>hoverBorderColorPicker  </td></tr>
        <tr><td>Border width</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>#hover-border-width </td><td>hoverBorderWidthRange</td></tr>
    </tbody>
</table>