
// NAVBAR OFFCANVAS JS
$(function() {
    // executes when HTML-Document is loaded and DOM is ready
  // console.log("document is ready");
    
    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
    $('#offCanvasLeft').toggleClass('open')
    })

    $("contactToggle").on('click', function(){
    $('#contactModal').modal('show');
    })  
     
// document ready  footer-offcanvas
});
   
   
   window.onload = function() {
    // executes when complete page is fully loaded, including all frames, objects and images
   //console.log("window is loaded");
   // window load  
   };

// ==============  RANGE SLIDER ================================================
// Range with tooltip
// https://css-tricks.com/value-bubbles-for-range-inputs/
var rangeSlider = function(){
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');
      
    slider.each(function(){
  
      value.each(function(){
        var value = $(this).prev().attr('value');
        $(this).html(value);
      });
  
      range.on('input', function(){
        $(this).next(value).html(this.value);
      });
    });
  };
  
  rangeSlider();

// BOOTSTRAP SLIDE SWITCH
// https://gitbrent.github.io/bootstrap4-toggle/#usage

// This function enables and disables the text shadow group
$(function() {
    $('#blur-group-toggle').on('change', function() {
      	if(this.checked) {
$('.blur-group').prop('disabled', false);
	}
	else {
		$(".blur-group").prop('disabled', true);
	} 
    });
});


// function syncFieldsWithTheFieldsets() {
//     document.querySelectorAll('fieldset').forEach((fieldsetEl) => {
//         fieldsetEl.querySelectorAll('input, select, textarea, button').forEach((el) => {
//             el.disabled = fieldsetEl.disabled;
//         });
//     });
// }

//  syncFieldsWithTheFieldsets()


// This function enables and disables the box shadow group
$(function() {
    $('#shadow-group-toggle').on('change', function() {
      	if(this.checked) {
$('.shadow-group').prop('disabled', false);
	}
	else {
		$(".shadow-group").prop('disabled', true);
	} 
    });
});

// This function toggles options in the padding group
$(function() {
    $('#padding-group-toggle').on('change', function() {
      	if(!!this.checked) {
   $('#style-rl-padding, #style-tb-padding').prop('disabled', false) && $('#style-box-padding').prop('disabled', true);
	}
	else {
		$("#style-rl-padding, #style-tb-padding").prop('disabled', true) && $('#style-box-padding').prop('disabled', false);
	} 
    });
});

// This function enables and disables the box shadow group
$(function() {
    $('#bg-group-toggle').on('change', function() {
      	if(!!this.checked) {
   $('#style-gradient1-color, #style-gradient2-color, #gradient-direction').prop('disabled', false) && $('#style-bg-color').prop('disabled', true);
	}
	else {
		$("#style-gradient1-color, #style-gradient2-color, #gradient-direction").prop('disabled', true) && $('#style-bg-color').prop('disabled', false);
	} 
    });
});

// This function toggles option between solid and gradient background for the hover group
$(function() {
    $('#hover-group-toggle').on('change', function() {
      	if(!!this.checked) {
   $('#style-gradient1-hover, #style-gradient2-hover, #gradient-hover-direction').prop('disabled', false) && $('#style-color-hover').prop('disabled', true);
	}
	else {
		$("#style-gradient1-hover, #style-gradient2-hover, #gradient-hover-direction").prop('disabled', true) && $('#style-color-hover').prop('disabled', false);
	} 
    });
});

// This function enables and disables the border hover group
$(function() {
    $('#hover-border-toggle').on('change', function() {
      	if(this.checked) {
$('#hover-color, #hover-border-color, #hover-border-width').prop('disabled', false);
	}
	else {
		$("#hover-color, #hover-border-color, #hover-border-width").prop('disabled', true);
	} 
    });
});

// ========== CREATE COPY ICON FOR COPYING THE CSS TO CLIPBOARD. ===============
// THANKS TO https://clipboardjs.com/
// Also thanks to https://gist.github.com/dguo/1730d4bfeb370d92117e092311262bfa for the script

// FUNCTION TO GET TARGET ELEMENT, COPY, AND OUTPUT SUCCESS/ERROR MESSAGE
document.querySelectorAll('pre > code').forEach(function (codeBlock) {

   // Create the container for the icon for the clipboard button
   let iconClipboard = document.createElement("i");
   iconClipboard.className = "far fa-2x"; // note: fas = solid, far = outline
 //  iconClipboard.innerHTML = "&#xf328;"; // clipboard icon
   iconClipboard.innerHTML = "&#xf0c5;"; // copy icon
   iconClipboard.setAttribute("data-toggle", "tooltip");
   iconClipboard.setAttribute("data-placement", "top");
   iconClipboard.setAttribute("title", "Copy CSS");

   // Create the success/ error message span
   let clipMessage = document.createElement("span");
   clipMessage.className = "ml-3";
   clipMessage.setAttribute('id', 'copied');

    // Create the element to hold the icon and message span
    var button = document.createElement('span');
    button.className = 'copy-code-button';
    button.type = 'link';
    button.appendChild(iconClipboard);
    button.appendChild(clipMessage);

   // button.innerHTML = "copyIcon";
    var pre = codeBlock.parentNode;
    if (pre.parentNode.classList.contains('bazinga')) {
        var bazinga = pre.parentNode;
        bazinga.parentNode.insertBefore(button, bazinga);
    } else {
        pre.parentNode.insertBefore(button, pre);
    }
});

// Function copies CSS output on click of the clipboard icon
var clipboard = new ClipboardJS('.copy-code-button', {
    target: function(trigger) {
        let target = document.querySelector("#cssContainer");
      //  console.log(target.parentNode);
      //  console.log(trigger.nextElementSibling);
        return trigger.nextElementSibling;
        
    }
});

// Define variable for target message element
let copied = document.querySelector("#copied");

// Define variable for the cssContainer to highlight text on copy
let cssContainer = document.querySelector("#cssContainer");

// Function to display success message
clipboard.on('success', function(e) {
    cssContainer.className = "copyHighlight";
    copied.className = "successMsg";
    copied.innerHTML = "Bazinga, CSS copied!";
    setTimeout(() => {
        cssContainer.className = "language-css";
        copied.className = "";
        copied.innerHTML = ""  // removes the message
    }, 2000)
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);

    e.clearSelection();
});

// Prints the error message if the copy doesn't work.
clipboard.on('error', function(e) {
    copied.className = "errorMsg"; // Add class to message span to change color of message to red
    copied.innerHTML = "Oops, that didn't copy!"
    setTimeout(() => {
        copied.className = ""; // removes the class and message
        copied.innerHTML = "";
    }, 2000)

    // console.error('Action:', e.action);
    // console.error('Trigger:', e.trigger);
});

// ========================= Initialise tooltips ===============================

$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        delay: { 
            show: 500, 
            hide: 100 
        }
    })
  });



    