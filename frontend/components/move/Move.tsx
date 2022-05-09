import React, { useState, useRef, useEffect } from "react";
import Moveable from "react-moveable";
import Selecto from "react-selecto";
import { Box, Grid } from "@mui/material";
function Move() {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const [targets, setTargets] = useState<Array<HTMLElement | SVGElement>>([]);
  const [frameMap] = useState(() => new Map());
  const moveableRef = useRef(null);
  const selectoRef = useRef(null);
  const [trigger, setTrigger] = useState(false);
  const [elementGuidelines, setElementGuidelines] = useState(null);
  //test용
  const [flowers, setFlowers] = useState([
    "/img/carnationOrange.png",
    "/img/carnationOrange.png",
    "/img/carnationOrange.png",
    "/img/carnationOrange.png",
    "/img/carnationOrange.png",
    "/img/carnationOrange.png",
    "/img/carnationOrange.png",
    "/img/carnationOrange.png",
  ]);
  const [windows, setWindows] = useState([
    {
      translate: [0, 0],
      scale: [1, 1],
      rotate: 0,
    },
  ]);
  const [cubes, setCubes] = useState([]);
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
  useEffect(() => {
    setOnLoad(true);
    for (let i = 0; i < 30; ++i) {
      cubes.push(i);
    }
    setElementGuidelines([].slice.call(document.querySelectorAll(".moveable")));
    const arr = [];
    for (let i = 0; i < 30; ++i) {
      arr.push(i);
    }
    setCubes(arr);
  }, []);
  return (
    <>
      {onLoad ? (
        <Box className="container" sx={{ width: "100%" }}>
          <Moveable
            ref={moveableRef}
            draggable={true}
            trigger={trigger}
            target={targets}
            onScale={handleScale}
            onRotate={handleRotate}
            onRotateStart={handleRotateStart}
            onScaleStart={handleScaleStart}
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
          <Box
            className="elements selecto-area"
            sx={{ display: "flex", width: "100%" }}
          >
            <Grid container sx={{ width: "100%" }}>
              {flowers.map((item, index) => (
                <Grid
                  item
                  xs={3}
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    className="cube target"
                    sx={{
                      width: "70px",
                      height: "70px",
                      margin: "5px",
                    }}
                  >
                    <img
                      src={item}
                      style={{
                        borderRadius: "200px",
                        height: "100%",
                        width: "100%",
                      }}
                    ></img>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      ) : null}
    </>
  );
}
export default Move;
