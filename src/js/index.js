import data from './data';
import showResetButton from './show-reset-button';
import filterHandler from './filter-handler';
import sort from './sort';
import renderItems from './render-items';

renderItems(data.getData());
showResetButton();
filterHandler();
sort();
