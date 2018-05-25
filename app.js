const inputValue=document.querySelector("#search");
const searchButton=document.querySelector(".btn-sm");
const nameContainer=document.querySelector(".main__profile-name");
const unContainer=document.querySelector(".main__profile-username");
const reposContainer=document.querySelector(".main__profile-repos");
const urlContainer=document.querySelector(".main__profile-url");



const client_id= "Iv1.f1de423dfaf9d327";

const client_secret="8622bcb0a4b4e97be8521dda92657e4a95f673bb";


const fetchUsers=async (user)=>{


	const api_call =await fetch (`https://api.github.com/users/${user}?client_id=${client_id} & client_secret=${client_secret}`);



	const data =await api_call.json();


	return {data}







};

const showData =()=> {


fetchUsers(inputValue.value).then((res) =>{



	console.log(res);


	nameContainer.innerHTML =`Name :<span class="main__profile-value" align="center">${res.data.name}</span>`;



		urlContainer.innerHTML =`URL :<span class="main__profile-url">${res.data.html_url
}</span>`;


})

};



searchButton.addEventListener("click", () =>{


showData();
} )