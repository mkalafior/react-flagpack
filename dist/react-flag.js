import { jsx as e } from "react/jsx-runtime";
const i = ({
  code: r = "NL",
  size: s = "l",
  gradient: l = "",
  hasBorder: t = !0,
  hasDropShadow: $ = !1,
  hasBorderRadius: d = !0,
  alt: o = "",
  className: a
}) => /* @__PURE__ */ e(
  "div",
  {
    className: `flag ${l} size-${s} ${t ? "border" : ""} ${$ ? "drop-shadow" : ""} ${d ? "border-radius" : ""} ${a ? a.replace(/\s\s+/g, " ").trim() : ""}`,
    children: /* @__PURE__ */ e("img", { alt: o ?? r, src: `/flags/${s}/${r}.svg` })
  }
);
export {
  i as default
};
