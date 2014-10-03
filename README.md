jquery.htmlForm.js
==================

Return a form as string, including form values like checked or selected
that aren't returned using $.html().

Example:

```javascript
var html_string = $('#myFormId').htmlForm();
console.log(html_string);
```

If you want also the <form> element itself use full:true

```javascript
var html_string = $('#myFormId').htmlForm({full:true});
console.log(html_string);
```