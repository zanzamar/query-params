query-params
------------

This is a simple AMD script for working with query parameters.  Enables the accessing of query parameters both case sensitive and case insensitive.

Methods:

 -  init
 -  populateParams
 -  get( name )
 -  getCaseInsensitive( name )
 -  getParams

Example:

```javacript
require([
	"queryParams"
],
function( queryParams ) {
	console.log( queryParams.get( "my-param" ) );
});
```

### Tools Utilized

 -  [Grunt](http://gruntjs.com/)
 -  [Bower](http://bower.io/)

See package.json and bower.json for individual libraries and frameworks.

### Notes

__Github__: There are debates as to whether you should include the packages from bower/grunt in the repository...  It is possible for them to disappear and then no longer be able to be installed.  I prefer not to clutter the repository and run the risk of packages being missing.  If a package is removed by its maintainer, do you really want to continue using it?