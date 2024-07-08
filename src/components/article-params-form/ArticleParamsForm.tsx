import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

//функция для переиспользования проверки открытия и установки стиля(указать два стиля)
// function checkOpenSetStyle (requiredStyle: string, secondStyle: string, isOpen: boolean) {
// 	return clsx(`styles.${requiredStyle}`, {[`styles.${secondStyle}`]: isOpen})
// }

export const ArticleParamsForm = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setOpen(!isOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
