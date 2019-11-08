export const createProject = project => {
  //use nomal:
  //   return {
  //     type: "CREATE_PROJECT",
  //     project: project
  //   };

  //use thunk:
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Viet",
        authorLastName: "Tran",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project: project
        });
      })
      .catch(error => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          error
        });
      });
  };
};
