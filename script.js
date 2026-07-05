/*
  Romantic Birthday Gift Website
  Edit only SITE_CONFIG for your personal content.
  Everything else is behavior and rendering code.
*/

// =============================================================
// EDITABLE CONTENT CONFIG
// Replace nicknames, letters, image paths, answers, chest password,
// memories, love reasons, final video path, and future promise here.
// =============================================================
const SITE_CONFIG = {
  yourName: "Nishit",
  girlfriendName: "Vanshika",

  // Countdown target: 7 July 2026 at 00:00 India time, Asia/Kolkata.
  // The +05:30 offset makes this exact even if the viewer is elsewhere.
  countdownTargetISO: "2026-07-07T00:00:00+05:30",

  passwordQuestion: "Who does nishit love the most",
  passwordHint: "Dont overthink it",
  correctPassword: "Vanshika",
  storageKey: "nishit_vanshika_birthday_unlocked_v1",

  unlockMessage: "Unlocked! Scroll down for the rest of your gifts \u{1F49D}",
  heroSubtitle: "I made this little world for you, full of clues, letters, memories, and all the love I keep trying to put into words.",

  // Replace these with the nicknames you call her.
  nicknames: ["baby gurll", "dhablu", "princess", "love", "cutuu", "ponchuu", "bhonsuu"],

  // Replace this with your real birthday letter.
  birthdayLetter: `My ponchuuu, first of all happpiesst birthdayy to youuu. Whaaa you have already turned 23 😆, this here is the gift that I have prepared for youu
  
  You are always there for me, keep pushing me forward in life, make me feel so lovedd, give me such great giftsss, and this here is my try to pay it back to you, however I know I will always be indebt to youu, because nothing in this world truly compares to you.

  While making this gift, I was reminded of all the lovely moments we have shared together, and made me appreciate your love even more. I know this long distance has really been hard on both of us, and maybe I had forgotten a bit what it was to live and spend every day of mine with you, but this gift has brought all those memories back to my mind, and made me realize how much I love youu.
  
  I don't know what else to tell you, aaaa its been long since I have written a letter to youuu, I am sorry but I'll make sure I write some more often. I hope you like my gift, I know they will never be as good as your gifts but this is my best attempt at it till date. I love you soooooo muchhhhh dhabluuu and I can't wait to hug you againnn. Happy Birthdayy once againn 😘.
  
  `,

  // Replace treasure images/questions/answers. Answers are case-insensitive and ignore extra spaces.
  treasureQuestions: [
    {
      image: "assets/treasure/date1.jpg",
      question: "where were we heading to attenddd?",
      acceptedAnswers: ["Travis Scott", "Travis Scott's Concert", "Travis Scotts Concert", "Concert"],
      hint: "IT WAS LITTTT"
    },
    {
      image: "assets/treasure/date2.jpg",
      question: "What was today's date?",
      acceptedAnswers: ["7-02-25", "07-02-25", "7/02/25", "07/02/25", "07/02/2025", "07-02-2025", "7th Feb 2025", "7th February 2025", "February 7, 2025"],
      hint: "It was in the month of Feb 😜."
    },
    {
      image: "assets/treasure/date3.jpg",
      question: "Where did this little memory happen?",
      acceptedAnswers: ["BITS Goa", "BITS", "Waves"],
      hint: "hehe Raftar came ig 😎"
    },
    {
      image: "assets/treasure/date4.jpg",
      question: "What was today's occasion",
      acceptedAnswers: ["Navratri"],
      hint: "My vector image came from this event 😢"
    },
    {
      image: "assets/treasure/date5.jpg",
      question: "This was our first?",
      acceptedAnswers: ["Nightout", "Night out", "First night out", "First nightout"],
      hint: "Sajju had come to Goa 😝"
    }
  ],

  // Treasure chest shown at the top of the hunt.
  // She discovers this password only after answering all five postcards correctly.
  treasureChest: {
    password: "ILMGF",
    passwordMeaning: "I love My Girl Friend",
    lockedTitle: "The treasure chest is locked",
    lockedHint: "Solve all five questions correctly to reveal the password.",
    readyTitle: "You found the chest password",
    readyHint: "Type the password below to open the chest.",
    openedTitle: "Congratulations, bhonsuu",
    openedHint: "Your birthday coupon is waiting inside.",
    openedMessage: "Congratulations! You have won a coupon worth 5K and it can be redeemed at any store. Contact your bf for further details. 😜",
    couponLabel: "SPECIAL BIRTHDAY COUPON",
    couponValue: "Worth 5K",
    couponMessage: "Congratulations! You have won a coupon worth 5K and it can be redeemed at any store. Contact your bf for further details. 😜",
    wrongMessage: "Almosttt, that is not the chest password 💗",
    notReadyMessage: "Finish all five clues first, my love 💗",
    completionMessage: "You found all the little pieces of us 💖 Your chest password is",
    openedStatus: "Coupon unlocked. Contact your bf to redeem it."
  },

  // Add 40-50 memory objects here later. The page will automatically create more clotheslines.
  memories: [
    {
      image: "assets/memories/memory1.jpg",
      caption: "us painting t-shirt 😆"
    },
    {
      image: "assets/memories/memory2.jpg",
      caption: "you looking beautiful at our first date"
    },
    {
      image: "assets/memories/memory3.jpg",
      caption: "you slayingg on the beachhh 💅"
    },
    {
      image: "assets/memories/memory4.jpg",
      caption: "we will have 2 swings at our home 😘"
    },
    {
      image: "assets/memories/memory5.jpg",
      caption: "Cutuuu 🥰😍"
    },
    {
      image: "assets/memories/memory6.jpg",
      caption: "I can grow you a garden of flowers to see you smile like this"
    },
    {
      image: "assets/memories/memory7.jpg",
      caption: "u and meee 🙈"
    },
    {
      image: "assets/memories/memory8.jpg",
      caption: "bhokiii ussss 🤩"
    },
    {
      image: "assets/memories/memory9.jpg",
      caption: "Let me clean your lips 💋"
    },
    {
      image: "assets/memories/memory10.jpg",
      caption: "goooofy usss 🤪"
    }
  ],

  // Replace these letters with your real Open When messages.
  openWhenLetters: [
    {
      title: "feeling sad",
      letter: "Awwwleee why are you feeeling sad dhabluuuu?? Whatever is the reason always know that I am here for you, and I love you and will keep loving you till the endddd of timee. Here are some virtuall huggiesss and kissiesss 🫂🤗😘💋, Call me and talk to meeee, if it's because of me please forgivee meee I be acting dumb sometimesss 😢"
    },
    {
      title: "feeling unmotivated",
      letter: "WTFFFF WHY ARE YOU FEELING DOWNNN, YOU ARE HERRR, THROUGHOUT HEAVEN AND EARTH YOU ALONE ARE THE HONOURED ONEEE, WHATEVER IS THE REASON I AM SURE ONE DAY YOU WILL BE SITTING IN YOUR YATCH AND YOU'LL THINK BACK TO HOW YOU WERE STRESSING OVER SUCH A USELESS THINGG, LET IT GO DHABLUUU AND KEEP MOVING FORWARDDD AAAAA SHEERRRRR 🦁"
    },
    {
      title: "missing me",
      letter: "Awww I miss you tooo ponchuuu, don't worry we will meet real soon I promise, and before you know we will be back living together baby. Don't worry and keep smiling babe I am always with youu 😘😘"
    },
    {
      title: "needing a smile",
      letter: "Remember that time when you fell in that gaddaaa 😆, padduu kahi ki, keep smiling aa dhablu you look 1000 times more beautiful 😻"
    }
  ],

  // Replace these with your real reasons.
  loveReasons: [
    "the way you smiiiile at meee.",
    "taking such goooood care of meeeee.",
    "your cutenesss.",
    "making every little moment feel magicalll.",
    "being my safe place.",
    "the way you make me feel loooooved every single day.",
    "being paitent with me.",
    "the way you always push me to do better.",
    "how funnyyy you aree.",
    "your sexxinesss.",
    "making me a better person.",
    "choosing me",
    "the way you plan our datess.",
    "the strong girl you are.",
    "the kind girl you are.",
    "what your mamaa gave you 😜",
    "the way you make me feel like the luckiest guy in the world.",
    "how talented you are.",
    "eforts you put into our relationship.",
    "the way you understand me without me saying much.",
    "being you."
  ],

  // Replace with your final video or voice-note path.
  finalVideo: "assets/final-video.mp4",

  // Replace this with your real promise.
  futureDatePromise: "I promise to take you on a beautiful date soon just you, me, and another memory waiting to happen.",

  finalLine: "Happy Birthday, Bhonsuu. I love you more than words can ever explain. - Nishit"
};

