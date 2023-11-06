const arrays = [
  "#1b75bb",
  "rgb(246, 165, 41)",
  "rgb(81, 182, 185)",
  "rgb(244, 115, 14)",
  "rgb(57, 167, 100)",
];

const arrays2 = [
  "#c9e8ff",
  "rgb(255, 225, 181)",
  "rgb(188, 253, 255)",
  "rgb(255, 214, 183)",
  "rgb(203, 255, 223)",
];

function rand() {
  const num = Math.floor(Math.random() * 4);
  return num;
}

function create(branch, Row) {
  const num = rand();
  console.log(num);
  const Btn = document.createElement("a");
  Btn.textContent = "Apply Now";
  Btn.className = "button";
  Btn.style.backgroundColor = arrays2[num];
  Btn.style.borderColor = arrays[num];
  Btn.style.color = arrays[num];

  const Fee = document.createElement("p");
  Fee.textContent = "Fee starting at $999";

  const Card = document.createElement("div");
  Card.className = "cards";
  const cardHeader = document.createElement("h4");
  cardHeader.className = "card-header";
  cardHeader.style.color = arrays[num];

  cardHeader.textContent = branch.short;
  const cardDesc = document.createElement("p");
  cardDesc.className = "card-desc";
  cardDesc.textContent = branch.name;
  Card.appendChild(cardHeader);
  Card.appendChild(cardDesc);
  Card.appendChild(Btn);
  Card.appendChild(Fee);
  Row.appendChild(Card);
}

async function fn() {
  try {
    const req = await fetch("https://api.msigma.in/btech/v2/branches");
    let data = await req.json();
    console.log(data);

    const mainDiv = document.querySelector("body");
    let i = 1;

    for (let i = 0; i < data.branches.length; i++) {
      let branch = data.branches[i];

      const Row = document.createElement("div");
      Row.className = "row";
      create(branch, Row);

      if (i < data.branches.length) {
        i += 1;
        branch = data.branches[i];
        create(branch, Row);
      }

      mainDiv.appendChild(Row);
    }
  } catch (error) {
    console.log(error);
  }
}

fn();
