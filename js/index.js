let form = document.getElementById('github-form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let search = document.getElementById('search').value

    //we want to remove the space in between when searching for two names

    let realName = search.split(' ').join(' ')

    fetch('https://api.github.com/users/'+realName)
    .then((response)=> {

        if(!response.ok) {
            throw new Error('user not found')
        }
        return response.json();
    })

    .then((data)=> {
        console.log(data)
        let repoLink = `<a target="_blank" href="https://www.github.com/${realName}"> <img src= "${data.avatar_url}" placeholder="Open my repos"/></a>`

        document.getElementById('response').innerHTML = repoLink
    })

   
})
