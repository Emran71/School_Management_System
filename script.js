function showSection(idname){
  const allObject = document.querySelectorAll(".main-content > div");
  allObject.forEach((object) => {
    object.classList.add("hidden");
  })
  const object = document.getElementById(idname +"Section");
  object.style.transition = "all 0.5s ease";
  object.classList.remove("hidden");

};


function homepage(){
  window.location.href = "home.html";
}

function submitForm() {
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginUserName = document.getElementById('login-username');
    

    if (username === 'admin' && password === 'password123') {
        window.location.href = 'home.html';

    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
  });
}

// logout module
function logout() {
  window.location.href = 'index.html';
}


// Setting add schoolname, slogan, images

const schoolSettingForm = document.getElementById('schoolSettings');
const Schooltitle = document.getElementById('sidebar-title');
const Schoolslogan= document.getElementById('slogan');
const Schoollogo = document.getElementById('schoolLogo');

function LoadSchoolData(){
  schoolSettingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const schoolData = {
      schoolName: document.getElementById('inputSchoolName').value,
      slogan: document.getElementById('inputSchoolSlogan').value,
      logo: document.getElementById('inputSchoolLogo').value,
    };
    localStorage.setItem('schoolData', JSON.stringify(schoolData));
    schoolSettingForm.reset();
    location.reload();
  })
}
LoadSchoolData();

function ShowSchoolData(){
  const SchoolData = JSON.parse(localStorage.getItem('schoolData')) || [];
  if(SchoolData.length === 0){
    Schooltitle.innerHTML = "No Data";
    Schoolslogan.innerHTML = "No Data";
  }
  else{
    Schooltitle.innerHTML = SchoolData.schoolName;
    Schoolslogan.innerHTML = SchoolData.slogan;
    Schoollogo.src = SchoolData.logo;

  }
}
ShowSchoolData();

// Notice module

const noticeForm = document.getElementById('noticeForm');
const noticesList = document.getElementById('noticesList');
const dashboardnotice = document.getElementById('dashboardNotices');

  noticeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('noticeTitle').value;
    const content = document.getElementById('noticeContent').value;
    const newNoticeData = {title,content};
    const storedArray = JSON.parse(localStorage.getItem('noticeData')) || [];
    storedArray.unshift(newNoticeData);
    localStorage.setItem('noticeData', JSON.stringify(storedArray));
    noticeForm.reset();
    location.reload();
    showNoticeData();

  })

  function formatTodayDate() {
    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  
    return formatted.replace(',', '');
  }

function showNoticeData(){
  const noticeData = JSON.parse(localStorage.getItem('noticeData')) || [];
  if(noticeData.length === 0){
    document.getElementById('noticeTitle').innerHTML = "No Data found";
    document.getElementById('noticeContent').innerHTML = "No Data found";
  }
  else{
    noticeData.forEach((notice) => {
      const noticeItem = document.createElement('div');
      noticeItem.classList.toggle('notice-item');
      noticeItem.innerHTML = `
                          <h4>${notice.title}</h4>
                          <p>${notice.content}</p>
                          <small class="notice-date">${formatTodayDate()}</small>
                         `;
      const noticeClone = noticeItem.cloneNode(true);
      noticesList.appendChild(noticeItem) 
      dashboardnotice.appendChild(noticeClone);
    })
  }
}
showNoticeData();