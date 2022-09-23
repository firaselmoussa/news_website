const news_body = document.getElementById('news_body');

function renderNews(response){
    for(data of response){
    let headline = document.createElement('h2');
    let author = document.createElement('h5');
    let article = document.createElement('p');
    let date = document.createElement('h6');

    headline.innerHTML = data.headline;
    author.innerText = data.author;
    article.innerText = data.article;
    date.innerText = data.date;
    
    news_body.append(headline, author, article, date);

    };
};


$.getJSON('http://localhost/myprograms/news-api.php',
function(response){
    renderNews(response);
});



