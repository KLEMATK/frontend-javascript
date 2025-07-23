// Define interfaces with brand property to distinguish types
interface MajorCredits {
  credits: number;
  brand: "Major";
}

interface MinorCredits {
  credits: number;
  brand: "Minor";
}

// Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major",
  };
}

// Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor",
  };
}

// Example subjects
const math: MajorCredits = { credits: 4, brand: "Major" };
const physics: MajorCredits = { credits: 3, brand: "Major" };

const music: MinorCredits = { credits: 1, brand: "Minor" };
const art: MinorCredits = { credits: 2, brand: "Minor" };

// Update the HTML content dynamically
document.getElementById("app")!.innerHTML = `
  <h1>Task 5 App Running</h1>
  <p>Major Credits Total: ${sumMajorCredits(math, physics).credits}</p>
  <p>Minor Credits Total: ${sumMinorCredits(music, art).credits}</p>
`;
