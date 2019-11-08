const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "this is the content" },
    { id: "2", title: "collect all the stars", content: "this is the content" },
    {
      id: "3",
      title: "egg hunt with viet tran",
      content: "this is the content"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
