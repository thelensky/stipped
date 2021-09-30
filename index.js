function run() {
    const getParent = () => {
      const div = document.createElement("div");
      div.style.position = "sticky";
      div.style.display = "flex";
      div.style.flexDirection = "column";
      div.style.zIndex = "10000000000000000000";
      div.style.bottom = "0%"  
      div.style.alignContent = "center";
      div.style.position = "fixed";
      div.style.width = "100%";
  
      return div;
    };
  
    const getStrip = () => {
      const div = document.createElement("div");
      div.style.position = "fixed";
      div.style.width = "1px";
      div.style.height = "100%";
      div.style.zIndex = "10000000000000000000";
      div.style.top = "0%";
      div.style.backgroundColor = "red";
      div.style.left = "50%";
  
      return div;
    };
  
    const getInputRange = () => {
      const input = document.createElement("input");
      input.type = "range";
      input.max = 100;
      input.min = 0;
      input.step = 1;
      input.value = 50;
      input.style.opacity = "15%"
  
      return input;
    };
  
    const parent = getParent();
  
    for (let i = 0; i < 3; i++) {
      const strip = getStrip();
      const input = getInputRange();
      input.addEventListener(
        "change",
        () => (strip.style.left = input.value + "%")
      );
      input.addEventListener(
        "input",
        () => (strip.style.left = input.value + "%")
      );
      document.body.appendChild(strip);
      parent.append(input);
    }
  
    document.body.append(parent);
  }
  run()