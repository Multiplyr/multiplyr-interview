c3.generate({
  data: {
    // will generate a donut chart in div id chart
    bindTo: "#chart",
    columns: [
      ["Lending", 23],
      ["DEX", 26],
      ["BTC", 23],
      ["ETH", 34],
      ["ALT Coin", 23],
    ],
    type: "donut",
  },
  donut: {
    title: "High Risk",
    expand: true,
  },
  legend: {
    position: "right",
  },
});
