import { setItem } from "./utils/storage";
import "./index.scss";

document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack");
  alert("v1");

  setItem(
    "token",
    "klsahjdkhaskhdjkahskdjhaskjdhjkashkdasdasedwqfrdsfgsdfdjhasjd"
  );
});
