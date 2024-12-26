function hideAll() {
    const loreDiv = document.getElementById('lore-shit');
    const children = loreDiv.children;

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        
        if (child.classList.contains("text") || child.classList.contains("hidden") || child.classList.contains("shown")) {
            child.classList.remove('shown');
            child.classList.add('hidden');
        }
    }
}


function showPopup(message, callback) {
    const popup = document.getElementById("customPopup");
    const messageElement = document.getElementById("popupMessage");

    messageElement.textContent = message;
    popup.classList.remove("hidden");
    window.proceedCallback = callback;
}

function closePopup() {
    const popup = document.getElementById("customPopup");
    popup.classList.add("hidden");
    window.proceedCallback = null;
}

function proceed() {
    if (typeof window.proceedCallback === "function") {
        window.proceedCallback();
    }
    closePopup();
}

const buttonsContainer = document.getElementById('buttons');
const loreSections = document.querySelectorAll('#long-lore h3');
const loreDiv = document.getElementById('lore-shit');

const buttonsArray = {
    "Snowy's Origins": { "id": "Snowy's Origins", "id_content": "Snowy's Origins Content", "text": "Snowy's Origins" },
    "Snowy's Cleaning Habits": { "id": "Snowy's Cleaning Habits", "id_content": "Snowy's Cleaning Habits Content", "text": "Snowy's Cleaning Habits" },
    "Snowy's Past": { "id": "Snowy's Past", "id_content": "Snowy's Past Content", "text": "Snowy's Past" },
    "Early Life and ADHD": { "id": "Early Life and ADHD", "id_content": "Early Life and ADHD Content", "text": "Early Life and ADHD" },
    "Aroace Identity": { "id": "Aroace Identity", "id_content": "Aroace Identity Content", "text": "Aroace Identity" },
    "Snowy's Boundaries": { "id": "Snowy's Boundaries", "id_content": "Snowy's Boundaries Content", "text": "Snowy's Boundaries" },
    "Flustered and Confused Moments": { "id": "Flustered and Confused Moments", "id_content": "Flustered and Confused Moments Content", "text": "Flustered and Confused Moments" },
    "Episodes and Emotional Turmoil": { "id": "Episodes and Emotional Turmoil", "id_content": "Episodes and Emotional Turmoil Content", "text": "Episodes and Emotional Turmoil [Content Warning]" },
    "Depression and Internal Struggles": { "id": "Depression and Internal Struggles", "id_content": "Depression and Internal Struggles Content", "text": "Depression and Internal Struggles [Content Warning]" },
    "Pain and Coping Mechanisms": { "id": "Pain and Coping Mechanisms", "id_content": "Pain and Coping Mechanisms Content", "text": "Pain and Coping Mechanisms" },
    "Trust and Emotional Responses": { "id": "Trust and Emotional Responses", "id_content": "Trust and Emotional Responses Content", "text": "Trust and Emotional Responses" },
    "Emotional Vulnerability and Trust Issues": { "id": "Emotional Vulnerability and Trust Issues", "id_content": "Emotional Vulnerability and Trust Issues Content", "text": "Emotional Vulnerability and Trust Issues" },
    "Snowy's Likes": { "id": "Snowy's Likes", "id_content": "Snowy's Likes Content", "text": "Snowy's Likes" },
    "Snowy's Drawer and Special Items": { "id": "Snowy's Drawer and Special Items", "id_content": "Snowy's Drawer and Special Items Content", "text": "Snowy's Drawer and Special Items [Content Warning]" },
    "Mood and Music": { "id": "Mood and Music", "id_content": "Mood and Music Content", "text": "Mood and Music [Content Warning]" },
    "Snowy's Music Choices": { "id": "Snowy's Music Choices", "id_content": "Snowy's Music Choices Content", "text": "Snowy's Music Choices" },
    "Relationship with Cone": { "id": "Relationship with Cone", "id_content": "Relationship with Cone Content", "text": "Relationship with Cone [Content Warning]" },
    "Spelling and Text Habits": { "id": "Spelling and Text Habits", "id_content": "Spelling and Text Habits Content", "text": "Spelling and Text Habits" },
    "Meowing Habit": { "id": "Meowing Habit", "id_content": "Meowing Habit Content", "text": "Meowing Habit" },
    "Femboy Phase": { "id": "Femboy Phase", "id_content": "Femboy Phase Content", "text": "Femboy Phase" },
    "Femboy Phase Update": { "id": "Femboy Phase Update", "id_content": "Femboy Phase Update Content", "text": "Femboy Phase [Update]" },
    "Snowy's Appearance and Changing Fur": { "id": "Snowy's Appearance and Changing Fur", "id_content": "Snowy's Appearance and Changing Fur Content", "text": "Snowy's Appearance and Changing Fur [Content Warning]" },
    "Snowy's Tail and Fluff": { "id": "Snowy's Tail and Fluff", "id_content": "Snowy's Tail and Fluff Content", "text": "Snowy's Tail and Fluff" },
    "Snowy's Identity": { "id": "Snowy's Identity", "id_content": "Snowy's Identity Content", "text": "Snowy's Identity" },
    "Snowy's Personality": { "id": "Snowy's Personality", "id_content": "Snowy's Personality Content", "text": "Snowy's Personality" },
    "Snowy's Gender and Pronouns Content": { "id": "Snowy's Gender and Pronouns Content", "id_content": "Snowy's Gender and Pronouns Content Content", "text": "Snowy's Gender and Pronouns Content" },
    "Furry Fandom and Fursonas": { "id": "Furry Fandom and Fursonas", "id_content": "Furry Fandom and Fursonas Content", "text": "Furry Fandom and Fursonas" },
    "Silly Bits": { "id": "Silly Bits", "id_content": "Silly Bits Content", "text": "Silly Bits" },
    "Miscellaneous Traits": { "id": "Miscellaneous Traits", "id_content": "Miscellaneous Traits Content", "text": "Miscellaneous Traits" },
    "Claims and Mysteries": { "id": "Claims and Mysteries", "id_content": "Claims and Mysteries Content", "text": "Claims and Mysteries" },
    "Hearing Sensitivity": { "id": "Hearing Sensitivity", "id_content": "Hearing Sensitivity Content", "text": "Hearing Sensitivity" },
    "Final Thoughts": { "id": "Final Thoughts", "id_content": "Final Thoughts Content", "text": "Final Thoughts [Content Warning]" }
    // "": { "id": "", "id_content": " Content", "text": "" },
};

