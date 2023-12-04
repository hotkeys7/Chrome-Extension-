
let myLeads = []

let listItems = ""

inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputu.value)
    inputu.value = ""
    renderLeads()

})


function renderLeads(){
    
    for (let i = 0; i < myLeads.length; i++) {
    
        
        listItems +=  
        `
        <li>
            <a target='_blank' href='${myLeads[i]}'> 
                ${myLeads[i]}
            </a>
        </li>
        `

    }

    noOrder.innerHTML = listItems
  
}



