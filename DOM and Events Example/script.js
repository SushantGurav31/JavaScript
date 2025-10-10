// Ensure the DOM is fully loaded before running the script 
document.addEventListener('DOMContentLoaded', () =>{
    // !. selecting elements (DOM)
    // get a reference to the element we need to interact with

    const mainHeading = document.getElementById('main-heading');
    const changebutton = document.getElementById('change-btn');
    const textinput = document.getElementById('text-input');
    const displayText = document.getElementById('display-text');

    // 2.adding an event listner (Events )
    // Attach a 'click ' event listener to the button 
    changebutton.addEventListener('click', () => {
        // 3. manipulating the dom in responce to the event
        // Change the text content of the heading

        mainHeading.textContent = "The DOM has been changed!";

        //Change the style of the heading 
        mainHeading.style.backgroundColor = '#28a745';
        mainHeading.style.color = 'white';
        mainHeading.style.padding = '10px';
        mainHeading.style.borderRadius = '5px';
    });
    // 4.another event listener
    // attach an 'input' event listener to the field for real-time updates
    textinput.addEventListener('input', () => {
        // update the text of the paragraph with the value of the input 
        displayText.textContent = textinput.value;
    });
});