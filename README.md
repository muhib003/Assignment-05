# Assignment-05
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: 
getElementById(id): Selects a single element based on its unique id attribute.
getElementsByClassName(className): Selects all elements that share a specific class name.
querySelector(selector): Selects the first element that matches a specified CSS selector.
querySelectorAll(selector): Selects all elements that match a specified CSS selector.

2. How do you **create and insert a new element into the DOM**?

Answer:
1.Create the Element: Use document.createElement() to create a new HTML element.
2.Add Content: You can add text content or other HTML elements to the newly created element.
3.Text content: Use textContent or innerText property.
4.Append other elements: Create and append other elements as children.

3. What is **Event Bubbling** and how does it work?

Answer:
Event bubbling is the default process in a web page's Document Object Model (DOM) where an event triggered on a specific element propagates or "bubbles" up through its parent elements to the document's root.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer:
Event delegation is a JavaScript technique where a single event listener on a parent element handles events for multiple child elements. This is useful because it improves performance and reduces memory usage by minimizing the number of listeners, simplifies code maintenance, and efficiently handles dynamically added elements by allowing the parent to catch events as they bubble up the DOM tree.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:
preventDefault():
Purpose: This method prevents the browser's default action associated with a particular event.
stopPropagation():
Purpose: This method stops the event from propagating further in the DOM hierarchy (either bubbling up to parent elements or capturing down to child elements).