$(document).ready( function(){

	$( '[data-toggle="featured"]' ).click( function(e){
		e.preventDefault()
		$(this).toggleClass('checked')
	} )


} )
