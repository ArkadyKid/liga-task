import service from './service';
import showResetButton from './show-reset-button';
import filter from './filter';
import sort from './sort';
import renderItems from './render-items';

renderItems(service.getData());
showResetButton();
filter();
sort();
