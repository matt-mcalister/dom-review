document.addEventListener("DOMContentLoaded", init)

function init(){
  const buttons = document.querySelector("#buttons")
  renderButtons(10)
  renderTableRows(1, 10)


  function renderTableRows(num, rows){

    const timesTable = document.getElementById("mult-table")
    timesTable.innerHTML = ""
    for (var i = 1; i <= rows; i++) {
      const tableRow = document.createElement("tr")
      tableRow.innerHTML = `<td>
                              ${num} x ${i} = ${num * i}
                            </td>`
      timesTable.append(tableRow)

      // innerHTML solution:
      // timesTable.innerHTML += `<tbody>
      //                           <tr>
      //                             <td>
      //                               ${num} x ${i} = ${num * 1}
      //                             </td>
      //                           </tr>
      //                         </tbody>`

    }
  }

  function renderButtons(num){
    for (let i = 1; i <= num; i++) {
      const newButton = document.createElement("button")
      newButton.className = "multiplier"
      newButton.innerText = i
      newButton.addEventListener("click", handleButtonClick)
      buttons.append(newButton)
      // innterHTML solution:
      // buttons.innerHTML += `<button class='multiplier'>${i}</button>`
      // Note: if you were to do this innerHTML solution, you would need to add the event listener elsewhere.
    }
  }

  function handleButtonClick(event){
    renderTableRows(event.target.innerText, 10)
  }
}