// =============================================================
// APP STATE
// =============================================================
const state = {
  countdownTimer: null,
  nicknameIndex: 0,
  treasureActiveIndex: 0,
  treasureCompleted: [],
  treasureChestOpened: false,
  placedMemories: 0,
  lastLoveReasonIndex: -1,
  typingTimer: null,
  prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
};

const els = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheElements();
  syncStaticText();
  initializeState();
  renderTreasureHunt();
  renderTreasureChest();
  renderMemoryWall();
  renderOpenWhenLetters();
  setupEventListeners();
  setupFinalVideo();
  startNicknameRotation();
  initCountdownGate();
}

function cacheElements() {
  els.body = document.body;
  els.lockScreen = document.getElementById("lockScreen");
  els.countdownCard = document.getElementById("countdownCard");
  els.passwordGate = document.getElementById("passwordGate");
  els.passwordForm = document.getElementById("passwordForm");
  els.passwordInput = document.getElementById("passwordInput");
  els.passwordError = document.getElementById("passwordError");
  els.unlockTransition = document.getElementById("unlockTransition");
  els.siteContent = document.getElementById("siteContent");
  els.floatingNav = document.getElementById("floatingNav");
  els.days = document.getElementById("days");
  els.hours = document.getElementById("hours");
  els.minutes = document.getElementById("minutes");
  els.seconds = document.getElementById("seconds");
  els.nicknameText = document.getElementById("nicknameText");
  els.heroSubtitle = document.getElementById("heroSubtitle");
  els.birthdayEnvelope = document.getElementById("birthdayEnvelope");
  els.treasureChestPanel = document.getElementById("treasureChestPanel");
  els.treasureChest = document.getElementById("treasureChest");
  els.treasureChestTitle = document.getElementById("treasureChestTitle");
  els.treasureChestHint = document.getElementById("treasureChestHint");
  els.treasureChestForm = document.getElementById("treasureChestForm");
  els.treasureChestPassword = document.getElementById("treasureChestPassword");
  els.treasureChestButton = document.getElementById("treasureChestButton");
  els.treasureChestStatus = document.getElementById("treasureChestStatus");
  els.treasurePasswordReveal = document.getElementById("treasurePasswordReveal");
  els.treasurePasswordText = document.getElementById("treasurePasswordText");
  els.treasurePasswordMeaning = document.getElementById("treasurePasswordMeaning");
  els.treasureBoard = document.getElementById("treasureBoard");
  els.treasureComplete = document.getElementById("treasureComplete");
  els.memoryWall = document.getElementById("memoryWall");
  els.memoryProgress = document.getElementById("memoryProgress");
  els.polaroidStack = document.getElementById("polaroidStack");
  els.memoryComplete = document.getElementById("memoryComplete");
  els.openWhenGrid = document.getElementById("openWhenGrid");
  els.loveButton = document.getElementById("loveButton");
  els.loveOutput = document.getElementById("loveOutput");
  els.finalVideo = document.getElementById("finalVideo");
  els.videoPlayCard = document.getElementById("videoPlayCard");
  els.videoFallback = document.getElementById("videoFallback");
  els.futurePromise = document.getElementById("futurePromise");
  els.finalLine = document.getElementById("finalLine");
  els.modalBackdrop = document.getElementById("modalBackdrop");
  els.modalClose = document.getElementById("modalClose");
  els.modalTitle = document.getElementById("modalTitle");
  els.modalBody = document.getElementById("modalBody");
}

