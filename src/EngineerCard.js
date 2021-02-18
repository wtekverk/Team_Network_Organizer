const EngineerCard = (profile) => `

<div class="card" style="width: 18rem;">
  <div class="card-header">
   Engineer
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${profile.name}</li>
    <li class="list-group-item">${profile.id}</li>
    <li class="list-group-item">${profile.email}</li>
    <li class="list-group-item"><a href="https://www.github.com/${profile.github}">${profile.github}</a></li>
  </ul>
</div>`

module.exports = EngineerCard