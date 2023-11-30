'use client';

import { useEffect, useState } from 'react';

interface AnimatedContainerProps {
  children: JSX.Element[];
  delay?: number;
}

export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  delay = 200,
}) => {
  const [currentChildren, setCurrentChildren] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const animateChildren = () => {
      timeout = setTimeout(() => {
        if (currentIndex < children.length) {
          setCurrentChildren((prevChildren) => [
            ...prevChildren,
            children[currentIndex],
          ]);
          currentIndex++;
          animateChildren();
        }
      }, 200);
    };

    animateChildren();

    return () => {
      clearTimeout(timeout);
    };
  }, [children, delay]);

  return (
    <main className='mx-auto mb-5 flex max-w-3xl flex-col gap-16 px-5'>
      {currentChildren.map((child, index) => (
        <div
          className={`transition-all duration-500 ${
            currentChildren.length === index + 1
              ? 'translate-y-10 transform opacity-0'
              : 'transform-none opacity-100'
          }`}
          key={index}
        >
          {child}
        </div>
      ))}
    </main>
  );
};