function syncStaticText() {
  document.title = `Happy Birthday, ${SITE_CONFIG.girlfriendName}`;
  els.heroSubtitle.textContent = SITE_CONFIG.heroSubtitle;
  els.nicknameText.textContent = SITE_CONFIG.nicknames[0] || SITE_CONFIG.girlfriendName;
  els.futurePromise.textContent = SITE_CONFIG.futureDatePromise;
  els.finalLine.textContent = SITE_CONFIG.finalLine;

  if (els.treasurePasswordText) {
    els.treasurePasswordText.textContent = SITE_CONFIG.treasureChest.password;
  }
  if (els.treasurePasswordMeaning) {
    els.treasurePasswordMeaning.textContent = SITE_CONFIG.treasureChest.passwordMeaning;
  }
}


function initializeState() {
  state.treasureCompleted = SITE_CONFIG.treasureQuestions.map(() => false);
  state.treasureChestOpened = false;
  state.placedMemories = 0;
}

// =============================================================
// COUNTDOWN + PASSWORD GATE
// =============================================================
function initCountdownGate() {
  const target = getTargetDate();
  const now = new Date();
  const unlockedAlready = localStorage.getItem(SITE_CONFIG.storageKey) === "true";

  // Keep the countdown behavior before the birthday even if localStorage was edited.
  if (now < target) {
    lockSite();
    updateCountdown();
    state.countdownTimer = window.setInterval(updateCountdown, 1000);
    return;
  }

  updateCountdown(0);
  if (unlockedAlready) {
    showUnlockedSite({ instant: true });
  } else {
    lockSite();
    showPasswordGate();
  }
}

function getTargetDate() {
  return new Date(SITE_CONFIG.countdownTargetISO);
}

function updateCountdown(forcedDistance) {
  const target = getTargetDate();
  const distance = typeof forcedDistance === "number" ? forcedDistance : target.getTime() - Date.now();

  if (distance <= 0) {
    setCountdownValues(0, 0, 0, 0);
    if (state.countdownTimer) {
      window.clearInterval(state.countdownTimer);
      state.countdownTimer = null;
    }
    if (localStorage.getItem(SITE_CONFIG.storageKey) === "true") {
      showUnlockedSite({ instant: true });
    } else {
      showPasswordGate();
    }
    return;
  }

  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  setCountdownValues(days, hours, minutes, seconds);
}

function setCountdownValues(days, hours, minutes, seconds) {
  els.days.textContent = pad(days);
  els.hours.textContent = pad(hours);
  els.minutes.textContent = pad(minutes);
  els.seconds.textContent = pad(seconds);
}

function lockSite() {
  els.body.classList.add("locked");
  els.siteContent.hidden = true;
  els.floatingNav.hidden = true;
  els.lockScreen.hidden = false;
}

function showPasswordGate() {
  els.passwordGate.hidden = false;
  els.passwordError.textContent = "";
  setTimeout(() => els.passwordInput.focus(), 50);
}

