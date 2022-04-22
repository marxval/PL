const init = () => {
  const input = document.getElementById("input-language");

  if (typeof input === "object")
    input.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const newLanguage = event.currentTarget.value;
        if (typeof newLanguage === "string" && newLanguage.length > 0) {
          addLanguageToList({ lang: newLanguage });
          input.value = "";
        } else {
          alert("Enter a programming language in the input field");
        }
      }
    });
};

const addLanguageToList = ({ lang }) => {
  const ul = document.getElementById("pl-list");
  const li = document.createElement("li");
  const id = `li-${ul.childElementCount + 1}`;

  li.appendChild(document.createTextNode(`${lang}`));
  li.setAttribute("id", id);
  ul.appendChild(li);
};

init();
