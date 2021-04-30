import TweenMax from "gsap";

const timeout = (s) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // reject(new Error(`${s}seconds timeout`));
      resolve(true);
    }, s * 1000);
  });
};

export const callAPI = async (url) => {
  const fetchPro = fetch(url);
  const fetchRes = await Promise.race([fetchPro, timeout(10)]);
  const response = await fetchRes.json();
  return response;
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
