
let data = {
    name: 'Steve',
    email: 'steve@steve.com'
}

let dataObject = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
    },
    body: JSON.stringify(data),
}

function submitData () {
    let element = document.querySelector('h1')

    let element2 = document.querySelector('h2')

    return fetch('http://localhost:3000/users', dataObject)
    .then(response => response.json())
    .then(object => element.textContent = object.id)
    .catch(function(error) {
        let errorObject = {
            message: error.message
        }
        element2.textContent = errorObject.message  
    })
}

submitData();
