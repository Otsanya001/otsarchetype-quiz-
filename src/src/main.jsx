import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import { useState } from "react";

const QUESTIONS = [
  {
    id: 1,
    text: "Your friend group is planning a spontaneous trip this weekend. Your first reaction?",
    options: [
      { text: "I need the full itinerary before I can commit. What's the budget, the hotel rating, the plan B?", scores: { A: 3, B: 0, C: 1, D: 0 } },
      { text: "YES. I'm already packing. Let's go!", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "Okay but let me sort out the logistics for everyone first, then I'll pack.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "I'll come if I feel like it. Don't wait on me.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 2,
    text: "Someone at work gives you vague instructions and expects you to figure it out. You:",
    options: [
      { text: "Send a detailed list of clarifying questions before touching it.", scores: { A: 3, B: 0, C: 1, D: 0 } },
      { text: "Try it, get frustrated, and say something about it.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "Figure it out quietly and do it properly anyway.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "Do it your way and let the results speak.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 3,
    text: "A close friend is venting to you about a problem they've had for months. You:",
    options: [
      { text: "Listen fully, then give them structured, honest advice — even the hard parts.", scores: { A: 3, B: 0, C: 1, D: 1 } },
      { text: "Feel everything with them in the moment and react emotionally.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "Already knew something was wrong and had quietly been preparing to help.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "Give them your real, unfiltered take — whether they're ready for it or not.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 4,
    text: "How do people usually describe you to others?",
    options: [
      { text: "\"They ask a lot of questions but honestly they're always right.\"", scores: { A: 3, B: 0, C: 0, D: 0 } },
      { text: "\"They're a lot sometimes but honestly so fun to be around.\"", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "\"They hold everything together. No idea what we'd do without them.\"", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "\"They don't play games. Very real. Very respected.\"", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 5,
    text: "When someone crosses a line with you, you typically:",
    options: [
      { text: "Stay quiet, process deeply, then give one clear, final response.", scores: { A: 3, B: 0, C: 0, D: 1 } },
      { text: "React immediately and honestly — then move on fairly quickly.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "Absorb it for a long time — but once you've had enough, you shut the door permanently.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "Address it directly, immediately, and without drama.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 6,
    text: "Your idea of the perfect Friday night:",
    options: [
      { text: "A meaningful conversation or a book. Real rest.", scores: { A: 3, B: 0, C: 0, D: 1 } },
      { text: "Out. Music, friends, spontaneous energy.", scores: { A: 0, B: 3, C: 1, D: 0 } },
      { text: "Home, but hosting — making sure everyone has what they need.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "Complete switch-off. Phone down. Nobody knows where I am.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 7,
    text: "Be honest — what's your relationship with asking for help?",
    options: [
      { text: "I ask when necessary, but I need to understand the full picture first.", scores: { A: 3, B: 0, C: 0, D: 0 } },
      { text: "I ask pretty easily, especially from people I trust.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "I'm the one people ask. Asking feels uncomfortable.", scores: { A: 0, B: 0, C: 3, D: 1 } },
      { text: "Almost never. I'd rather figure it out alone.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 8,
    text: "You walk into a room full of strangers. What actually happens?",
    options: [
      { text: "I observe quietly, assess who's worth talking to, and approach selectively.", scores: { A: 3, B: 0, C: 0, D: 1 } },
      { text: "I find someone and start talking. Energy does the rest.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "I check if anyone looks lost or needs anything first.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "I'm calm. Unbothered. People find their way to me.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 9,
    text: "What's your actual role in your friend group or family?",
    options: [
      { text: "The wise one — they come to me when things are serious.", scores: { A: 3, B: 0, C: 0, D: 0 } },
      { text: "The fun one — things feel flat when I'm not there.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "The one who runs everything. The glue.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "The respected one — people don't mess with me but they also trust me.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 10,
    text: "How do you feel about rules and systems?",
    options: [
      { text: "I like understanding why the rule exists before I follow it.", scores: { A: 3, B: 0, C: 1, D: 0 } },
      { text: "Rules feel like ceilings. I prefer to feel my way through things.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "I follow them and often become the person who enforces them for others.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "I respect systems that make sense. The rest I quietly ignore.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 11,
    text: "Your personal style is best described as:",
    options: [
      { text: "Clean, intellectual — function with quiet intention.", scores: { A: 3, B: 0, C: 0, D: 1 } },
      { text: "Bold, expressive — my outfit reflects my mood.", scores: { A: 0, B: 3, C: 1, D: 0 } },
      { text: "Polished and put-together — shopping is actually therapy.", scores: { A: 0, B: 0, C: 3, D: 1 } },
      { text: "Effortless but sharp — I look like a star without trying.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 12,
    text: "When you make a decision, you typically:",
    options: [
      { text: "Research deeply, ask every question, then commit completely.", scores: { A: 3, B: 0, C: 0, D: 0 } },
      { text: "Go with what feels right in the moment.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "Think about how it affects others first, then myself.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "Trust my gut, execute fast, and adjust if needed.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 13,
    text: "What actually stresses you out most?",
    options: [
      { text: "Incomplete information. Having to act without fully understanding something.", scores: { A: 3, B: 0, C: 0, D: 0 } },
      { text: "Being misunderstood or dismissed when I'm clearly right.", scores: { A: 0, B: 3, C: 0, D: 1 } },
      { text: "Everyone needing me at once while I have nothing left to give.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "People wasting my time or invading my space.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 14,
    text: "Your approach to loyalty is:",
    options: [
      { text: "I'm loyal to principles first, people second.", scores: { A: 3, B: 0, C: 0, D: 0 } },
      { text: "Ride or die — fully in, until you're not.", scores: { A: 0, B: 3, C: 1, D: 1 } },
      { text: "I show up. Consistently. Without being asked.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "Once you have it, it's total. Lose it and it's gone forever.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 15,
    text: "What do you think people underestimate about you?",
    options: [
      { text: "How firm I am. People think quiet means flexible. It doesn't.", scores: { A: 3, B: 0, C: 0, D: 1 } },
      { text: "How deeply I feel things. The reactions look surface level. They're not.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "How much I carry. And how close I am to stopping.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "How much I actually care — underneath all the independence.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 16,
    text: "Pick the sentence that sounds most like something you'd actually say:",
    options: [
      { text: "\"Before I answer, I have a few questions.\"", scores: { A: 3, B: 0, C: 0, D: 0 } },
      { text: "\"I said what I said.\"", scores: { A: 0, B: 3, C: 0, D: 1 } },
      { text: "\"Don't worry, I'll handle it.\"", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "\"I don't need an explanation. Just don't do it again.\"", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 17,
    text: "Your relationship to spirituality or deep belief systems:",
    options: [
      { text: "Central. It's the foundation everything else is built on.", scores: { A: 3, B: 0, C: 1, D: 0 } },
      { text: "I believe intensely in the moment — then question everything later.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "I hold it quietly. It guides how I care for others.", scores: { A: 1, B: 0, C: 3, D: 0 } },
      { text: "Personal. Private. Not really up for discussion.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 18,
    text: "When you're burned out, what does that actually look like?",
    options: [
      { text: "I go silent and disappear into research mode or prayer.", scores: { A: 3, B: 0, C: 0, D: 1 } },
      { text: "I get snappy and react to things I'd normally ignore.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "I keep going until I physically can't anymore — then I crash.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "I disappear completely. No explanations given.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 19,
    text: "You're most likely to be found:",
    options: [
      { text: "Mentoring someone, reading, or in a deep one-on-one conversation.", scores: { A: 3, B: 0, C: 0, D: 0 } },
      { text: "In the middle of the energy — creating it or riding it.", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "Quietly solving a problem nobody asked me to solve.", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "Working alone, at full speed, getting things done.", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 20,
    text: "One word your closest people would use to describe your energy:",
    options: [
      { text: "Grounding", scores: { A: 3, B: 0, C: 1, D: 0 } },
      { text: "Electric", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "Reliable", scores: { A: 0, B: 0, C: 3, D: 1 } },
      { text: "Magnetic", scores: { A: 0, B: 1, C: 0, D: 3 } },
    ],
  },
];

const ARCHETYPES = {
  A: {
    name: "Inquisitive Sage",
    emoji: "🔮",
    months: "March & December",
    colors: { primary: "#2D5016", secondary: "#3B2F7E", bg: "#F0F4EC", accent: "#2D5016" },
    tagline: "Quiet on the surface. Unshakeable underneath.",
    description: "You don't speak first — you observe, process, and arrive. When you finally give your verdict, it lands like fact. People may call your questions excessive, but you already know what they don't: half the problems in the world exist because no one asked enough of the right ones. Your wisdom isn't loud, but it is the kind people come back for years later.",
    strengths: ["Rigidly principled — impossible to manipulate", "Natural mentor energy people gravitate toward", "Deep ethical and spiritual clarity", "The person who was right all along"],
    watchOut: "Your thoroughness can frustrate people who want speed. Let people in on your process — not just your conclusions.",
    careers: "Research Academics · Software Engineers · Theological Advisors · Systems Architects · Corporate Mentors",
  },
  B: {
    name: "Vivid Spark",
    emoji: "⚡",
    months: "April & June",
    colors: { primary: "#C0392B", secondary: "#E67E00", bg: "#FFF5F0", accent: "#C0392B" },
    tagline: "Magnetic. Misread. Magnificent.",
    description: "You feel everything at full volume and make no apologies for it. People call it dramatic — until they're in the room with you and can't look away. Your emotional intensity is not a flaw; it's your signal system. The difference is you actually respond to what you feel instead of burying it. The anger passes quickly. The charm is permanent.",
    strengths: ["Irresistibly likable across every room", "Passion that can move people to action", "Makes friends effortlessly, everywhere", "Brings joy that others genuinely can't replicate"],
    watchOut: "The 'black sheep' energy can become a self-fulfilling story. You're not difficult — you're direct. There's a difference.",
    careers: "Creative Directors · PR Specialists · Performers · Talent Agents · Dynamic Entrepreneurs",
  },
  C: {
    name: "Luxe Anchor",
    emoji: "👑",
    months: "July & September",
    colors: { primary: "#6B1A2B", secondary: "#C47A8A", bg: "#FDF0F3", accent: "#6B1A2B" },
    tagline: "Holds everything together. Looking good doing it.",
    description: "You are the structural backbone of every room you walk into — and somehow also the best dressed. You give quietly, fix problems before they're announced, and carry more than anyone realises. The word 'doormat' only ever applied to the version of you that hadn't woken up yet. Once you have? The volcano is real, and the door closes permanently. You are not endlessly patient. You are endlessly capable — which is different.",
    strengths: ["Universally liked — genuinely, not performatively", "Resourceful and competent under any pressure", "Aesthetic excellence and serious shopping instincts", "The person everyone calls when things actually matter"],
    watchOut: "Stop absorbing other people's chaos as your personal responsibility. You are allowed to rest before you hit zero.",
    careers: "Project Managers · HR Directors · Operations Managers · Healthcare Administrators · Non-Profit Leaders",
  },
  D: {
    name: "Low-Key Sovereign",
    emoji: "🖤",
    months: "January & November",
    colors: { primary: "#1A1A2E", secondary: "#8B1A6B", bg: "#F5F0F8", accent: "#1A1A2E" },
    tagline: "Respected without trying. Private by design.",
    description: "You didn't ask to be the most trusted person in the room — you just are. Your independence isn't a personality trait; it's something that was built into you young. You got the job done early, figured things out alone, and stopped waiting for permission. You love deeply and quietly, in ways only a few people ever get to see. The rest of the world gets the curated version: sharp, effortless, unbothered.",
    strengths: ["Respected at work without needing to demand it", "Loyal to their core for people who earn it", "Executes without excuses or explanations", "Zero tolerance for nonsense — and that saves them constantly"],
    watchOut: "Your self-sufficiency is a superpower, but it can isolate you. Letting people help is not a weakness. Let them.",
    careers: "Independent Marketing Strategists · Solopreneurs · Independent Consultants · Crisis Managers · Investigative Journalists",
  },
};

const HYBRIDS = {
  AD: { name: "The Maverick Mentor", desc: "Deep wisdom meets zero-tolerance boundaries. You'll ask fifty questions, deliver a blunt truth, then disappear." },
  BD: { name: "The Controlled Storm", desc: "Magnetic charm with a steel wall behind it. Brilliant at reading people — impossible to manipulate." },
  AC: { name: "The Martyr-Savant", desc: "All the answers, all the care. You fix everyone's world. Just don't forget to fix yours too." },
  CD: { name: "The Heavy Crown", desc: "Regal, responsible, and completely immovable. You dominate every room and dress like you know it." },
  AB: { name: "The Electric Philosopher", desc: "Intense curiosity meets explosive passion. You ask the deep questions and feel the answers in your whole body." },
  BC: { name: "The Generous Fire", desc: "The warmth of an Anchor with the spark of a Vivid. You give generously and love loudly — until you don't." },
};

function getHybridKey(a, b) {
  const sorted = [a, b].sort().join("");
  return HYBRIDS[sorted] ? sorted : null;
}

export default function App() {
  const [screen, setScreen] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({ A: 0, B: 0, C: 0, D: 0 });
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [hybrid, setHybrid] = useState(null);
  const [animating, setAnimating] = useState(false);

  const progress = ((current) / QUESTIONS.length) * 100;

  function handleSelect(option) {
    if (animating) return;
    setSelected(option);
  }

  function handleNext() {
    if (!selected || animating) return;
    setAnimating(true);

    const newScores = { ...scores };
    Object.entries(selected.scores).forEach(([k, v]) => {
      newScores[k] = (newScores[k] || 0) + v;
    });
    setScores(newScores);

    setTimeout(() => {
      if (current + 1 >= QUESTIONS.length) {
        const sorted = Object.entries(newScores).sort((a, b) => b[1] - a[1]);
        const top = sorted[0][0];
        const second = sorted[1][0];
        const diff = sorted[0][1] - sorted[1][1];
        const hybridKey = diff <= 4 ? getHybridKey(top, second) : null;
        setResult(top);
        setHybrid(hybridKey ? { key: hybridKey, second } : null);
        setScreen("result");
      } else {
        setCurrent(c => c + 1);
        setSelected(null);
      }
      setAnimating(false);
    }, 300);
  }

  function restart() {
    setCurrent(0);
    setScores({ A: 0, B: 0, C: 0, D: 0 });
    setSelected(null);
    setResult(null);
    setHybrid(null);
    setScreen("intro");
  }

  const q = QUESTIONS[current];
  const arch = result ? ARCHETYPES[result] : null;

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body { 
      font-family: 'Inter', sans-serif;
      background: #0F0F1A;
      min-height: 100vh;
      color: #1A1A2E;
    }

    .wrap {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: radial-gradient(ellipse at 20% 50%, #1a0a2e 0%, #0F0F1A 60%);
    }

    .card {
      background: #FAFAF8;
      border-radius: 24px;
      max-width: 640px;
      width: 100%;
      overflow: hidden;
      box-shadow: 0 40px 80px rgba(0,0,0,0.5);
    }

    /* INTRO */
    .intro-header {
      background: linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 50%, #1A1A2E 100%);
      padding: 56px 40px 48px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .intro-header::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle at 60% 40%, rgba(139,26,107,0.15) 0%, transparent 60%);
    }

    .star-grid {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
      background-size: 32px 32px;
    }

    .intro-badge {
      display: inline-block;
      background: rgba(139,26,107,0.3);
      border: 1px solid rgba(139,26,107,0.5);
      color: #E8A8D8;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      padding: 6px 16px;
      border-radius: 20px;
      margin-bottom: 20px;
      position: relative;
    }

    .intro-title {
      font-family: 'Playfair Display', serif;
      font-size: 42px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.1;
      margin-bottom: 8px;
      position: relative;
    }

    .intro-sub {
      font-family: 'Playfair Display', serif;
      font-size: 16px;
      font-style: italic;
      color: rgba(255,255,255,0.5);
      margin-bottom: 0;
      position: relative;
    }

    .intro-body {
      padding: 36px 40px 40px;
    }

    .intro-desc {
      font-size: 15px;
      line-height: 1.7;
      color: #444;
      margin-bottom: 28px;
    }

    .archetype-preview {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 32px;
    }

    .preview-chip {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      background: #F4F0FB;
      border-radius: 12px;
      border: 1px solid #E8E0F5;
    }

    .preview-emoji { font-size: 20px; }

    .preview-info { }
    .preview-name { font-size: 12px; font-weight: 600; color: #1A1A2E; }
    .preview-month { font-size: 11px; color: #888; }

    .btn-primary {
      width: 100%;
      padding: 18px;
      background: #1A1A2E;
      color: white;
      border: none;
      border-radius: 14px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      letter-spacing: 0.3px;
      transition: all 0.2s;
    }
    .btn-primary:hover { background: #2D1B4E; transform: translateY(-1px); }

    /* QUIZ */
    .quiz-top {
      background: #1A1A2E;
      padding: 24px 32px 20px;
    }

    .quiz-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .quiz-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.4);
    }

    .quiz-counter {
      font-size: 13px;
      color: rgba(255,255,255,0.6);
    }

    .progress-bar {
      height: 3px;
      background: rgba(255,255,255,0.1);
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #8B1A6B, #C47A8A);
      border-radius: 2px;
      transition: width 0.4s ease;
    }

    .quiz-body {
      padding: 36px 32px 32px;
    }

    .question-text {
      font-family: 'Playfair Display', serif;
      font-size: 22px;
      font-weight: 400;
      line-height: 1.45;
      color: #1A1A2E;
      margin-bottom: 28px;
    }

    .options {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 28px;
    }

    .option {
      padding: 16px 20px;
      border: 2px solid #E8E4F0;
      border-radius: 14px;
      cursor: pointer;
      font-size: 14px;
      line-height: 1.5;
      color: #333;
      background: white;
      transition: all 0.18s;
      text-align: left;
    }

    .option:hover {
      border-color: #8B1A6B;
      background: #FDF5FB;
      color: #1A1A2E;
    }

    .option.selected {
      border-color: #1A1A2E;
      background: #1A1A2E;
      color: white;
    }

    .btn-next {
      width: 100%;
      padding: 16px;
      background: #1A1A2E;
      color: white;
      border: none;
      border-radius: 14px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      opacity: 1;
    }

    .btn-next:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .btn-next:not(:disabled):hover {
      background: #2D1B4E;
    }

    /* RESULT */
    .result-header {
      padding: 48px 36px 36px;
      text-align: center;
    }

    .result-emoji {
      font-size: 56px;
      margin-bottom: 16px;
      display: block;
    }

    .result-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #999;
      margin-bottom: 8px;
    }

    .result-name {
      font-family: 'Playfair Display', serif;
      font-size: 36px;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 8px;
    }

    .result-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 16px;
      color: #666;
      margin-bottom: 0;
    }

    .result-months {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 16px;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    .result-body {
      padding: 0 36px 36px;
    }

    .result-desc {
      font-size: 15px;
      line-height: 1.75;
      color: #444;
      margin-bottom: 28px;
    }

    .section-title {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #999;
      margin-bottom: 14px;
    }

    .strengths-list {
      list-style: none;
      margin-bottom: 28px;
    }

    .strengths-list li {
      font-size: 14px;
      color: #333;
      padding: 10px 0;
      border-bottom: 1px solid #F0EEF8;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .strengths-list li::before {
      content: '✦';
      font-size: 10px;
      flex-shrink: 0;
    }

    .watch-out {
      padding: 16px 20px;
      border-radius: 12px;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 28px;
      border-left: 3px solid;
    }

    .careers-text {
      font-size: 13px;
      color: #666;
      line-height: 1.7;
      margin-bottom: 28px;
    }

    .hybrid-box {
      border-radius: 14px;
      padding: 20px;
      margin-bottom: 28px;
      border: 1px solid rgba(0,0,0,0.08);
    }

    .hybrid-label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 6px;
      opacity: 0.6;
    }

    .hybrid-name {
      font-family: 'Playfair Display', serif;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .hybrid-desc {
      font-size: 14px;
      line-height: 1.6;
      opacity: 0.8;
    }

    .btn-restart {
      width: 100%;
      padding: 16px;
      border: 2px solid #1A1A2E;
      background: transparent;
      color: #1A1A2E;
      border-radius: 14px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-restart:hover {
      background: #1A1A2E;
      color: white;
    }

    .divider {
      height: 1px;
      background: #F0EEF8;
      margin: 0 0 28px;
    }
  `;

  if (screen === "intro") {
    return (
      <>
        <style>{styles}</style>
        <div className="wrap">
          <div className="card">
            <div className="intro-header">
              <div className="star-grid" />
              <div className="intro-badge">OtsArchetype Framework V2</div>
              <div className="intro-title">Which Archetype<br/>Are You?</div>
              <div className="intro-sub">Pattern recognition meets personality science</div>
            </div>
            <div className="intro-body">
              <p className="intro-desc">
                20 questions. No filler. This framework was built from years of observing real people — not textbooks. 
                Find out which of the four core archetypes (or hybrid combination) matches your energy.
              </p>
              <div className="archetype-preview">
                {Object.entries(ARCHETYPES).map(([k, a]) => (
                  <div className="preview-chip" key={k}>
                    <span className="preview-emoji">{a.emoji}</span>
                    <div className="preview-info">
                      <div className="preview-name">{a.name}</div>
                      <div className="preview-month">{a.months}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-primary" onClick={() => setScreen("quiz")}>
                Start the Test →
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (screen === "quiz") {
    return (
      <>
        <style>{styles}</style>
        <div className="wrap">
          <div className="card">
            <div className="quiz-top">
              <div className="quiz-meta">
                <span className="quiz-label">OtsArchetype Quiz</span>
                <span className="quiz-counter">{current + 1} / {QUESTIONS.length}</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <div className="quiz-body">
              <p className="question-text">{q.text}</p>
              <div className="options">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    className={`option${selected === opt ? " selected" : ""}`}
                    onClick={() => handleSelect(opt)}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
              <button
                className="btn-next"
                onClick={handleNext}
                disabled={!selected}
              >
                {current + 1 === QUESTIONS.length ? "See My Result" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (screen === "result" && arch) {
    const c = arch.colors;
    return (
      <>
        <style>{styles}</style>
        <div className="wrap">
          <div className="card">
            <div className="result-header" style={{ background: `linear-gradient(160deg, ${c.primary}12, ${c.secondary}18)`, borderBottom: `3px solid ${c.primary}` }}>
              <span className="result-emoji">{arch.emoji}</span>
              <div className="result-label">Your Archetype</div>
              <div className="result-name" style={{ color: c.primary }}>{arch.name}</div>
              <div className="result-tagline">"{arch.tagline}"</div>
              <div className="result-months" style={{ background: `${c.primary}15`, color: c.primary }}>
                📅 {arch.months}
              </div>
            </div>

            <div className="result-body">
              <p className="result-desc">{arch.description}</p>

              <div className="divider" />

              <div className="section-title">What you bring</div>
              <ul className="strengths-list" style={{ '--accent': c.primary }}>
                {arch.strengths.map((s, i) => (
                  <li key={i} style={{ color: '#333' }}>
                    <span style={{ color: c.primary }}>✦</span> {s}
                  </li>
                ))}
              </ul>

              <div className="divider" />

              <div className="section-title">The honest note</div>
              <div className="watch-out" style={{ background: `${c.primary}0A`, borderLeftColor: c.primary, color: '#444' }}>
                {arch.watchOut}
              </div>

              <div className="section-title">Career fits</div>
              <div className="careers-text">{arch.careers}</div>

              {hybrid && HYBRIDS[hybrid.key] && (
                <>
                  <div className="divider" />
                  <div className="section-title">Your hybrid dimension</div>
                  <div className="hybrid-box" style={{ background: `${c.secondary}10`, borderColor: `${c.secondary}30`, color: c.primary }}>
                    <div className="hybrid-label">Dual Archetype</div>
                    <div className="hybrid-name">{HYBRIDS[hybrid.key].name}</div>
                    <div className="hybrid-desc" style={{ color: '#444' }}>{HYBRIDS[hybrid.key].desc}</div>
                  </div>
                </>
              )}

              <button className="btn-restart" onClick={restart}>
                Take it again
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}
