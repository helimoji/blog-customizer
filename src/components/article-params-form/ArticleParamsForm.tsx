import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import clsx from 'clsx';
import { Text } from 'components/text';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useState } from 'react';
import { Select } from '../select';
import {
	fontFamilyOptions,
	defaultArticleState,
	OptionType,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from '../../constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

export const ArticleParamsForm = () => {
	const [isOpen, setOpen] = useState(false);
	const [params, setParams] = useState(defaultArticleState);
	// const containerRef = useRef<HTMLDivElement>(null);

	function toggleMenu() {
		setOpen(!isOpen);
	}

	function handleOptionChange(key: string, option: OptionType) {
		setParams({ ...params, [key]: option });
	}

	function handleOptionReset(evt: FormEvent<HTMLFormElement>) {
		evt.preventDefault();
		setParams(defaultArticleState);
	}

	function handleOptionSubmit(evt: FormEvent<HTMLFormElement>) {
		evt.preventDefault();
		setParams(params);
	}

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					toggleMenu();
				}}
			/>
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form
					className={styles.form}
					onSubmit={handleOptionSubmit}
					onReset={handleOptionReset}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						title='Шрифт'
						selected={params.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected) => {
							handleOptionChange('fontFamilyOption', selected);
						}}></Select>

					<RadioGroup
						title='Размер шрифта'
						name='Размер шрифта'
						options={fontSizeOptions}
						selected={params.fontSizeOption}
						onChange={(selected) => {
							handleOptionChange('fontSizeOption', selected);
						}}></RadioGroup>

					<Select
						title='Цвет шрфита'
						selected={params.fontColor}
						options={fontColors}
						onChange={(selected) => {
							handleOptionChange('fontColor', selected);
						}}></Select>

					<Separator></Separator>

					<Select
						title='Цвет фона'
						selected={params.backgroundColor}
						options={backgroundColors}
						onChange={(selected) => {
							handleOptionChange('backgroundColor', selected);
						}}></Select>

					<Select
						title='Ширина контента'
						selected={params.contentWidth}
						options={contentWidthArr}
						onChange={(selected) => {
							handleOptionChange('contentWidth', selected);
						}}></Select>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
