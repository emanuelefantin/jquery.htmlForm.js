jquery.htmlForm.js
==================

jQuery plugin that return a form as string, including form values like 
checked or selected that aren't returned using $.html().

Example:

```javascript
var html_string = $('#myFormId').htmlForm();
console.log(html_string);
```

If you want the complete string with the form element itself use full:true as option

```javascript
var html_string = $('#myFormId').htmlForm({full:true});
console.log(html_string);
```