// src/components/Reveal.jsx
import React, { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  as = "div",          // Elemento HTML envolvente (por defecto <div>)
  threshold = 0.15,         // Qué porcentaje debe verse para activar
  rootMargin = "0px 0px -10% 0px", // Para activar un poco antes de que entre
  delay = 80,               // Retardo en ms antes de iniciar la animación
  duration = 1500,          // Duración en ms de la animación
  y = 15,                  // Desplazamiento vertical inicial en px
  once = true,             // true = solo una vez, false = cada vez que entra
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respeto a usuarios con "reduce motion"
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(node);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  const style = {
    "--reveal-duration": `${duration}ms`,
    "--reveal-delay": `${delay}ms`,
    "--reveal-y": `${y}px`,
  };

  const Component = as;

  return (
    <Component
      ref={ref}
      style={style}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
