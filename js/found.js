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