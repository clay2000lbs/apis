

const getResidentBtn = document.querySelector('button')

const buttonClicked = (e) => {
    console.log('Button Clicked!')
}

const request = () => {
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
    .then(res => {
        //console.log(res.data.results)
        resArr = res.data.results
        console.log(resArr)
        resArr.forEach(element => {
            console.log(element.residents)
            element.residents.forEach(element =>{

                axios.get(element)
                .then(res => {
                    console.log(res.data.name)
                    resName = document.createElement('h2')
                    resName.textContent = res.data.name
                    getResidentBtn.appendChild(resName)
                }) 

            })
        });
        
    })
}


getResidentBtn.addEventListener('click', request)