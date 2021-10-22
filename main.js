const linksSocialMedia = {
  github: 'JeanCarlosHP',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'jeann.carlosh',
  twitter: 'Jcarloszin'
}

function changeSocialMediaLinks() {
  const socialLinks = document.querySelector('#social-links')

  for (li of socialLinks.children) {
    const social = li.getAttribute('class')

    const link = li.children[0]
    link.href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const avatarImage = document.querySelector('#avatar-image')
      avatarImage.src = data.avatar_url

      const userName = document.querySelector('#user-name')
      userName.textContent = data.name

      const gitHubProfile = document.querySelector('#github-profile')
      gitHubProfile.textContent = data.login

      const bio = document.querySelector('#bio')
      bio.textContent = data.bio
    })
}

getGitHubProfileInfos()
