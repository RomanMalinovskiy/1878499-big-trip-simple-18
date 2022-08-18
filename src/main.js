
import TripEventsPresenter from './presenter/trip-content-presenter.js';
import {render} from './render.js';
import FilterFormView from './view/filters-form-view.js';

const siteHeaderElement = document.querySelector('.page-header');
const tripControlsElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-body__page-main');
const tripEventsElement = siteMainElement.querySelector('.trip-events');
const tripEventsPresenter = new TripEventsPresenter();


render(new FilterFormView(), tripControlsElement);
tripEventsPresenter.init(tripEventsElement);
