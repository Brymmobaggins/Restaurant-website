const form = document.getElementById("form")

form.addEventListener('submit', function (e) {
    e.preventDefault(); // to stop form from submitting
    let customerData = {
        Name: document.getElementById('cus-name').value,
        ID: document.getElementById('cus-id').value,
        Pick: document.getElementById('pick-loc').value,
        Drop: document.getElementById('drop-loc').value
    }
    document.forms[0].reset() // to clear the form for next entries
    // for display purpose
    // let pre = document.querySelector('msg pre')
    // pre.textContent = '\n' + JSON.stringify(customerDatas, '\t', 2)

    // Saving Customer data in local Storage
    localStorage.setItem('customerDetails', JSON.stringify(customerData))
    console.log(localStorage.getItem(customerData))

    // saving customer info inside an array
    // customers.push(customerInfo)
    // let json = JSON.stringify(customerInfo);
    // localStorage.setItem(username,json)


})
// function showDate(slot1, slot2, slot3, slot4) {
//     let slot1 = new date
//     slot1.setDate(slot1.getDate() - 13)
//     document.getElementById = slot1
//     // console.console.log((slot1));
// }
