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
        publishedAt: Faker.date.recent(60).toString(),
        linkedTo: Faker.internet.domainName(),
        slug: Faker.company.catchPhrase(),
        resume: Faker.lorem.paragraph(3)
      });
    }
  }
  return articles;
}

export const generatedArticles: Array<ArticleData> = generateArticles();
