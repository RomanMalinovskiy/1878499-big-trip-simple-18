import EventEditView from '../view/event-edit-view';
import EventsListView from '../view/events-list';
import EventNewView from '../view/event-new-view';
import EventPointView from '../view/event-point-view';
import SortEventView from '../view/sort-event-view';
import {render} from '../render.js';

export default class TripContentPresenter {
  eventsListComponent = new EventsListView();

  init = (tripContentContainer) => {
    this.tripContentContainer = tripContentContainer;
    render (new SortEventView(), this.tripContentContainer);
    render(this.eventsListComponent, this.tripContentContainer);
    render(new EventEditView() ,this.eventsListComponent.getElement());
    render(new EventNewView() ,this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventPointView(), this.eventsListComponent.getElement());
    }
  };
}
