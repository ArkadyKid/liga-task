import service from './service';
import { showResetButton, setDefaultSort } from './utils';
import filter from './filter';
import sort from './sort';
import renderItems from './render-items';

renderItems(service.getData());
showResetButton();
setDefaultSort();
filter();
sort();
