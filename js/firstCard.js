
let firstCard = document.getElementById('firstCard')



let firstCardo = ()=>{
    let key = firstCard.getAttribute('name')
    firstCard.addEventListener('click',(event)=>{
        window.open(`../views/detalleCard.html?key=${key}`,'_self')
        
    })
}

firstCardo()

export{firstCardo}