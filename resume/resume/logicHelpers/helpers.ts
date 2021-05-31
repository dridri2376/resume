// makes and return a required DOM element
export const selectDOMelt = (classname: string) => document.querySelector(classname);

// makes and return a click DOM event in order to affect HTML classes
export const clickAction = (parentValue: any, eventType: string, elt: any, value: any, option?: boolean) => parentValue.addEventListener(
    eventType, () => { return elt.classList.toggle(value, option) }
);