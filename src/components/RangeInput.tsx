import React, { useCallback, useEffect, useRef, useState } from "react";
import { Draggable, Label, StyledInput, StyledRange } from "../styles/Styles";

interface RangeInputProps {
  min: number;
  max: number;
}

export const RangeInput: React.FC<RangeInputProps> = ({ min, max }) => {
  const [minValue, setMinValue] = useState(min || 0);
  const [maxValue, setMaxValue] = useState(max || 100);
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const draggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (minRef.current?.offsetWidth) {
      setWidth(minRef.current.offsetWidth);
    }
  }, [minRef]);

  useEffect(() => {
    handleSetDraggerWidth();
  });
  const handleSetDraggerWidth = useCallback(() => {
    const draggElement = draggerRef.current;
    if (draggElement) {
      draggerRef.current!.style.width = `${
        ((maxValue - minValue) / max) * width
      }px`;
      const ratio = (minValue - min) / (max - min);
      //16px - ширина полоски ранжированого инпута
      draggerRef.current!.style.left = `calc(16px + ${
        ratio * 100
      }% - ${ratio}*16px)`;
    }
  }, [max, maxValue, minValue, width, min]);

  const handleSetValues = () => {
    if (minValue >= maxValue) {
      setMinValue(parseInt(maxRef.current!.value) - (5 / 100) * max);
      setMaxValue(parseInt(maxRef.current!.value));
    } else {
      setMinValue(parseInt(minRef.current!.value));
      setMaxValue(parseInt(maxRef.current!.value));
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    //shift - сдвиг курсора
    const shift = e.clientX - position.x;
    //delta - сдвиг в пикселях
    const delta = parseInt(
      (
        (shift / draggerRef.current!.offsetWidth) *
        (maxValue - minValue)
      ).toFixed()
    );
    setMinValue((prev) =>
      prev + delta < 0
        ? min
        : prev + delta > max
        ? max - (5 / 100) * max
        : prev + delta
    );
    setMaxValue((prev) =>
      prev + delta > max ? max : prev + delta < min ? min + 10 : prev + delta
    );
    // handleSetDraggerWidth();
  };

  // handleSetDraggerWidth();
  return (
    <>
      <Label htmlFor="min"> Min value: {minValue}</Label>
      <Label htmlFor="max"> Max value: {maxValue}</Label>
      <StyledRange>
        <Draggable
          ref={draggerRef}
          draggable
          onDragStart={(e) => handleDragStart(e)}
          onDragEnd={(e) => handleDragEnd(e)}
        ></Draggable>
        <StyledInput
          ref={minRef}
          id="min"
          type="range"
          value={minValue}
          min={min}
          max={max}
          onChange={handleSetValues}
        />
        <StyledInput
          ref={maxRef}
          id="max"
          type="range"
          value={maxValue}
          min={min}
          max={max}
          onChange={handleSetValues}
        />
      </StyledRange>
    </>
  );
};
