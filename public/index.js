

let role;
let skill;

async function fetchRole() {
    const roleName = localStorage.getItem("selectedRole");
    if (!roleName) {
        console.error("No role selected");
        return;
    }

    const res = await fetch("/api/role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: roleName })
    });

    role = await res.json();
    skill = role;
    loadData();

    function createList(container, items) {
        const ul = document.createElement('ul'); // create <ul>
        items.forEach(item => {
            const li = document.createElement('li'); // create <li>
            li.textContent = item;
            ul.appendChild(li);
        });
        container.appendChild(ul); // append ul to container
    }

    // Create lists for each 3W
    createList(whatBox, skill.what);
    createList(whyBox, skill.why);
    createList(whenBox, skill.when);

    document.querySelector(".skill-title").innerText = role.name;
    document.querySelector(".whatq").innerText = `What is ${skill.skill}?`
    document.querySelector(".whyq").innerText = `Why to learn ${skill.skill}?`
    document.querySelector(".whenq").innerText = `When will I complete ${skill.skill}?`
}

fetchRole();


const main = document.querySelector(".main");
const title = document.querySelector(".skill-title");
const contain = document.querySelector(".grid-container");
const mid = document.querySelectorAll(".middle");
const road = document.querySelector(".road");
const listContainers = document.querySelectorAll(".lists");
const titleName = document.querySelector(".name");
const desc = document.querySelector(".desc");
const titleIcon = document.querySelector(".title-name img");


const whatBox = document.querySelector(".whatBox");
const whyBox = document.querySelector(".whyBox");
const whenBox = document.querySelector(".whenBox");



// Select all the Q elements (What/Why/When)
document.querySelectorAll(".q").forEach(qEl => {
    const img = qEl.querySelector("img");
    const line = qEl.nextElementSibling; // line after each question
    const paragraphs = line.querySelectorAll("p");
    let isOpen = false;

    qEl.addEventListener("click", () => {
        isOpen = !isOpen;

        // Toggle height and rotate image
        line.style.height = isOpen ? "auto" : "2px";
        img.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";

        // Toggle <p> visibility
        ul.querySelectorAll("li").forEach(li => li.classList.toggle("show", !isOpen));
    });
});


async function loadData() {
    try { // Now it's assigned to global `skill`
        console.log("skill:", skill); // Works
        useSkillData(skill);     // You can now use it elsewhere
        addEle();
        generateHTML();
        enableGridToggle();

        setTimeout(() => {
            updateRoadHeight();
        }, 0);
    } catch (error) {
        console.error('Error:', error);
    }
}

function useSkillData(skill) {
    console.log("Accessing from another function:", skill.roadmap[0].levels.length);
    console.log(skill.roadmap[0].levels[1].title);
    title.innerText = skill.title;
    titleName.innerText = skill.name;
    desc.innerText = skill.desc;
    titleIcon.src = skill.iconURL;
}

const addEle = () => {

    for (let i = 1; i <= skill.roadmap[0].levels.length; i++) {
        let ele = document.createElement("div");
        ele.classList.add("grid-line");
        contain.appendChild(ele);
    }

    const gridLines = document.querySelectorAll(".grid-line");

    gridLines.forEach((gridLine) => {
        for (i = 1; i <= 3; i++) {
            let div = document.createElement("div");
            div.classList.add("grid-item");
            if (i === 1) {
                div.classList.add("left");
            } else if (i === 2) {
                div.classList.add("middle");
            } else {
                div.classList.add("right");
            }
            gridLine.appendChild(div);
        }
    })

    const left = document.querySelectorAll(".left");
    const right = document.querySelectorAll(".right");
    gridLines.forEach((gridLine, index) => {
        if (index % 2 === 0) {
            right[index].innerHTML = `<h2>${skill.roadmap[0].levels[index].title}</h2>`;
            right[index].classList.add("yes");
        } else {
            left[index].innerHTML = `<h2>${skill.roadmap[0].levels[index].title}</h2>`;
            left[index].classList.add("yes");
        }
    })

    const mids = document.querySelectorAll(".middle");

    mids.forEach((mid, index) => {
        mid.innerHTML = `<h1 class="click">${skill.roadmap[0].levels[index].level}</h1>`
    })



}
function updateRoadHeight() {
    setTimeout(() => {
        const height = contain.offsetHeight;
        main.style.height = `${height + 70}px`;
        road.style.height = `${height + 70}px`;
        console.log(height);
        console.log("Updated height:", height); // For debugging
    }, 300); // try 300ms instead of 0
}


