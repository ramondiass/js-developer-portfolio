
async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/ramondiass/js-developer-portfolio/refs/heads/main/data/teste.json"
    const fetching = await fetch(url)
    return await fetching.json()
}