'use client';

import { useEffect, useRef } from 'react';
import { useShowProfileOnNavbarStore } from '@/stores/useShowProfileOnNavbarStore';

interface ProfileIntersectionProps {
  children: React.ReactNode;
}

export const ProfileIntersection: React.FC<ProfileIntersectionProps> = ({
  children,
}) => {
  const profileRef = useRef<HTMLDivElement>(null);
  const setShowProfileOnNavbar = useShowProfileOnNavbarStore(
    (state) => state.setShowProfileOnNavbar,
  );

  useEffect(() => {
    const element = profileRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowProfileOnNavbar(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [setShowProfileOnNavbar]);

  return <div ref={profileRef}>{children}</div>;
};
