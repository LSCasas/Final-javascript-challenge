const getData = async (postKey) => {
    try {
        let response = await fetch(`https://reto-js-bd894-default-rtdb.firebaseio.com/${postKey}.json`);
        if (!response.ok) throw new Error('Network response was not ok');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const url = window.location.href;
const params = new URLSearchParams(new URL(url).search);
let key = params.get('key');

const printPostData = async (postKey) => {
    try {
        let postData = await getData(postKey);
        if (!postData) return;

        let { imgPost, img, name, date, title, tags, text, avatar } = postData;

        document.getElementById('imgPost').setAttribute('src', imgPost || '');
        document.getElementById('img').setAttribute('src', avatar || '');
        document.getElementById('img').setAttribute('alt', name || '');

        document.getElementById('name').innerText = name || '';
        document.getElementById('date').innerText = date || '';
        document.getElementById('title').innerText = title || '';
        document.getElementById('text').innerText = text || '';

        let tagList = tags ? tags.split(',') : [];
        let tagElements = tagList.map(tag => {
            let tagSpan = document.createElement('span');
            tagSpan.classList.add('tag');
            tagSpan.textContent = `#${tag.trim()} `;
            return tagSpan;
        });

        let containerTags = document.createElement('div');
        containerTags.classList.add('tags');
        tagElements.forEach(tag => containerTags.appendChild(tag));

        let wrapper = document.getElementById('wrapperTags');
        wrapper.innerHTML = '';
        wrapper.append(containerTags);
    } catch (error) {
        console.error('Error printing post data:', error);
    }
};

const printAside = async (postKey) => {
    try {
        let postData = await getData(postKey);
        if (!postData) return;

        let { avatar, name, descrip } = postData;

        document.getElementById('imgAuthor').setAttribute('src', avatar || '');
        document.getElementById('spanName').innerText = name || '';
        document.getElementById('descrip').innerText = descrip || '';
    } catch (error) {
        console.error('Error printing aside data:', error);
    }
};

const modifyHTML = () => {
    let loginContainer = document.querySelector("#authentication-top-nav-actions");
    loginContainer.innerHTML = '';

    let createPostLink = document.createElement("a");
    createPostLink.setAttribute("href", "../views/postForm.html");
    createPostLink.classList.add("my-auto", "create-account");
    createPostLink.textContent = "Create post";

    loginContainer.appendChild(createPostLink);
};

if (localStorage.getItem("token")) {
    modifyHTML();
}

printPostData(key);
printAside(key);






