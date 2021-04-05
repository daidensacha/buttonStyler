
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

//    ========================= JSCOLOR PICKER OPTIONS =========================
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
$('#hover-border-color, #hover-border-width').prop('disabled', false);
	}
	else {
		$("#hover-border-color, #hover-border-width").prop('disabled', true);
	} 
    });
});



// DEFAULT VALUES FOR FALL BACK

let   text_styling = {
    font_text: "My Groovy Button",
    font_family: "'Lato', sans-serif;",   
    font_color: "#3829ff",
    font_size: "12px",
    text_shadow: '#808080',
    shadow_X_Axis: '3px',
    shadow_Y_Axis: '0px',
    text_shaddow_blur: '3px',
    }

let  box_styling = {
    style_box_shadow: "#808080",
    style_box_x:  "2px",
    style_box_y:     "5px",
    style_box_blur:   "6px",
    style_box_padding:   "5px",
    style_tb_padding:   "5px",
    style_lr_padding:   "5px",
    }

let   border_styling = {
    style_border_radius: "5px",
    style_border_width: "1px",
    style_border_color: "#3834FF",   // note sure what color, but need to add one once its all working.
    }

let color_styling = {
    color_styling_color: "#007bff",
    style_gradient1_color: "#007bff",
    style_gradient2_color: "#005ec2",
    gradient_direction: "top",

    }

    hover_styling = {
        style_color_hover:  "005ec2",
    style_gradient1_hover:  "005ec2",
    style_gradient2_hover:  "007bff",
    gradient_hover_direction:  "to bottom",

    }


// ADDS THE TEXT TO THE DEMO BUTTON
var demoText = ""
    var demoBtn = $('#demo-button');

    $( "#style-text" ).on('keyup', function() {
        demoText = $('#style-text').val()
        $('#demo-button').html(demoText);
});
