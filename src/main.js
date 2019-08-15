import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSearchTemplate} from './components/search.js';
import {createFiltersTemplate} from './components/filters.js';
import {createTaskTemplate} from './components/task.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createSortingTemplate} from './components/sorting.js';
import {createBoardContainerTemplate} from './components/board.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';


const siteMainElement = document.body.querySelector(`.main`);
const siteMainControlElement = siteMainElement.querySelector(`.main__control`);

const taskCount = 3;

const renderComponent = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderComponent(siteMainControlElement, createSiteMenuTemplate(), `beforeend`);
renderComponent(siteMainElement, createSearchTemplate(), `beforeend`);
renderComponent(siteMainElement, createFiltersTemplate(), `beforeend`);
renderComponent(siteMainElement, createBoardContainerTemplate(), `beforeend`);

const boardContainerElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

renderComponent(boardContainerElement, createSortingTemplate(), `afterbegin`);
renderComponent(taskListElement, createTaskEditTemplate(), `beforeend`);

new Array(taskCount).fill(``).forEach(() => renderComponent(taskListElement, createTaskTemplate(), `beforeend`));

renderComponent(taskListElement, createLoadMoreButtonTemplate(), `beforeend`);
