"use client";
import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
}

const Counter: React.FC<CounterProps> = ({ target }) => {
  const [count, setCount] = useState<number>(0);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    const currentCounter = counterRef.current;

    if (currentCounter) {
      observer.observe(currentCounter);
    }

    return () => {
      if (currentCounter) observer.unobserve(currentCounter);
    };
  });

  const animateCount = () => {
    const increment = target / 100;
    let currentCount = 0;

    const updateCount = () => {
      currentCount += increment;
      if (currentCount < target) {
        setCount(currentCount);
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    updateCount();
  };

  const decimalPlaces =
    target % 1 !== 0 ? target.toString().split(".")[1].length : 0;

  return (
    <div ref={counterRef} className="counter">
      {count.toFixed(decimalPlaces)}
    </div>
  );
};

export default Counter;
