// Elements
const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");
const itemCount = document.getElementById("itemCount");
const emptyState = document.getElementById("emptyState");

// Modal
const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
const itemToDeleteEl = document.getElementById("itemToDelete");
const confirmDelete = document.getElementById("confirmDelete");
let itemToRemove = null;

// Update UI
function updateUI() {
  const items = list.children.length;
  itemCount.textContent = `${items} item${items !== 1 ? 's' : ''}`;
  emptyState.classList.toggle("d-none", items > 0);
}

// Add item
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `
    <span class="item-text">${text}</span>
    <span class="remove">×</span>
  `;
  list.appendChild(li);
  input.value = "";
  input.focus();
  updateUI();
});

// Enter key
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});

// Event Delegation
list.addEventListener("click", (e) => {
  const clicked = e.target;
  const li = clicked.closest("li");
  if (!li) return;

  // Toggle purchased
  if (clicked.classList.contains("item-text")) {
    li.classList.toggle("purchased");
  }

  // Remove with modal
  if (clicked.classList.contains("remove")) {
    const itemName = li.querySelector(".item-text").textContent;
    itemToDeleteEl.textContent = itemName;
    itemToRemove = li;
    deleteModal.show();
  }
});

// Confirm delete
confirmDelete.addEventListener("click", () => {
  if (itemToRemove) {
    itemToRemove.remove();
    itemToRemove = null;
    updateUI();
    deleteModal.hide();
  }
});

// Init
updateUI();