const InternCard = (profile) => `

<div class="card" style="width: 18rem;">
  <div class="card-header">
   Intern
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${profile.name}</li>
    <li class="list-group-item">${profile.id}</li>
    <li class="list-group-item">${profile.email}</li>
    <li class="list-group-item">${profile.school}</li>
  </ul>
</div>`

module.exports = InternCard