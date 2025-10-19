if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }

  const form = document.getElementById("userForm");
  const table = document.getElementById("userTable");
  const logoutBtn = document.getElementById("logoutBtn");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  function renderUsers() {
    table.innerHTML = "";
    users.forEach((user, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
          <button onclick="editUser(${i})">Edit</button>
          <button onclick="deleteUser(${i})" style="background:#e67e22;">Delete</button>
        </td>
      `;
      table.appendChild(row);
    });
    localStorage.setItem("users", JSON.stringify(users));
  }

  form.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("role").value;
    const editIndex = document.getElementById("editIndex").value;

    if (editIndex === "") {
      users.push({ name, email, role });
    } else {
      users[editIndex] = { name, email, role };
      document.getElementById("editIndex").value = "";
    }
    form.reset();
    renderUsers();
  };

  function editUser(index) {
    const u = users[index];
    document.getElementById("name").value = u.name;
    document.getElementById("email").value = u.email;
    document.getElementById("role").value = u.role;
    document.getElementById("editIndex").value = index;
  }

  function deleteUser(index) {
    if (confirm("Delete this user?")) {
      users.splice(index, 1);
      renderUsers();
    }
  }

  logoutBtn.onclick = function() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
  }

  renderUsers();
