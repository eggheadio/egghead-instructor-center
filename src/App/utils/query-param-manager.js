/**
 * useful for managing query params in URL
 */

import createHistory from 'history/createBrowserHistory';
import {configureUrlQuery} from 'react-url-query';

const history = createHistory();

configureUrlQuery({history});

export default history;