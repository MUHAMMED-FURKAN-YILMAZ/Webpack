import { setItem } from "./utils/storage";
import "./index.scss";

document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack");
  alert("v1");

  const arr = [123, 56, 3, 67, 2, 67];
  console.log(getArray(arr));
  setItem(
    "token",
    "klsahjdkhaskhdjkahskdjhaskjdhjkashkdasdasedwqfrdsfgsdfdjhasjd"
  );
});

const getArray = (arr) => {
  return arr.filter((x) => x > 10).reduce((t, x) => x + t, 0);
};
