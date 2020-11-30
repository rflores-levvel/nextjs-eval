### QuantumCMS NextJS/TailwindCSS Template Review

The following are steps that any new developer should be able to execute to demonstrate a proficiency in the ReactJS stack.  The following should take ~30min to work through.

* Request access to review repository from `brooke@quantum.work` or `ravi@quantum.work`
* Login to gitlab repository.
* Checkout a new remote branch named `evaluation`
* Build the application (yarn preferred) and provide a screenshot of the homepage as it currently exists.
* Using the NextJS routing scheme - Add a new page to the `pages` directory called `review` and add the default `Hero` component to the head of the page.  Provide a screenshot of the page with the Hero Unit displayed.
* Change the global `styled jsx` so that the primary background color and secondary background colors are swapped out.
* Provide screenshot of toggled colors by clicking on 'sun' icon in TopNav.
* Add 3 screenshots (default homepage, homepage with Hero Component, homepage with toggled background color) to `assets` directory.
* Commit changes with appropriate comments & submit a PR to close out the review. 

### NextJS Tips
* Next primarily removes the need for ReactRouter so to add a new page/route, you only need to add a new `.js` page to the `/pages` directory.
* `_app.js` acts as the `app.js` file that is typically found as a global file in ReactJS.
* Building the app locally is the same as any local reactjs app
