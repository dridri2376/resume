import { selectDOMelt, clickAction } from "./logicHelpers/helpers.js";
const ModalisActive = "is-active";
/**
 * This file is linked to the helpers file, and is a DOM manipulator file
 */
/**
 * SCHOOL SECTION
 */
let schoolCard = selectDOMelt(".--SC-card");
let schoolModal = selectDOMelt(".--SC-modal");
let schoolCloseBtn = selectDOMelt('.button__close-SC-modal');
// open Modal
clickAction(schoolCard, "click", schoolModal, ModalisActive);
// close modal
clickAction(schoolCloseBtn, "click", schoolModal, ModalisActive, true);
/**
 * WORK EXPERIENCES SECTION
 */
let XPCard = selectDOMelt(".--XP-card");
let XPModal = selectDOMelt(".--XP-modal");
let XPCloseBtn = selectDOMelt('.button__close-XP-modal');
clickAction(XPCard, "click", XPModal, ModalisActive);
clickAction(XPCloseBtn, "click", XPModal, ModalisActive, true);
/**
 * TECH AND PERSONAL SKILLS SECTION
 */
let OTCard = selectDOMelt(".--OT-card");
let OTModal = selectDOMelt(".--OT-modal");
let OTCloseBtn = selectDOMelt('.button__close-OT-modal');
clickAction(OTCard, "click", OTModal, ModalisActive);
clickAction(OTCloseBtn, "click", OTModal, ModalisActive, true);
//# sourceMappingURL=index.js.map