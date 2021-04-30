import TweenMax from "gsap";

export const callAPI = async (url) => {
  const fetchPro = fetch(url);
  const result = await fetchPro;
  const data = await result.json();
  return data;
};

export const resize = () => {
  const WIDTH = 1920;
  const HEIGHT = 1080;

  const resizedWidth = window.innerWidth;
  const resizedHeight = window.innerHeight;

  TweenMax.set(".container", {
    scaleX: resizedWidth / WIDTH,
    scaleY: resizedHeight / HEIGHT,
    transformOrigin: "0% 0%",
  });
};

export const clock = () => null;
