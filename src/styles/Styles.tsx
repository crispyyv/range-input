import styled, { css } from "styled-components";

const track = css`
  background: none;
  height: 100%;
  width: 100%;
`;
const thumb = css`
  background: currentcolor;
  border: none;
  border-radius: 0;
  pointer-events: auto;
  width: 1rem;
  height: 2rem;
`;

export const StyledApp = styled.div`
  height: 100%;
  padding: 1.5rem;
  max-width: 42rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledRange = styled.div`
  position: relative;
  width: 100%;
  height: 2rem;
  display: grid;
  grid-template-rows: max-content 2rem;
  overflow: hidden;
  background: linear-gradient(0deg, #ccc 2rem, transparent 0);
`;

export const StyledInput = styled.input`
  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb,
  & {
    -webkit-appearance: none;
  }
  position: absolute;
  grid-column: 1;
  grid-row: 2;
  width: 100%;
  left: 0;
  right: 0;
  background: none;
  color: #000;
  font: inherit;
  margin: 0;
  pointer-events: none;

  &::-webkit-slider-runnable-track {
    ${track}
  }
  &::-moz-range-track {
    ${track}
  }

  &::-webkit-slider-thumb {
    ${thumb}
  }
  &::-moz-range-thumb {
    ${thumb}
  }
`;
export const Draggable = styled.div`
  width: 100%;
  height: 2rem;
  position: absolute;
  background: linear-gradient(0deg, #eee 2rem, transparent 0);
  :cursor: move;
  button {
    height: 2rem;
  }
`;

export const Label = styled.label``;
