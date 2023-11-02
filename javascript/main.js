


const cardData = [
    {
        heading:'Face recognition attendance',
        body:'Python',
        ref:'https://github.com/MohamadHashem/Face_recognition_attendance'

    },


    {
        heading:'SMTP',
        body:'Python',
        ref:'https://github.com/MohamadHashem/SMTP'

    },


    {
        heading:'Manage Attendance Mobile App',
        body:'Dart',
        ref:'https://github.com/MohamadHashem/Manage-attendance'


    },

  
 

]




const postContainer = document.querySelector('.card-container');
const postMethods = ()=>{
    cardData.map((postData)=>{
        const postElement=document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML=
        `

        <h3 class="card-heading">${postData.heading}</h3>
        <p class="card-body">${postData.body}</p>
        <a href="${postData.ref}">
        <a href="${postData.ref}">
        <button class="btn-visit"> View On Github </button></a>
        </a>
        `
        postContainer.appendChild(postElement)

    })

}
postMethods();

// here is for eamil form ......
// $("#formoid").submit(function(event) {

//     event.preventDefault();

//     var $form = $(this),
//       url = $form.attr('action');

//     var posting = $.post(url, {
//       name: $('#subject1').val(),
//       name2: $('#message1').val()
//     });

//     posting.done(function(data) {
//       alert('success');
//     });
//   });







// $(document).ready(function(){
//     $(".card").slice(0, 3).show();
//     $("#loadMore").on("click", function(e){
//       e.preventDefault();
//       $(".card:hidden").slice(0, 3).slideDown();
//       if($(".card:hidden").length == 0) {
//         $("#loadMore").text("No Content").addClass("noContent");
//       }
//     });
    
//   })