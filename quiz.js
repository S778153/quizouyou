let score = 0;

function showScore() {
  const totalScore = document.getElementById('score-message');

  if (score === 3) {
    totalScore.innerHTML = score + "点：満点"
  } else if (score === 2) {
    totalScore.innerHTML = score + "点";
  } else if (score === 1) {
    totalScore.innerHTML = score + "点";
  } else {
    totalScore.innerHTML = score + "点：残念";
  }
}

/**
1問目の正解は赤
2問目の正解はB
3問目の正解はC
**/

const correct = '正解です';
const incorrect = '不正解です';

function answerQuiz1() {
  const quiz_1 = document.getElementById('quiz-1');
  const select = '1問目：' + quiz_1.answer.value + 'を選択しました';

  if (quiz_1.answer.value == 'a') {
    score++;
  }
}

function answerQuiz2() {
  const quiz_2 = document.getElementById('quiz-2');
  const select = '2問目：' + quiz_2.answer.value + 'を選択しました';

  // 正解はB
  if (quiz_2.answer.value == 'b') {
    score++;
    }
}

function answerQuiz3() {
  const quiz_3 = document.getElementById('quiz-3');
  const select = '3問目：' + quiz_3.answer.value + 'を選択しました';

  if (quiz_3.answer.value == 'c') {
    score++;
    }
}
