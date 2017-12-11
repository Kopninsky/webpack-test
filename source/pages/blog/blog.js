import 'normalize.css';
import './blog.scss';

import createMenu from '../../components/menu/menu';
let menu = createMenu(['Main','About me','Blog'], 'menu');
document.body.appendChild(menu);