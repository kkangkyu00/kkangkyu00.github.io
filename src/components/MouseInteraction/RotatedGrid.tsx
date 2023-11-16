import React, { useEffect, useRef } from 'react';

interface RotatedGridProps {
  numRow?: number;
  numCol?: number;
}

const RotatedGrid = ({ numRow, numCol }: RotatedGridProps) => {
  const canvasRef = useRef(null);

  const normalize = (number: number, scaleMin: number, scaleMax: number, newScaleMin = 0, newScaleMax = 1) => {
    const scale = (number - scaleMin) / (scaleMax - scaleMin);
    return (newScaleMax - newScaleMin) * scale + newScaleMin;
  };

  const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

  const generateGrid = (e: MouseEvent) => {
    if (!canvasRef || !canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.style.width = '408px';
    canvas.style.height = '216px';

    context.clearRect(0, 0, canvas.width, canvas.height);

    const numRows = numRow || 8;
    const numCols = numCol || 16;
    const movePos = { x: (e.pageX - canvas.offsetLeft) * 2, y: (e.pageY - canvas.offsetTop) * 2 };

    for (let row = 0; row < numRows; row += 1) {
      for (let col = 0; col < numCols; col += 1) {
        const x = normalize(col, 0, numCols, 0, canvas.width) + 25;
        const y = normalize(row, 0, numRows, 0, canvas.height) + 25;

        // 두 점 사이의 거리 공식
        const dx = Math.abs(x + col - movePos.x);
        const dy = Math.abs(y + row - movePos.y);
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        let radius = normalize(distance, 0, 100, 50, 40);
        radius = clamp(radius, 0, canvas.width);

        const midPoint = { x, y: y + radius * 0.5 };

        context.beginPath();
        context.lineWidth = 8;
        context.lineCap = 'round';
        context.strokeStyle = '#5476ff';
        context.translate(x, y);

        const rad = Math.atan2(movePos.y - canvas.offsetTop - y, movePos.x - canvas.offsetLeft - x) * (180 / Math.PI);
        const rotate = (Math.PI / 180) * (rad - 90);
        context.rotate(rotate);
        context.translate(-midPoint.x, -midPoint.y);

        context.moveTo(x, y);
        context.lineTo(x, y + radius);

        context.stroke();
        context.closePath(); // 종료

        context.setTransform(1, 0, 0, 1, 0, 0);
      }
    }
  };

  useEffect(() => {
    // requestAnimationFrame
    window.addEventListener('mousemove', generateGrid, false);
    return () => {
      window.addEventListener('mousemove', generateGrid, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} width="816" height="432" />;
};

export default RotatedGrid;
