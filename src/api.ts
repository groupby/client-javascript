import { renderAll, theon } from 'groupby-client-core';
import * as sayt from 'sayt-client';
import * as searchandiser from 'searchandiser-client';

export default renderAll<Api>(sayt.client, searchandiser.client);

export interface Api extends theon.Request, theon.Request {
  searchandiser: searchandiser.Api;
  sayt: sayt.Api;
}