function handlePasswordSubmit(event) {
  event.preventDefault();
  const typed = normalizeAnswer(els.passwordInput.value);
  const correct = normalizeAnswer(SITE_CONFIG.correctPassword);

  if (typed !== correct) {
    els.passwordError.textContent = "Nooo, try again my love \u{1F497}";
    els.passwordInput.select();
    createBurst(window.innerWidth / 2, window.innerHeight / 2, ["\u{1F97A}", "\u{1F497}", "\u2728"]);
    return;
  }

  localStorage.setItem(SITE_CONFIG.storageKey, "true");
  els.passwordError.textContent = "";
  els.passwordGate.hidden = true;
  triggerUnlockTransition();
}

function triggerUnlockTransition() {
  els.unlockTransition.hidden = false;
  els.unlockTransition.classList.add("is-active");
  createBurst(window.innerWidth / 2, window.innerHeight / 2, ["\u2665", "\u2728", "\u{1F496}", "\u{1F49D}"]);

  const delay = state.prefersReducedMotion ? 120 : 2250;
  window.setTimeout(() => {
    showUnlockedSite({ instant: false });
    openModal({
      title: "Unlocked!",
      bodyHTML: `<p class="letter-text">${escapeHTML(SITE_CONFIG.unlockMessage)}</p>`
    });
    els.unlockTransition.classList.remove("is-active");
    els.unlockTransition.hidden = true;
  }, delay);
}

function showUnlockedSite({ instant }) {
  els.body.classList.remove("locked");
  els.lockScreen.hidden = true;
  els.siteContent.hidden = false;
  els.floatingNav.hidden = false;

  if (!instant) {
    window.scrollTo({ top: 0, behavior: state.prefersReducedMotion ? "auto" : "smooth" });
  }
}

// =============================================================
// HOME LETTER + NICKNAME ROTATION
// =============================================================
function startNicknameRotation() {
  const names = SITE_CONFIG.nicknames.length ? SITE_CONFIG.nicknames : [SITE_CONFIG.girlfriendName];
  if (names.length === 1) return;

  window.setInterval(() => {
    state.nicknameIndex = (state.nicknameIndex + 1) % names.length;
    els.nicknameText.classList.add("changing");

    window.setTimeout(() => {
      els.nicknameText.textContent = names[state.nicknameIndex];
      els.nicknameText.classList.remove("changing");
    }, state.prefersReducedMotion ? 0 : 260);
  }, state.prefersReducedMotion ? 3600 : 1850);
}

function openBirthdayLetter() {
  els.birthdayEnvelope.classList.add("opening");
  createBurst(window.innerWidth / 2, window.innerHeight * 0.62, ["\u2665", "\u2728", "\u{1F48C}"]);

  window.setTimeout(() => {
    openModal({
      title: `For ${SITE_CONFIG.girlfriendName}`,
      bodyHTML: `<div class="letter-text">${formatText(SITE_CONFIG.birthdayLetter)}</div>`
    });
    els.birthdayEnvelope.classList.remove("opening");
  }, state.prefersReducedMotion ? 0 : 420);
}

// =============================================================
// TREASURE HUNT
// =============================================================
function renderTreasureHunt() {
  els.treasureBoard.innerHTML = SITE_CONFIG.treasureQuestions.map((item, index) => {
    const isCompleted = state.treasureCompleted[index];
    const isActive = index === state.treasureActiveIndex && !isCompleted;
    const isLocked = !isCompleted && !isActive;
    const status = isCompleted ? "Yesss, you remember 💗" : "";

    return `
      <article class="treasure-step ${isCompleted ? "completed" : ""} ${isActive ? "active" : ""} ${isLocked ? "locked" : ""}" data-index="${index}">
        <div class="postcard">
          <span class="pin" aria-hidden="true"></span>
          <span class="tape" aria-hidden="true"></span>
          <div class="postcard-photo image-frame">
            <img src="${escapeAttr(item.image)}" alt="Treasure hunt memory ${index + 1}" loading="lazy" />
            <div class="image-fallback">Add your date photo here<br>${escapeHTML(item.image)}</div>
          </div>
          <h3>${escapeHTML(item.question)}</h3>
          ${item.hint ? `<p class="hint-line">Hint: ${escapeHTML(item.hint)}</p>` : ""}
          <div class="answer-row">
            <label class="sr-only" for="treasureInput${index}">Answer for treasure question ${index + 1}</label>
            <input id="treasureInput${index}" type="text" ${isLocked || isCompleted ? "disabled" : ""} placeholder="Your answer" />
            <button class="primary-btn check-answer" type="button" data-index="${index}" ${isLocked || isCompleted ? "disabled" : ""}>Check</button>
          </div>
          <p class="card-status" id="treasureStatus${index}" aria-live="polite">${status}</p>
        </div>
      </article>
    `;
  }).join("");

  wireImageFallbacks(els.treasureBoard);
  const activeInput = document.getElementById(`treasureInput${state.treasureActiveIndex}`);
  if (activeInput && !activeInput.disabled && !state.prefersReducedMotion) {
    window.setTimeout(() => activeInput.focus({ preventScroll: true }), 80);
  }
}

