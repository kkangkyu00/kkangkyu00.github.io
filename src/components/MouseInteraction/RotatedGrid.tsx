import React, { useEffect, useRef } from 'react';

const RotatedGrid = () => {
  const canvasRef = useRef(null);

  const normalize = (number: number, scaleMin: number, scaleMax: number, newScaleMin = 0, newScaleMax = 1) => {
    const scale = (number - scaleMin) / (scaleMax - scaleMin);
    return (newScaleMax - newScaleMin) * scale + newScaleMin;
  };

  const clamp = (num: number, a: number, b: number) => {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
  };

  const generateGrid = (e: any) => {
    if (!canvasRef || !canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.style.width = '408px';
    canvas.style.height = '216px';

    context.clearRect(0, 0, canvas.width, canvas.height);

    const numRows = 8;
    const numCols = 16;
    const movePos = { x: e.pageX + canvas.offsetLeft, y: e.pageY + canvas.offsetTop };

    for (let row = 0; row < numRows; row += 1) {
      for (let col = 0; col < numCols; col += 1) {
        const x = normalize(col, 0, numCols, 0, canvas.width) + 25;
        const y = normalize(row, 0, numRows, 0, canvas.height) + 25;

        const dx = Math.abs(x + col - movePos.x);
        const dy = Math.abs(y + row - movePos.y);
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        let radius = normalize(distance, 0, 100, 30, 20);
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
    // generateGrid({ pageX: 0, pageY: 0 });
    window.addEventListener('mousemove', generateGrid);
    return () => {
      window.addEventListener('mousemove', generateGrid);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} width="816" height="432" />;
};

export default RotatedGrid;
