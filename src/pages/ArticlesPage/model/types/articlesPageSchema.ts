import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited?: boolean;
}
