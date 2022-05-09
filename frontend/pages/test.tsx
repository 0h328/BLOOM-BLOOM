import React, { useState, useRef, useEffect } from "react";
import Moveable from "react-moveable";
import Selecto from "react-selecto";
import { Box, Typography, Button } from "@mui/material";
function Test() {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const [targets, setTargets] = useState<Array<HTMLElement | SVGElement>>([]);
  const [frameMap] = useState(() => new Map());
  const moveableRef = useRef(null);
  const selectoRef = useRef(null);
  const [cubes, setCubes] = useState([]);

  useEffect(() => {
    setOnLoad(true);
    for (let i = 0; i < 30; ++i) {
      cubes.push(i);
    }
  }, []);
  console.log(targets);
  return (
    <>
      {onLoad ? (
        <Box className="container" sx={{ width: "400px" }}>
          <div className="logo logos" id="logo"></div>
          <h1>Select Moveable targets in real time.</h1>
          <p className="description">
            You can drag and move targets and select them.
          </p>
          <Moveable
            ref={moveableRef}
            draggable={true}
            target={targets}
            onClickGroup={(e) => {
              selectoRef.current.clickTarget(e.inputEvent, e.inputTarget);
            }}
            onDragStart={(e) => {
              const target = e.target;

              if (!frameMap.has(target)) {
                frameMap.set(target, {
                  translate: [0, 0],
                });
              }
              const frame = frameMap.get(target);

              e.set(frame.translate);
            }}
            onDrag={(e) => {
              const target = e.target;
              const frame = frameMap.get(target);

              frame.translate = e.beforeTranslate;
              target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;
            }}
            onDragGroupStart={(e) => {
              e.events.forEach((ev) => {
                const target = ev.target;

                if (!frameMap.has(target)) {
                  frameMap.set(target, {
                    translate: [0, 0],
                  });
                }
                const frame = frameMap.get(target);

                ev.set(frame.translate);
              });
            }}
            onDragGroup={(e) => {
              e.events.forEach((ev) => {
                const target = ev.target;
                const frame = frameMap.get(target);

                frame.translate = ev.beforeTranslate;
                target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;
              });
            }}
          ></Moveable>
          <Selecto
            ref={selectoRef}
            dragContainer={".elements"}
            selectableTargets={[".selecto-area .cube"]}
            hitRate={0}
            selectByClick={true}
            selectFromInside={false}
            toggleContinueSelect={["shift"]}
            ratio={0}
            onDragStart={(e) => {
              const moveable = moveableRef.current;
              const target = e.inputEvent.target;
              if (
                moveable.isMoveableElement(target) ||
                targets.some((t) => t === target || t.contains(target))
              ) {
                e.stop();
              }
            }}
            onSelect={(e) => {
              setTargets(e.selected);
            }}
            onSelectEnd={(e) => {
              const moveable = moveableRef.current;
              if (e.isDragStart) {
                e.inputEvent.preventDefault();

                setTimeout(() => {
                  moveable.dragStart(e.inputEvent);
                });
              }
            }}
          ></Selecto>

          <div className="elements selecto-area">
            {cubes.map((i) => (
              <Box
                className="cube target"
                key={i}
                sx={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black",
                  margin: "10px",
                }}
              ></Box>
            ))}
          </div>
          <div className="empty elements"></div>
        </Box>
      ) : null}
    </>
  );
}
export default Test;
