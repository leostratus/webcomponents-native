Quick and Dirty Web Components Demos
=====

There are a number of really awesome frameworks employing polyfills for various features of web components. The demos include Shadow DOM, HTML Templates, and HTML Imports.

I wanted to take a few of these features and show how they work without any framework sugar or polyfills. So far, Chrome is the only browser to implement these natively, with the exception of HTML Templates - Firefox implements the &lt;template&gt; tag too!

Note that `createShadowRoot()` as defined in the spec is prefixed as `webkitCreateShadowRoot()` in Chrome's implementation. Also, you will need to visit `chrome://flags` to enable HTML Imports, as it is still an experimental feature.

Why no sugar and no polyfills? A lot of people keep asking me for minimal examples of how this stuff works. There are some excellent examples at HTML5 Rocks, but here is a repo you can fork and play with directly.

I hacked this together in the aftermath of a very terrible bout of sickness, so pull requests to correct any shortcomings are encouraged and appreciated.

Hugs,

Angelina

License
=====

MIT.