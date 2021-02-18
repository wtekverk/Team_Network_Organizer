const ManagerCard = (profile) => `

<div class="card" style="width: 18rem;">
  <div class="card-header">
   Manager
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${profile.name}</li>
    <li class="list-group-item">${profile.id}</li>
    <li class="list-group-item">${profile.email}</li>
    <li class="list-group-item">${profile.officeNumber}</li>
  </ul>
</div>`

module.exports = ManagerCard