function getTreasureChestConfig() {
  return {
    password: "ILMGF",
    passwordMeaning: "I love My Girl Friend",
    lockedTitle: "The treasure chest is locked",
    lockedHint: "Solve all five questions correctly to reveal the password.",
    readyTitle: "You found the chest password",
    readyHint: "The code is ready. Type it below to open the chest.",
    openedTitle: "The treasure chest is open",
    openedHint: "You opened the final little treasure.",
    openedMessage: "ILMGF means I love My Girl Friend. The real treasure was always you, my love.",
    wrongMessage: "Almosttt, the chest is still locked 💗",
    notReadyMessage: "Finish all five clues first, my love 💗",
    completionMessage: "You found all the little pieces of us 💖 Your chest password is",
    openedStatus: "Coupon unlocked. Contact your bf to redeem it.",
    ...(SITE_CONFIG.treasureChest || {})
  };
}

function allTreasureQuestionsCompleted() {
  return state.treasureCompleted.length > 0 && state.treasureCompleted.every(Boolean);
}

function renderTreasureChest() {
  if (!els.treasureChestPanel) return;

  const chest = getTreasureChestConfig();
  const huntComplete = allTreasureQuestionsCompleted();
  const chestOpened = state.treasureChestOpened;

  els.treasureChestPanel.classList.toggle("is-locked", !huntComplete && !chestOpened);
  els.treasureChestPanel.classList.toggle("is-ready", huntComplete && !chestOpened);
  els.treasureChestPanel.classList.toggle("is-open", chestOpened);

  if (els.treasureChest) {
    els.treasureChest.setAttribute("aria-expanded", String(chestOpened));
    els.treasureChest.setAttribute(
      "aria-label",
      chestOpened ? "Opened romantic treasure chest" : huntComplete ? "Treasure chest ready for password" : "Locked romantic treasure chest"
    );
  }

  if (els.treasurePasswordText) {
    els.treasurePasswordText.textContent = chest.password;
  }
  if (els.treasurePasswordMeaning) {
    els.treasurePasswordMeaning.textContent = chest.passwordMeaning;
  }

  if (chestOpened) {
    els.treasureChestTitle.textContent = chest.openedTitle;
    els.treasureChestHint.textContent = chest.openedHint;
    els.treasureChestPassword.value = "";
    els.treasureChestPassword.placeholder = "Chest opened";
    els.treasureChestPassword.disabled = true;
    els.treasureChestButton.disabled = true;
    els.treasureChestButton.textContent = "Opened";
    els.treasureChestStatus.textContent = chest.openedStatus || chest.openedMessage;
    if (els.treasurePasswordReveal) els.treasurePasswordReveal.hidden = false;
    return;
  }

  if (huntComplete) {
    els.treasureChestTitle.textContent = chest.readyTitle;
    els.treasureChestHint.textContent = chest.readyHint;
    els.treasureChestPassword.disabled = false;
    els.treasureChestPassword.placeholder = `Type ${chest.password} here`;
    els.treasureChestButton.disabled = false;
    els.treasureChestButton.textContent = "Open chest";
    els.treasureChestStatus.textContent = "Use the password above to open the chest.";
    if (els.treasurePasswordReveal) els.treasurePasswordReveal.hidden = false;
    return;
  }

  els.treasureChestTitle.textContent = chest.lockedTitle;
  els.treasureChestHint.textContent = chest.lockedHint;
  els.treasureChestPassword.value = "";
  els.treasureChestPassword.disabled = true;
  els.treasureChestPassword.placeholder = "Password appears after the hunt";
  els.treasureChestButton.disabled = true;
  els.treasureChestButton.textContent = "Open chest";
  els.treasureChestStatus.textContent = "Locked for now. Finish the treasure hunt to find the password.";
  if (els.treasurePasswordReveal) els.treasurePasswordReveal.hidden = true;
}

function handleTreasureChestSubmit(event) {
  event.preventDefault();
  const chest = getTreasureChestConfig();

  if (!allTreasureQuestionsCompleted()) {
    els.treasureChestStatus.textContent = chest.notReadyMessage;
    createBurstFromElement(els.treasureChest || els.treasureChestButton, ["🔒", "💗", "✨"]);
    return;
  }

  const typed = normalizeCode(els.treasureChestPassword.value);
  const correct = normalizeCode(chest.password);

  if (typed !== correct) {
    els.treasureChestStatus.textContent = chest.wrongMessage;
    els.treasureChestPassword.select();
    createBurstFromElement(els.treasureChestButton, ["🥺", "💗"]);
    return;
  }

  state.treasureChestOpened = true;
  renderTreasureChest();
  createBurstFromElement(els.treasureChest || els.treasureChestButton, ["💖", "✨", "💎", "♥"]);

  window.setTimeout(() => {
    openModal({
      title: chest.openedTitle,
      bodyHTML: buildTreasureChestPrizeHTML(chest)
    });
  }, state.prefersReducedMotion ? 0 : 650);
}

