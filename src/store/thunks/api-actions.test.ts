import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { createAPI } from '@services/api';
import { State } from '@type/state';
import { AppThunkDispatch, extractActionsTypes, makeFakeCamera, makeFakeComment } from '@utils/mocks';
import { ApiRoute } from '@constants';
import { fetchCamerasAction } from './cameras';
import { fetchCommentsAction } from './comments';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ cameras: { cameras: [] }});
  });

  describe('fetchCamerasAction', () => {
    it('should dispatch "fetchCamerasAction.pending", "fetchCamerasAction.fulfilled", when server response 200', async() => {
      const mockCameras = [makeFakeCamera()];
      mockAxiosAdapter.onGet(ApiRoute.Cameras).reply(200, mockCameras);

      await store.dispatch(fetchCamerasAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCamerasActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCamerasAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchCamerasAction.pending.type,
        fetchCamerasAction.fulfilled.type,
      ]);

      expect(fetchCamerasActionFulfilled.payload)
        .toEqual(mockCameras);
    });

    it('should dispatch "fetchCamerasAction.pending", "fetchCamerasAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Cameras).reply(400, []);

      await store.dispatch(fetchCamerasAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCamerasAction.pending.type,
        fetchCamerasAction.rejected.type,
      ]);
    });
  });

  describe('fetchCommentsAction', () => {
    it('should dispatch "fetchCommentsAction.pending", "fetchCommentsAction.fulfilled", when server response 200', async() => {
      const mockCamera = makeFakeCamera();
      const mockComments = [makeFakeComment()];
      mockAxiosAdapter.onGet(`${ApiRoute.Cameras}/${mockCamera.id}/reviews`).reply(200, mockComments);

      await store.dispatch(fetchCommentsAction(mockCamera.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCommentsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCommentsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.fulfilled.type,
      ]);

      expect(fetchCommentsActionFulfilled.payload)
        .toEqual(mockComments);
    });

    it('should dispatch "fetchCommentsAction.pending", "fetchCommentsAction.rejected" when server response 400', async () => {
      const mockCamera = makeFakeCamera();
      mockAxiosAdapter.onGet(`${ApiRoute.Cameras}/${mockCamera.id}/reviews`).reply(400, []);

      await store.dispatch(fetchCommentsAction(mockCamera.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.rejected.type,
      ]);
    });
  });
});
