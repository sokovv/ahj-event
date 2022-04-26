/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */

export default function chekchar() {
    let score = 0;
    let lose = 0;
    let board = document.querySelector('[data-id=board]');
    board.addEventListener('click', (event) => {
        if (event.target.classList.contains('character')) {
            score += 1
            event.target.classList.remove('character')
        } else {
            lose += 1
        }
        if (lose === 5) {
            alert(`Вы Проиграли! Набрано баллов ${score}`)
            score = 0;
            lose = 0;
        }
    });

}