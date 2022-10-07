import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    const numberOfProductsSoldArray = []
    if (itemClicked.id.startsWith("employee")) {
        const [,employeeId] = itemClicked.id.split("--")
        for (const employee of employees){
            if (employee.id === parseInt(employeeId)) {
                    for (const order of orders) {
                        if (employee.id === order.employeeId) {
                            numberOfProductsSoldArray.push(order)
                        }
                    } 
                
                if (numberOfProductsSoldArray.length < 2){
                    window.alert(`${employee.name} sold ${numberOfProductsSoldArray.length} product`)
                } else {
                    window.alert(`${employee.name} sold ${numberOfProductsSoldArray.length} products`)
                }
            }
            
        }

    
    
    }
    
    
    
    
    
    
    
    
    
}
)                                          

