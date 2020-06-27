export default interface ArticleData {
  title: string;
  slug: string;
  tags: Array<string>;
  linkedTo: string;
  isPinned: boolean;
  publishedAt: string;
}
