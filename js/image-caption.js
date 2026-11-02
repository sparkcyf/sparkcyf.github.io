// document.addEventListener('DOMContentLoaded', function () {
//     // 获取所有的 <p> 标签, only in class="post-content"
//     const paragraphs = document.querySelectorAll('.post-content p');

//     paragraphs.forEach(p => {
//         // 检查 <p> 标签内是否有 <img>
//         const img = p.querySelector('img');
//         if (img) {
//             // 创建一个 <figure> 元素
//             const figure = document.createElement('figure');

//             // 创建一个新的 <img> 元素，复制属性
//             const newImg = document.createElement('img');
//             newImg.src = img.src;
//             newImg.loading = img.loading;
            
//             // 创建一个 <figcaption> 元素
//             const figcaption = document.createElement('figcaption');
//             // use alt text as figcaption
//             figcaption.textContent = img.alt;

//             // 将 <img> 和 <figcaption> 添加到 <figure>
//             figure.appendChild(newImg);
//             figure.appendChild(figcaption);

//             // 用 <figure> 替换原来的 <p> 标签
//             p.parentNode.replaceChild(figure, p);
//         }
//     });
// });
