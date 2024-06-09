const sendPost = async (postObject) =>{
    let sendData = await fetch(
        "https://reto-js-bd894-default-rtdb.firebaseio.com/.json",
    {
        method: "POST",
        body: JSON.stringify(postObject),
    })
    let data =await sendData.json()
    console.log(data)

}


export {sendPost}