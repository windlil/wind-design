import{_ as l,C as p,o as e,c,k as n,H as t,w as o,a as s,Q as r}from"./chunks/framework.282b93a4.js";const f=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{"0":"s","1":"i","2":"d","3":"e","4":"r","5":"_","6":"t","7":"e","8":"x","9":"t","10":"=","11":"\\"","12":"按","13":"钮","14":" ","15":"b","16":"u","17":"t","18":"t","19":"o","20":"n","21":"\\""},"headers":[],"relativePath":"guide/components/button.md","filePath":"guide/components/button.md"}'),E={name:"guide/components/button.md"},y=n("p",null,":::",-1),u=n("h1",{id:"button-按钮",tabindex:"-1"},[s("Button 按钮 "),n("a",{class:"header-anchor",href:"#button-按钮","aria-label":'Permalink to "Button 按钮"'},"​")],-1),i=n("h2",{id:"基本用法",tabindex:"-1"},[s("基本用法 "),n("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),d={class:"group"},g=r(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;group&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">vc-button</span><span style="color:#E1E4E8;">&gt;Default&lt;/</span><span style="color:#85E89D;">vc-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">vc-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">&gt;Primary&lt;/</span><span style="color:#85E89D;">vc-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">vc-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;">&gt;Success&lt;/</span><span style="color:#85E89D;">vc-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">vc-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;">&gt;Danger&lt;/</span><span style="color:#85E89D;">vc-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">vc-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;warning&quot;</span><span style="color:#E1E4E8;">&gt;Warning&lt;/</span><span style="color:#85E89D;">vc-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;group&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">vc-button</span><span style="color:#24292E;">&gt;Default&lt;/</span><span style="color:#22863A;">vc-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">vc-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">&gt;Primary&lt;/</span><span style="color:#22863A;">vc-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">vc-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;">&gt;Success&lt;/</span><span style="color:#22863A;">vc-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">vc-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;">&gt;Danger&lt;/</span><span style="color:#22863A;">vc-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">vc-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;warning&quot;</span><span style="color:#24292E;">&gt;Warning&lt;/</span><span style="color:#22863A;">vc-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details>`,1);function _(b,v,m,h,F,D){const a=p("vc-button");return e(),c("div",null,[y,u,i,n("div",d,[t(a,null,{default:o(()=>[s("Default")]),_:1}),t(a,{type:"primary"},{default:o(()=>[s("Primary")]),_:1}),t(a,{type:"success"},{default:o(()=>[s("Success")]),_:1}),t(a,{type:"danger"},{default:o(()=>[s("Danger")]),_:1}),t(a,{type:"warning"},{default:o(()=>[s("Warning")]),_:1})]),g])}const C=l(E,[["render",_]]);export{f as __pageData,C as default};