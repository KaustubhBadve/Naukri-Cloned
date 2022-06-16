import React, { useRef, useState } from "react";
// import { useInterval } from "./hooks";
import useInterval from 'use-interval'
import styled from "styled-components";

const Container = styled.div`
  height: ${(props) => props.height};
  background: #fff;
  width: 100%;
  overflow: hidden;
  .contents {
    width: ${({ length }) => length * 100 + "%"};
    font-size: 20px;
    transition: all 0.3s ease-in;
    display: flex;
    transform: ${({ percent }) => `translateX(-${percent}%)`};
  }
  .btn {
    position: relative;
    z-index: 10;
    width: 20px;
    height: 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 100%;
    float: left;
    transform: translateY(-50%);
    border-radius: 50%;
    color: #ccc;
    cursor: pointer;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.5);
    margin: 0 0.5em;
    user-select: none;
    margin-top: -20px;
    &:hover {
      background: rgba(255, 255, 255, 0.9);
    }
  }
`;

const Slider = ({ height, children, auto, speed }) => {
  const ref = useRef();
  const [position, setPosition] = useState(1);
  const [length] = useState(children.length + 1);
  const [percent] = useState(100 / length);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const SPEED = speed || 3000;

  const moveToRight = (_) => {
    const currentPer = -position * percent;
    const movePer = position < length - 1 ? currentPer - percent : currentPer;

    if (position === length - 1) {
      ref.current.style.transition = `none`;
      ref.current.style.transform = `translateX(${0}%)`;
      setTimeout(() => {
        ref.current.style.transition = `all 0.3s ease-in`;
        ref.current.style.transform = `translateX(-${percent}%)`;
      }, 100);
    } else {
      ref.current.style.transition = `all 0.3s ease-in`;
      ref.current.style.transform = `translateX(${movePer}%)`;
    }

    setPosition(position < length - 1 ? position + 1 : 1);
  };

  const moveToLeft = (_) => {
    const currentPer = -position * percent;
    const movePer = position !== 0 ? currentPer + percent : currentPer;

    if (position === 1) {
      ref.current.style.transition = `all 0.3s ease-in`;
      ref.current.style.transform = `translateX(${movePer}%)`;
      setTimeout(() => {
        ref.current.style.transition = `none`;
        ref.current.style.transform = `translateX(-${percent * (length - 1)}%)`;
      }, 300);
    } else {
      ref.current.style.transition = `all 0.3s ease-in`;
      ref.current.style.transform = `translateX(${movePer}%)`;
    }

    setPosition(position !== 1 ? position - 1 : length - 1);
  };

  useInterval(
    () => {
      auto && moveToRight();
    },
    !isMouseOver ? SPEED : null
  );

  return (
    <Container
      height={height}
      length={length}
      percent={percent}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
    >
      <div className="btn" onClick={moveToLeft}>
        {"<"}
      </div>
      <div className="btn" style={{ float: "right" }} onClick={moveToRight}>
        {">"}
      </div>
      <div className="contents" ref={ref}>
        {children[children.length - 1]}
        {children}
      </div>
    </Container>
  );
};

export default Slider;
