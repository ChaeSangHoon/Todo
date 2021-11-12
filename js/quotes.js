const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "산다는것 그것은 치열한 전투이다.",
    author: "로랑로랑",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드",
  },
  {
    quote: "피할수 없으면 즐겨라.",
    author: "로버트 엘리엇",
  },
  {
    quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.",
    author: "엘사 맥스웰",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
    author: "F.스콧 핏제랄드",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    author: "괴테",
  },
  {
    quote: "눈물과 더불어 빵을 먹어 보지 않은 자는 인생의 참다운 맛을 모른다.",
    author: "괴테",
  },
  {
    quote: "돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다.",
    author: "쇼펜하우어",
  },
  {
    quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
    author: "헨리 포드",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
