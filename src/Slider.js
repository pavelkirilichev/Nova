import { useState } from "react";

const text_arr = [
  {
    text: "Test text",
    title: "TEST",
    id: 0,
  },
  {
    text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep, we create a new launch style called Double FL. - Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep, we create a new launch style called Double FL. - Mint: Mint 1618",
    title: "GUI BOT",
    id: 1,
  },
  {
    text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep, we create a new launch style called Double FL. - Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep, we create a new launch style called Double FL. - Mint: Mint 1618 ",
    title: "NFT",
    id: 2,
  },
];

const img_arr = [
  {
    src: "./img/slider_img_1.png",
    class: "slider_img-1",
    id: 0,
    side: [1, 2],
  },
  {
    src: "./img/slider_img_2.png",
    class: "slider_img-2",
    id: 1,
    side: [0, 2],
  },
  {
    src: "./img/slider_img_3.png",
    class: "slider_img-3",
    id: 2,
    side: [0, 1],
  },
];
function Slider() {
  const [text, setText] = useState(text_arr[1]);
  const [img, setImg] = useState(img_arr[1]);

  let side_index = img.side;

  return (
    <div className="slider">
      <div className="slider__main">
        {img.id > 0 ? (
          <div
            className="slider__side-left"
            onClick={() => {
              let index = text.id - 1;
              setText(text_arr[index]);
              setImg(img_arr[index]);
            }}
          >
            <img src="./img/slider_arrow-left.png" className="slider__arrow" />
          </div>
        ) : (
          <div
            className="slider__side-right"
            style={{ visibility: "hidden" }}
          ></div>
        )}
        <div className="slider__section-center">
          <img
            src={img_arr[side_index[0]].src}
            className={img_arr[side_index[0]] + " slider_img-side"}
          />
          <img src={img.src} className={img.class + " slider_img-center"} />
          <img
            src={img_arr[side_index[1]].src}
            className={img_arr[side_index[1]] + " slider_img-side"}
          />
        </div>
        {img.id < 2 ? (
          <div
            className="slider__side-right"
            onClick={() => {
              let index = text.id + 1;
              setText(text_arr[index]);
              setImg(img_arr[index]);
            }}
          >
            <img src="./img/slider_arrow-left.png" className="slider__arrow" />
          </div>
        ) : (
          <div
            className="slider__side-right"
            style={{ visibility: "hidden" }}
          ></div>
        )}
      </div>
      <div className="slider__text">
        <span className="slider__text-title">{text.title}</span>
        <p className="slider__text-main">{text.text}</p>
      </div>
    </div>
  );
}

export default Slider;
