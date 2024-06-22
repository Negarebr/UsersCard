let limit = 30;
let skip = 0;

document.addEventListener('DOMContentLoaded', ()=>{
    const userContainerDiv = document.getElementById('user-container');
    async function fetchUsers(limit, skip) {
        const res = await fetch('https://dummyjson.com/users?limit=' + limit + '&skip=' + skip);
        const json = await res.json();
        Users(json.users);
    }

    const more = document.getElementById('more');
    more.addEventListener('click', ()=>{
        skip = skip + limit;
        limit += 30;
        fetchUsers(limit, skip);
    });

    function Users(users) {
        users.forEach((user) => {
            const flipCardDiv = document.createElement('div');
            flipCardDiv.classList.add('flip-card');
            userContainerDiv.appendChild(flipCardDiv);

            const flipCardInnerDiv = document.createElement('div');
            flipCardInnerDiv.classList.add('flip-card-inner');
            flipCardDiv.appendChild(flipCardInnerDiv);

            const flipCardFrontDiv = document.createElement('div');
            flipCardFrontDiv.classList.add('flip-card-front');
            flipCardInnerDiv.appendChild(flipCardFrontDiv);

            const genderIconDiv = document.createElement('div');
            genderIconDiv.classList.add('gender-icon');
            flipCardFrontDiv.appendChild(genderIconDiv);

            const genderIconImg = document.createElement('img');
            genderIconImg.src = user.gender === 'male' ? 'img/man.png' : 'img/woman.png';
            genderIconDiv.appendChild(genderIconImg);

            const profileImageDiv = document.createElement('div'); 
            profileImageDiv.classList.add('profile-image');
            flipCardFrontDiv.appendChild(profileImageDiv);

            const profileImageImg = document.createElement('img');
            profileImageImg.classList.add('pfp');
            profileImageImg.src = user.image;
            profileImageDiv.appendChild(profileImageImg);

            const nameDiv = document.createElement('div');
            nameDiv.classList.add('name');
            nameDiv.textContent = user.firstName + ' ' + user.maidenName + ' ' + user.lastName;
            profileImageDiv.appendChild(nameDiv);

            const flipCardBackDiv = document.createElement('div');
            flipCardBackDiv.classList.add('flip-card-back');
            flipCardInnerDiv.appendChild(flipCardBackDiv);

            const descriptionDiv = document.createElement('div');
            descriptionDiv.classList.add('Description');
            flipCardBackDiv.appendChild(descriptionDiv);

            const descriptionP = document.createElement('p');
            descriptionP.classList.add('description-p');
            descriptionP.innerHTML = `<strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a><br>
                                        <strong>Phone:</strong> <a href="tel:${user.phone}">${user.phone}</a><br>
                                        <strong>Country:</strong> ${user.address.country} <br>
                                        <strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.state} <br>
                                        <strong>Age:</strong> ${user.age} years old <br>
                                        <strong>Birthdate:</strong> ${user.birthDate}`;
            descriptionDiv.appendChild(descriptionP);
        });
    }

    fetchUsers(limit, skip);
});
