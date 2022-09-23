const news_body = document.getElementById('news_body');

function renderNews(headline_txt, author_txt, article_txt, date_txt){
    let headline = document.createElement('h2');
    let author = document.createElement('h3');
    let article = document.createElement('p');
    let date = document.createElement('h5');

    headline.innerText = headline_txt;
    author.innerText = author_txt;
    article.innerText = article_txt;
    date.innerText = date_txt;

    news_body.append(headline, author, article, date)

}



