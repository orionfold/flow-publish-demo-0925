(function () {
  "use strict";
  var TOOLTIP = "vg-tooltip-element";
  function hideTooltip() {
    var element = document.getElementById(TOOLTIP);
    if (element) element.remove();
  }
  function ready() {
    var api = window.flowCharts;
    var figures = document.querySelectorAll("figure.chart[data-chart]");
    if (!api || !figures.length || typeof fetch !== "function") return;
    window.addEventListener("scroll", hideTooltip, { passive: true });
    window.addEventListener("resize", hideTooltip);
    var themeLoad = fetch("charts/theme.json")
      .then(function (response) { return response.ok ? response.json() : null; })
      .catch(function () { return null; });
    Array.prototype.forEach.call(figures, function (figure) {
      var picture = figure.querySelector(":scope > svg");
      var id = figure.getAttribute("data-chart");
      if (!picture || !id || !/^[0-9a-f]+$/.test(id)) return;
      fetch("charts/" + id + ".json")
        .then(function (response) { return response.ok ? response.json() : null; })
        .then(function (record) {
          if (!record || record.language !== "chart" || typeof record.body !== "string") return;
          return themeLoad.then(function (theme) {
            var width = Math.round(figure.getBoundingClientRect().width) || 680;
            var host = document.createElement("div");
            host.className = "chart-live chart-live-pending";
            host.style.width = width + "px";
            figure.appendChild(host);
            hideTooltip();
            return api.render(host, record.body, { width: width, theme: theme || undefined })
              .then(function () {
                picture.remove();
                host.classList.remove("chart-live-pending");
                host.style.width = "";
                figure.classList.add("chart-hover");
              })
              .catch(function () { host.remove(); });
          });
        })
        .catch(function () {});
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();
