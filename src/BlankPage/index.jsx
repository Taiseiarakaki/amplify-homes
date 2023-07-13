import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Frame7 
 } from '../ui-components';

const BlankPage = () => {
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 1) % 360);
      setPosition((prevPosition) => (prevPosition + 2) % window.innerWidth);
      setOpacity(1);
    }, 10);

    setTimeout(() => {
      setOpacity(0);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const text = "空っぽのページです。";

  const rainbowText = text.split("").map((char, index) => {
    const hue = (index * 30 + rotation) % 360;
    const rainbowStyle = {
      color: `hsl(${hue}, 100%, 70%)`, // 色をかわいらしく変更
      transform: `translateX(${position}px)`,
      opacity: opacity
    };
    return (
      <>
      <span key={index} style={rainbowStyle}>
        {char}
      </span>
      <Frame7 />
      </>
    );
  });

  return (
    <>
      <div style={{ textAlign: "center", fontSize: "24px" }}>
        {/* テキストのフォントサイズを変更 */}
        {rainbowText}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {/* リンクのスタイルをかわいく変更 */}
        <Link to="/blank" style={{ fontSize: "16px", color: "pink" }}>
          ブランクページへ
        </Link>
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {/* リンクのスタイルをかわいく変更 */}
        <Link to="/my_page" style={{ fontSize: "16px", color: "pink" }}>
          マイページへ
        </Link>
      </div>
    </>
  );
};

export default BlankPage;