window.requestAnimationFrame(() => {
    setTimeout(() => {
        updateRoadHeight();
    }, 0);
});


function generateHTML() {
    const containers = document.querySelectorAll(".yes");

    containers.forEach((container, index) => {
        const level = skill.roadmap[0].levels[index];
        if (!level) return;

        const div = document.createElement('div');
        const box = document.createElement('div');
        box.classList.add('box');
        const ul = document.createElement('ul');

        level.topics.forEach(topic => {
            if (typeof topic === "string") {
                const li = document.createElement('li');
                li.classList.add('topic');

                const label = document.createElement('label');
                label.className = 'container';
                label.innerHTML = '<input type="checkbox"><div class="checkmark"></div>';

                const span = document.createElement('span');
                span.textContent = topic;

                li.appendChild(label);
                li.appendChild(span);

                ul.appendChild(li);
                ul.classList.add("lists");
            } else if (typeof topic === "object") {
                for (let key in topic) {
                    const li = document.createElement('li');
                    li.classList.add('long');
                    li.innerHTML = `<strong>${key}</strong>`;
                    const subUl = document.createElement('ul');

                    // Case 1: topic[key] is an array ✅
                    if (Array.isArray(topic[key])) {
                        topic[key].forEach(subTopic => {
                            const subLi = document.createElement('li');
                            subLi.classList.add('topic');

                            const label = document.createElement('label');
                            label.className = 'container';
                            label.innerHTML = '<input type="checkbox"><div class="checkmark"></div>';

                            const span = document.createElement('span');
                            span.textContent = subTopic;

                            subLi.appendChild(label);
                            subLi.appendChild(span);
                            subUl.appendChild(subLi);
                        });
                    }
                    // Case 2: topic[key] is an object ✅
                    else if (typeof topic[key] === "object") {
                        for (let subKey in topic[key]) {
                            const subSection = document.createElement('li');
                            subSection.innerHTML = `<strong>${subKey}</strong>`;
                            const subSubUl = document.createElement('ul');

                            const subData = topic[key][subKey];

                            if (Array.isArray(subData)) {
                                // ✅ Case: array
                                subData.forEach(subTopic => {
                                    const subLi = document.createElement('li');
                                    subLi.classList.add('topic');

                                    const label = document.createElement('label');
                                    label.className = 'container';
                                    label.innerHTML = '<input type="checkbox"><div class="checkmark"></div>';

                                    const span = document.createElement('span');
                                    span.textContent = subTopic;

                                    subLi.appendChild(label);
                                    subLi.appendChild(span);
                                    subSubUl.appendChild(subLi);
                                });
                            } else {
                                // ✅ Case: single string or number
                                const subLi = document.createElement('li');
                                subLi.textContent = subData;
                                subSubUl.appendChild(subLi);
                            }

                            subSection.appendChild(subSubUl);
                            subUl.appendChild(subSection);
                        }
                    }
                    // Case 3: Not an array or object
                    else {
                        const simpleLi = document.createElement('li');
                        simpleLi.textContent = topic[key];
                        subUl.appendChild(simpleLi);
                    }

                    li.appendChild(subUl);
                    ul.appendChild(li);
                    ul.classList.add("lists");
                }
            }


        });

        div.appendChild(ul);
        container.append(box);
        container.appendChild(div);
    });
}


function enableGridToggle() {
    const buttons = document.querySelectorAll('.click');
    const boxes = document.querySelectorAll(".box");
    const listContainers = document.querySelectorAll(".lists");

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const gridLine = button.closest('.grid-line');
            const list = gridLine.querySelector('.lists');

            if (list && boxes[index]) {
                // Toggle display
                list.style.display = getComputedStyle(list).display === 'none' ? 'block' : 'none';
                boxes[index].style.display = getComputedStyle(boxes[index]).display === 'none' ? 'block' : 'none';

                // Adjust height
                const sty = getComputedStyle(listContainers[index]);
                boxes[index].style.height = `${(parseInt(sty.height) * 1)}px`;

                console.log(index);
                updateRoadHeight();
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', enableGridToggle);



