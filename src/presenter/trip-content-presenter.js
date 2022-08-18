import EventEditView from '../view/event-edit-view.js';
import EventNewView from '../view/event-new-view.js';
import EventPointView from '../view/event-point-view.js';
import EventsListView from '../view/sort-event-view.js';
import FilterFormView from '../view/filters-form-view';
import SortView from '../view/event-point-view.js';
import {render} from '../render.js';

export default class TripEventsPresenter {
  eventsListComponent = new EventsListView();

  init = (tripEventsContainer) => {
    this.tripEventsContainer = tripEventsContainer;
    render (new SortView(), this.tripEventsContainer);
    render(this.eventsListComponent, this.tripEventsContainer);
    render(new EventEditView() ,this.eventsListComponent.getElement());
    render(new EventNewView() ,this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventPointView(), this.eventsListComponent.getElement());
    }
  };
}
