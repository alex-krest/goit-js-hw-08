import throttle from "lodash.throttle";
const refs={
	formEl: document.querySelector(".feedback-form"),
	emailEl: document.querySelector(".feedback-form input"),
	messageEl: document.querySelector(".feedback-form textarea"),
	submitEl: document.querySelector(".feedback-form button"),
}
const LOCALSTORAGE_KEY="feedback-form-state";

const formData={};

// ---------------------------------------------------------
refs.formEl.addEventListener("input", throttle((onFormInput),500));
refs.formEl.addEventListener("submit", onFormSubmit)
// --------------------------------------------------------
function onFormInput (e){
	formData[e.target.name]= e.target.value;
	console.log(formData);
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

const keyValueStart = function () {
	const dataJson=localStorage.getItem(LOCALSTORAGE_KEY);
	formData=JSON.parse(dataJson);
if (dataJson) 
	{
	// refs.emailEl.value===keyValue.email.value;
	// refs.messageEl.value===keyValue.message.value;
	}}

function onFormSubmit (e)  {
	e.preventDefault();
	const {
	  elements: { email, message }
	} = e.currentTarget;
	console.log(email.value, message.value);
e.currentTarget.reset();
localStorage.removeItem(LOCALSTORAGE_KEY);
 };