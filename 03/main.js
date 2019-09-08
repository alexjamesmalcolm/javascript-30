window.onload = () => {
  const data = [
    {
      inputSelector: "#spacing",
      cssVar: "--spacing",
      formatter: value => value + "px"
    },
    {
      inputSelector: "#blur",
      cssVar: "--blur",
      formatter: value => value + "px"
    },
    {
      inputSelector: "#border-color",
      cssVar: "--border-color",
      formatter: value => value
    }
  ];
  const root = document.documentElement;
  const updateValue = (cssVar, formatter) => event => {
    const value = event.target.value;
    root.style.setProperty(cssVar, formatter(value));
  };
  data.forEach(({ inputSelector, cssVar, formatter }) => {
    const input = document.querySelector(inputSelector);
    input.addEventListener("change", updateValue(cssVar, formatter));
  });
};
