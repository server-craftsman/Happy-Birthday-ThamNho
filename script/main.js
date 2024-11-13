//Huy IT

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      dataArr = Object.keys(data);
      dataArr.map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            const imageElement = document.querySelector(`[data-node-name*="${customData}"]`);
            imageElement.setAttribute("src", data[customData]);
            imageElement.style.height = "300px";
          } else {
            document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
          }
        }

        // Check if the iteration is over
        // Run amimation if so
        if (dataArr.length === dataArr.indexOf(customData) + 1) {
          animationTimeline();
        }
      });
    });
};

// Animation Timeline
const animationTimeline = () => {

  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    // .add(() => {
    //   audio.play();
    // })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90
      },
      "+=1"
    )
    .to(".end-screen", 1, {
      opacity: 1,
      visibility: "visible"
    });

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

const setupAudioPrompt = () => {
  const audioPrompt = document.createElement("div");
  audioPrompt.innerHTML = `
    <div id="audio-modal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: rgba(0, 0, 0, 0.8); z-index: 1000; animation: fadeIn 2s;">
      <div style="background: #fff5e6; padding: 30px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); animation: pulse 1.5s infinite;">
        <p style="font-size: 18px; color: #333; margin-bottom: 20px; animation: textFadeIn 3s;">Nghe nhạc cùng anh nhé em !!!</p>
        <button id="enable-audio" style="background-color: #ff69b4; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; animation: buttonShake 2s infinite;">Bật nhạc</button>
      </div>
    </div>
  `;
  document.body.appendChild(audioPrompt);

  document.getElementById("enable-audio").addEventListener("click", () => {
    const audio = new Audio("sound/sound1.mp3");
    audio.play().catch(error => console.error("Autoplay failed:", error));
    document.getElementById("audio-modal").style.display = "none"; // Hide modal after interaction

    // Add transition animation
    const transitionElement = document.createElement("div");
    transitionElement.style.position = "fixed";
    transitionElement.style.top = "0";
    transitionElement.style.left = "0";
    transitionElement.style.width = "100%";
    transitionElement.style.height = "100%";
    transitionElement.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    transitionElement.style.zIndex = "999";
    transitionElement.style.transition = "opacity 1s ease-in-out";
    transitionElement.style.opacity = "1";
    document.body.appendChild(transitionElement);

    setTimeout(() => {
      transitionElement.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(transitionElement);
        fetchData(); // Execute fetchData after animation
      }, 1000); // Wait for the transition to complete
    }, 500); // Delay before starting the transition
  });
};

// Add CSS animations
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  @keyframes textFadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes buttonShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
  }
`;
document.head.appendChild(style);

// Add end screen
const addEndScreen = () => {
  const endScreen = document.createElement("div");
  endScreen.className = "end-screen";
  endScreen.style.position = "fixed";
  endScreen.style.top = "50%";
  endScreen.style.left = "50%";
  endScreen.style.transform = "translate(-50%, -50%)";
  endScreen.style.width = "100%";
  endScreen.style.height = "100%";
  endScreen.style.background = "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(20,20,20,0.95))";
  endScreen.style.color = "#fff";
  endScreen.style.display = "flex";
  endScreen.style.flexDirection = "column";
  endScreen.style.justifyContent = "center";
  endScreen.style.alignItems = "center";
  endScreen.style.opacity = "0";
  endScreen.style.visibility = "hidden";
  endScreen.style.transition = "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)";
  endScreen.style.backdropFilter = "blur(10px)";
  endScreen.style.boxShadow = "0 0 100px rgba(255,255,255,0.1) inset";

  const content = `
    <div style="text-align: center; animation: fadeIn 2s ease-out">
      <h1 style="font-size: 3em; margin-bottom: 30px; text-shadow: 0 0 20px rgba(255,255,255,0.5); animation: textFadeIn 1.5s ease-out">
        ✨ Cảm ơn em vì đã xem hết nhé! ✨
      </h1>
      <div style="font-size: 1.5em; opacity: 0.9; animation: pulse 2s infinite">
        <span style="color: #FFD700">★</span>
        <span style="color: #FFA500">★</span>
        <span style="color: #FF69B4">★</span>
      </div>
    </div>
  `;

  endScreen.innerHTML = content;

  // Add sparkle effect
  setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.style.position = "absolute";
    sparkle.style.width = "4px";
    sparkle.style.height = "4px";
    sparkle.style.backgroundColor = "#fff";
    sparkle.style.borderRadius = "50%";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.animation = "fadeIn 1s ease-out forwards";
    endScreen.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }, 200);

  document.body.appendChild(endScreen);
};

// Run fetch and animation in sequence
document.addEventListener("DOMContentLoaded", () => {
  setupAudioPrompt();
  addEndScreen(); // Add this line to initialize the end screen
  // setTimeout(fetchData, 3000);
});