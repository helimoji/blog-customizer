import clsx from 'clsx';
import { CSSProperties, useState } from 'react';
import { defaultArticleState } from 'src/constants/articleProps';
import styles from '../../styles/index.module.scss';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';

export const App = () => {
	const [articleStyle, setArticleStyle] = useState(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleStyle.fontFamilyOption.value,
					'--font-size': articleStyle.fontSizeOption.value,
					'--font-color': articleStyle.fontColor.value,
					'--container-width': articleStyle.contentWidth.value,
					'--bg-color': articleStyle.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm changed={setArticleStyle} />
			<Article />
		</div>
	);
};
