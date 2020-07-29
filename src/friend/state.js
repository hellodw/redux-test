import createReducer from "../common/createReducer";

// 액션 타입을 상수 변수로 정의함.
const ADD = "friend/ADD";
const REMOVE = "friend/REMOVE";
const EDIT = "friend/EDIT";

// 액션 생성자 함수를 정의함.
export const addFriend = friend => ({ type: ADD, friend });
export const removeFriend = friend => ({ type: REMOVE, friend });
export const editFriend = friend => ({ type: EDIT, friend });

const INITIAL_STATE = { friends: [] };
const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.friends.push(action.friend),
  [REMOVE]: (state, action) => (state.friends = state.friends.filter(
    friend => friend.id !== action.friend.id
  )),
  [EDIT]: (state, action) => {
    const index = state.friends.findIndex(
      friend => friend.id === action.friend.id
    );
    if (index >= 0) {
      state.friends[index] = action.friend;
    }
  }
});
export default reducer;

// 이거슨 덕스패턴(리덕스패턴이 귀찮아서 만들어짐)이고 규칙은 아래와 같다.
// 연관된 액션 타입, 액션 생성자 함수, 리듀서 함수를 하나의 파일로 작성한다.
// 리듀서 함수는 export default 키워드로 내보낸다.
// 액션 생성자 함수는 export 키워드로 내보낸다.
// 액션 타입은 접두사와 액션 이름을 조합해서 만든다.