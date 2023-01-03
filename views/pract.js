function pract(event){
    event.preventDefault()

    console.log("Inside ")

    const name = event.target.name.value
    console.log(name)

    axios.post('http://localhost:3000/admin/signup',{name:name})
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}