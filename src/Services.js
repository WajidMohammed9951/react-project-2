import React from "react";
import styled from "styled-components";

const Services = () => {
  let service_details = [
    {
      id: "e1",
      title: "Web development",
      image: "./images/web deve.avif",
      description: "Web development, best courses are available",
    },
    {
      id: "e2",
      title: "Application development ",
      image: "./images/application deve.avif",
      description: "Application development,best courses are available",
    },
    {
      id: "e3",
      title: "Software development",
      image: "./images/software deve.avif",
      description: "Software development,best courses are available ",
    },
    {
      id: "e4",
      title: "Digital marketing",
      image: "./images/digital marketing.avif",
      description: "Digital marketing,best courses are available  ",
    },
    {
      id: "e3",
      title: "Graphic designing",
      image: "./images/graphic designing.avif",
      description: "Graphic designing,best courses are available",
    },
    {
      id: "e3",
      title: "Wajid Codefest",
      image: "./images/wajid codefest.avif",
      description: "Wajid Codefest, best courses are available",
    },
  ];
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
         {
         Services.map((curElem) => {
           const { id, title, image, description } = curElem;
           return <div key={id} className="card">
            
             </div>

           

         })}
         

      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default Services;
