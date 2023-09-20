const languages = [
    {
      category: ["software", "game"],
      logo: "page1/page2/CPP.jpg",
      title: "C++",
    },
    {
      category: ["software", "game"],
      logo: "page1/page2/C.jpg",
      title: "C#",
    },
    {
      category: ["web"],
      logo: "page2/HTML.jpg",
      title: "CSS",
    },
    {
      category: ["app"],
      logo: "page1/page2/csharp.jpg",
      title: "Flutter",
    },
    {
      category: ["web"],
      logo: "page1/page2/HTML2.jpg",
      title: "HTML",
    },
    {
      category: ["app", "game", "software"],
      logo: "page1/page2/Java.jpg",
      title: "Java",
    },
    {
      category: ["software", "web"],
      logo: "page1/page2/JavaScript.jpg",
      title: "JavaScript",
    },
    {
      category: ["app"],
      logo: "page1/page2/OTSKAL.jpg",
      title: "Kotlin",
    },
    {
      category: ["app", "web"],
      logo: "page1/page2/MYSQL.jpg",
      title: "MySQL",
    },
    {
      category: ["web"],
      logo: "page1/page2/NODC.jpg",
      title: "NodeJS",
    },
    {
      category: ["app", "web"],
      logo: "page1/page2/PHP.jpg",
      title: "PHP",
    },
    {
      category: ["software", "web"],
      logo: "page1/page2/Pathon.jpg",
      title: "Python",
    },
    {
      category: ["app"],
      logo: "page1/page2/otds.jpg",
      title: "React Native",
    },
    {
      category: ["app"],
      logo: "page1/page2/eee.jpg",
      title: "Swift",
    },
    {
      category: ["game"],
      logo: "page1/page2/tttt.jpg",
      title: "Unity 3D",
    },
    {
      category: ["game"],
      logo: "page1/page2/poi.jpg",
      title: "Unreal",
    },
  ];
  const cardContainer = document.querySelector(".card-container");
  const listBtn = document.querySelector(".list");
  const button = document.querySelectorAll(".item");
  let value = "all";
  displayType(languages);
  button.forEach((btn) => {
    btn.addEventListener("click", function (click) {
      const check = click.currentTarget;
      if (check.classList.contains("active")) {
        return null;
      } else {
        for (let i = 0; i < button.length; i++) {
          button[i].classList.remove("active");
        }
        check.classList.add("active");
      }
      const title = check.textContent;
      const splitTitle = title.split(" ");
      value = splitTitle[0].toLowerCase();
      const filterLanguages = languages.filter((each) => {
        return (
          each.category[0] == value ||
          each.category[1] == value ||
          each.category[2] == value
        );
      });
      if (value == "all") {
        displayType(languages);
      } else {
        displayType(filterLanguages);
      }
    });
  });
  function displayType(condition) {
    const display = condition
      .map(function (item) {
        return `<article class="card">
      <img class="logo" src="${item.logo}" />
      <h3 class="title">${item.title}</h3>
    </article>`;
      })
      .join("");
    cardContainer.innerHTML = display;
  }
  