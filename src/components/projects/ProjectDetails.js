import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            velit deleniti, itaque quae doloremque dignissimos iure molestiae
            labore similique incidunt asperiores recusandae impedit eum vel
            rerum officiis perspiciatis hic. Voluptatum.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Viet Tran</div>
          <div>2nd Septemper, 3am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
