import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Moveable from "react-moveable";
import { Frame } from "scenejs";
import Selecto from "react-selecto";
function Assign() {
  const [targets, setTargets] = useState([]);
  const [target, setTarget] = useState(null);
  const [frames, setFrames] = useState(null);
  const [container, setContainer] = useState();
  const [elementGuidelines, setElementGuidelines] = useState(null);
  const [cubes, setCubes] = useState([]);

  const moveableRef = useRef(null);
  const selectoRef = useRef(null);
  const [frameMap] = useState(() => new Map());
  const [trigger, setTrigger] = useState(false);
  const [windows, setWindows] = useState([
    {
      translate: [0, 0],
      scale: [1, 1],
      rotate: 0,
    },
  ]);

  const handleScaleStart = (attr) => {
    const { set, dragStart } = attr;
    const frame = windows[0];
    set(frame.scale);

    // If a drag event has already occurred, there is no dragStart.
    dragStart && dragStart.set(frame.translate);
  };
  const handleScale = (attr) => {
    const { target, scale, drag } = attr;
    const frame = windows[0];

    frame.scale = scale;
    // get drag event
    frame.translate = drag.beforeTranslate;
    target.style.transform =
      `translate(${frame.translate[0]}px, ${frame.translate[1]}px) ` +
      `rotate(${frame.rotate}deg)` +
      `scale(${scale[0]}, ${scale[1]})`;
  };
  const handleDragStart = (attr) => {};
  useEffect(() => {
    // const target = [].slice.call(document.querySelectorAll(".element"));
    // setTarget(document.getElementById("element"));
    setTarget([].slice.call(document.querySelectorAll(".element")));
    setElementGuidelines([].slice.call(document.querySelectorAll(".moveable")));
    const arr = [];
    for (let i = 0; i < 30; ++i) {
      arr.push(i);
    }
    setCubes(arr);
  }, []);
  setTimeout(() => {
    setTrigger(!trigger);
  }, 1);
  const handleRotateStart = (attr) => {
    const { set } = attr;
    const frame = windows[0];
    set(frame.rotate);
  };

  const handleRotate = (attr) => {
    const { target, beforeRotate } = attr;
    const frame = windows[0];
    frame.rotate = beforeRotate;
    target.style.transform =
      `translate(${frame.translate[0]}px, ${frame.translate[1]}px) ` +
      `rotate(${frame.rotate}deg)` +
      `scale(${frame.scale[0]}, ${frame.scale[1]})`;
  };

  return (
    <>
      <Box className="page main" id="canvas">
        <Box
          className="moveable element"
          id="element"
          sx={{
            width: "100px",
            height: "100px",
            backgroundColor: "red",
            margin: "300px",
          }}
        ></Box>

        <Moveable
          trigger={trigger}
          onScale={handleScale}
          onRotate={handleRotate}
          onRotateStart={handleRotateStart}
          onScaleStart={handleScaleStart}
          onDragStart={handleDragStart}
          origin={false}
          target={target}
          scalable={true}
          container={container}
          keepRatio={false}
          snappable={true}
          throttleScale={0}
          snapThreshold={5}
          snapCenter={true}
          rotatable={true}
          rotationPosition="top"
          elementGuidelines={elementGuidelines}
        />
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
            <div className="cube target" key={i}></div>
          ))}
        </div>
        <div className="empty elements"></div>
      </Box>
    </>
  );
}

export default Assign;
