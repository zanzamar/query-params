/*******************************************************************************
 *
 * QueryParams
 *
 * A basic query params library.  It only works with parameters one level deep.
 *
*******************************************************************************/
define([], function() { return {
params: undefined,
insensitiveParams: undefined,

// populate params
init: function() {
	var self = this;
	window.onpopstate = function () {
		self.populateParams();
	};
	self.populateParams();
},

// populates the params object
populateParams: function() {
	var match,
		pl     = /\+/g,  // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		query  = window.location.search.substring( 1 );
	this.params = {};
	while ( ( match = search.exec( query ) ) !== null ) {
		this.params[ decode( match[ 1 ] ) ] = decode( match[ 2 ] );
	}
	return this.params;
},

// returns an individual query parameter based upon name.
get: function( name ) {
	return this.getParams()[ name ];
},

// returns an individual query parameter based upon name.
getCaseInsensitive: function( name ) {
	if ( this.insensitiveParams ) {
		return this.insensitiveParams[ name.toLowerCase() ];
	} else {
		this.insensitiveParams = this.getParams();
		for ( var i in this.params ) {
			this.insensitiveParams[ i.toLowerCase() ] = this.params[ i ];
		}
		return this.insensitiveParams[ name.toLowerCase() ];
	}
},

// returns a map of all query parametrers
getParams: function() {
	if ( this.params === undefined ) {
		return this.populateParams();
	} else {
		return this.params;
	}
}

}; });