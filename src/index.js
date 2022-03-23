// const addButton = document.getElementById('add-button');

//テキストボックスの値を取得し、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //DIVを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //Pタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // div.appendChild(li);
  //未完了のリストに追加していく
  document.getElementById("incomplete-list").appendChild(div);

  // 完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    // 未完了エリアからの削除
    deleteFromIncompleteArea(completeButton);

    //  完了ボタンが押されたとき
    //
    // テキスト取得
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    console.log(addTarget);

    const div = document.createElement("div");
    div.className = "list-row";

    const li = document.createElement("li");
    li.innerText = text;

    // 戻るボタンを作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻る";

    // 戻るイベント
    returnButton.addEventListener("click", () => {
      const backTarget = returnButton.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);

      const div = document.createElement("div");
      div.className = "list-row";

      const li = document.createElement("li");
      li.innerText = inputText;

      document.getElementById("incomplete-list").appendChild(div);

      // 完了ボタン作成
      const completeButton = document.createElement("button");
      completeButton.innerText = "完了";

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "削除";

      div.appendChild(li);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);
    });

    // 完了エリアを取得し、div要素をこ要素の末に挿入
    document.getElementById("complete-list").appendChild(div);

    div.appendChild(li);
    div.appendChild(returnButton);
  });
  // 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親のDIVタグを削除する
    deleteFromIncompleteArea(deleteButton);
  });

  // テキストとボタンを挿入
  div.appendChild(li);

  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

// 未完了エリアから消す関数
const deleteFromIncompleteArea = (target) => {
  document.getElementById("incomplete-list").removeChild(target.parentNode);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
