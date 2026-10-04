const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
}).replace(/\./g, '/'); // Заменяем точки на слэши
const dateTarget = document.getElementById("date-block");
if (dateTarget) {
    dateTarget.innerText = formattedDate;
}
