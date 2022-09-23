// HTML BODY THAT WILL CONTAIN ALL NEWS ARTICLES
const news_body = document.getElementById('news_body');

// RENDERING ARTICLES
function renderNews(response){

// LOOPING OVER API'S RESULT
    for(data of response){

    // CREATING NEW ARTICLE
    let headline = document.createElement('h2');
    let author = document.createElement('h5');
    let article = document.createElement('p');
    let date = document.createElement('h6');

    // ADDED BOOTSTRAP CLASSES FOR STYLING
    headline.classList.add('mt-5')
    author.classList.add('text-secondary');
    date.classList.add('text-muted');

    // INSERTING DATA INTO CREATED ARTICLE
    headline.innerHTML = data.headline;
    author.innerText = data.author;
    article.innerText = data.article;
    date.innerText = data.date;

    // APPENDING CREATED ARTICLE INTO ARTICLE CONTAINER
    news_body.append(headline, author, article, date);
    };
};

// GETTING DATA FROM DB THROUGH API'S RESPONSE
$.getJSON('http://localhost/myprograms/news-api.php',
function(response){
    // PASSIGN DATA INTO THE FUNCTION THAT WILL CREATE NEW ARTICLES
    renderNews(response);
});

// AJAX VERSION
$(function(){
    $.ajax({
        // its get by default but im gonna add it anyways
        type: 'GET',
        url: 'http://localhost/myprograms/news-api.php',
        success: function(response){
            console.log('success', response);
        }
    });
});
