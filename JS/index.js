
const ratingButtons = document.querySelectorAll('.rating-buttons .rating-button');
ratingButtons.forEach((button, index, array) => {
    //add a click event to every button
    button.addEventListener('click', () =>{
        console.log(`Rated button: ${button.innerHTML}`);
        //add a class to JS that changes the style of the button when a button is clicked
       //const selectedButton = button.classList.add('selected');
       ratingButtons.forEach(btn => {
        // Remove 'selected' from all buttons
        btn.classList.remove('selected');
         // Add 'selected' to the clicked button
        button.classList.add('selected');
       });
    });
});

const submitBtn = document.querySelector('.submit-button');

submitBtn.addEventListener('click', ()=>{
         // Get the selected rating button
        const selectedButton = document.querySelector('.rating-buttons .rating-button.selected');
        
        if(selectedButton && selectedButton !== null){
            const selectedRating = selectedButton.innerHTML;
            /*console.log(selectedRating);*/
            document.querySelector('.container').classList.add('hidden');
            document.querySelector('.thank-you-container').classList.remove('hidden');
           const displayMessage = document.querySelector('.selected-rating');
displayMessage.textContent = `You selected ${selectedRating} out of ${ratingButtons.length}`;
        } else{
            alert('Please select a rating before submitting.')
        }
});



























/*submitBtn.addEventListener('click', ()=> {

     // Get the selected rating button
    const selectedButton = document.querySelector('.rating-buttons .rating-button.selected');
     const selectedRating = selectedButton.innerHTML;
    if(selectedButton){
        document.querySelector('.container').classList('hidden');
        document.querySelector('.thank-you-container').classList.remove('hidden')
        const thankYouMessage = document.querySelector('.selected-rating');
        thankYouMessage.innerHTML = `You selected${selectedRating} out of ${ratingButtons.length}`
    } else{
        alert('Please select a rating before submitting.')
    }
    

});*/