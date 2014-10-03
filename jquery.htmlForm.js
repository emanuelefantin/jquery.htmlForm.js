/*!
 * jQuery htmlForm Plugin v1.0
 * https://github.com/emanuelefantin/jquery.htmlForm.js
 * Return a form as string, including form values like checked or selected
 * that aren't returned using $.html()
 * 
 * Es.
 * var html_string = $('#myFormId').htmlForm();
 * console.log(html_string);
 * 
 * With outer form element:
 * var html_string = $('#myFormId').htmlForm({full:true});
 * 
 * Based on the answer by Andrew Dunn on stackoverflow.com
 * http://stackoverflow.com/questions/3767253/get-html-code-of-filled-form-using-jquery
 * http://jsfiddle.net/AWK9S/3/
 * 
 * Copyright 2014 Emanuele Fantin
 * Released under the MIT license
 */

(function ($) {

	var methods = {
		init: function (options) {
			//set default options
			var defaults = {
				full: false
			};
			options = $.extend({}, defaults, options);
			//clone the element to not overwrite it
			var container = $(this).clone();
			
			//set values to all inputs
			//input
			container.find('input').each(function () {
				this.setAttribute('value', this.value);
				if (this.checked) {
					this.setAttribute('checked', 'checked');
				} else {
					this.removeAttribute('checked');
				}
			});
			//select
			container.find('select').each(function () {
				var index = this.selectedIndex;
				var i = 0;
				$(this).children('option').each(function () {
					if (i++ != index) {
						this.removeAttribute('selected');
					} else {
						this.setAttribute('selected', 'selected');
					}
				});
			});
			//textarea
			container.find('textarea').each(function () {
				$(this).html($(this).val());
			});

			//if required get the full form element
			if (options.full) {
				container = $('<div>').append(container);
			}

			//return the string
			return container.html();
		}
	};

	$.fn.htmlForm = function (method) {
		// Method calling logic
		if (methods[method]) {
			return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist');
		}
	};

})(jQuery);