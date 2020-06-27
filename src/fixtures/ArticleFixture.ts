import ArticleData from "@/types/ArticleData";
import * as Faker from "faker";

const articles: Array<ArticleData> = [];

function generateArticles(howMany = 20): Array<ArticleData> {
  if (Array.isArray(articles) && !articles.length) {
    for (let x = 0; x < howMany; x++) {
      articles.push({
        title: Faker.company.catchPhrase(),
        isPinned: Math.random() > 0.5,
        tags: ["#js", "#html", "#vue"],
        publishedAt: new Date().toString(),
        linkedTo: Faker.internet.domainName(),
        slug: Faker.company.catchPhrase()
      });
    }
  }
  return articles;
}

export const generatedArticles: Array<ArticleData> = generateArticles();
