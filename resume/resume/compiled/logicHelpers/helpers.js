// makes and return a required DOM element
export const selectDOMelt = (classname) => document.querySelector(classname);
// makes and return a click DOM event in order to affect HTML classes
export const clickAction = (parentValue, eventType, elt, value, option) => parentValue.addEventListener(eventType, () => { return elt.classList.toggle(value, option); });
//# sourceMappingURL=helpers.js.map