function buildTreasureChestPrizeHTML(chest) {
  const couponLabel = chest.couponLabel || "SPECIAL BIRTHDAY COUPON";
  const couponValue = chest.couponValue || "Worth 5K";
  const couponMessage = chest.couponMessage || chest.openedMessage;

  return `
    <div class="coupon-prize" role="note" aria-label="Birthday coupon prize">
      <div class="coupon-prize__stub">GIFT</div>
      <div class="coupon-prize__body">
        <p class="coupon-prize__label">${escapeHTML(couponLabel)}</p>
        <p class="coupon-prize__value">${escapeHTML(couponValue)}</p>
        <p class="coupon-prize__message">${escapeHTML(couponMessage)}</p>
      </div>
    </div>
  `;
}

function handleTreasureChestClick() {
  const chest = getTreasureChestConfig();

  if (state.treasureChestOpened) {
    openModal({
      title: chest.openedTitle,
      bodyHTML: buildTreasureChestPrizeHTML(chest)
    });
    createBurstFromElement(els.treasureChest, ["♥", "✨", "💎"]);
    return;
  }

  if (!allTreasureQuestionsCompleted()) {
    els.treasureChestStatus.textContent = chest.notReadyMessage;
    createBurstFromElement(els.treasureChest, ["🔒", "💗", "✨"]);
    return;
  }

  els.treasureChestPassword.focus();
  createBurstFromElement(els.treasureChest, ["🔑", "✨"]);
}

function showTreasureCompletion() {
  const chest = getTreasureChestConfig();
  els.treasureComplete.innerHTML = `${escapeHTML(chest.completionMessage)} <strong class="chest-password-code">${escapeHTML(chest.password)}</strong> <span class="chest-password-meaning">(${escapeHTML(chest.passwordMeaning)})</span>.`;
  els.treasureComplete.hidden = false;
}

function checkTreasureAnswer(index, sourceElement) {
  if (index !== state.treasureActiveIndex || state.treasureCompleted[index]) return;

  const question = SITE_CONFIG.treasureQuestions[index];
  const input = document.getElementById(`treasureInput${index}`);
  const status = document.getElementById(`treasureStatus${index}`);
  const answer = normalizeAnswer(input.value);
  const isCorrect = question.acceptedAnswers.some(item => normalizeAnswer(item) === answer);

  if (!isCorrect) {
    status.textContent = "Almosttt, think of that day again 🥺";
    createBurstFromElement(sourceElement, ["🥺", "♥"]);
    input.select();
    return;
  }

  state.treasureCompleted[index] = true;
  createBurstFromElement(sourceElement, ["♥", "✨", "💗"]);

  if (index < SITE_CONFIG.treasureQuestions.length - 1) {
    state.treasureActiveIndex = index + 1;
  }

  renderTreasureHunt();
  renderTreasureChest();

  if (allTreasureQuestionsCompleted()) {
    showTreasureCompletion();
    createBurst(window.innerWidth / 2, window.innerHeight / 2, ["♥", "✨", "💖"]);
    if (!state.prefersReducedMotion) {
      window.setTimeout(() => els.treasureChestPassword.focus({ preventScroll: false }), 260);
    }
  }
}

// =============================================================
// MEMORIES CLOTHESLINE
// =============================================================
function renderMemoryWall() {
  const memories = SITE_CONFIG.memories;
  const perLine = 5;
  const rows = [];

  for (let i = 0; i < memories.length; i += perLine) {
    rows.push(memories.slice(i, i + perLine));
  }

  els.memoryWall.innerHTML = rows.map((row, rowIndex) => {
    const slots = row.map((memory, offset) => {
      const index = rowIndex * perLine + offset;
      const placed = index < state.placedMemories;
      return `
        <div class="memory-slot" data-memory-index="${index}">
          <span class="clip" aria-hidden="true"></span>
          ${placed ? createPolaroidHTML(memory, index, true) : `<div class="empty-polaroid-placeholder" aria-hidden="true"></div>`}
        </div>
      `;
    }).join("");

    return `<div class="clothesline-row">${slots}</div>`;
  }).join("");

  updateMemoryProgress();
  wireImageFallbacks(els.memoryWall);
}

function createPolaroidHTML(memory, index, asButton) {
  const tag = asButton ? "button" : "div";
  const attrs = asButton
    ? `type="button" class="memory-polaroid" data-preview-index="${index}" aria-label="Open memory ${index + 1}"`
    : `class="polaroid-inner"`;
  const tilt = ((index % 6) - 2.5) * 1.4;

  return `
    <${tag} ${attrs} style="--tilt: ${tilt}deg;">
      <div class="photo-img-wrap image-frame">
        <img src="${escapeAttr(memory.image)}" alt="Memory ${index + 1}" loading="lazy" />
        <div class="image-fallback">Add memory photo<br>${escapeHTML(memory.image)}</div>
      </div>
      <span class="polaroid-caption">${escapeHTML(memory.caption)}</span>
    </${tag}>
  `;
}

function addNextMemory() {
  const memories = SITE_CONFIG.memories;
  if (state.placedMemories >= memories.length) return;

  const index = state.placedMemories;
  const targetSlot = els.memoryWall.querySelector(`[data-memory-index="${index}"]`);
  const memory = memories[index];

  if (!targetSlot || state.prefersReducedMotion) {
    state.placedMemories += 1;
    finishMemoryPlacement();
    return;
  }

  animateMemoryToSlot(memory, index, targetSlot, () => {
    state.placedMemories += 1;
    finishMemoryPlacement();
  });
}

