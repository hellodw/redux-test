import createReducer from "../common/createReducer";
import createItemsLogic from "../common/createItemsLogic";
import mergeReducers from "../common/mergeReducers";

const { add, remove, edit, reducer: timelinesReducer } = createItemsLogic("timelines");
const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE"; // 공통 로직에 포함되지 않은 액션 타입

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE }); // 공통 로직에 포함되지 않은 액션 생성자

// 공통 로직에 포함되지 않은 리듀서
const INITIAL_STATE = { nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
});

const reducers = [reducer, timelinesReducer];
export default mergeReducers(reducers);