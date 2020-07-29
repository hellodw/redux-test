import createReducer from "../common/createReducer";

// 액션 타입
const ADD = 'timeline/ADD';
const REMOVE = 'timeline/REMOVE';
const EDIT = 'timeline/EDIT';
const INCREASE_NEXT_PAGE = 'timeline/INCREASE_NEXT_PAGE'; // 타임라인의 끝에 도달했을 때 서버에게 요청할 페이지 번호를 관리하는 액션 타입이다.

// 액션 생성자
export const addTimeline = timeline => ({ type: ADD, timeline });
export const removeTimeline = timeline => ({ type: REMOVE, timeline });
export const editTimeline = timeline => ({ type: EDIT, timeline });
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

const INITIAL_STATE = { timelines: [], nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.timelines.push(action.timeline),
  [REMOVE]: (state, action) =>
    (state.timelines = state.timelines.filter(
      timeline => timeline.id !== action.timeline.id,
    )),
  [EDIT]: (state, action) => {
    const index = state.timelines.findIndex(
      timeline => timeline.id === action.timeline.id,
    );
    if (index >= 0) {
      state.timelines[index] = action.timeline;
    }
  },
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
});
export default reducer;