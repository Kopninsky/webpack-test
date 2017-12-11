import 'normalize.css';
import './index.scss';

import createMenu from '../../components/menu/menu';
let menu = createMenu(['Main','About me','Blog'], 'menu');
document.body.appendChild(menu);