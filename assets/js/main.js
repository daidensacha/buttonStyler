
// NAVBAR OFFCANVAS JS
$(function() {
    // executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
     
     
       $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
       $('.offcanvas-collapse').toggleClass('open')
     })
     
     
   // document ready  
   });
   
   
   window.onload = function() {
    // executes when complete page is fully loaded, including all frames, objects and images
   console.log("window is loaded");
     
     
   // window load  
   };

//    ============== jscolor picker options ====================================
//Color picker options
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