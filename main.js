const form = document.getElementById("form")

form.addEventListener('submit', function (e) {
    e.preventDefault(); // to stop form from submitting
    let customerData = {
        ID: document.getElementById('cus-id').value,
        Name: document.getElementById('cus-name').value,
        pick: document.getElementById('pick-loc').value,
        drop: document.getElementById('drop-loc').value
    }
    // saving  Customer data local Storage
    localStorage.setItem('customerData', JSON.stringify(customerData))
    console.log(localStorage.getItem(customerData))

    // saving customer info insie an array
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
