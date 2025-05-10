const users = [
    { name: 'Alice Johnson', email: 'alice@gmail.com', role: 'User', status: 'Active' },
    { name: 'Bob Smith', email: 'bob@gmail.com', role: 'User', status: 'Suspended' },
    { name: 'Charlie Admin', email: 'admin@findit.com', role: 'Admin', status: 'Active' }
  ];
  
  const userList = document.getElementById('userList');
  const searchInput = document.getElementById('searchInput');
  
  function renderUsers(filter = '') {
    userList.innerHTML = '';
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase())
    );
  
    filteredUsers.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>${user.status}</td>
        <td>
          <button class="action-btn view-btn">View</button>
          <button class="action-btn delete-btn">Delete</button>
        </td>
      `;
      userList.appendChild(row);
    });
  }
  
  searchInput.addEventListener('input', () => {
    renderUsers(searchInput.value);
  });
  
  renderUsers();