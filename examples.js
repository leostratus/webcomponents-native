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

    document.getElementById("append-cats").addEventListener("submit", function (event)
    {
    	// Hijack form submission to play with things
        event.preventDefault();
        appendCats();
    }, false);

    document.getElementById("import-cats").addEventListener("submit", function (event)
    {
    	// Hijack form submission to play with things
        event.preventDefault();
        appendCatsFromImport();
    }, false);
}, false);

function remixCats(){
	// Grab the cats!
	var best_cats = Array.prototype.slice.call(document.querySelectorAll(":checked"));

	// A string to concatenate our insertion points of our best cats in an unordered list
	var remix_cats_markup = ""

	// Iterate over best cats, add classname to parent, concatenate our remixed cats markup
	best_cats.forEach(function(cat){
		cat_class = "best-cat-" + cat.value;
		cat.parentNode.className = cat_class;

		// We use the <content> tag to tell the shadow tree to use elements from the host node
		// and we use the 'select' attribute to pass in a class name to choose which ones

		remix_cats_markup += "<content select=\"." + cat_class + "\"></content>"
	});
	
	// Create a host node

	var host = document.getElementById('cats');

	// Create a shadow root
	var shadow = host.webkitCreateShadowRoot();

	// Set the innerHTML of our shadow root, thus causing the replacement of example-1's rendering
	// to be that of our shadow root using our remixed cats markup string

	shadow.innerHTML = remix_cats_markup;

}

function appendCats(){
	// A div to host an instance of our cats template
	var el = document.createElement('div');

	// The element that we will append each instance of the cats template to

	var future_cats = document.getElementById('future-cats');

	// Create a shadow root
	var shadow = el.webkitCreateShadowRoot();

	// We append the content of our template to the shadow root
	shadow.appendChild(document.getElementById('cats-template').content);

	// We append our newly formed div with template content to the DOM
	future_cats.appendChild(el);

	// TODO: Figure out why when we append more than one div of shadow-cats, we don't see multiples despite their existence in the DOM
	// Probably I'm missing something obvious here in my post-sick fugue or something
}

function appendCatsFromImport(){
	// Grab the imported document
	var link = document.querySelector('link[rel=import]');

	// Grab the template from the imported document
	var template = link.import.getElementById('#import-cats-template');

	// A div to host an instance of our cats template
	var el = document.createElement('div');

	// The element that we will append each div of the cats template to
	var imported_cats = document.getElementById('imported-cats');

	// Create a shadow root
	var shadow = el.webkitCreateShadowRoot();

	// We append the content of our template to the shadow root
	shadow.appendChild(template.content);

	// We append our newly formed div with template content to the DOM
	imported_cats.appendChild(el); 

}
