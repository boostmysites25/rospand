import React, { useEffect, useRef } from 'react';

interface SparklesProps {
    color?: string;
    count?: number;
    minSize?: number;
    maxSize?: number;
    className?: string;
}

const Sparkles: React.FC<SparklesProps> = ({
    color = '#ffffff',
    count = 50,
    minSize = 1,
    maxSize = 3,
    className = ''
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let particles: Array<{
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            opacitySpeed: number;
        }> = [];

        const resizeCanvas = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * (maxSize - minSize) + minSize,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random(),
                    opacitySpeed: (Math.random() - 0.5) * 0.02
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Update position
                p.x += p.speedX;
                p.y += p.speedY;
                p.opacity += p.opacitySpeed;

                // Bounce opacity
                if (p.opacity <= 0 || p.opacity >= 1) {
                    p.opacitySpeed *= -1;
                }

                // Wrap around screen
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            });
            animationId = requestAnimationFrame(drawParticles);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        createParticles();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [color, count, minSize, maxSize]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none z-0 ${className}`}
        />
    );
};

export default Sparkles;
