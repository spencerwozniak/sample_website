import React from 'react';
import './ArticleItem.css';

interface ArticleItemProps {
  href: string;
  title: string;
  iconSrc: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ href, title, iconSrc }) => {
  return (
    <a href={href} className="article-item" target="_blank">
      <img src={iconSrc} alt="Article Icon" className="article-icon" />
      <b className="article-link">{title}</b>
    </a>
  );
};

export default ArticleItem;
