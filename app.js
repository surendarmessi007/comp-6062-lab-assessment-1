console.log('scripts');

const studentName = "Surendar";
const studentNumber = "1154209";

console.log(`${studentName} - ${studentNumber}`);

const headerContent = document.querySelector("h1");

headerContent.innerHTML = `${studentName} - ${studentNumber}`;

headerContent.classList.add("heading1");

if (headerContent.innerHTML.includes('Surendar')) {
    alert('1154209');
}
