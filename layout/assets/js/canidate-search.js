const search = () => {
    const searchBox = document.getElementById("exampleFormControlInput1").value.toUpperCase();
    const storeItems = document.getElementById("candidate-list");/* may need to change */
    const product = document.querySelectorAll(".candidate-list-box");
    const pname = storeItems.getElementsByTagName("p");

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('p')[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML;
            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}