function animateMemoryToSlot(memory, index, targetSlot, onDone) {
  const sourceRect = els.polaroidStack.getBoundingClientRect();
  const targetRect = targetSlot.getBoundingClientRect();
  const startX = sourceRect.left + sourceRect.width / 2 - 80;
  const startY = sourceRect.top + sourceRect.height / 2 - 94;
  const endX = targetRect.left + targetRect.width / 2 - 80;
  const endY = targetRect.top + 42;

  const flying = document.createElement("div");
  flying.className = "flying-polaroid";
  flying.style.left = `${startX}px`;
  flying.style.top = `${startY}px`;
  flying.style.width = "160px";
  flying.innerHTML = createPolaroidHTML(memory, index, false);
  document.body.appendChild(flying);
  wireImageFallbacks(flying);

  const animation = flying.animate([
    { transform: "translate(0, 0) rotate(-9deg) scale(0.82)", opacity: 0.45 },
    { transform: `translate(${(endX - startX) * 0.55}px, ${(endY - startY) * 0.35 - 80}px) rotate(7deg) scale(1.06)`, opacity: 1 },
    { transform: `translate(${endX - startX}px, ${endY - startY}px) rotate(0deg) scale(1)`, opacity: 1 }
  ], {
    duration: 900,
    easing: "cubic-bezier(0.18, 0.86, 0.22, 1)",
    fill: "forwards"
  });

  animation.onfinish = () => {
    flying.remove();
    onDone();
  };
}

function finishMemoryPlacement() {
  renderMemoryWall();
  createBurstFromElement(els.polaroidStack, ["\u2665", "\u2728", "\u{1F4F8}"]);

  if (state.placedMemories >= SITE_CONFIG.memories.length) {
    els.memoryComplete.hidden = false;
    els.polaroidStack.classList.add("done");
    els.polaroidStack.setAttribute("aria-label", "All memories have been placed");
  }
}

function updateMemoryProgress() {
  els.memoryProgress.textContent = `Memory ${state.placedMemories} of ${SITE_CONFIG.memories.length}`;
}

function openMemoryPreview(index) {
  const memory = SITE_CONFIG.memories[index];
  if (!memory) return;

  openModal({
    title: `Memory ${index + 1}`,
    bodyHTML: `
      <div class="preview-image-wrap image-frame">
        <img src="${escapeAttr(memory.image)}" alt="Memory ${index + 1} preview" />
        <div class="image-fallback">Add memory photo<br>${escapeHTML(memory.image)}</div>
      </div>
      <p class="preview-caption">${escapeHTML(memory.caption)}</p>
    `,
    afterOpen: () => wireImageFallbacks(els.modalBody)
  });
}

// =============================================================
// OPEN WHEN LETTERS
// =============================================================
function renderOpenWhenLetters() {
  els.openWhenGrid.innerHTML = SITE_CONFIG.openWhenLetters.map((item, index) => `
    <button class="open-envelope" type="button" data-open-when-index="${index}" aria-label="Open when ${escapeAttr(item.title)}">
      <span class="mini-envelope-art" aria-hidden="true"><span class="mini-heart">&hearts;</span></span>
      <span class="open-label">Open when you are ${escapeHTML(item.title)}</span>
    </button>
  `).join("");
}

function openWhenLetter(index) {
  const item = SITE_CONFIG.openWhenLetters[index];
  if (!item) return;
  createBurst(window.innerWidth / 2, window.innerHeight * 0.55, ["\u2665", "\u2728", "\u{1F48C}"]);
  openModal({
    title: `Open when you are ${item.title}`,
    bodyHTML: `<div class="letter-text">${formatText(item.letter)}</div>`
  });
}

// =============================================================
// LOVE REASON GENERATOR
// =============================================================
function generateLoveReason() {
  const reasons = SITE_CONFIG.loveReasons;
  if (!reasons.length) return;

  let index = Math.floor(Math.random() * reasons.length);
  if (reasons.length > 1) {
    while (index === state.lastLoveReasonIndex) {
      index = Math.floor(Math.random() * reasons.length);
    }
  }
  state.lastLoveReasonIndex = index;

  const sentence = `I love you for ${reasons[index]}`;
  typeText(els.loveOutput, sentence);
  createBurstFromElement(els.loveButton, ["\u2665", "\u2728", "\u{1F497}"]);
}

function typeText(element, text) {
  window.clearInterval(state.typingTimer);
  element.textContent = "";
  element.classList.add("typing");

  if (state.prefersReducedMotion) {
    element.textContent = text;
    element.classList.remove("typing");
    return;
  }

  let index = 0;
  state.typingTimer = window.setInterval(() => {
    element.textContent += text.charAt(index);
    index += 1;
    if (index >= text.length) {
      window.clearInterval(state.typingTimer);
      element.classList.remove("typing");
    }
  }, 28);
}

