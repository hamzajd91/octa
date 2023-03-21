import React, { useEffect, useCallback, useState } from "react";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import styles from "./styles.module.css";
// import "./CardWrap.css";
// import { makeStyles } from "@mui/material/styles";

import ProductCard from "../Cards/ProductCard";

import HeadsetImg from "../../image/1.png";
import LaptopImg from "../../image/2.png";
import PhoneImg from "../../image/3.png";
import "./styles.module.css";

const defaultCardItems = [
  // <ProductCard key={"child1"} img={HeadsetImg} />,
  // <ProductCard key={"child2"} img={LaptopImg} />,
  // <ProductCard key={"child3"} img={PhoneImg} />,

  <ProductCard key={"child1"} />,
  <ProductCard key={"child2"} />,
  <ProductCard key={"child3"} />,
  <ProductCard key={"child4"} />,
];

const setCardStatus = (indexes, cardIndex) => {
  if (indexes.currentIndex === cardIndex) {
    return styles.active;
  } else if (indexes.nextIndex === cardIndex) {
    return styles.next;
  } else if (indexes.previousIndex === cardIndex) {
    return styles.prev;
  }
  return styles.inactive;
};

const CardWrapper = ({
  style,
  onCardChange,
  containerClassName,
  cardClassName,
  leftButton,
  rightButton,
  autoRotate = true,
  rotationInterval = 6000,
  children,
}) => {
  const cardItems = children || defaultCardItems;
  const [indexes, setIndexes] = useState({
    previousIndex: cardItems.length - 1,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  const handleLeftButton = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex <= 0) {
      setIndexes({
        previousIndex: cardItems.length - 2,
        currentIndex: cardItems.length - 1,
        nextIndex: 0,
      });
    } else {
      setIndexes(prevState => ({
        nextIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex - 1,
        previousIndex:
          prevState.currentIndex - 1 <= 0
            ? cardItems.length - 1
            : prevState.currentIndex - 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    onCardChange && onCardChange(indexes);
    const transitionInterval = setInterval(() => {
      autoRotate && handleCardTransition();
    }, rotationInterval);
    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes, autoRotate]);

  return (
    <div
      className="containerWrapper d-flex flex-row justify-content-between align-items-center"
      style={{ width: "100" }}>
      {leftButton ? (
        <span onClick={handleLeftButton}>{leftButton}</span>
      ) : (
        <span 
        className={`${styles.leftButton} btn`} 
        // className="rightButton btn"
        onClick={handleLeftButton}>
          <ArrowBack style={{ fontSize: 20 }} />
        </span>
      )}

      <ul
        style={{ ...style }}
        className={`${styles.cardCarousel} ${
          containerClassName ? containerClassName : styles.carouselDefault
        }`}>
        <li
          key="child1"
          className={`${cardClassName ? cardClassName : ""} ${
            styles.card
          } ${setCardStatus(indexes, 0)}`}>
          <ProductCard
            key={"child1"}
            show={indexes.currentIndex === 0}
            img={HeadsetImg}
          />
        </li>
        <li
          key="child2"
          className={`${cardClassName ? cardClassName : ""} ${
            styles.card
          } ${setCardStatus(indexes, 1)}`}>
          <ProductCard
            key={"child2"}
            show={indexes.currentIndex === 1}
            img={LaptopImg}
          />
        </li>
        <li
          key="child3"
          className={`${cardClassName ? cardClassName : ""} ${
            styles.card
          } ${setCardStatus(indexes, 2)}`}>
          <ProductCard
            key={"child3"}
            show={indexes.currentIndex === 2}
            img={PhoneImg}
          />
        </li>

        <li
          key="child4"
          className={`${cardClassName ? cardClassName : ""} ${
            styles.card
          } ${setCardStatus(indexes, 3)}`}>
          <ProductCard
            key={"child4"}
            show={indexes.currentIndex === 3}
            img={PhoneImg}
          />
        </li>
      </ul>

      {rightButton ? (
        <span onClick={handleCardTransition}>{rightButton}</span>
      ) : (
        <span
          className={`${styles.rightButton} btn`}
      // className="rightButton btn"
          onClick={handleCardTransition}>
          <ArrowForward style={{ fontSize: 20 }} />
        </span>
      )}
    </div>
  );
};

export default CardWrapper;
