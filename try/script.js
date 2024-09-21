// Update this array with your actual friend info.
var friends = [
    {
        info: 'Ayesha Maryam: She is my honest,caring,daring friend.',
        hobbies: 'She loves to play outdoor games.',
        favorites: 'She likes to go to picnic.'
    },
    {
        info: 'Baneen Raza: She is beautiful and a genuine friend of mine.',
        hobbies: 'She loves crocheting',
        favorites: 'She likes food.'
    },
    {
        info: 'Neha Shoaib: My cute and intellectual friend. ',
        hobbies: 'She love to draw and paint.',
        favorites: 'She likes to sing.'
    }
];
// Function to display the info when a button is clicked
function showInfo(index, type) {
    var infoContainer = document.getElementById('info-container');
    var friendInfo = document.getElementById('friend-info');
    // Display the selected friend's info
    friendInfo.textContent = friends[index - 1][type];
    // Show the info container
    infoContainer.style.display = 'block';
}