// =============================================================
// FINAL VIDEO
// =============================================================
function setupFinalVideo() {
  const source = document.createElement("source");
  source.src = SITE_CONFIG.finalVideo;
  source.type = "video/mp4";
  els.finalVideo.appendChild(source);

  els.finalVideo.addEventListener("play", () => {
    els.videoPlayCard.classList.add("is-hidden");
  });

  els.finalVideo.addEventListener("pause", () => {
    if (!els.finalVideo.ended) {
      els.videoPlayCard.classList.remove("is-hidden");
    }
  });

  els.finalVideo.addEventListener("error", () => {
    els.videoFallback.hidden = false;
    els.videoPlayCard.querySelector("span:last-child").textContent = "Video placeholder";
  });
}

function playFinalVideo() {
  const playPromise = els.finalVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      els.videoFallback.hidden = false;
      openModal({
        title: "Video note",
        bodyHTML: `<p class="letter-text">Your browser could not play the file yet. Make sure the video exists at:<br>${escapeHTML(SITE_CONFIG.finalVideo)}</p>`
      });
    });
  }
}

// =============================================================
// SHARED MODAL
// =============================================================
function openModal({ title, bodyHTML, afterOpen }) {
  els.modalTitle.textContent = title;
  els.modalBody.innerHTML = bodyHTML;
  els.modalBackdrop.hidden = false;
  els.modalClose.focus();
  if (typeof afterOpen === "function") afterOpen();
}

function closeModal() {
  els.modalBackdrop.hidden = true;
  els.modalTitle.textContent = "";
  els.modalBody.innerHTML = "";
}

// =============================================================
// EVENT LISTENERS
// =============================================================
function setupEventListeners() {
  els.passwordForm.addEventListener("submit", handlePasswordSubmit);
  els.birthdayEnvelope.addEventListener("click", openBirthdayLetter);
  els.treasureChestForm.addEventListener("submit", handleTreasureChestSubmit);
  els.treasureChest.addEventListener("click", handleTreasureChestClick);
  els.polaroidStack.addEventListener("click", addNextMemory);
  els.loveButton.addEventListener("click", generateLoveReason);
  els.videoPlayCard.addEventListener("click", playFinalVideo);
  els.modalClose.addEventListener("click", closeModal);

  els.modalBackdrop.addEventListener("click", event => {
    if (event.target === els.modalBackdrop) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !els.modalBackdrop.hidden) closeModal();
  });

  els.treasureBoard.addEventListener("click", event => {
    const button = event.target.closest(".check-answer");
    if (!button) return;
    checkTreasureAnswer(Number(button.dataset.index), button);
  });

  els.treasureBoard.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    const input = event.target.closest("input[id^='treasureInput']");
    if (!input) return;
    event.preventDefault();
    const index = Number(input.id.replace("treasureInput", ""));
    const button = els.treasureBoard.querySelector(`.check-answer[data-index="${index}"]`);
    checkTreasureAnswer(index, button || input);
  });

  els.memoryWall.addEventListener("click", event => {
    const button = event.target.closest(".memory-polaroid");
    if (!button) return;
    openMemoryPreview(Number(button.dataset.previewIndex));
  });

  els.openWhenGrid.addEventListener("click", event => {
    const button = event.target.closest(".open-envelope");
    if (!button) return;
    openWhenLetter(Number(button.dataset.openWhenIndex));
  });
}

// =============================================================
// HELPERS
// =============================================================
function normalizeAnswer(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function normalizeCode(value) {
  return String(value || "").replace(/\s+/g, "").toLowerCase();
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHTML(value).replace(/`/g, "&#096;");
}

function formatText(value) {
  return escapeHTML(value).replace(/\n/g, "<br>");
}

function wireImageFallbacks(root = document) {
  root.querySelectorAll("img").forEach(img => {
    if (img.dataset.fallbackWired === "true") return;
    img.dataset.fallbackWired = "true";
    img.addEventListener("error", () => {
      const frame = img.closest(".image-frame");
      if (frame) frame.classList.add("is-missing");
    }, { once: true });
  });
}

function createBurstFromElement(element, symbols) {
  if (!element) return;
  const rect = element.getBoundingClientRect();
  createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, symbols);
}

function createBurst(x, y, symbols = ["\u2665", "\u2728"]) {
  const burst = document.createElement("div");
  burst.className = "tiny-burst";
  document.body.appendChild(burst);

  const count = state.prefersReducedMotion ? 4 : 14;
  for (let i = 0; i < count; i += 1) {
    const span = document.createElement("span");
    span.textContent = symbols[i % symbols.length];
    const angle = (Math.PI * 2 * i) / count;
    const distance = 45 + Math.random() * 70;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    span.style.setProperty("--x", `${x}px`);
    span.style.setProperty("--y", `${y}px`);
    span.style.setProperty("--dx", `${dx}px`);
    span.style.setProperty("--dy", `${dy}px`);
    span.style.setProperty("--size", `${16 + Math.random() * 16}px`);
    burst.appendChild(span);
  }

  window.setTimeout(() => burst.remove(), 1000);
}
