## INITIAL PLAN FOR FORM INPUTS
[Back to README/UX DESIGN/Structure](/README.md/#3-structure)


### Form information 
I had so many inputs to put into the accordion; I created this table to be clear with what I was adding. I can focus my 
mind on more important things while writing code when I have it written down. 

<!-- 
<table>
    <thead>
        <tr><th>Label</th><th>Element</th><th>Toggles</th><th>toggleId</th><th>ID</th><th>Variable</th></tr>
    </thead>
    <tbody>
        <tr><td colspan=6>FORM 1 - TEXT STYLING BLOCK</td></tr>
        <tr><td>Button&nbsp;Text</td><td>Textbox</td><td>&nbsp;</td><td>&nbsp;</td><td>style-text</td><td>styleText</td></tr>
        <tr><td>Font&nbsp;family</td><td>select</td><td>&nbsp;</td><td>&nbsp;</td><td>style-font</td><td>fontFamilySel</td></tr>
        <tr><td>Font&nbsp;color</td><td>color&nbsp;picker</td><td>&nbsp;</td><td>&nbsp;</td><td>style-color</td><td>fontStyleColorPicker</td></tr>
        <tr><td>Font&nbsp;size</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-size</td><td>fontSizeRange</td></tr>
        <tr><td colspan=6></td></tr>
        <tr><td>text&nbsp;shadow</td><td>color&nbsp;picker</td><td rowspan=4>on/off</td><td>toggleShadow</td><td>style-text-shadow</td><td>textShadowColorPicker</td></tr>
        <tr><td>x-axis</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-text-x</td><td>textShadowXRange</td></tr>
        <tr><td>y-axis</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-text-y</td><td>textShadowYRange</td></tr>
        <tr><td>blur</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-text-blur</td><td>textShadowBlurRange</td></tr>
        <tr><td colspan=6>FORM 2 - BOX STYLING</td></tr>
        <tr><td>box-shadow</td><td>color&nbsp;picker</td><td>on/off</td><td>toggleBox</td><td>style-box-shadow</td><td>boxColorPicker</td></tr>
        <tr><td>x-axis</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-box-x</td><td>boxXRange</td></tr>
        <tr><td>y-axis</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-box-y</td><td>boxYRange</td></tr>
        <tr><td>blur</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-box-blur</td><td>boxBlurRange</td></tr>
        <tr><td>padding</td><td>range</td><td>on</td><td>togglePadding</td><td>style-box-padding</td><td>boxPaddingRange</td></tr>
        <tr><td>padding&nbsp;top-bottom</td><td>range</td><td>off</td><td>&nbsp;</td><td>style-tb-padding</td><td>boxLrPaddingRange</td></tr>
        <tr><td>padding&nbsp;right-left</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-lr-padding</td><td>boxLrPaddingRange</td></tr>
        <tr><td colspan=6>FORM 3 - BORDER&nbsp;STYLING</td></tr>
        <tr><td>border-radius</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-border-radius</td><td>borderRadiusRange</td></tr>
        <tr><td>border-width</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-border-width</td><td>borderWidthRange</td></tr>
        <tr><td>border-color</td><td>color&nbsp;picker</td><td>&nbsp;</td><td>&nbsp;</td><td>style-border-color</td><td>borderColorPicker</td></tr>
        <tr><td colspan=6>FORM 4  - COLOR STYLING</td></tr>
        <tr><td>background&nbsp;(solid)</td><td>color&nbsp;picker</td><td>on</td><td>toggleBackground</td><td>style-bg-color</td><td>backgroundColorPicker</td></tr>
        <tr><td>start&nbsp;color</td><td>color&nbsp;picker</td><td>off</td><td>&nbsp;</td><td>style-gradient1-color</td><td>gradient1ColorPicker</td></tr>
        <tr><td>end&nbsp;color</td><td>color&nbsp;picker</td><td>&nbsp;</td><td>&nbsp;</td><td>style-gradient2-color</td><td>gradient2ColorPicker</td></tr>
        <tr><td>gradient&nbsp;direction</td><td>select</td><td>&nbsp;</td><td>&nbsp;</td><td>gradient-direction</td><td>gradientDirectionSel</td></tr>
        <tr><td colspan=6>FORM 5 HOVER - HOVER STYLING</td></tr>
        <tr><td>background&nbsp;(solid)</td><td>color&nbsp;picker</td><td>on</td><td>toggleHover</td><td>style-color-hover</td><td>backgroundHoverColorPicker</td></tr>
        <tr><td>start&nbsp;color</td><td>color&nbsp;picker</td><td>off</td><td>&nbsp;</td><td>style-gradient1-hover</td><td>gradient1HoverColorPicker</td></tr>
        <tr><td>end&nbsp;color</td><td>color&nbsp;picker</td><td>&nbsp;</td><td>&nbsp;</td><td>style-gradient2-hover</td><td>gradient2HoverColorPicker</td></tr>
        <tr><td>gradient&nbsp;direction</td><td>select</td><td>&nbsp;</td><td>&nbsp;</td><td>gradient-hover-direction</td><td>gradientHoverDirectionSel</td></tr>
        <tr><td>Hover&nbsp;border&nbsp;color</td><td>color&nbsp;picker</td><td>on/off</td><td>toggleHoverBorder</td><td>hover-border-color</td><td>hoverBorderColorPicker </td></tr>
        <tr><td>Border&nbsp;width</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>hover-border-width</td><td>hoverBorderWidthRange</td></tr>
    </tbody>
</table> -->

<table>
    <thead>
        <tr><th>Label</th><th>Element</th><th>Toggles</th><th>toggle Id</th><th>Id</th><th>Variable</th></tr>
    </thead>
    <tbody>
        <tr><td colspan="6">FORM 1 - TEXT STYLING BLOCK</td>
        <tr><td>Button&nbsp;Text</td><td>Textbox</td><td>&nbsp;</td><td>&nbsp;</td><td>style-text</td><td>styleText</td></tr>
        <tr><td>Font&nbsp;family</td><td>select</td><td>&nbsp;</td><td>&nbsp;</td><td>style-font</td><td>fontFamilySel</td></tr>
        <tr><td>Font&nbsp;color</td><td>color&nbsp;picker</td><td>&nbsp;</td><td>&nbsp;</td><td>style-color</td><td>fontStyleColorPicker</td></tr>
        <tr><td>Font&nbsp;size</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-size</td><td>fontSizeRange</td></tr><tr><td colspan="6">&nbsp;</td></tr>
        <tr><td>text&nbsp;shadow</td><td>color&nbsp;picker</td><td rowspan="4">on/off</td><td rowspan="4">toggleShadow</td><td>style-text-shadow</td><td>textShadowColorPicker</td></tr>
        <tr><td>x-axis</td><td>range</td><td>style-text-x</td><td>textShadowXRange</td></tr>
        <tr><td>y-axis</td><td>range</td><td>style-text-y</td><td>textShadowYRange</td></tr>
        <tr><td>blur</td><td>range</td><td>style-text-blur</td><td>textShadowBlurRange</td></tr>
        <tr><td colspan="6">FORM 2 - BOX STYLING</td></tr>
        <tr><td>box-shadow</td><td>color&nbsp;picker</td><td rowspan="4">on/off</td><td rowspan="4">toggleBox</td><td>style-box-shadow</td><td>boxColorPicker</td></tr>
        <tr><td>x-axis</td><td>range</td><td>style-box-x</td><td>boxXRange</td></tr>
        <tr><td>y-axis</td><td>&nbsp;</td><td>style-box-y</td><td>boxYRange</td></tr>
        <tr><td>blur</td><td>range</td><td>style-box-blur</td><td>boxBlurRange</td></tr>
        <tr><td>padding</td><td>range</td><td>on/off</td><td rowspan="3">togglePadding</td><td>style-box-padding</td><td>boxPaddingRange</td></tr>
        <tr><td>padding&nbsp;top-bottom</td><td>range</td><td rowspan="2">off/on</td><td>style-tb-padding</td><td>boxTbPaddingRange</td></tr>
        <tr><td>padding&nbsp;right-left</td><td>range</td><td>style-lr-padding</td><td>boxLrPaddingRange</td></tr>
        <tr><td colspan="6">FORM 3 - BORDER&nbsp;STYLING</td></tr>
        <tr><td>border-radius</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-border-radius</td><td>borderRadiusRange</td></tr>
        <tr><td>border-width</td><td>range</td><td>&nbsp;</td><td>&nbsp;</td><td>style-border-width</td><td>borderWidthRange</td></tr>
        <tr><td>border-color</td><td>color&nbsp;picker</td><td>&nbsp;</td><td>&nbsp;</td><td>style-border-color</td><td>borderColorPicker</td></tr>
        <tr><td colspan="6">FORM 4 - COLOR STYLING</td></tr>
        <tr><td>background&nbsp;(solid)</td><td>color&nbsp;picker</td><td>on/off</td><td rowspan=4>toggleBackground</td><td>style-bg-color</td><td>backgroundColorPicker</td></tr>
        <tr><td>start&nbsp;color</td><td>color&nbsp;picker</td><td rowspan=3>off/on</td><td>style-gradient1-color</td><td>gradient1ColorPicker</td></tr>
        <tr><td>end&nbsp;color</td><td>color&nbsp;picker</td>><td>style-gradient2-color</td><td>gradient2ColorPicker</td></tr>
        <tr><td>gradient&nbsp;direction</td><td>select</td><td>gradient-direction</td><td>gradientDirectionSel</td></tr>
        <tr><td colspan="6">FORM 5 HOVER - HOVER STYLING</td></tr>
        <tr><td>background&nbsp;(solid)</td><td>color&nbsp;picker</td><td>on/off</td><td rowspan=4>toggleHover</td><td>style-color-hover</td><td>backgroundHoverColorPicker</td></tr>
        <tr><td>start&nbsp;color</td><td>color&nbsp;picker</td><td rowspan=3>off/on</td><td>style-gradient1-hover</td><td>gradient1HoverColorPicker</td></tr>
        <tr><td>end&nbsp;color</td><td>color&nbsp;picker</td><td>style-gradient2-hover</td><td>gradient2HoverColorPicker</td></tr>
        <tr><td>gradient&nbsp;direction</td><td>select</td><td>gradient-hover-direction</td><td>gradientHoverDirectionSel</td></tr>
        <tr><td>Hover&nbsp;border&nbsp;color</td><td>color&nbsp;picker</td><td rowspan=2>on/off</td><td rowspan=2>toggleHoverBorder</td><td>hover-border-color</td><td>hoverBorderColorPicker</td></tr>
        <tr><td>Border&nbsp;width</td><td>range</td><td>hover-border-width</td><td>hoverBorderWidthRange</td></tr>
        </tbody>
</table>