for (const [key, buttonData] of Object.entries(buttonsArray)) {
    if (buttonsArray.hasOwnProperty(key)) {
        const existingButton = document.getElementById(buttonData.id);
        if (existingButton) continue;

        const newButton = document.createElement('button');
        newButton.id = buttonData.id;
        newButton.id_content = buttonData.id_content
        newButton.textContent = buttonData.text;

        buttonsContainer.appendChild(newButton);
    }
}

const buttons = buttonsContainer.querySelectorAll('button');
let prevContent = null;
let currentContent = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (document.getElementById(button.id_content)) {
            const content = document.getElementById(button.id_content);
            
            hideAll();
            if (prevContent !== null) {
                prevContent.classList.remove('shown');
                prevContent.classList.add('hidden');
            }

            if (currentContent !== null) {
                currentContent.classList.remove('shown');
                currentContent.classList.add('hidden');
            }
            prevContent = content
            currentContent = content

            content.classList.remove('hidden');
            content.classList.add('shown');
        }
    })
});

// for (let i = 0; i < children.length; i++) {
//     const child = children[i];
    
//     newButton.onclick = (function (data) {
//         if (data.id_content === child.id) {
//             console.log(`[Lore] ${child.id} is equal to ${data.id_content}`);
//             hideAll();
//             child.classList.remove('hidden');
//             child.classList.add('shown');
//             // if (child.classList.contains('shown')) {
//             //     child.classList.remove('shown');
//             //     child.classList.add('hidden');
//             // } else {
//             //     child.classList.remove('hidden');
//             //     child.classList.add('shown');
//             // }
//         }
//     });
// }


document.querySelectorAll('.content-warning-section').forEach(section => {
    const button = section.querySelector('.toggle-content-button');
    const content = section.querySelector('.hidden-content');
    const warning = section.getAttribute('data-warning');

    button.addEventListener('click', () => {
        if (content.style.display === 'block') {
            content.style.display = 'none';
            button.textContent = `Show Content`;
        } else {
            showPopup(
                "This section contains sensitive content. Do you wish to proceed?",
                () => {
                    console.log("User proceeded.");
                    content.style.display = 'block';
                    button.textContent = `Hide Content`;
                }
            );
        }
    });
});