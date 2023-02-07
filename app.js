const quotes = [
    {
        quote:"Thất bại chỉ là cơ hội để khởi đầu lại một cách sáng suốt hơn bởi chẳng ai vừa sinh ra đã là thiên tài",
        author: "Henry Ford",
    },
    {
        quote: "Đừng bao giờ dành cho người khác sự ưu tiên khi người ta chỉ xem mình là một trong những sự lựa chọn.",
        author: "blog-radio",
    },
    {
        quote: " Nghĩa vụ của bạn không phải là đi tìm kiếm tình yêu mà là tìm kiếm tất cả những rào cản trong chính bản thân mình và đánh bại chúng.",
        author: "blog",
    },
    {
        quote: "Cái đẹp bắt đầu vào khoảnh khắc bạn quyết định là chính mình",
        author: "Coco Chanel",
    },
    {
        quote: "Đừng so sánh mình với bất cứ ai trong thế giới này",
        author: "Bill Gates",
    },
    {
        quote: "Nghệ thuật không cần phải là ánh trăng lừa dối, nghệ thuật không nên là ánh trăng lừa dối, nghệ thuật có thể chỉ là tiếng đau khổ kia thoát ra từ những kiếp lầm than",
        author: "Nam Cao",
    },
    {
        quote:"Biểu hiện đầu tiên của tình yêu chân thật ở người con trai là sự rụt rè, còn ở người con gái là sự táo bạo",
        author: "Victor Hugo",
    },
    {
        quote: "Quá khứ khiến bạn day dứt vì hối tiếc, tương lai đưa bạn đến bộn bề bải hoải và âu lo. Vì thế, hãy chỉ tập trung vào hiện tại thôi, bởi nó chính là khoảng thời gian hạnh phúc nhất mà bạn có thể tận hưởng.",
        author: "Hachiman Hikigaya",
    },
    {
        quote: "Tôi không nghĩ sự thờ ơ lúc nào cũng là một điều xấu, biết càng nhiều thì rắc rối càng nhiều.",
        author: "Hachiman Hikigaya",
    },
    {
        quote : "Thực tại cực kì khắc nghiệt, nói dối cũng là một dạng của lòng tốt. Vậy nên, lòng tốt cũng chính là sự dối trá",
        author: "Hachiman"
    }
]

const btn = document.querySelector("#generate-btn");
const quote = document.querySelector("#quote");
const author = document.querySelector(".author");

btn.addEventListener("click", randomQuotes);

function randomQuotes() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[random].quote;
    author.textContent = quotes[random].author;
}