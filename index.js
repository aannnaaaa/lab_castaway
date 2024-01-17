const ch = document.getElementById("change__button");
ch.addEventListener('click', ()=>{
    document.body.classList.toggle("dark-theme");
})


/*document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();// Prevent the default form submission
    console.log(event);
    // Retrieve input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let notificationPreference = document.querySelector('input[name="question"]:checked');

    if (name !== '' && email !== '' && notificationPreference) {
        let dynamicContent = document.getElementById('dynamicContent');
        let notificationText = notificationPreference.id === 'yes' ? 'You will receive notifications to your email.' : 'You chose not to receive notifications.';

        // Clear existing content in dynamicContent
        dynamicContent.innerHTML = '';

        // Create a new paragraph element with the input text
        let paragraph = document.createElement('p');
        paragraph.textContent = 'Thank you for subscribing, ' + name + '!' + notificationText;

        // Add the paragraph to the dynamicContent div
        dynamicContent.appendChild(paragraph);
    } else {
        // Show specific error messages for empty fields
        if (name === '') {
            alert('Please enter your name.');
        } else if (email === '') {
            alert('Please enter your email.');
        } else {
            alert('Please select a notification preference.');
        }
    }
});*/