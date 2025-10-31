# Interactive Shopping List with DOM Manipulation

## Overview
A lightweight, fully functional shopping list app built with vanilla JavaScript, HTML, and CSS. Demonstrates real-world DOM manipulation techniques including event delegation, dynamic class toggling, and efficient updates.
## Features
FeatureDescriptionAdd Items DynamicallyType and press Add or Enter to insert new <li>Remove ItemsClick × to delete (uses event delegation)Toggle "Purchased"Click item text → adds/removes strikethroughEvent DelegationOne listener on <ul> handles all current & future itemsResponsive UIClean, mobile-friendly designNo External LibrariesPure HTML/CSS/JS only

## Key JavaScript Concepts Used

ConceptImplementationdocument.createElement()Create <li> dynamically.appendChild()Add new items to listevent.target & closest()Find clicked element and parentclassList.toggle()Toggle .purchased classEvent Delegationlist.addEventListener('click', ...)e.preventDefault()Prevent form refreshinput.value.trim()Clean user input

Code Highlights (from index.js)
js// Add item
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.innerHTML = `<span>${text}</span><span class="remove">×</span>`;
  list.appendChild(li);
  input.value = "";
});

// Event Delegation: Toggle + Remove
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  if (e.target.tagName === "SPAN" && !e.target.classList.contains("remove")) {
    li.classList.toggle("purchased");
  }
  if (e.target.classList.contains("remove")) {
    li.remove();
  }
});

Styling Highlights (.purchased class)
css.purchased {
  text-decoration: line-through;
  color: #888;
  font-style: italic;
}

## Future Enhancements (Ideas to Add)

FeatureHow to ImplementSave to LocalStoragelocalStorage.setItem() on add/removeEdit ItemsDouble-click → input fieldClear AllButton to empty listItem CountUpdate counter dynamicallyDrag & Drop ReorderHTML5 Drag APIDark Mode ToggleCSS variables + buttonSearch/FilterFilter list on input

## Learning Outcomes
By completing this:

You mastered dynamic DOM updates
You understand event delegation for scalability
You can toggle classes for interactive UI
You built a real-world app with clean, maintainable code
