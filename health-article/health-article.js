var xhr_old = new XMLHttpRequest();
var url_old = './old-articles.json';
var backgroundColor_old = 'grey';

var xhr_new = new XMLHttpRequest();
var url_new = './new-articles.json';
var backgroundColor_new = 'lightblue';

var articlesDiv = document.getElementById('articles');



xhr_old.open('GET', url_old, true);
xhr_old.responseType = "json";
xhr_old.onload = function () {
    var articles = xhr_old.response.articles;
    displayArticles(articles, backgroundColor_old);
};
xhr_old.send();


xhr_new.open('GET', url_new, true);
xhr_new.responseType = "json";
xhr_new.onload = function () {
    var articles = xhr_new.response.articles;
    displayArticles(articles, backgroundColor_new);
};
xhr_new.send();




function displayArticles(articles, backgroundColor) {
    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        articleDiv.style.backgroundColor = backgroundColor;

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function (way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function (benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
}