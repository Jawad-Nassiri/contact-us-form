const $ = document
const fullNameInput = $.querySelector('#fullName-input')
const emailInput = $.querySelector('#email-input')
const subjectInput = $.querySelector('#subject-input')
const textareaElem = $.querySelector('textarea')
const submitBtn = $.querySelector('.submit-button')


let messages = []




const getMessages = () => {

  if(fullNameInput.value !== "" && emailInput.value !== "" && subjectInput.value !== "" && textareaElem.value !== "") {
    let id = messages.length+1
    let fullName = fullNameInput.value
    let email = emailInput.value
    let subject = subjectInput.value
    let message = textareaElem.value
    
    let newMessage = {
      id,
      fullName,
      email,
      subject,
      message
    }
  
    messages.push(newMessage)

    fullNameInput.value = ""
    emailInput.value = ""
    subjectInput.value = ""
    textareaElem.value = ""

    console.log(messages)
    
  } else {
    console.log('Enter valid data !')
  }
 
}


submitBtn.addEventListener('click', getMessages)