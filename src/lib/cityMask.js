// 都会の街並みシルエット（ハーフトーン用マスク）。ビル群＋観覧車＋タワー（展望台付き）＋木。
// 背を低めの viewBox(1440x400) で、観覧車も小さく低い位置に配置。preserveAspectRatio='xMidYMax slice'
// で縦横比を保ったまま枠に合わせる（観覧車が楕円にならない）。PC・スマホで共有。
const CITY_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 400' preserveAspectRatio='xMidYMax slice'>
<rect x='0' y='280' width='70' height='120' fill='#fff'/>
<rect x='70' y='240' width='64' height='160' fill='#fff'/>
<rect x='190' y='265' width='48' height='135' fill='#fff'/>
<rect x='156' y='360' width='7' height='40' fill='#fff'/>
<circle cx='144' cy='356' r='16' fill='#fff'/>
<circle cx='176' cy='356' r='16' fill='#fff'/>
<circle cx='160' cy='342' r='24' fill='#fff'/>
<line x1='282' y1='400' x2='300' y2='290' stroke='#fff' stroke-width='9'/>
<line x1='318' y1='400' x2='300' y2='290' stroke='#fff' stroke-width='9'/>
<circle cx='300' cy='290' r='78' fill='none' stroke='#fff' stroke-width='8'/>
<line x1='300' y1='290' x2='378' y2='290' stroke='#fff' stroke-width='5'/>
<line x1='300' y1='290' x2='355' y2='345' stroke='#fff' stroke-width='5'/>
<line x1='300' y1='290' x2='300' y2='368' stroke='#fff' stroke-width='5'/>
<line x1='300' y1='290' x2='245' y2='345' stroke='#fff' stroke-width='5'/>
<line x1='300' y1='290' x2='222' y2='290' stroke='#fff' stroke-width='5'/>
<line x1='300' y1='290' x2='245' y2='235' stroke='#fff' stroke-width='5'/>
<line x1='300' y1='290' x2='300' y2='212' stroke='#fff' stroke-width='5'/>
<line x1='300' y1='290' x2='355' y2='235' stroke='#fff' stroke-width='5'/>
<circle cx='300' cy='290' r='11' fill='#fff'/>
<circle cx='378' cy='290' r='8' fill='#fff'/>
<circle cx='355' cy='345' r='8' fill='#fff'/>
<circle cx='300' cy='368' r='8' fill='#fff'/>
<circle cx='245' cy='345' r='8' fill='#fff'/>
<circle cx='222' cy='290' r='8' fill='#fff'/>
<circle cx='245' cy='235' r='8' fill='#fff'/>
<circle cx='300' cy='212' r='8' fill='#fff'/>
<circle cx='355' cy='235' r='8' fill='#fff'/>
<rect x='440' y='250' width='60' height='150' fill='#fff'/>
<rect x='560' y='265' width='64' height='135' fill='#fff'/>
<path d='M510,400 Q502,365 504,332' fill='none' stroke='#fff' stroke-width='8'/>
<path d='M504,330 Q462,308 440,344' fill='none' stroke='#fff' stroke-width='7'/>
<path d='M504,330 Q480,304 472,358' fill='none' stroke='#fff' stroke-width='7'/>
<path d='M504,330 Q546,308 568,344' fill='none' stroke='#fff' stroke-width='7'/>
<path d='M504,330 Q528,304 536,358' fill='none' stroke='#fff' stroke-width='7'/>
<path d='M504,330 Q488,300 478,322' fill='none' stroke='#fff' stroke-width='7'/>
<path d='M504,330 Q520,300 530,322' fill='none' stroke='#fff' stroke-width='7'/>
<circle cx='504' cy='330' r='6' fill='#fff'/>
<circle cx='498' cy='341' r='4' fill='#fff'/>
<circle cx='510' cy='341' r='4' fill='#fff'/>
<rect x='624' y='330' width='12' height='70' fill='#fff'/>
<circle cx='630' cy='322' r='14' fill='#fff'/>
<rect x='656' y='280' width='60' height='120' fill='#fff'/>
<rect x='716' y='235' width='70' height='165' fill='#fff'/>
<rect x='842' y='265' width='64' height='135' fill='#fff'/>
<rect x='810' y='360' width='7' height='40' fill='#fff'/>
<circle cx='798' cy='356' r='16' fill='#fff'/>
<circle cx='830' cy='356' r='16' fill='#fff'/>
<circle cx='814' cy='342' r='24' fill='#fff'/>
<rect x='906' y='290' width='48' height='110' fill='#fff'/>
<rect x='954' y='225' width='56' height='175' fill='#fff'/>
<polygon points='1022,400 1050,190 1062,190 1090,400' fill='#fff'/>
<polygon points='1050,190 1056,155 1062,190' fill='#fff'/>
<rect x='1053' y='110' width='5' height='80' fill='#fff'/>
<rect x='1028' y='300' width='56' height='7' fill='#fff'/>
<rect x='1038' y='245' width='34' height='6' fill='#fff'/>
<rect x='1120' y='285' width='60' height='115' fill='#fff'/>
<rect x='1180' y='245' width='66' height='155' fill='#fff'/>
<rect x='1300' y='265' width='60' height='135' fill='#fff'/>
<path d='M1273,400 Q1265,365 1267,332' fill='none' stroke='#fff' stroke-width='8'/>
<path d='M1267,330 Q1225,308 1203,344' fill='none' stroke='#fff' stroke-width='7'/>
<path d='M1267,330 Q1243,304 1235,358' fill='none' stroke='#fff' stroke-width='7'/>
<path d='M1267,330 Q1309,308 1331,344' fill='none' stroke='#fff' stroke-width='7'/>
<path d='M1267,330 Q1291,304 1299,358' fill='none' stroke='#fff' stroke-width='7'/>
<path d='M1267,330 Q1251,300 1241,322' fill='none' stroke='#fff' stroke-width='7'/>
<path d='M1267,330 Q1283,300 1293,322' fill='none' stroke='#fff' stroke-width='7'/>
<circle cx='1267' cy='330' r='6' fill='#fff'/>
<circle cx='1261' cy='341' r='4' fill='#fff'/>
<circle cx='1273' cy='341' r='4' fill='#fff'/>
<rect x='1360' y='285' width='80' height='115' fill='#fff'/>
</svg>`;

export const CITY_MASK = `url("data:image/svg+xml,${encodeURIComponent(CITY_SVG)}")`;
