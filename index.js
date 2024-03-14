
let data = {
    name: 'Steve',
    email: 'Steve@steve.com'
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
    let element = document.createElement('h1')
    document.body.append(element)

    let element2 = document.createElement('h2')
    document.body.append(element2)

    fetch('http://localhost:3000/users', dataObject)
    .then(response => response.json())
    .then(object => element.innerText = object.id)
    .catch(function(error) {
        let errorObject = {
            message: error.message
        }
        element2.innerText = errorObject.message
        
    })
}

submitData();
