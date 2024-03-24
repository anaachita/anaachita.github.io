document.querySelectorAll('.chart-range').forEach((range) => {
    range.addEventListener('change', function() {
        const value = range.value;
        const chart = range.parentElement;
        const circles = chart.querySelectorAll('svg circle');
        const price = chart.querySelectorAll('.chart-captions > div')[range.value].dataset.price;
        circles.forEach((circle) => circle.classList.remove('active'))
        circles[range.value].classList.add('active')
        chart.querySelector('.price').innerHTML = price + '€';
    })
})


document.addEventListener('DOMContentLoaded', function() {
    // Get the popup container and close button
    const popupContainer = document.getElementById('popupContainer');
    const closeButton = document.getElementById('closeButton');

    // Show the popup when the page is loaded
    popupContainer.style.display = 'flex';

    // Close the popup when the close button is clicked
    closeButton.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });
});


// JavaScript to display the pop-up
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('popup').style.display = 'block';
});

// JavaScript to close the pop-up
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
