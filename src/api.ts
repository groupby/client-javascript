import { renderAll, theon, BaseApi } from 'groupby-client-core';
import * as sayt from 'sayt-client';
import * as searchandiser from 'searchandiser-client';

export default renderAll<Api>(sayt.client, searchandiser.client);

export interface Api extends BaseApi, theon.Request {
  searchandiser: searchandiser.Api;
  sayt: sayt.Api;
}
