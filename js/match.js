function contactFounder() {
    const name = document.getElementById('founderName').innerText;
    alert("You can now contact ${name} using the provided email or phone.");
  }
  
  // Optionally load item data dynamically:
  const matchedItem = {
    name: 'Black Wallet',
    color: 'Black',
    category: 'Accessories',
    location: 'Central Park',
    image: '1.jpg',
    founder: {
      name: 'Harrison',
      email: 'harrisonbenyela@gmail.com',
      phone: '676411380'
    }
  };
  
  // Dynamically populate page (simulated)
  document.getElementById('itemName').innerText = matchedItem.name;
  document.getElementById('itemColor').innerText = matchedItem.color;
  document.getElementById('itemCategory').innerText = matchedItem.category;
  document.getElementById('itemLocation').innerText = matchedItem.location;
  document.getElementById('itemImage').src = matchedItem.image;
  
  document.getElementById('founderName').innerText = matchedItem.founder.name;
  document.getElementById('founderEmail').href = mailto:{matchedItem.founder.email};
  document.getElementById('founderEmail').innerText = matchedItem.founder.email;
  document.getElementById('founderPhone').href = tel:{matchedItem.founder.phone;}
  document.getElementById('founderPhone').innerText = matchedItem.founder.phone;