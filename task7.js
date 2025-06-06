const userContainer = document.getElementById('user-container');
const errorMsg = document.getElementById('error-msg');

function fetchUserData() {
  userContainer.innerHTML = ''; // Clear previous data
  errorMsg.textContent = '';    // Clear previous errors

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(userCard);
      });
    })
    .catch(error => {
      errorMsg.textContent = 'Failed to fetch user data. Please check your internet connection.';
      console.error('Fetch error:', error);
    });
}

// Load users on initial page load
window.onload = fetchUserData;
