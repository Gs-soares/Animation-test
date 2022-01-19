import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  p {
    margin-left: 8.3rem;
  }
`;

export const ContainerLoading = styled.div`
  width: 100%;
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotacao = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: inline-block;
  width: 200px;
  height: 147px;

  &:after {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    margin: 8px;
    border-radius: 50%;
    border: 15px solid #6e2b9f;
    border-color: #6e2b9f #6e2b9f transparent transparent;
    animation: ${rotacao} 1.2s linear infinite;
  }
`;

const spin = keyframes`
 0% { 
   transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg)
  }
`;

export const SpinTest = styled.div`
  border: 15px solid #f3f3f3;
  border-radius: 50%;
  border-top: 15px solid #6e2b9f;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

const spinArounded = keyframes`
 100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerArounded = styled.div`
  border-width: 8px;
  border-style: solid;
  border-color: #6e2b9f #6e2b9f #6e2b9f transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: ${spinArounded} 1.5s infinite;
  position: relative;

  &:before,
  &:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #6e2b9f;
    position: absolute;
    left: 5px;
  }

  &:before {
    top: 6px;
  }

  &:after {
    bottom: 6px;
  }
`;

const shine = keyframes`
to {
    background-position:
      0 0,
      100% 0,
      120px 0,
      120px 40px,
      120px 80px,
      120px 120px;
    }
`;

export const SkeletonWave = styled.div`
  margin: auto;
  width: 500px;
  height: 600px;

  background-image: radial-gradient(
      circle 50px at 50px 50px,
      lightgray 99%,
      transparent 0
    ),
    linear-gradient(
      100deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    linear-gradient(lightgray 20px, transparent 0),
    linear-gradient(lightgray 20px, transparent 0),
    linear-gradient(lightgray 20px, transparent 0),
    linear-gradient(lightgray 20px, transparent 0);

  background-repeat: repeat-y;

  background-size: 100px 200px, 50px 200px, 150px 200px, 350px 200px,
    300px 200px, 250px 200px;

  background-position: 0 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;

  animation: ${shine} 1s infinite;
`;