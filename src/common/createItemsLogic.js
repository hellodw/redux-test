import createReducer from "./createReducer";

export default function createItemsLogic(name) {
  // 액션 타입
  const ADD = `${name}/ADD`;
  const REMOVE = `${name}/REMOVE`;
  const EDIT = `${name}/EDIT`;

  // 액션 생성자
  const add = item => ({ type: ADD, item });
  const remove = item => ({ type: REMOVE, item });
  const edit = item => ({ type: EDIT, item });

  const reducer = createReducer(
    { [name]: [] },
    {
      [ADD]: (state, action) => state[name].push(action.item),
      [REMOVE]: (state, action) => {
        const index = state[name].findIndex(item => item.id === action.item.id);
        state[name].splice(index, 1);
      },
      [EDIT]: (state, action) => {
        const index = state[name].findIndex(item => item.id === action.item.id);
        if (index >= 0) {
          state[name][index] = action.item;
        }
      },
    },
  );

  return { add, remove, edit, reducer };
}

// 이거슨 덕스패턴(리덕스패턴이 귀찮아서 만들어짐)이고 규칙은 아래와 같다.
// 연관된 액션 타입, 액션 생성자 함수, 리듀서 함수를 하나의 파일로 작성한다.
// 리듀서 함수는 export default 키워드로 내보낸다.
// 액션 생성자 함수는 export 키워드로 내보낸다.
// 액션 타입은 접두사와 액션 이름을 조합해서 만든다.