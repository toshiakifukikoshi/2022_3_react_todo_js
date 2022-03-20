// const addButton = document.getElementById('add-button');

//テキストボックスの値を取得し、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //ulを生成
  const ul = document.createElement("ul");
  ul.className = "list-row";

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //未完了のリストに追加していく
  document.getElementById("incomplete-list").appendChild(ul);
  ul.appendChild(li);
  console.log(ul);

  const button = document.createElement("button");
  button.textContent = "完了";

  li.appendChild(button);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
