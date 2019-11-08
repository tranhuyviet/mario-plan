export const createProject = project => {
  //use nomal:
  //   return {
  //     type: "CREATE_PROJECT",
  //     project: project
  //   };

  //use thunk:
  return (dispatch, getState) => {
    //make async call to database
    dispatch({
      type: "CREATE_PROJECT",
      project: project
    });
  };
};
