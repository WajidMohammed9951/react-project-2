import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./Styles/Button";



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
          service_details.map((curElem) => {
            const { id, title, image, description } = curElem;
            return <div key={id} className="card">
              <figure>
                <img src={image} alt={title}></img>
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
                <NavLink to="/Services">
                  <Button className="btn">Read More</Button>
                </NavLink>

              </div>

            </div>



          })}


      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};
.container {
  max-width: 120rem;
}


.card {
  border: 0.1rem solid rgb(170 170 170 / 40%);
  .card-data {
    padding:0.5rem 0.5rem;
    text-align:center;
    
  }
  h3 {
    margin: 2rem 0;
    font-weight: 300;
    font-size: 2rem;
  }
  .btn {
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(98 84 243);
    font-size: 1.4rem;
    &:hover {
      background-color: rgb(98 84 243);
      color: #fff;
    }
  }
}
figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.2);
  }
  img {
    max-width: 80%;
    margin-top: 1.5rem;
    height: 15rem;
    transition: all 0.2s linear;
  }
}
@media (max-width: ${({ theme }) => theme.media.tab}) {
  .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid-two-column,
  .grid-three-column {
    grid-template-columns: 1fr;
  }
}

`;

export default Services;
