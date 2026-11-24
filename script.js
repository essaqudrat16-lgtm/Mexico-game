function finishQuiz() {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("bar").style.width = "100%";

  document.getElementById("score").textContent = points + " / 10";

  document.getElementById("message").textContent =
    points === 10 ? "Perfect score! 🏆" :
    points >= 8 ? "Amazing work! 🌟" :
    points >= 6 ? "Good job! Keep practicing! 👍" :
    "Keep studying! You can do it! 💪";

  document.getElementById("review").innerHTML =
    "<h3>Answer Review</h3>" +
    history.map((h,i) => `
      <p>
        <b>${i+1}. ${h.question}</b><br>
        Your answer: ${h.selected}<br>
        ${h.right ? "✅ Correct" : "❌ Correct answer: " + h.correct}
      </p><hr>
    `).join("") +
    `
      <div style="text-align:center; padding:25px; margin-top:20px; background:#e8f5ec; border-radius:12px;">
        <h2>Made by Essa Mohamed 6A</h2>
        <h3>Thank you for playing! ❤️</h3>
      </div>
    `;
}
