/* Load this FIRST. It collects cards from every subject file. */
const SUBJECTS = [];
const ALL_FLASHCARDS = [];

function registerSubject(name, colour, cards, units) {
    SUBJECTS.push({ name, colour, units: units || [] });
    cards.forEach(c => ALL_FLASHCARDS.push({
        id: name + "|" + (c.question || c.questionImage),   // auto ID: no numbering needed
        subject: name,
        colour: colour,
        unit: c.unit || "",
        topic: c.topic || "General",
        subtopic: c.subtopic || "General",
        question: c.question || "",
        answer: c.answer || "",
        questionImage: c.questionImage || "",
        answerImage: c.answerImage || ""
    }));
}
