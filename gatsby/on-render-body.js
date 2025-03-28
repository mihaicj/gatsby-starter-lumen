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
        dangerouslySetInnerHTML: { __html: katexStylesheet.toString() },
      }),
    ]);
  }

  setPostBodyComponents([
    <script
      key="visa"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(function(v,i,s,a,t){v[t]=v[t]||function(){(v[t].v=v[t].v||[]).push(arguments)};if(!v._visaSettings){v._visaSettings={}}v._visaSettings[a]={v:'1.0',s:a,a:'1',t:t};var b=i.getElementsByTagName('body')[0];var p=i.createElement('script');p.defer=1;p.async=1;p.src=s+'?s='+a;b.appendChild(p)})(window,document,'//dev-worker.va-endpoint.com/main.js','06d99a32-ee11-11eb-830a-0242ac130018','va')`,
      }}
    />,
  ], [
      <script
      key="visa"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "qnjuh2svqt");`
      }}
      />
  ]);
};

module.exports = onRenderBody;
