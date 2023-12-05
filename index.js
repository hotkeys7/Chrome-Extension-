
let myLeads = []

const leadsFromLocaStorage = JSON.parse(localStorage.getItem("myLeads") )

if (leadsFromLocaStorage ) {
    myLeads = leadsFromLocaStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify( myLeads ) )
        render(myLeads)
    })
})

function render(leads){
    
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
    
        listItems +=  
        `
        <li>
            <a target='_blank' href='${leads[i]}'> 
                ${leads[i]}
            </a>
        </li>
        `
    }
    noOrder.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
    console.log("heeeekkkkkk")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputu.value)
    inputu.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log( localStorage.getItem("myLeads") )
})

