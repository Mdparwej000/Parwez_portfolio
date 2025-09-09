import React, { useState, useEffect, useRef } from "react";

const GlobalCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isMoving, setIsMoving] = useState(false);
  const [twinkleOpacity, setTwinkleOpacity] = useState(1);
  const trailRef = useRef([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const moveTimeoutRef = useRef(null);
  const animationFrameRef = useRef(null);
  const displayedPosRef = useRef({ x: -100, y: -100 });
  const rotationRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Calculate movement distance
      const moveDistance = Math.sqrt(
        Math.pow(e.clientX - lastPosRef.current.x, 2) + 
        Math.pow(e.clientY - lastPosRef.current.y, 2)
      );
      
      // Add trail elements when moving sufficiently
      if (moveDistance > 5) {
        addToTrail(e.clientX, e.clientY);
      }
      
      lastPosRef.current = { x: e.clientX, y: e.clientY };
      setIsMoving(true);
      
      // Clear any existing timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      
      // Set timeout to detect when cursor stops
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const addToTrail = (x, y) => {
      const newTrailItem = {
        id: Date.now() + Math.random(),
        x,
        y,
        size: Math.random() * 4 + 3, // Random size between 3-7px
        opacity: 1,
        life: 1.0,
      };
      
      trailRef.current.push(newTrailItem);
      
      // Limit trail length
      if (trailRef.current.length > 15) {
        trailRef.current = trailRef.current.slice(5);
      }
    };

    const updateTrail = () => {
      // Update trail items (fade them out)
      trailRef.current = trailRef.current.map(item => ({
        ...item,
        life: item.life - 0.03,
        opacity: item.life
      })).filter(item => item.life > 0);
      
      animationFrameRef.current = requestAnimationFrame(updateTrail);
    };

    const smoothFollowCursor = () => {
      // Smoothly interpolate the displayed position towards the actual cursor position
      displayedPosRef.current = {
        x: displayedPosRef.current.x + (cursorPos.x - displayedPosRef.current.x) * 0.2,
        y: displayedPosRef.current.y + (cursorPos.y - displayedPosRef.current.y) * 0.2
      };
      
      // Update rotation when moving (slower rotation)
      if (isMoving) {
        rotationRef.current += 0.8; // Reduced from 2 to 0.8 for slower rotation
        if (rotationRef.current >= 360) rotationRef.current = 0;
      }
      
      requestAnimationFrame(smoothFollowCursor);
    };

    // Twinkling effect animation
    const twinkle = () => {
      setTwinkleOpacity(prev => {
        // Create a gentle pulsating effect
        return 0.7 + 0.3 * Math.sin(Date.now() / 500);
      });
      requestAnimationFrame(twinkle);
    };

    // Initialize last position
    lastPosRef.current = { x: cursorPos.x, y: cursorPos.y };
    
    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(updateTrail);
    smoothFollowCursor();
    twinkle();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [cursorPos.x, cursorPos.y, isMoving]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}>
      {/* Trail stars */}
      {trailRef.current.map(star => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transform: `translate(-50%, -50%)`,
            pointerEvents: 'none',
            transition: 'opacity 0.2s ease',
            filter: 'blur(1px)',
            background: 'radial-gradient(circle, #fff 0%, #d9b3ff 70%, #9933ff 100%)',
            borderRadius: '50%',
            boxShadow: '0 0 8px rgba(153, 51, 255, 0.7)'
          }}
        />
      ))}
      
      {/* Main star cursor */}
      <div
        style={{
          position: 'absolute',
          left: `${displayedPosRef.current.x}px`,
          top: `${displayedPosRef.current.y}px`,
          width: '18px',
          height: '18px',
          transform: `translate(-50%, -50%) rotate(${rotationRef.current}deg)`,
          pointerEvents: 'none',
          transition: 'transform 0.1s ease-out',
          opacity: twinkleOpacity,
          filter: isMoving ? 
            'brightness(1.2) drop-shadow(0 0 4px rgba(153, 51, 255, 0.8))' : 
            'brightness(1) drop-shadow(0 0 2px rgba(153, 51, 255, 0.5))',
          // Star shape using clip-path
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          background: 'linear-gradient(135deg, #ffffff, #cc99ff, #9933ff)',
          animation: 'twinkle 2s infinite alternate'
        }}
      />
      
      {/* Glow effect around cursor */}
      <div
        style={{
          position: 'absolute',
          left: `${displayedPosRef.current.x}px`,
          top: `${displayedPosRef.current.y}px`,
          width: isMoving ? '35px' : '25px',
          height: isMoving ? '35px' : '25px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(153,51,255,0.3) 0%, rgba(153,51,255,0) 70%)',
          opacity: isMoving ? twinkleOpacity * 0.8 : twinkleOpacity * 0.5,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'all 0.3s ease',
        }}
      />

      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.7;
            filter: brightness(1) drop-shadow(0 0 2px rgba(153, 51, 255, 0.5));
          }
          100% {
            opacity: 1;
            filter: brightness(1.3) drop-shadow(0 0 6px rgba(153, 51, 255, 0.9));
          }
        }
      `}</style>
    </div>
  );
};

export default GlobalCursor;