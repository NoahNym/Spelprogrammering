export const randomInt = (min: number, max: number) => Math.floor(randomFloat(min, max + 1));

export const randomFloat = (min: number, max: number) => min + (max - min)*Math.random();

const customColors = [
   
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "yellow",
    "cyan",
    "magenta",
    "lime",
    "brown",
    "teal",
    "indigo",
    "maroon",
    "navy",
    "olive",
    "aqua",
    "silver",
    "gold",
    "violet",
    "orchid",
    "coral",
    "chartreuse",
    "crimson",
    "darkorange",
    "darkorchid",
    "darkseagreen",
    "dodgerblue",
    "firebrick",
    "forestgreen",
    "hotpink",
    "khaki",
    "lawngreen",
    "lightcoral",
    "lightseagreen",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumspringgreen",
    "midnightblue",
    "orangered",
    "palegreen",
    "peru",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "sienna",
    "slateblue",
    "springgreen",
    "steelblue",
    "tomato",
    "turquoise",
    "darkcyan",
    "darkgoldenrod",
    "darkgreen",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkred",
    "darksalmon",
    "darkslateblue",
    "darkturquoise",
    "darkviolet",
  ];

  export const randomColor = () => {
    const randomIndex = randomInt(0, customColors.length - 1);
    return customColors[randomIndex];
  };