const refs={
	formEl: document.querySelector(".feedback-form"),
	emailEl: document.querySelector("input"),
	messageEl: document.querySelector("textarea"),
	submitEl: document.querySelector("button"),
}
const LOCALSTORAGE_KEY="feedback-form-state";
// ---------------------------------------------------
// console.log(refs.formEl);
// console.log(refs.emailEl);
console.log(refs.emailEl.value);
// console.log(refs.messageEl);
console.log(refs.messageEl.value);
// console.log(refs.submitEl);
// ---------------------------------------------------
function readingOfStorage (){
if(refs.emailEl.value ==='' & refs.messageEl.value === '')
{return}
	const key=localStorage.getItem(LOCALSTORAGE_KEY);
	const {email, message} =JSON.parse(key);
	refs.emailEl.value=email;
	refs.messageEl.value=message;
};

function entryOfStorage (){
	const objForLoc={
		email:refs.emailEl.value ,
		message: refs.messageEl.value,
		};
		const objForLocJSON=JSON.stringify(objForLoc);
		localStorage.setItem(LOCALSTORAGE_KEY, objForLocJSON);
};
// ---------------------------------------------------------
refs.formEl.addEventListener('input', entryOfStorage);
console.log(refs.emailEl.value);
console.log(refs.messageEl.value);



// refs.submitEl.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	const {
// 	  elements: { email, message }
// 	} = e.currentTarget;
// 	console.log(email.value, message.value);
// e.currentTarget.reset();
//  });