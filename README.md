Demo for showing Pluralsight Design System component server rendered with proper styling

`pages/_document.js` is the key!

Without using `glamor/server`'s `renderStatic` method, the styles will not be available in a non-JS environment.  If you can depend on JS enabled in-browser, `pages/_document.js` is not required, and the DS component will render as desired anyway.
