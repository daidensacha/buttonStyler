// NAVBAR OFFCANVAS JS - Solution forclosing the modal foudn on Stack Overflow
// https://stackoverflow.com/questions/57259093/how-do-i-outside-click-to-close-this-custom-offcanvas-nav-from-bootstraps-docs
$(function () {
    'use strict';
    $(document)
        .on('click', '[data-toggle="offcanvas"], #nav-toggle', function (e) {
            $('.offcanvas-collapse').toggleClass('open'); 
            e.stopPropagation(); 
        })
        .on('click', function () {
            $('.offcanvas-collapse').removeClass('open'); 
        });
});

// TOGGLE MODAL
$(function () {
    $("contact-toggle").on('click', function () {
        $('#contact-modal').modal('show');
    });
});

// To top smooth scroll function
// https://bbbootstrap.com/snippets/simple-back-top-smooth-scroll-17111555
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#to-top-button').fadeIn();
        } else {
            $('#to-top-button').fadeOut();
        }
    });

    $('#to-top-button').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

// ==============  RANGE SLIDER ================================================
// Range with tooltip
// https://css-tricks.com/value-bubbles-for-range-inputs/
let rangeSlider = function () {
    let slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');

    slider.each(function () {

        value.each(function () {
            let value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function () {
            $(this).next(value).html(this.value);
        });
    });
};

rangeSlider();

// This function enables and disables the text shadow group
$(function () {
    $('#text-shadow-toggle').on('change', function () {
        $(".blur-group").prop('disabled', true);
        if (this.checked) {
            $('.blur-group').prop('disabled', false);
        } else {
            $(".blur-group").prop('disabled', true);
        }
    });
});

// This function enables and disables the box shadow group
$(function () {
    $("#box-shadow-toggle").on("change", function () {
        if (this.checked) {
            $(".shadow-group").prop("disabled", false);
        } else {
            $(".shadow-group").prop("disabled", true);
        }
    });
});

// This function toggles options in the padding group
$(function () {
    $('#padding-toggle').on('change', function () {
        if (!!this.checked) {
            $('#style-rl-padding, #style-tb-padding').prop('disabled', false);
            $('#style-box-padding').prop('disabled', true);
        } else {
            $("#style-rl-padding, #style-tb-padding").prop('disabled', true);
            $('#style-box-padding').prop('disabled', false);
        }
    });
});

// This function enables and disables the box shadow group
$(function () {
    $('#background-toggle').on('change', function () {
        if (!!this.checked) {
            $('#style-gradient1-color, #style-gradient2-color, #gradient-direction').prop('disabled', false);
            $('#style-bg-color').prop('disabled', true);
        } else {
            $("#style-gradient1-color, #style-gradient2-color, #gradient-direction").prop('disabled', true);
            $('#style-bg-color').prop('disabled', false);
        }
    });
});

// This function toggles option between solid and gradient background for the hover group
$(function () {
    $('#hover-bg-toggle').on('change', function () {
        if (!!this.checked) {
            $('#style-gradient1-hover, #style-gradient2-hover, #gradient-hover-direction').prop('disabled', false);
            $('#style-color-hover').prop('disabled', true);
        } else {
            $("#style-gradient1-hover, #style-gradient2-hover, #gradient-hover-direction").prop('disabled', true);
            $('#style-color-hover').prop('disabled', false);
        }
    });
});

// This function enables and disables the border hover group
$(function () {
    $('#hover-border-toggle').on('change', function () {
        if (this.checked) {
            $('#hover-border-color, #hover-border-width').prop('disabled', false);
        } else {
            $("#hover-border-color, #hover-border-width").prop('disabled', true);
        }
    });
});

// ========== CREATE COPY ICON FOR COPYING THE CSS TO CLIPBOARD. ===============
// THANKS TO https://clipboardjs.com/
// Also thanks to https://gist.github.com/dguo/1730d4bfeb370d92117e092311262bfa 
// I modified the script for my needs 

// FUNCTION TO GET TARGET ELEMENT, COPY, AND OUTPUT SUCCESS/ERROR MESSAGE
document.querySelectorAll('pre > code').forEach(function (codeBlock) {

    // Create the container for the icon for the clipboard button
    let iconClipboard = document.createElement("i");
    iconClipboard.className = "far fa-2x copy-css"; // note: fas = solid, far = outline
    //  iconClipboard.innerHTML = "&#xf328;"; // clipboard icon
    iconClipboard.innerHTML = "&#xf0c5;"; // copy icon
    iconClipboard.setAttribute("data-toggle", "tooltip");
    iconClipboard.setAttribute("data-placement", "top");
    iconClipboard.setAttribute("title", "Copy CSS");

    // Create the success/ error message span
    let clipMessage = document.createElement("span");
    clipMessage.className = "ml-3 hide-fadeout";
    clipMessage.setAttribute('id', 'copied');

    // Create the element to hold the icon and message span
    let button = document.createElement('span');
    button.className = 'copy-code-button';
    button.type = 'link';
    button.appendChild(iconClipboard);
    button.appendChild(clipMessage);

    // button.innerHTML = "copyIcon";
    let pre = codeBlock.parentNode;
    if (pre.parentNode.classList.contains('bazinga')) {
        let bazinga = pre.parentNode;
        bazinga.parentNode.insertBefore(button, bazinga);
    } else {
        pre.parentNode.insertBefore(button, pre);
    }
});
// Function copies CSS output on click of the clipboard icon
let clipboard = new ClipboardJS('.copy-code-button', {
    target: function (trigger) {
        let target = document.querySelector("#css-container");

        return trigger.nextElementSibling;
    }
});

// Define variable for target message element
let copied = document.querySelector("#copied");

// Define variable for the css-container to highlight text on copy
let cssContainer = document.querySelector("#css-container");

// Function to display success message
clipboard.on('success', function (e) {
    cssContainer.className = "show-fadein copy-highlight";
    copied.className = "show-fadein success-msg";
    copied.innerHTML = "Bazinga, CSS copied!";
    setTimeout(() => {
        cssContainer.className = "language-css";
        copied.className = "hide-fadeout";
        copied.innerHTML = ""; // removes the message
    }, 2000);

    e.clearSelection();
});

// Prints the error message if the copy doesn't work.
clipboard.on('error', function (e) {
    copied.className = "show-fadein error-msg"; // Add class to message span to change color of message to red
    copied.innerHTML = "Oops, that didn't copy!";
    setTimeout(() => {
        copied.className = "hide-fadeout"; // removes the class and message
        copied.innerHTML = "";
    }, 2000);

});

// ================================= TOOLTIPS ==================================

// Initialise tooltips if screen > 768 px. 
/* This is a temporary fix to kill tooltips on small screens */
$(function () {
    if ((screen.width>768)) {
        $('[data-toggle="tooltip"]').on('mouseenter', function () {
            let that = $(this);
            that.tooltip('show');
            setTimeout(function () {
                that.tooltip('hide');
            }, 2000);
        });
        $('[data-toggle="tooltip"]').on('mouseleave', function () {
            $(this).tooltip('hide');
        });
    } else {
        $('[data-toggle="tooltip"]').tooltip('disable');
    }
});

// ====================== Redirect 404 page to home page========================
/* Redirects without browser history so back button in browser does not return to error page*/
function redirect() {
    setTimeout(function () {
        window.location.replace("/buttonStyler/index.html");
    }, 3500);
}