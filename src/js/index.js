import state from './state';
import showResetButton from './show-reset-button';
import filterHandler from './filter-handler';
import sort from './sort';
import renderItems from './render-items';

renderItems(state.getData());
showResetButton();
filterHandler();
sort();
