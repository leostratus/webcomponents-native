/*
 * Some examples of web components in action, no frameworks, just platform polyfills via Polymer Project's work
 */

// For the first example, we're going to programmatically remix an unordered list of cats using Shadow DOM
// and <content> insertion points

window.addEventListener("load", function ()
{
    document.getElementById("remix-cats").addEventListener("submit", function (event)
    {
    	// Hijack form submission to play with things
        event.preventDefault();
        remixCats();
    }, false);
}, false);

function remixCats(){
	// Grab the cats!
	var best_cats = Array.prototype.slice.call(document.querySelectorAll(":checked"));

	// A string to concatenate our insertion points of our best cats in an unordered list
	var remix_cats_markup = "<ul>"

	// Iterate over best cats, add classname to parent, concatenate our remixed cats markup
	best_cats.forEach(function(cat){
		cat_class = "best-cat-" + cat.value;
		cat.parentNode.className = cat_class;
		remix_cats_markup += "<content select=\"." + cat_class + "\"></content>"
	});

	// Close the unordered list of best cats
	remix_cats_markup += "</ul>"

	console.log(remix_cats_markup)
	
	// Create a host node
	// var host = document.createElement('div');

	var host = document.getElementById('cats');

	// Create a shadow root
	var shadow = host.createShadowRoot();

	// Set the innerHTML of our shadow root, thus causing the replacement of example-1's rendering
	// to be that of our shadow root using our remixed cats markup string

	shadow.innerHTML = remix_cats_markup;
	//document.body.appendChild(host);

}
