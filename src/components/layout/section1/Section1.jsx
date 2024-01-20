import React from 'react';
import scss from './Cection1.module.scss';
import Glasses from '../../../assets/images/girl-photo.png';
import ButtonBG from '../../ui/buttons/ButtonBG';
import striel from '../../../assets/icons/arrow-small-right.svg';

const Section1 = () => {
	return (
		<div className={scss.section}>
			<div className={scss.info}>
				<p className={scss.text1}>
					<span>Dive</span> Into The Depths <br /> Of{' '}
					<span>Virtual Reality</span>
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
					Lectus mauris eros in vitae.
				</p>
				<div className={scss.buttons}>
					<ButtonBG children={'BUILD YOUR WORLD'} />
					<img src={striel} alt="#" />
				</div>
			</div>
			<div className={scss.image}>
				<img src={Glasses} alt="" />
			</div>
			<div className={scss.border}>
				<div>
					<p>hello</p>
				</div>
			</div>
		</div>
	);
};

export default Section1;
