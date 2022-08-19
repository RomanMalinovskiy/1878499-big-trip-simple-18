
import TripContentPresenter from './presenter/trip-content-presenter.js';
import {render} from './render.js';
import FilterFormView from './view/filters-form-view.js';

const siteHeaderElement = document.querySelector('.page-header');
const tripControlsElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-body__page-main');
const tripContentEventsElement = siteMainElement.querySelector('.trip-events');
const tripContentPresenter = new TripContentPresenter();


render(new FilterFormView(), tripControlsElement);
tripContentPresenter.init(tripContentEventsElement);
