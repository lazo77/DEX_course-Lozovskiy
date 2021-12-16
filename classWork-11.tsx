import { combineReducers, createStore } from "redux";

//Вот ссылка на codesandbox:
//https://codesandbox.io/s/classwork-11-c5s8d?file=/src/components/workHere2.tsx

interface IDepartment extends String {}
interface IEmploee {
  name: string;
  department: IDepartment;
}

interface IDepartments {
  type: string;
  payload: string;
}
interface IEmploees {
  type: string;
  payload: {
    name: string;
    department: string;
  };
}
const addDepartment = {
  type: "departments/add",
  payload: "Mobile"
};
const deleteDepartment = {
  type: "departments/delete",
  payload: "Mobile"
};
const addEmploee = {
  type: "emloees/add",
  payload: {
    name: "Jack",
    department: "Mobile"
  }
};
const deleteEmploee = {
  type: "emloees/delete",
  payload: {
    name: "Jack"
  }
};

const initialStateDepartment = ["Test", "Backend"];
const initialStateEmploee = [
  { name: "Anjela", department: "Test" },
  { name: "Vasia", department: "Backend" }
];

const departmentsReducer = (
  state = initialStateDepartment,
  action: IDepartments
) => {
  switch (action.type) {
    case "departments/add":
      return [...state, action.payload];
    case "departments/delete":
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

const emploeesReducer = (state = initialStateEmploee, action: IEmploees) => {
  switch (action.type) {
    case "emloees/add":
      return [...state, action.payload];
    case "emloees/delete":
      return state.filter((item) => item.name !== action.payload.name);
    default:
      return state;
  }
};

// const rootReducer = combineReducers({
//   emploees: emploeesReducer,
//   departments: departmentsReducer
// });

const handmadeCombineReducers = (
  redusersList = {
    emploees: emploeesReducer,
    departments: departmentsReducer
  }
) => {
  return (state = {}, action: IDepartments | IEmploees) => {
    const newState = {};
    Object.entries(redusersList).forEach(([key, reducer]) => {
      newState[key] = reducer(state[key], action as IDepartments & IEmploees);
    });
    return newState;
  };
};

const rootReducer = handmadeCombineReducers({
  emploees: emploeesReducer,
  departments: departmentsReducer
});

const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch(addDepartment);
store.dispatch(addEmploee);

store.dispatch(deleteDepartment);
store.dispatch(deleteEmploee);

// interface InewState {
//   emploees: (
//     state:
//       | {
//           name: string;
//           department: string;
//         }[]
//       | undefined,
//     action: IEmploees
//   ) => {
//     name: string;
//     department: string;
//   }[];
//   departments: (state: string[] | undefined, action: IDepartments) => string[];
// }