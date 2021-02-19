const EngineerCard = (profile) => `

<div class="card" style="width: 18rem;">
  <div class="card-header">
   Intern
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${profile.getName()}</li>
    <li class="list-group-item">${profile.getId()}</li>
    <li class="list-group-item"><a href="mailto:${profile.getEmail()}">${profile.getEmail()}</a></li>
    <li class="list-group-item"><a href="https://www.github.com/${profile.getGithub()}" target="_blank" >${profile.getGithub()}</a></li>  </ul>
</div>`

module.exports = EngineerCard

