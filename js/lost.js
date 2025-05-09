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

// Optional form submission simulation
document.getElementById('lostItemForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Lost item reported successfully!');
  // Here you’d normally send data to backend
});