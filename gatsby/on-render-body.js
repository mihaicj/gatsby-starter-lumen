"use strict";

const React = require("react");
const siteConfig = require("../config.js");

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const katexStylesheet = require("!css-loader!../static/css/katex/katex.min.css");

const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const { useKatex } = siteConfig;

  if (useKatex) {
    setHeadComponents([
      React.createElement("style", {
        key: "katex-inline-stylesheet",
        dangerouslySetInnerHTML: { __html: katexStylesheet.toString() }
      })
    ]);
  }

  setPostBodyComponents([
    <script
      key="visa"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
      (function(v,i,s,a){if(!v._visaSettings){v._visaSettings={};}v._visaSettings["dfb4d0e3-ee08-11eb-830a-0242ac130018"]={v:"0.3",s:"dfb4d0e3-ee08-11eb-830a-0242ac130018",a:"1"};_v=i.getElementsByTagName("body")[0];_a=_v;_i=i.createElement("script");_s=_i;_s.defer="defer";_s.src=s+a+v._visaSettings["dfb4d0e3-ee08-11eb-830a-0242ac130018"].v;_a.appendChild(_s);})(window,document,"https://dev-worker.va-endpoint.com/main",".js?s=dfb4d0e3-ee08-11eb-830a-0242ac130018&v=")
      `
      }}
    />
  ]);
};

module.exports = onRenderBody;
