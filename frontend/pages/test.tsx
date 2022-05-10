import React, { useEffect, useState } from "react";
import Moveable from "react-moveable";

function Test() {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const [container, setContainer] = useState<Array<HTMLElement | SVGElement>>(
    []
  );
  //   const [target, setTarget] = useState<Array<HTMLElement | SVGElement>>([]);
  const [target, setTarget] = useState([]);
  const [elementGuidelines, setElementGuidelines] = useState<
    (HTMLElement | SVGElement) & (HTMLElement | SVGElement)[]
  >(null);
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

  const handleRotateStart = (attr) => {
    console.log(attr);
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
    // setContainer(document.getElementById("canvas"));
    setTarget([].slice.call(document.querySelectorAll(".element")));
    setElementGuidelines([].slice.call(document.querySelectorAll(".moveable")));
  }, []);

  // Quick fix to get elements to be selected
  setTimeout(() => {
    setTrigger(!trigger);
  }, 1);

  return (
    <>
      {onLoad ? (
        <div className="App" id="canvas">
          <img
            src="/img/flower3.png"
            id="element"
            className="moveable element"
            style={{
              marginTop: 100,
              marginLeft: 350,
              width: 100,
              height: 100,
            }}
          ></img>
          {/* <div
            id="element2"
            className="moveable element"
            style={{
              marginTop: 100,
              marginLeft: 350,
              width: 100,
              height: 100,
              backgroundColor: "red",
            }}
          /> */}
          <Moveable
            trigger={trigger}
            onScale={handleScale}
            onRotate={handleRotate}
            onRotateStart={handleRotateStart}
            onScaleStart={handleScaleStart}
            origin={false}
            target={target}
            scalable={true}
            keepRatio={false}
            snappable={true}
            throttleScale={0}
            snapThreshold={5}
            snapCenter={true}
            rotatable={true}
            rotationPosition="top"
            elementGuidelines={elementGuidelines}
          />
        </div>
      ) : null}
    </>
  );
}

export default Test;
