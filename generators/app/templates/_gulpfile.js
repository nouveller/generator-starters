var gulp = require('gulp');
<% for(var i = 0; i < plugins.length; i++) { -%>
var <%= plugins[i].variableName %> = require('<%= plugins[i].plugin %>');
<% } -%>

gulp.task('default', function() {
  console.log('Yo! This is just a plan ol\' default task');
});
