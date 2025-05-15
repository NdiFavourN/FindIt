const slider = document.getElementById('slider');
const searchInput = document.getElementById('search');
const categoryButtons = document.querySelectorAll('.category-buttons button');
const slides = Array.from(document.querySelectorAll('.slide'));

let scrollAmount = 0;
const scrollStep = 220;

// Auto-scroll slider
setInterval(() => {
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
    } else {
        scrollAmount += scrollStep;
    }
    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}, 4000);

// Search filter
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    slides.forEach(slide => {
        const itemName = slide.querySelector('p').innerText.toLowerCase();
        slide.style.display = itemName.includes(query) ? 'block' : 'none';
    });
});

// Category filter
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.innerText.toLowerCase();
        slides.forEach(slide => {
            const tags = slide.getAttribute('data-category');
            slide.style.display = tags && tags.includes(category) ? 'block' : 'none';
        });
    });
});

// Click item
slides.forEach(slide => {
    slide.addEventListener('click', () => {
        const itemName = slide.querySelector('p').innerText;
        alert("Viewing details for: ${itemName");
    });
});

// Delete item
document.addEventListener('DOMContentLoaded', function () {
    const deleteButtons = document.querySelectorAll('.del');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemId = this.dataset.itemId;
            if (confirm('Are you sure you want to Delete this item?')) {
                fetch('/delete-items/${itemId}', { method: 'DELETE', })
                    .then(Response => Response.json())
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            itemElement = this.closest('.item');
                            if (itemElement) {
                                itemElement.remove();
                            }
                            alert('Item deleted successfully!');
                        } else {
                            alert('Error deleting file' + data.error);
                        }
                    }
                    )
                    .catch(error => {
                        console.error('Error:', error);
                        alert('An unexpected error occured.');

                    });
            }
        });
    });
});

const userItems = [
  {
    id: 1,
    name: "Black Backpack",
    image: "bag.jpg",
    status: "Lost"
  },
  {
    id: 2,
    name: "Silver Watch",
    image: "watch.jpg",
    status: "Pending"
  }
];

const myItemsContainer = document.getElementById("myItemsContainer");

function renderMyItems() {
  myItemsContainer.innerHTML = '';
  userItems.forEach(item => {
    const card = document.createElement('div');
    card.className = "item-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <span class="status-badge ${item.status === 'Pending' ? 'status-pending' : ''}">
        ${item.status}
      </span>
      <div class="item-details">
        <h4>${item.name}</h4>
      </div>
      <div class="item-actions">
        <button class="btn-status" onclick="updateStatus(${item.id})">
          ${item.status === 'Lost' ? 'Mark as Pending' : 'Mark as Lost'}
        </button>
        <button class="btn-delete" onclick="deleteItem(${item.id})">Delete</button>
      </div>
    `;
    myItemsContainer.appendChild(card);
  });
}

function updateStatus(id) {
  const item = userItems.find(i => i.id === id);
  if (item) {
    item.status = item.status === "Lost" ? "Pending" : "Lost";
    renderMyItems();
  }
}

function deleteItem(id) {
  const index = userItems.findIndex(i => i.id === id);
  if (index !== -1) {
    if (confirm("Are you sure you want to delete this item?")) {
      userItems.splice(index, 1);
      renderMyItems();
    }
  }
}

renderMyItems();