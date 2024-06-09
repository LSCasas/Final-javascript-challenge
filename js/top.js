let randomTag = (lista) => {
    item = Math.floor(Math.random() * (lista.length))
    return lista[item]
}

let tags = ['csharp', 'dotnet', 'programming', 'tools', 'beginners', 'react', 'java', 'tutorial', 'python', 'php', 'javascript', 'webdev', 'ruby', 'rails', 'design']
let tag = randomTag(tags)

const getData = async () => {
    let response = await fetch('https://reto-js-bd894-default-rtdb.firebaseio.com/.json')
    let data = await response.json()
    let keys = Object.keys(data) 
    let postArray = keys.map((key) => {
        return { ...data[key], key }
    })

    // Funcion Top
    postArray = postArray.filter(post => post.rating > 7)

    return postArray
  

}

let createCard = (postArray) => {
    let { name, avatar, date, title, reactions, timeAgo, tags, comments,key } = postArray;
    let postSection = document.createElement('div');
    postSection.classList.add('card', 'post-section');
    let tagList = tags.split(',');
    let tagElements = tagList.map(tag => {
        let tagSpan = document.createElement('span');
        tagSpan.classList.add('tag');
        tagSpan.textContent = `#${tag.trim()}`; 
        return tagSpan;
    });
    let containerTags = document.createElement('div');
    containerTags.classList.add('tags');
    tagElements.forEach(tag => {
        containerTags.appendChild(tag);
    });
    let postContent = document.createElement('div');
    postContent.classList.add('post-content');
    let postTitle = document.createElement('div');
    postTitle.classList.add('post-title');
    let postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    let postAuthor = document.createElement('div');
    postAuthor.classList.add('post-author');
    let imgAvatar = document.createElement('img');
    imgAvatar.classList.add('avatar', 'radius-50');
    imgAvatar.setAttribute('src', avatar);
    imgAvatar.setAttribute('alt', "Avatar");
    let postTitleInfo = document.createElement('div');
    postTitleInfo.classList.add('post-title-info');
    let containerName = document.createElement('div');
    let textName = document.createTextNode(name);
    let containerDate = document.createElement('div');
    let textDate = document.createTextNode(date);
    let postIndention = document.createElement('div');
    postIndention.classList.add('post-indention');
    let postTitleIndention = document.createElement('div');
    postTitleIndention.classList.add('title');
    postTitleIndention.addEventListener('click',(event)=>{
        window.open(`../views/detalleCard.html?key=${key}`,'self')
    })
    let textIndention = document.createTextNode(title);
    let bottom = document.createElement('div');
    bottom.classList.add('bottom');
    let details = document.createElement('div');
    details.classList.add('details');
    let cardReactions = document.createElement('div');
    cardReactions.classList.add('card', 'reactions');
    let cardIcons = document.createElement('div');
    cardIcons.classList.add('reactions-icons');
    let spanIcons = document.createElement('span');
    spanIcons.classList.add('reaction-icon');
    let imgIcons = document.createElement('img');
    imgIcons.setAttribute('src', 'https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg');
    imgIcons.setAttribute('width', '24');
    imgIcons.setAttribute('height', '24');
    let spanIcons1 = document.createElement('span');
    spanIcons1.classList.add('reaction-icon');
    let imgIcons1 = document.createElement('img');
    imgIcons1.setAttribute('src', 'https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg');
    imgIcons1.setAttribute('width', '24');
    imgIcons1.setAttribute('height', '24');
    let spanIcons2 = document.createElement('span');
    spanIcons2.classList.add('reaction-icon');
    let imgIcons2 = document.createElement('img');
    imgIcons2.setAttribute('src', 'https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg');
    imgIcons2.setAttribute('width', '24');
    imgIcons2.setAttribute('height', '24');
    let spanIcons3 = document.createElement('span');
    spanIcons3.classList.add('reaction-icon');
    let imgIcons3 = document.createElement('img');
    imgIcons3.setAttribute('src', 'https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg');
    imgIcons3.setAttribute('width', '24');
    imgIcons3.setAttribute('height', '24');
    let spanIcons4 = document.createElement('span');
    spanIcons4.classList.add('reaction-icon');
    let imgIcons4 = document.createElement('img');
    imgIcons4.setAttribute('src', 'https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg');
    imgIcons4.setAttribute('width', '24');
    imgIcons4.setAttribute('height', '24');
    spanIcons.append(imgIcons);
    spanIcons1.append(imgIcons1);
    spanIcons2.append(imgIcons2);
    spanIcons3.append(imgIcons3);
    spanIcons4.append(imgIcons4);
    let countReact = document.createElement('div');
    countReact.classList.add('reactions-counter');
    let countReactNumber = document.createTextNode(`${reactions} `);
    let countSpan = document.createElement('span');
    countSpan.classList.add('d-none', 'd-sm-contents');
    let countSpanText = document.createTextNode('reactions');
    //comentarios
    let cardComents = document.createElement('div');
    cardComents.classList.add('card', 'comments');
    let imgSvg = document.createElement('img');
    imgSvg.setAttribute('src', '../img/svg/icon-comment.svg');
    imgSvg.classList.add('icon');
    imgSvg.setAttribute('alt', 'comment');
    let numeroComentarios = document.createTextNode(`${comments} comments`)
    let spanRuby = document.createElement('span');
    spanRuby.classList.add('d-ruby');
    let spanNone = document.createElement('span');
    spanNone.classList.add('d-none', 'd-sm-contents');
    let spanNoneTexto = document.createTextNode('Add Comment');
    spanNone.append(spanNoneTexto)
    let save = document.createElement('div');
    save.classList.add('save');
    let saveText = document.createTextNode(`${timeAgo} min read`);
    let svg = document.createElement('svg');
    svg.classList.add('icon', 'icon-bookmark');
    svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('aria-hidden', 'true');
    let path = document.createElement('path');
    path.setAttribute('d', 'M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z');
    postSection.append(postContent);
    postContent.append(postTitle, postIndention);
    postTitleInfo.append(containerName, containerDate);
    postAuthor.append(imgAvatar);
    postMeta.append(postAuthor, postTitleInfo);
    postTitle.append(postMeta);
    details.append(cardReactions, cardComents);
    bottom.append(details, save);
    postTitleIndention.append(textIndention);
    postIndention.append(postTitleIndention, containerTags, bottom);
    containerDate.append(textDate);
    containerName.append(textName);
    countSpan.append(countSpanText);
    countReact.append(countReactNumber, countSpan);
    cardIcons.append(spanIcons, spanIcons1, spanIcons2, spanIcons3, spanIcons4);
    cardReactions.append(cardIcons, countReact);
    save.append(saveText);
    cardComents.append(imgSvg, spanRuby);
    svg.append(path);
    save.append(svg);
    cardComents.append(numeroComentarios);
    return postSection;
}



let printCards = async (postArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    wrapper.innerHTML = '';
    postArray.forEach((post) => {
        let postItem = createCard(post);
        wrapper.append(postItem);
    });
}

const printCardsAsync = async () => {
    let postArray = await getData();
    printCards(postArray, 'wrapper');
    console.log(postArray);
}
printCardsAsync();

let filterInput = document.getElementById("category-filter");

filterInput.addEventListener("input", async (event) => {
    let query = event.target.value.toLowerCase().trim();

    let postArray = await getData();

    let filteredPosts = postArray.filter((post) =>
        post.title.toLowerCase().startsWith(query)
    );

    printCards(filteredPosts, 'wrapper');
});

let token = localStorage.getItem("token");

function modificarHTML() {
    let loginContainer = document.querySelector(".d-flex.mr-2");

    let createPostLink = document.createElement("a");
    createPostLink.setAttribute("href", "../views/postForm.html"); 
    createPostLink.classList.add("my-auto", "create-account"); 
    createPostLink.textContent = "Create post"; 

    loginContainer.innerHTML = "";

    loginContainer.appendChild(createPostLink);
}

if (token) {
    modificarHTML();
}