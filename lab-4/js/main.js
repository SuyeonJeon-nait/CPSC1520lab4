(function () {
    let newUsersList = document.querySelector('.new-users-list');

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.


    // Add your code here
    let form = document.querySelector('.new-user-form');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let usernameElement = e.currentTarget.elements['username'];
        let cityElement = e.currentTarget.elements['city'];
        let provinceElement = e.currentTarget.elements['province'];

        let username = usernameElement.value;
        let city = cityElement.value;
        let province = provinceElement.value;

        let isFormValid = true;

        //Username
        if (!hasWhiteSpace(username) && isValueNotEmpty(username)){
            usernameElement.classList.remove('is-invalid');
        } else{
            isFormValid = false;
            usernameElement.classList.add('is-invalid');
        }

        //City
        if (isValueNotEmpty(city)){
            cityElement.classList.remove('is-invalid');
        } else{
            isFormValid = false;
            cityElement.classList.add('is-invalid');
        }

        //Province
        if (isValueNotEmpty(province)){
            provinceElement.classList.remove('is-invalid');
        } else{
            isFormValid = false;
            provinceElement.classList.add('is-invalid');
        }

        if (isFormValid){
            addUser(username, city, province);
            form.reset();
        }
    });

    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();