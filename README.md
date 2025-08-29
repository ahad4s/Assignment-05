#### **1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

* ###### getElementById: It helps to get html element by unique ID. I can call only one unique element id at a time. And its return only single element object.
* ###### getElementsByClassName: It helps to get all html elements by class name. It means I can select all the elements who are the same class name.
* ###### querySelector: It's a DOM method that selects the first matching element with a CSS selector. It means If I have multiple class with name .button, it will select only 1st one with the class name .button
* ###### querySelectorAll: It's also like querySelector, but it selects all matching elements using a CSS selector and returns them in the form of a NodeList.
* 

**2.How do you create and insert a new element into the DOM?**
Ans: First, we have to create new element by using document.createElement() and then adding content using textContent. Then, to add new element to DOM, we have to add new element to the parent Element by using appendChild(), append(), insertBefore()
---



**3.What is Event Bubbling and how does it work?**
Ans: It's a event handling process that if the event starts from a smaller element and it gradually "bubbles" towards the parent element. Its any events happened it will trigger first in child element then it will happen Parents elements and this way the event will go till last. its a default event propagation pattern of DOM.
---



**4.What is Event Delegation in JavaScript? Why is it useful?**
Ans: Event Delegation is the process of placing an event listener once on a parent element, So that we can handle all events from all child elements of that parent.
\*\*Event Delegation saves memory, reduces code, and allows for easy handling of dynamic child elements.
---



**5.What is Event Delegation in JavaScript? Why is it useful?**
Ans: preventDefault() stops the default browser action for the event. And the stopPropagation() prevents the event from bubbling to its parent or ancestor.
For That- Clicking on the link does not take you to the page and Parent listener will not trigger.
---

