const imageInput = document.getElementById('images');
const preview = document.getElementById('preview');

imageInput.addEventListener('change', () => {
  preview.innerHTML = '';
  const files = Array.from(imageInput.files);

  if (files.length > 3) {
    alert("You can upload a maximum of 3 images.");
    imageInput.value = '';
    return;
  }

  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement('img');
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

document.getElementById('foundItemForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Found item submitted successfully!');
  // Connect to backend API or storage here
});


document.getElementById("foundItemForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("objectName").value;
  const color = document.getElementById("objectColor").value;
  const location = document.getElementById("objectLocation").value;
  const category = document.getElementById("objectCategory").value;
  const image = document.getElementById("objectImages").files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const newItem = {
      id: Date.now(),
      name,
      color,
      location,
      category,
      image: reader.result,
      status: "Lost"
    };

    const storedItems = JSON.parse(localStorage.getItem("userItems") || "[]");
    storedItems.push(newItem);
    localStorage.setItem("userItems", JSON.stringify(storedItems));

    alert("Item reported successfully!");
    window.location.href = "home.html"; // Redirect back to home page
  };

  if (image) {
    reader.readAsDataURL(image);
  } else {
    alert("Please upload an image.");
  }
});
