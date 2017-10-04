# React Documentation Scavenger Hunt

[React Docs](https://facebook.github.io/react/docs/hello-world.html)

### Post answers (and links to where you found them) for each of the questions below:

1. Can we use `npm` with React or do we have to use `yarn`?
You can use npm and Yarn. They let you use third-party packages and easily install and update them.

2. We are using JSX to write HTML inside of our React. Are we required to use JSX with React? Are there any alternatives?
You can use React without JSX, and at times, that's more convenient. You could use vanilla JavaScript, but it would be much clunkier, more dificult-to-read code.

3. Does React re-render the entire component when one part of it changes?
No. One of the perks of using React is that is does not require an entire page to reload / refresh when changes are made. This is why it is able to work so quickly. 

4. Should we ever change `props` (or parameters) inside of a component? 
React has one strict rule, that "All React components must act like pure funtions with respect to their props." That said, a component declared as a function or class must never modify its own props. 

5. Are all components classes? 
No. Components are like JavaScript functions. Thety take arbitrary inputs, props. and return React elements taht describe what should appear on the screen. Components can be functions or classes.

6. List five "Synthetic Events" provided by React:
* UI events (example "onScroll")
* mouse events (example: "onMouseUp)
* selection  (example "onSelect")
* wheel events(example "onWheel")
* clipboard events (example "onCut")

7. Do we have to use ES6 syntax with React?
No. You can use older syntax. You just use the "create-react-class" module instead. This changes syntax but nothing else. 

8. Where can I go to check out React's built-in Accessibility features?
This seems like a vague question, and though I've read through the Doc's now four or five times, I cannot find one resource that helps with BUILT-IN features. Below are the references I found that seem like the closest fits: 

*This is the link for the Accessibility portion of the Docs: https://reactjs.org/docs/accessibility.html

* Deque Systems' aXe-core automated and end-to-end accessibility tests

* The Create React App has a eslint-plugin-jsx-a11y plugin that helps integrate accessibility directly into your code and has a subset of rules activated within it. 

* The Web Accessibility Initiative - Accessible Rich Internet Applications 

* Also, the Web Content Accessibility Guidelines; it provides guidelines for creating accessible web sites.

9. List five React Component Lifecycle Methods:
* shouldComponentUpdate()
* componentDidMount()
* componentWillUnmount()
* setState()
* forceUpdate()

10. Where would I go to check out React's built-in testing tools?
ReactTestUtils allows you to easiy test React components in any testing framework. Jest is one example and Enzyme is another.  



### Turning in:

* Post a link to this file on Github to Schoology.
