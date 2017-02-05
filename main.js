// Listen for form submit.

document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {

    // Get form values

    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
      name: siteName,
      url: siteUrl
    }

    console.log(bookmark);

    // prevent form from submitting
    e.preventDefault();

}
