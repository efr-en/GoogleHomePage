
document.getElementById('searchButton').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        performSearch();
    }
});

function performSearch() {
    const query = document.getElementById('searchInput').value;
    if (query.trim() === '') {
        alert('Please enter a search term.');
        return;
    }
    let googleSearchUrl = `https://www.google.com/search?q=${query}`;
    window.location.href = googleSearchUrl;
}