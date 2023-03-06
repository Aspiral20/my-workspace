import React, { FC } from 'react';

const PHPStorm: FC<React.SVGAttributes<SVGElement>> = ({
	className = '',
	...rest
}) => {
	return (
		<svg
			className={`phpstorm-svg ${className}`}
			{...rest}
			width="256px"
			height="256px"
			viewBox="0 0 256 256"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient x1="1.35359116%" y1="144.124579%" x2="75.5801105%" y2="24.6296296%" id="linearGradient-1">
					<stop stopColor="#765AF8" offset="2%"></stop>
					<stop stopColor="#B345F1" offset="38%"></stop>
					<stop stopColor="#FA3293" offset="76%"></stop>
					<stop stopColor="#FF318C" offset="94%"></stop>
				</linearGradient>
				<linearGradient x1="60.0228311%" y1="98.5204082%" x2="25.4109589%" y2="6.72193878%" id="linearGradient-2">
					<stop stopColor="#765AF8" offset="18%"></stop>
					<stop stopColor="#8655F6" offset="24%"></stop>
					<stop stopColor="#9F4CF3" offset="34%"></stop>
					<stop stopColor="#AE47F2" offset="44%"></stop>
					<stop stopColor="#B345F1" offset="52%"></stop>
				</linearGradient>
				<linearGradient x1="87.7722772%" y1="80.7973422%" x2="17.9405941%" y2="35.4983389%" id="linearGradient-3">
					<stop stopColor="#765AF8" offset="2%"></stop>
					<stop stopColor="#B345F1" offset="38%"></stop>
				</linearGradient>
			</defs>
			<g>
				<path
					d="M0,49.2 L43.6,0 L132.8,19.2 L144.8,55.6 L136,118.8 L100.537692,100.651642 L102.4,151.2 L102.4,195.2 L24.4,196 L0,49.2 Z"
					fill="url(#linearGradient-1)"></path>
				<polygon fill="url(#linearGradient-2)"
				         points="80.8 150 85.6 89.6 158 15.2 222.8 27.2 256 110 221.2 144.4 164.8 135.2 129.2 172"></polygon>
				<polygon fill="url(#linearGradient-3)" points="158 15.2 54 107.6 74 226 160.4 256 256 198.8"></polygon>
				<rect fill="#000000" x="48" y="48" width="160" height="160"></rect>
				<path
					d="M63.2,178 L123.2,178 L123.2,188 L63.2,188 L63.2,178 Z M62.4,68.8 L89.6,68.8 C105.6,68.8 115.2,78 115.2,91.6 C115.2,106.8 103.2,114.8 88.4,114.8 L77.2,114.8 L77.2,134.8 L62.4,134.8 L62.4,68.8 L62.4,68.8 Z M88.8,102.8 C95.78,102.8 100.4,98 100.4,92.4 C100.4,86 96,82.4 88.4,82.4 L77.2,82.4 L77.2,102.8 L88.8,102.8 Z M118.8,125.6 L127.6,115.2 C133.6,120 140,123.2 147.6,123.2 C153.6,123.2 157.2,120.8 157.2,116.8 C157.2,113.2 154.8,111.2 143.6,108.4 C130,104.8 121.6,101.2 121.6,88 L121.6,87.6 C121.6,75.6 131.2,67.6 144.8,67.6 C153.771202,67.5615535 162.498743,70.5176559 169.6,76 L162,87.2 C156,83.2 150.4,80.8 144.8,80.8 C139.2,80.8 136.4,83.2 136.4,86.8 C136.4,91.2 139.2,92.8 150.8,95.6 C164.4,99.2 172,104 172,115.6 C172,128.8 162,136.4 147.6,136.4 C136.984542,136.54349 126.703599,132.688136 118.8,125.6 Z"
					fill="#FFFFFF"></path>
			</g>
		</svg>
	);
};

export default PHPStorm;