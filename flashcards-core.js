/* Load this FIRST. It collects cards from every subject file. */
const SUBJECTS = [];
const ALL_FLASHCARDS = [];

function registerSubject(name, colour, cards) {
    SUBJECTS.push({ name, colour });
    cards.forEach(c => ALL_FLASHCARDS.push({
        id: name + "|" + c.question,   // auto ID: no numbering needed
        subject: name,
        colour: colour,
        topic: c.topic || "General",
        subtopic: c.subtopic || "General",
        question: c.question,
        answer: c.answer
    }));
}
