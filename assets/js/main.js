

function updateProfileInfo(profileData){
   const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo
    photo.alt = profileData.name



    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job
    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`
    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto: ${profileData.email}`

}

function updataSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join("")
}

function updatehardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" tittle="${skill.name}"></li>`).join("")
}


function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join("")
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(port => {
        return `  
        <li>
            <h3 ${port.github ? 'class="github"' : '' }>${port.name}</h3>
            <a href="${port.url}" target = "_blank">${port.url}</a>
        </li>
        `
          
        
    }).join("")
}


function updateExperience(profileData){
    const experience = document.getElementById('profile.professionalExperience')
    experience.innerHTML = profileData.professionalExperience.map(exp =>{
        return `
            <li>
            <h3 class="tittle">${exp.name}</h3>
            <p class="period">${exp.period}</p>
            <p>${exp.description}</p>
            </li>
        `
    }).join(" ")

}

(async () => {
    const profileData = await fetchProfileData()



    updateProfileInfo(profileData)
    updataSoftSkills(profileData)
    updatehardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()