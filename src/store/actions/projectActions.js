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
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
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
