import React, { useState, useRef, useEffect } from "react";
import Moveable from "react-moveable";
import Selecto from "react-selecto";
import { Box, Grid, Button } from "@mui/material";
interface moveProps {
  finish: boolean;
}
function Move({ finish }: moveProps) {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const [targets, setTargets] = useState<Array<HTMLElement | SVGElement>>([]);
  const [target, setTarget] = useState([]);
  const [frameMap] = useState(() => new Map());
  const moveableRef = useRef(null);
  const selectoRef = useRef(null);
  const [trigger, setTrigger] = useState(false);
  const [elementGuidelines, setElementGuidelines] = useState(null);
  //test용
  const [flowers, setFlowers] = useState([
    "/img/carnationPink.png",
    "/img/carnationOrange.png",
    "/img/hydrangeaPurple.png",
    "/img/hydrangeaBlue.png",
    "/img/peonyWhite.png",
    "/img/lisianthusPurple.png",
    "/img/lisianthusPink.png",
    "/img/ranunculusPink.png",
  ]);
  const [windows, setWindows] = useState([
    {
      translate: [0, 0],
      scale: [1, 1],
      rotate: 0,
    },
  ]);
  const handleScaleStart = (e) => {
    console.log("3");
    const target = e.target;
    if (!frameMap.has(target)) {
      frameMap.set(target, {
        translate: [0, 0],
        scale: [1, 1],
        rotate: 0,
      });
    }
    const frame = frameMap.get(target);
    e.set(frame.scale);
    e.dragStart && e.dragStart.set(frame.translate);
  };
  const handleScale = (attr) => {
    const { target, scale, drag } = attr;
    const frame = frameMap.get(target);
    frame.scale = scale;
    frame.translate = drag.beforeTranslate;
    target.style.transform =
      `translate(${frame.translate[0]}px, ${frame.translate[1]}px) ` +
      `rotate(${frame.rotate}deg)` +
      `scale(${frame.scale[0]}, ${frame.scale[1]})`;
  };
  const handleRotateStart = (e) => {
    console.log("1");
    // const frame = windows[0];
    if (!frameMap.has(target)) {
      frameMap.set(target, {
        translate: [0, 0],
        scale: [1, 1],
        rotate: 0,
      });
    }
    const frame = frameMap.get(target);
    e.set(frame.rotate);
  };
  const handleRotate = (e) => {
    const { target, beforeRotate } = e;
    const frame = frameMap.get(target);
    frame.rotate = beforeRotate;
    target.style.transform =
      `translate(${frame.translate[0]}px, ${frame.translate[1]}px) ` +
      `rotate(${frame.rotate}deg)` +
      `scale(${frame.scale[0]}, ${frame.scale[1]})`;
  };
  const handleDragStart = (e) => {
    console.log("1");
    const target = e.target;
    if (!frameMap.has(target)) {
      frameMap.set(target, {
        translate: [0, 0],
        scale: [1, 1],
        rotate: 0,
      });
    }
    const frame = frameMap.get(target);

    e.set(frame.translate);
  };
  const handleDrag = (e) => {
    console.log("2");
    const target = e.target;
    const frame = frameMap.get(target);
    console.log("2", frame);
    frame.translate = e.beforeTranslate;
    target.style.transform =
      `translate(${frame.translate[0]}px, ${frame.translate[1]}px) ` +
      `rotate(${frame.rotate}deg)` +
      `scale(${frame.scale[0]}, ${frame.scale[1]})`;
  };
  const handleDragGroupStart = (e) => {
    e.events.forEach((ev) => {
      const target = ev.target;
      if (!frameMap.has(target)) {
        frameMap.set(target, {
          translate: [0, 0],
          scale: [1, 1],
          rotate: 0,
        });
      }
      const frame = frameMap.get(target);

      ev.set(frame.translate);
    });
  };
  const handleClickGroup = (e) => {
    selectoRef.current.clickTarget(e.inputEvent, e.inputTarget);
  };
  const handleDragGroup = (e) => {
    e.events.forEach((ev) => {
      const target = ev.target;
      const frame = frameMap.get(target);

      frame.translate = ev.beforeTranslate;
      target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;
    });
  };
  useEffect(() => {
    setOnLoad(true);
    setElementGuidelines([].slice.call(document.querySelectorAll(".moveable")));
  }, []);
  useEffect(() => {
    console.log(target);
  }, [target]);
  return (
    <>
      {onLoad ? (
        <Box className="container" sx={{ width: "100%" }}>
          <Moveable
            ref={moveableRef}
            draggable={true}
            trigger={trigger}
            target={target}
            onScale={handleScale}
            onRotate={handleRotate}
            onRotateStart={handleRotateStart}
            onScaleStart={handleScaleStart}
            onClickGroup={handleClickGroup}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragGroupStart={handleDragGroupStart}
            onDragGroup={handleDragGroup}
            origin={false}
            scalable={true}
            keepRatio={false}
            snappable={true}
            throttleScale={0}
            snapThreshold={5}
            snapCenter={true}
            rotatable={true}
            rotationPosition="top"
            elementGuidelines={elementGuidelines}
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
              console.log("0");
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
              setTarget(e.selected);
              console.log("0-1");
            }}
            onSelectEnd={(e) => {
              console.log("0-2");
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
                  className="element"
                  item
                  xs={3}
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    className={finish ? null : "cube target"}
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
